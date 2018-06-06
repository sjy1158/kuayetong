<template>
    <div class="shopPay">
      <van-nav-bar
        fixed
        title="星巴克Starbucks"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />

      <div class="form" style="margin-top: 2.03rem;">
        <div style="forminput">
          <form action="">
            <div class="dingdaninput"><label>订单金额(元)</label><input type="text" placeholder="请询问服务员后输入"></div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shopPay"
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 1.1rem;
    width: 100%;
    line-height: 1.1rem;
  }
  .form{
    width: 90%;
    height: auto;
    margin: 0 auto;
    background: white;
    /*border-radius: 10px;*/
  }
  .forminput{
    width: 94%;
    height: auto;
    background: white;
    padding-left: 3%;
    padding-right:3%;
  }
  .dingdaninput label{
    float: left;
  }
  .dingdaninput input{
    float: right;
  }
</style>
