<template>
  <div class="firmOrder">
    <van-nav-bar
      fixed
      title="确认订单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div v-show="issave==false" style="margin-top: 62px;">
      <div class="locationtitle">
        <span style="padding-left: 0.31rem;font-size: 14px;">地址信息</span>
      </div>
      <form action="">
        <van-cell-group>
          <van-cell title="收货人">
            <template>
              <input type="text" placeholder="请使用真实姓名" style="margin-left: 1.3rem;" v-model="params.valuename">
            </template>
          </van-cell>
          <van-cell title="联系电话">
            <template>
              <input type="text" placeholder="请输入联系电话" v-model="params.valuephone">
            </template>
          </van-cell>
          <van-cell title="所在地区" is-link @click="choseCity">
            <template>
              <input type="text" placeholder="" disabled="disabled" v-model="value" style="background: white">
            </template>
          </van-cell>
          <van-cell title="详细地址">
            <template>
              <input type="text" placeholder="街道、小区门牌等" v-model="params.valueplace">
            </template>
          </van-cell>

        </van-cell-group>
      </form>
      <van-area :area-list="areaList" v-show="isshow==true" :value="value" @confirm="finish" @cancel="onCancel" style="position: fixed;width: 100%;bottom: 0px;z-index: 999999999999"/>
      <!--保存收货信息-->
      <div class="save" style="background: #909090;" @click="savelocation">
        保存收货信息
      </div>
    </div>

    <div class="savelocation" v-show="issave==true" @click="bianjiplace" style="margin-top: 1.5rem;">
        <div class="savexinxi">
          <img src="../assets/positioning@2x.png" alt="" style="float: left">
          <div style="text-align: left;height: 1rem;" class="locationtext">
            <p><span>{{params.valuename}}</span><span style="padding-left: 0.2rem">{{params.valuephone}}</span></p>
            <p>{{valuelocation}}</p>
          </div>
        </div>
    </div>

    <div class="dingdanlist">
      <div class="dingdanitem" v-for="item in shoparr">
        <!--item商品列表-->
        <div class="itemtitle" style="float: left">
          <img :src="item.shopUrl" alt="">
          <span>{{item.shopName}}</span>
        </div>
        <div class="itemxiangqing">
          <img :src="item.imageUrl" alt="" style="float: left">
          <div>
            <p style="font-size: 12px;">{{item.productName}}</p>
            <div class="sizeitem" style="font-size: 15px!important;">
              <span style="color:#FF0000 ">¥{{onesize}}</span>
              <span style="padding-left: 0.1rem;color: #8F8F8F;font-size: 14px;">×{{value1}}</span>
              <van-stepper style="float: right;font-size: 14px;" @change="changenum" v-model="value1"/></div>
          </div>
        </div>
      </div>
    </div>

    <div class="paymoney" style="margin-bottom: 2.2rem;">
      <form action="">
        <van-cell-group>
          <van-cell title="支付方式">
            <template>
              <div>
                <van-radio-group v-model="radio" @change="change">
                  <van-radio name="1"><img src="../assets/merchant_alipay@2x.png" alt=""><span>支付宝</span></van-radio>
                  <van-radio name="2"><img src="../assets/merchant_wx@2x.png" alt=""><span>微信</span></van-radio>
                </van-radio-group>
              </div>
                <!--<div style="float: left" class="payicon"><img src="../assets/merchant_alipay@2x.png" alt=""><span>支付宝</span></div>-->
                <!--<div style="float: left" class="payicon"><img src="../assets/merchant_wx@2x.png" alt=""><span>微信</span></div>-->
            </template>
          </van-cell>
          <van-cell title="配送方式">
            <template>
              <div style="width: 7.3rem;float: right;text-align: right">快递免费</div>
            </template>
          </van-cell>
          <van-cell title="买家留言">
            <template>
              <input type="text" placeholder="选填：填写内容已和卖家协商确认" v-model="value2" style="background: white;width: 6rem">
            </template>
          </van-cell>
        </van-cell-group>
      </form>
    </div>

    <!--提交订单-->
    <div class="savedingdan">
      <div class="savedingdanbtn">
          <span style="color: #8F8F8F;font-size: 14px;">合计：</span><span style="color: #FF0000;font-size: 24px;">¥{{allsize}}</span>
          <button @click="getpay">提交订单</button>
      </div>
    </div>
  </div>
