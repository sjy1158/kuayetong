<template>
  <div style="letter-spacing: 0.02rem;">
    <van-nav-bar
      fixed
      left-arrow
      :title="title"
    />
    <div class="typeChoose">
      <div class="chooseSize">
        <div class="dingdanPrice"><label>订单金额(元)</label><input type="text" placeholder="请询问服务员后输入" v-model="moneyVal" ref="moneyVal"></div>
        <div class="line" style="padding-right: 15px;padding-left: 15px;height: 2px;background: white">
          <div style="height: 2px;background:#F2F2F2;margin-top: 2px;width: 100%"></div>
        </div>
        <div class="dingdanPrice"><label>抵扣类别(元)</label><input type="text" disabled="true" placeholder="请选择" v-model="value" style="background: white"></div>
        <ul class="chosesize" style="background: white" v-if="disconarr.length!=0">
          <li v-for="item in disconarr"><span :class="params2.deductionId == item.id ? 'activechose':''" @click="chosesize(item.id,item.requireValue,'满'+item.requireValue+'抵'+item.value+'元',item.value)">满{{item.requireValue}}抵{{item.value}}元</span></li>
        </ul>
        <p v-if="disconarr.length==0" style="color: red;margin-top: 10px;padding-bottom: 20px;">此店暂无可选优惠券~~~~~~~~~~</p>
      </div>
    </div>
    <!--立即抵扣按钮-->
    <div class="disconbtn">
      <button type="button" @click="payDiscon()">立即抵扣买单</button>
    </div>
  </div>
</template>

<script>
  import { Dialog } from 'vant'
  import {Toast} from 'vant'
    export default {
        data(){
          return{
            value:'',
            title:'',
            moneyVal:'',
            discon:'',
            requireValue:'',
            disconarr:[],
            // userId:this.$route.query.userId,
            params:{
              shopId:this.$route.query.shopId
            },
            params2:{
              deductionId:'',
              userId:this.$route.query.userId,
            }
          }
        },
      methods:{
        ifHasuser(){
          if(this.params.shopId==''||this.params.shopId==undefined||this.params.shopId==null){
              Toast('请传入正确的商家ID')
          }else{
              this.getdiscon(this.params.shopId)
          }
        },
        chosesize(id,requireValue,val,discon){
          this.params2.deductionId = id;
          this.requireValue=requireValue;
          this.value = val;
          this.params2.money = val;
          this.discon = discon
        },

        async getdiscon(shopid){
          var _this = this;
          this.$api.getDiscon(shopid).then(function (res) {
            _this.disconarr = res.list;
            _this.title = res.title;
          })
        },
        payDiscon(){
          var regnum = /^\d+(\.\d+)?$/;
          // alert(this.$refs.moneyVal.value)
          var _this = this;
          if(this.moneyVal!=''&&regnum.test(this.moneyVal)&&this.moneyVal!=''&&this.value!=''){
            if(this.moneyVal>=this.requireValue){
            Dialog.confirm({
              title: '提示',
              message: '此操作不可撤销，请确认使用跨业通余额'+this.discon+'元抵扣买单'
            }).then(() => {
              _this.params2.money = this.moneyVal;
              if(_this.params2.userId==''||_this.params2.userId==undefined||_this.params2.userId==null){
                var paymoney=(_this.moneyVal-_this.discon).toFixed(2)
                _this.$router.push({
                  path:'/payoutLine',
                  query:{
                    money:paymoney,
                    shopId:_this.params.shopId
                  }
                })
              }else {
                _this.paydicon(_this.params2);
                }
              }).catch(() => {
                return
              })
            }else{
              Toast('请输入正确订单金额')
              return;
            }
          }else {
            Toast('请输入正确信息')
            return;
          }
        },
        paydicon(params){
          var _this = this;
          this.$api.payDicon(params).then(function (res) {
            // alert(res.money)
            _this.$router.push({
              path:'/payWay',
              query:{
                userId:_this.params2.userId,
                money:res.money,
                shopId:_this.params.shopId
              }
            })
          })
        },
        // isWeixinorAlipay(paymoney){
        //     var ua = window.navigator.userAgent.toLowerCase();
        //     if(ua.match(/MicroMessenger/i) =='micromessenger'){
        //         alert('微信支付')
        //         return
        //     }
        //     if(ua.match(/AlipayClient/i) == 'alipayclient'){
        //       alert('支付宝支付')
        //       return
        //     }
        //     return false
        //   }
      },
      mounted(){
         this.ifHasuser()
          // this.isWeixinorAlipay()
      }
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 43px;
    width: 100%;
    line-height: 43px;
    padding-top: 18px;
  }
  .activechose{
    background:  #FF0000;
    color: white!important;
  }
  .typeChoose{
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
  }
  .typeChoose .chooseSize{
    width: 100%;
    height: auto;
    background: white;
    margin-top: 61px;
    border-radius: 14px;
  }
  .typeChoose .chooseSize .dingdanPrice{
    height: 53px;
    line-height: 53px;
  }
  .typeChoose .chooseSize .dingdanPrice input{
    border: none;
    float: right;
    font-size: 14px;
    text-align: right;
    margin-right: 15px;
    width: 4rem;
  }
  .typeChoose .chooseSize .dingdanPrice label{
    float: left;
    padding-left: 15px;
    font-size: 16px;
  }
  ul.chosesize{
    width:94%;
    height: auto;
    display: flex;
    flex-wrap:wrap;
    /*margin: 50px auto;*/
    /*background: green;*/
    padding-left: 3%!important;
    padding-right: 3%!important;
    padding-bottom: 10%!important;
    font-size: 12px;
    border-radius: 15px;
    /*margin-top: 2rem;*/
  }
  ul.chosesize li:first-child,ul.chosesize li:nth-child(2){
    margin-top: 5px!important;
  }
  ul.chosesize li{
    width: 50%;
    flex: 1;
    min-width: 50%;
    max-width: 50%;
    margin-top:30px;
    /*margin-top: 0.8rem;*/
    /*margin-bottom: 25px;*/
    color:#FF0000;
  }
  ul.chosesize li span{
    padding: 0.2rem;
    border: 1px solid #FF0000;
    border-radius: 15px;
  }
  .disconbtn{
    padding-left: 30px;
    padding-right: 30px;
  }
  .disconbtn button{
    width: 100%;
    height: 40px;
    background:#f08400;
    border: none;
    margin-top: 50px;
    color: #FFFFFF;
    font-size: 18px;
    border-radius: 5px;
  }
</style>
