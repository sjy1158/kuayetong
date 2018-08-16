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
        <p><span>¥</span><span class="pricemoney">{{money}}</span></p>
        <p>支付给商家</p>
      </div>

      <div class="paybtn">
        <button type="button" @click="payWays">确认支付<span style="font-size: 14px;padding-left: 2px;">¥</span><span class="pricemoney">{{money}}</span></button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "payoutLine",
      data(){
          return{
            money:this.$route.query.money,
          }
      },
      methods:{
        payWays(){
          this.isWeixinorAlipay(this.money)
        },
        onClickLeft(){
          this.$router.back(-1)
        },
        isWeixinorAlipay(paymoney){
            const _this=this;
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) =='micromessenger'){
              this.$api.getWeixin2(_this.$route.query).then((res)=>{
                window.location.href="http://api.kuayet.com:8028/pay.html?data="+res.lianjie;
              })
              return
            }
            if(ua.match(/AlipayClient/i) == 'alipayclient'){
              _this.$router.push({
                path:'/alipayOk',
                query:{
                  data:_this.$route.query
                }
              })
              return
            }
            return false
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
  .price p:first-child{
    height: 44px;
    width: 136px;
    margin: 0 auto;
    line-height: 44px;
    font-size: 16px;
    color: #393939;
    padding-top: 19px;
  }
  .price p:nth-child(2){
    height: 33px;
    width: 136px;
    margin: 0 auto;
    line-height: 33px;
    color: #FF0000;
  }
  .price p:nth-child(2) .pricemoney{
    font-size: 16px;
  }
  .price p:nth-child(3){
    font-size: 16px;
    color: #393939;
    margin: 0px!important;
    padding-top: 5px;
    /*padding-top: 5px;*/
  }
  .paybtn{
    padding-left: 30px;
    padding-right: 30px;
  }
  .paybtn button{
    width: 100%;
    height: 40px;
    background: #f08400;
    margin-top: 30px;
    border: none;
    color: white;
    border-radius: 10px;
    font-size: 18px;
    letter-spacing: 0.03rem;
  }
</style>