</template>

<script>
  import citys from '../assets/js/area'
  import { Toast } from 'vant'
    export default {
        name: "firmOrder",
      data(){
          var _this = this;
        return{
          areaList:'',
          isshow:false,
          value:'',
          value1:1,
          value2:'',
          radio:'1',
          onesize:138,
          allsize:'',
          // 表单
          issave:false,
          params:{
            valuename:'',
            valuephone:'',
            valueplace:'',
          },
          typeparams:{
            type:'1',
            consignee:'',
            phone:'',
            area:'',
            address:'',
            word:'',
            productId:this.$route.query.shoptypeid,
            num:'',
            money:'',
            userId:this.$route.query.userId
          },
          valuelocation:'',
          shoparr:[],
        }
      },
      methods:{
        onClickLeft(){
            this.$router.go(-1);
        },
        choseCity(){
          this.isshow = !this.isshow;
        },
        change(){
            this.typeparams.type=this.radio;
        },
        finish(val){
          var _this = this;
          this.value = '';
          this.isshow = !this.isshow;
          for (var i = 0;i<val.length;i++){
            _this.value+=val[i].name;
          }
        },
        onCancel(){
          this.isshow = false;
        },
        changenum(){
          this.allsize = (this.value1*this.onesize).toFixed(2)
        },
        savelocation(){
          var phone=/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
          if(this.value!=''&&this.params.valuename!=''&&phone.test(this.params.valuephone)&&this.params.valueplace!=''){
            this.issave = !this.issave;
            this.valuelocation = this.value + this.params.valueplace;
            return
          }else{
            return Toast('请填写正确完整地址信息')
          }
        },
        bianjiplace(){
          this.issave = !this.issave;
        },
        getpay(){
          var _this = this;
          if (!this.issave){
            return Toast('请保存收货信息')
          }else{
            this.typeparams.consignee = this.params.valuename;
            this.typeparams.phone = this.params.valuephone;
            this.typeparams.address = this.params.valueplace;
            this.typeparams.area = this.value;
            this.typeparams.word = this.value2;
            this.typeparams.num = this.value1;
            this.typeparams.money = this.allsize;
              if(this.radio==1){
              this.$router.push({
                path:'/payOk',
                query:this.typeparams
              })
             }else if(this.radio==2){
                this.$api.payWei(this.typeparams).then((res)=>{
                  setTimeout(_this.getPaystatus(res.orderId),3000);
                  window.location.href="http://api.kuayet.com:8028/pay.html?data="+res.lianjie;
                })
              }
          }
        },
        //获取产品
        getproduct(id){
          var _this=this;
          this.$api.getProduct(id).then((res)=>{
            _this.shoparr=res.list;
          })
        },
        getPaystatus(orderId){
          var _this=this;
          this.$api.getpaystatus(orderId).then((res)=>{
          })
        }
      },
      mounted(){
          this.getproduct(this.$route.query.shoptypeid);
          this.areaList = citys;
          this.allsize = (this.value1*this.onesize).toFixed(2)
        this.onesize = this.$route.query.price;
          this.value1 = this.$route.query.val;
        this.allsize = (this.onesize*this.value1).toFixed(2);
        // alert(this.$route.query.price);
        //   alert(this.$route.query.val)
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
    .locationtitle,.save{
      height: 1.18rem;
      width: 100%;
      line-height: 1.18rem;
      font-size:14px;
    }
    .locationtitle{
      text-align: left;
      /*padding-left: 0.31rem;*/
    }
    .save{
      color: #FFFFFF;
    }
    .van-cell-group .van-cell{
      font-size: 14px;
      text-align: left!important;
    }
  .van-cell-group .van-cell .van-cell__title{
    width: 2rem;
  }
  input{
    border: none;
    margin-left: 1rem;width: 5rem;
    text-align: left;
    margin-top: -0.2rem;
  }
  .van-cell-group .van-cell .van-cell__right-icon{
    margin-left: 2rem!important;
  }
  .dingdanitem{
    height: 5.25rem;
    width: 100%;
    background: white;
    position: relative;
  }
  .dingdanitem .itemtitle{
    width: 100%;
    height: 52px;
    line-height: 52px;
    /*background: palevioletred;*/
    position: relative;
    text-align: left;
    border-bottom: 2px solid #F2F2F2;
  }
    .dingdanitem .itemtitle img{
      height: 28px;
      width: 28px;
      position: absolute;
      top: 50%;
      margin-top: -0.435rem;
      left: 0.31rem;
    }
    .dingdanitem .itemtitle span{
      margin-left: 1.5rem;
      font-size: 12px;
    }
    .itemxiangqing{
      height: 2.68rem;
      width: 100%;
      /*background: palevioletred;*/
      float: left;
      text-align: left;
      font-size: 0.37rem;
      margin-top: 0.31rem;
      position: relative;
    }
  .itemxiangqing img{
    width: 84px;
    height: 86px;
    padding-left: 0.31rem;
    border-radius: 10px;
  }
    .itemxiangqing p{
      margin: 0px!important;
      padding-left: 3.18rem;
      padding-right: 0.56rem;
    }
  .sizeitem{
    width:6rem;height: 1rem;padding-left: 3.18rem;padding-right: 0.56rem;
    /*background: black;*/
    line-height: 1rem;
    position: absolute;
    bottom: 0px;
  }
  .paymoney{
    height: auto;
    width: 100%;
    background: white;
    margin-top: 0.3rem;
  }
  .payicon{
    margin-left: 1rem;
  }
  .payicon img{
      height: 0.56rem;
    width: 0.56rem;
    vertical-align: middle;
  }
    .payicon span{
      vertical-align: middle;
      padding-left: 0.1rem;
    }
  .van-radio-group .van-radio{
    float: left;
    margin-left: 0.5rem;
  }
    .van-radio-group .van-radio img{
      height: 0.56rem;
      width: 0.56rem;
      vertical-align: middle;
    }
    .van-radio-group .van-radio span{
      vertical-align: middle;
      padding-left: 0.1rem;
    }
    .savedingdan{
      position: fixed;bottom: 0px;
      left: 0px;
      width: 100%;
    }
  .savedingdanbtn{
    height: 1.93rem;
    width: 100%;
    background: white;
    line-height: 1.93rem;
    text-align: left;
  }
    .savedingdanbtn span{
      padding-left: 0.31rem;
      font-size: 0.37rem;
    }
  button{
    height: 41px;
    width: 160px;
    background: #FF0000;
    border: none;
    color: white;
    line-height: 41px;
    float: right;
    border-radius: 2rem;
    margin-top: 0.4rem;
    margin-right: 0.31rem;
    font-size: 16px;
  }
  .savelocation{
    height: 3rem;
    width: 95%;
    background: white;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin-bottom: 0.3rem!important;
    margin: 0 auto;
    position: relative;
  }
    .savelocation .savexinxi{
      width: 95%;
      height: 2rem;
      /*background: gray;*/
      position: absolute;
      top: 50%;
      margin-top: -1rem;
      box-shadow: 0px 0px 8px #f2f2f2;
    }
    .savelocation .savexinxi img{
      height: 18px;
      width: 15px;
      position: absolute;
      top: 50%;
      left: 0.4rem;
      margin-top: -0.28rem;
    }
    .savelocation .savexinxi p{
      margin: 0px!important;
      padding-bottom: 0.2rem;
    }
    .savelocation .savexinxi p span{
      font-weight: bold;
    }
  .locationtext{
    position: absolute;
    top: 50%;
    left: 1.125rem;
    margin-top: -0.6rem;
    font-size: 12px;
  }
</style>
