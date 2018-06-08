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
        <p style="font-size: 0.75rem;padding-top: 0.31rem;padding-bottom: 1.18rem">抵扣成功</p>
        <p style="font-size: 0.625rem;padding-bottom: 0.18rem;">请将折扣后剩余的<span style="color: #F08400">0.00</span>元</p>
        <p style="font-size: 0.625rem;">线下支付给商家</p>
        <button type="button">完成订单</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "paySuccess",
      data(){
          return{

          }
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1);
        }
          }
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 1.1rem;
    width: 100%;
    line-height: 1.1rem;
  }
  .payicon img{
    height: 2.81rem;
    width: 2.81rem;
  }
  .payicon p{
    margin: 0px!important;
  }
  .payicon p:first-child{
    font-size: 0.75rem;
  }
  button[type=button]{
    width: 94%;
    height: 1.25rem;
    background: #F08400;
    border: none;
    color: white;
    font-size: 0.5rem;
    margin-top: 1.25rem;
    font-weight: bold;
    border-radius: 5px;
  }
</style>
