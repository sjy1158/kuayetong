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
    <p><span>¥</span><span class="pricemoney">{{money}}</span></p>
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
    <button type="button" @click="payWays">确认支付<span style="font-size: 14px;padding-left: 2px;">¥</span><span class="pricemoney">{{money}}</span></button>
  </div>
</div>
</template>

<script>
    export default {
        name: "payWay",
      data(){
          return{
            money:this.$route.query.money,
            radio:'1',
            orderId:'',
            type:'',
            money2:''
          }
      },
      methods:{
        onClickLeft(){
          this.$router.back(-1)
        },
        choosePay(num){
          this.radio=num;
        },
       isInstallapp(url,orderId){
          const _this=this;

         if(isiOS){
           var hasApp=true;
           if(hasApp){
             window.location="mqqwpa://im/chat?chat_type=wpa&uin=501863587&version=1&src_type=web&web_src=badcatu.com";
           }
           setTimeout(function () {
             window.location.href=url;
           },3000)
           window.location="mqqwpa://im/chat?chat_type=wpa&uin=501863587&version=1&src_type=web&web_src=badcatu.com";//打开某手机上的某个安卓app应用
         }
       },
        // },
        payWays(){
          const _this=this
          if(this.radio=='1'){
            if(this.$route.query.userId!=undefined){
              window.location.href='http://192.168.5.113:8080/crossindustry/alipay/payTwo?'+'buyMoney='+_this.$route.query.buyMoney+'&money='+_this.$route.query.money+'&userId='+_this.$route.query.userId+'&shopId='+_this.$route.query.shopId
            }else{
              window.location.href='http://192.168.5.113:8080/crossindustry/alipay/payTwo?'+'buyMoney='+_this.$route.query.buyMoney+'&money='+_this.$route.query.money+'&shopId='+_this.$route.query.shopId
            }
          }else if(this.radio=='2'){
            this.$api.getWeixin2(_this.$route.query).then((res)=>{
              window.location.href="http://api.kuayet.com:8028/pay.html?data="+res.lianjie;
              var u = navigator.userAgent, app = navigator.appVersion;
              var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
              var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                if(isiOS){
                  if(_this.$route.query.userId!=undefined){
                    window.location.href = 'http://192.168.5.112:8082/#/outSuccess?' + 'orderId=' + res.orderId
                  }else{
                    // window.location.href="kytstart://awaken/awakenback/scheme?"+"payPrice="+_this.money;
                    window.location.href = 'http://192.168.5.112:8082/#/appSuccess?' + 'orderId=' + res.orderId
                  }
                }
                //安卓
                if(isAndroid) {
                  setTimeout(function () {
                    if (_this.$route.query.userId != undefined) {
                      window.location.href = 'http://192.168.5.112:8082/#/outSuccess?' + 'orderId=' + res.orderId
                    } else {
                      window.location.href = 'http://192.168.5.112:8082/#/appSuccess?' + 'orderId=' + res.orderId
                    }
                  }, 3000)
                }
            })
          }
        },
        getPaystatus(url,orderId){
          const _this=this;
         this.$api.getStatus(orderId).then((res)=>{
              _this.type=res.type;
             var u = navigator.userAgent, app = navigator.appVersion;
             var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
             var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
             // alert(_this.type);
           if(_this.type=='1'){
             if(isAndroid){
               var hasApp=true;
               if(hasApp){
                 window.location.href="mqqwpa://im/chat?chat_type=wpa&uin=501863587&version=1&src_type=web&web_src=badcatu.com"
               }
               setTimeout(function () {
                 hasApp=!hasApp
                 window.location.href=url
               },3000)
             }
             // if(isiOS){
             //    var hasApp=true;
             //    if(hasApp){
             //      window.location.href="mqqwpa://im/chat?chat_type=wpa&uin=501863587&version=1&src_type=web&web_src=badcatu.com";
             //    }
             //    setTimeout(function () {
             //      hasApp=!hasApp
             //      window.location.href=url
             //    },3000)
             // }
           }else{
             setTimeout(function () {
               window.location.href=url
             },3000)
           }
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
  }
  .price{
    height: 165px;
    width: 100%;
    background: white;
    margin-top: 53px;
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
