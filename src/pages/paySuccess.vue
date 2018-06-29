<template>
    <div class="paySuccess">
      <van-nav-bar
        fixed
        title="星巴克Starbucks"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div class="payicon" style="margin-top: 2.03rem">
        <img src="../assets/business_pay_succeed@2x.png" alt="">
        <p style="font-size: 24px;padding-top: 0.31rem;padding-bottom: 1.18rem">抵扣成功</p>
        <p style="font-size: 20px;padding-bottom: 0.18rem;">请将折扣后剩余的<span style="color: #F08400">{{prize}}</span>元</p>
        <p style="font-size: 20px;">线下支付给商家</p>
        <button type="button" @click="finish">完成订单</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "paySuccess",
      data(){
          return{
            prize:0,
          }
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1);
        },
        finish(){
          window.location.href="https://www.baidu.com/";
        }
          },
      created(){
          // alert(this.$route.query.prize)
        this.prize = (this.$route.query.prize).toFixed(2);
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
  .payicon img{
    height: 90px;
    width: 90px;
  }
  .payicon p{
    margin: 0px!important;
  }
  .payicon p:first-child{
    font-size: 0.75rem;
  }
  button[type=button]{
    width: 94%;
    height: 40px;
    background: #F08400;
    border: none;
    color: white;
    font-size: 18px;
    margin-top: 1.25rem;
    font-weight: bold;
    border-radius: 5px;
  }
</style>
