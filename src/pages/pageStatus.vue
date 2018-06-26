<template>
  <div>
    <van-nav-bar
      fixed
      :title="headerTitle"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div style="width:100%;height: 110px;background: white;top: 1.1rem;position: relative;text-align: center">
      <div style="position: absolute;height: 30px;width: 100px;left: 50%;margin-left: -50px;top: 18px;">
        <span style="font-size: 12px;color: #FF0000">¥</span>
        <span style="font-size: 24px;color: #FF0000">{{money}}</span>
      </div>
      <div @click="onClickLeft" style="position: absolute;bottom: 0px;height: 30px;width: 50px;text-align: center;left: 50%;margin-left: -25px;">
        返回首页
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pageStatus",
      data(){
          return{
            headerTitle:'',
            money:'0',
          }
      },
      methods:{
        onClickLeft(){
          this.$router.push('/nearbyShops');
          localStorage.removeItem('paytype');
          localStorage.removeItem('payMoney');
        }
      },
      created(){
        this.money=localStorage.getItem('payMoney');
        var paytype=localStorage.getItem('paytype');
        if(paytype==0){
          this.headerTitle='订单待支付....'
        }else if(paytype==1){
          this.headerTitle='订单已完成....'
        }else if(paytype==2){
          this.headerTitle='订单已取消....'
        }
      },
      mounted(){
      }
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 1.1rem;
    width: 100%;
    line-height: 1.1rem;
  }
</style>
