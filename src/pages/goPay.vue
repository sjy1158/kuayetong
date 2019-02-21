<template>
  <div>
    <div class="payway">
      <div class="form">
        <!--//标题title-->
        <div style="width: 100%;height: 43px;">
          <span class="title">请您选择支付方式</span>
        </div>
        <!--选择支付方式-->
        <div class="paywayitems">
          <div class="payway_item">
            <img src="../assets/alipay.png" alt="" class="payicon">
            <span>支付宝</span>
            <div @click="chosePayway(1)"></div>
            <img v-if="payway==1" src="../assets/checkpay.png" alt="" class="checkpng">
          </div>
          <div class="payway_item">
            <img src="../assets/weixin.png" alt="" class="payicon">
            <span>微信</span>
            <div @click="chosePayway(2)"></div>
            <img v-if="payway==2" src="../assets/checkpay.png" alt="" class="checkpng">
          </div>
        </div>
      </div>
    </div>

    <!--立即支付按钮-->
    <div class="paybtn">
      <button>立即支付 ¥991.00</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "goPay",
        data () {
          return {
            payway: 1
          }
        },
        methods: {
          chosePayway (payway) {
            console.log(payway)
            this.payway = payway
          }
        }
    }
</script>

<style scoped>
  .payway {
    padding: 10px 13px;
    position: relative;
  }
  .payway .form {
    height: 186px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 10px;
  }
  .payway .form span.title {
    float: left;
    letter-spacing: 1px;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 24px;
    color: #333333;
  }
  /*支付方式*/
  .paywayitems {
    margin-top: 20px;
    width: 100%;
  }
  .payway_item {
    height: 62px;
    width: 100%;
    /*padding: 0 10px;*/
    color: #666666;
    font-size: 18px;
    position: relative;
  }
  .payway_item span {
    vertical-align: middle;
    letter-spacing: 1px;
    float: left;
    line-height: 62px;
    margin-left: 43px;
  }
  .payway_item .payicon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    float: left;
    vertical-align: middle;
    position: absolute;
    left: 13px;
    top: 50%;
    margin-top: -10px;
  }
  .payway_item div {
    height: 14px!important;
    width: 14px!important;
    border: 1px solid #979797;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -7.5px;
    vertical-align: middle;
  }
  .payway_item .checkpng {
    height: 16px!important;
    width: 16px!important;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -7.5px;
    vertical-align: middle;
  }

  /*支付按钮样式*/
  .paybtn {
    padding: 0 12px;
  }
  .paybtn button {
    height: 49px;
    width: 100%;
    background: #E20B1A;
    border: none;
    border-radius: 50px;
    color: #FFFFFF;
    font-size: 18px;
    letter-spacing: 1px;
    margin-top: 35px;
  }

</style>
