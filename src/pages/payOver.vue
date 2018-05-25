<template>
  <div class="payOver">
    <mt-header fixed title="星巴克Starbucks">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
    </mt-header>
    <section>
      <img src="../assets/offsetsuccess_icon_green.png" alt="">
      <p style="padding-top: 10px">抵扣成功</p>
      <p>请将折扣后剩余的<span>0.00</span>元</p>
      <p>线下支付给商家</p>
      <button type="button">完成订单</button>
    </section>
  </div>
</template>

<script>
    export default {
        name: "payOver"
    }
</script>

<style>
  .payOver .mint-header{
    background: white!important;
    color: #393939;
    font-size: 18px!important;
  }
  .payOver .mint-header i{
    font-size: 18px!important;
  }
  .payOver section{
      margin-top: 77px;
  }
  .payOver section p{
    font-size: 24px;
    margin: 0px!important;
  }
  .payOver section p:nth-child(3){
        font-size: 20px;
    padding-top: 38px;
  }
  .payOver section p:nth-child(3) span{
    color: #f08400;
    font-size: 24px;
  }
  .payOver section p:nth-child(4){
    font-size: 20px;
    padding-top: 5px;
  }

  .payOver button[type='button']{
    width: 85%;
    height: 40px;
    color: white;
    font-size: 18px;
    border: none;
    background: #f08400;
    margin-top: 56px;
    border-radius: 5px;
  }
</style>
