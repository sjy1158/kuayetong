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
      <button @click="payQuick()">立即支付 ¥{{this.$route.query.params.amount.toFixed(2)}}</button>
    </div>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  import crypto from 'crypto'
    export default {
        name: "goPay",
        data () {
          return {
            payway: 1,
            params: {"timestamp":"","userId":"756","type":"0","updown":""},
            payparams: {}
          }
        },
        methods: {
          chosePayway (payway) {
            this.payway = payway
          },
          payQuick () {
            const _this = this
            // var str = this.getXun(_this.payparams).substr(1)
            // var sign = this.getSian(str + '&key=')
            if (this.payway==2) {
              wx.ready(function () {
                wx.scanQRCode({
                  needResult : 1,
                  scanType : [ "qrCode", "barCode" ],
                  success : function(res) {
                    console.log(res)
                    alert(JSON.stringify(res));
                    var result = res.resultStr;
                  },
                  fail : function(res) {
                    console.log(res)
                    alert(JSON.stringify(res));

                  }
                })
              })
            }
          },
          getPayconfig () {
            var data = {}
            this.params.timestamp = this.getTime()
            var str = this.getXun(this.params).substr(1)
            this.params.sign = this.getSian(str + '&ABCDEFHIJKL98712&*^&65@#$2334056MNOPQRSYIJIWANGL#$#UOUVWXYZ')
            this.$api.getConfig(this.params).then((res) => {
              alert(res.data)
              this.payparams = res.data
              wx.config({
                debug: true,
                appId: res.data.appid,
                timeStamp: res.data.timestamp,
                nonceStr: res.data.noncestr,
                signature: res.data.sign,
                jsApiList: ['chooseWXPay','scanQRCode']
              })
            })
          },
          // 字典序排序
          getXun (obj) {
            var newkey = Object.keys(obj).sort().reverse()
            var str = ''
            var newobj = []
            for (var i = 0; i < newkey.length; i++) {
              newobj.push(newkey[i] + '=' + obj[newkey[i]])
            }
            for (var i = 0; i< newobj.length; i++) {
              str += '&' + newobj[i]
            }
            return str
            // return newobj
          },
          // 获取时间戳
          getTime () {
            return  Date.parse(new Date())
          },
          // 获取签名
          getSian (str) {
            console.log(str)
            var md5 = crypto.createHash("md5")
            md5.update(str)
            return md5.digest("hex")
          }
        },
        created () {
        },
        mounted () {
          this.getPayconfig()
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
  .payway_item:first-child {
    border-bottom: 1px solid #EBEBEB;
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
