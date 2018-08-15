<template>
<div>
  <van-nav-bar
    fixed
    title="支付方式"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="price">
    <p>请将抵扣后剩余的</p> 
    <p><span>¥</span><span>9.99</span></p>
    <p>支付给商家</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "payWay",
      data(){
          return{

          }
      },
      methods:{
        onClickLeft(){
          this.$router.back(-1)
        }
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
  .price{
    height: 165px;
    width: 100%;
    background: white;
    margin-top: 71px;
  }
</style>
