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
    <div style="font-size: 14px;color: #393939;background: white;padding-bottom: 20px;" @click="lookdan">查看订单</div>
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
        orderId:this.$router.query.orderId,
        params:{
          money:this.$route.query.mony,
          phone:''
        }
      }
    },
    methods:{
      lookdan(){
        window.location.href='https://blog.csdn.net/nongweiyilady/article/details/74007124';
      }
    },
    mounted(){
      if(this.$route.query.type=='1'){
        this.title='支付成功'
      }
      if(this.$route.query.type=='0'){
        this.title='待支付'
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
    margin-top: 43px;
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
