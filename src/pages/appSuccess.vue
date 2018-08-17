<template>
<div style="letter-spacing: 0.02rem;">
  <van-nav-bar
    fixed
    :title="title"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="price">
    <span>¥</span><span style="font-size: 18px;">{{money}}</span>
  </div>

  <div class="savecode">
    <p>您已获得跨业通提供的话费购物金</p>
    <p><span>{{money}}</span><span style="font-size: 14px;">元</span></p>
    <p>请在下方输入手机号码领取</p>
    <div class="getcode">
      <div>
        <input type="text" placeholder="输入手机号码" v-model="params.phone">
        <button @click="truePay">确定</button>
      </div>
    </div>
  </div>

  <div class="payimg">
    <img src="../assets/payimg.png" alt="">
  </div>
</div>
</template>

<script>
  import {Toast} from 'vant'
  import { Dialog } from 'vant'
    export default {
        name: "appSuccess",
      data(){
          return{
            title:'',
            money:this.$route.query.mony,
            params:{
              money:this.$route.query.mony,
              phone:''
            }
          }
      },
      methods:{
          truePay(){
            const _this=this;
            // this.open('您已领取成功')
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if(this.params.phone!=''&&myreg.test(this.params.phone)){
              this.$api.getMessg(this.params).then((res)=>{
                _this.open(res)
              })
            }else {
              Toast('请输入正确的手机号')
            }
          },
        onClickLeft(){
          this.$router.back(-1);
        },
          open(msg){
            Dialog.alert({
              title:'提示',
              message:msg
            }).then(()=>{
            })
          }
      },
      mounted(){
        if(this.$route.query.type=='1'){
          this.title='支付成功'
        }
      }
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 43px;
    width: 100%;
    line-height: 43px;
  }
  .price{
    width: 100%;
    height:70px;
    margin-top: 61px;
    background: white;
    line-height: 70px;
    color: #FF0000;
    font-size: 12px;
  }
  .savecode{
    height: 231px;
    width: 100%;
    background: white;
    margin-top: 10px;
  }
  .savecode p{
    color: #717171;
    margin: 0px!important;
  }
  .savecode p:first-child{
    color: #717171;
    font-size: 16px;
    padding-top: 39px;
  }
  .savecode p:nth-child(2){
    font-size: 30px;
    padding-top: 17px;
  }
  .savecode p:nth-child(3){
    color: #FF6262;
    font-size: 12px;
    padding-top: 17px;
  }
  .getcode{
    padding-left: 38px;
    padding-right: 38px;
  }
  .getcode div{
    width: 100%;
    height: 35px;
    margin-top: 26px;
    position: relative;
  }
  .getcode div input{
    width: 95%;
    height: 100%;
    border-radius: 20px;
    padding-left: 5%;
    color: #8F8F8F;
    font-size: 14px;
    border: 1.3px solid #8F8F8F;
  }
  .getcode div button{
    width:95px;
    height: 37.6px;
    position: absolute;
    right: -1.5px;
    top:1.3px;
    border: none;
    color: white;
    background: #393939;
    border-top-right-radius:20px;
    border-bottom-right-radius:20px;
  }
  .payimg{
    padding-right: 10px;
    padding-left: 10px;
  }
  .payimg img{
    width: 100%;
    height: 140px;
    margin-top: 20px;
  }
</style>
