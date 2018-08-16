<template>
<div style="letter-spacing: 0.02rem;">
  <van-nav-bar
    fixed
    title="支付方式"
    left-arrow
    @click-left="onClickLeft"
  />
  <div class="price">
    <p>请将抵扣后剩余的</p>
    <p><span>¥</span><span class="pricemoney">{{money.toFixed(2)}}</span></p>
    <p>支付给商家</p>
  </div>

  <div style="margin-top: 10px;" class="choosePay">
    <div>
      <img src="../assets/merchant_alipay@2x.png" alt=""><label>支付宝</label><input type="radio" @click="choosePay('1')" checked name="gender" value="man"/>
    </div>
    <div>
      <img src="../assets/merchant_wx@2x.png" alt=""><label>微信</label><input type="radio" @click="choosePay('2')" name="gender" value="man"/>
    </div>
  </div>

  <div class="paybtn">
    <button type="button" @click="payWays">确认支付<span style="font-size: 14px;padding-left: 2px;">¥</span><span class="pricemoney">{{money.toFixed(2)}}</span></button>
  </div>
</div>
</template>

<script>
    export default {
        name: "payWay",
      data(){
          return{
            money:this.$route.query.money,
            radio:'1'
          }
      },
      methods:{
        onClickLeft(){
          this.$router.back(-1)
        },
        choosePay(num){
          this.radio=num;
        },
        payWays(){
          const _this=this
          if(this.radio=='1'){
           _this.$router.push({
             path:'/alipayOk',
             query:{
               data:_this.$route.query
             }
           })
          }else if(this.radio=='2'){
            this.$api.getWeixin2(_this.$route.query).then((res)=>{
              setTimeout(_this.getPaystatus(res.orderId),3000);
              window.location.href="http://api.kuayet.com:8028/pay.html?data="+res.lianjie;
            })
          }
        },
        getPaystatus(orderId){
          var _this=this;
          this.$api.getStatus(orderId).then((res)=>{
            _this.$router.push({
              path:'/appSuccess',
              query:{
                type:res.type,
                mony:res.money
              }
            })
            // window.location.href='https://www.baidu.com/';
          })
        }
      },
      mounted(){
          this.choosePay('1')
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
  .choosePay div{
    height: 68px;
    width: 100%;
    background: white;
    line-height: 68px;
    position: relative;
  }
  .choosePay div img{
    height: 24px;
    width: 24px;
    float: left;
    position: absolute;
    top: 50%;
    margin-top: -12px;
    left: 20px;
  }
  .choosePay div label{
    float: left;
    margin-left: 54px;
    font-size: 14px;
  }
  .choosePay div input{
    height: 18px;
    width: 18px;
    position: absolute;
    right:20px;
    top: 50%;
    margin-top: -9px;
  }
  .choosePay div:first-child{
    border-bottom: 2px solid #F2F2F2;
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
