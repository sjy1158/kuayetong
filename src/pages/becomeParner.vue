<template>
  <div>
    <div class="imgcontent">
      <img src="../assets/Group.png" alt="" class="bgimg">
      <div class="jinchengicon">
        <p>合伙人角色进阶需购买全套课程共¥16800.00</p>
        <!--购买显示图标-->
        <div class="icons">
          <div class="icon_item">
            <img v-if="choosetype==1||choosetype==3" src="../assets/Bitmap1.png" alt="" class="iconimg">
            <img v-if="choosetype==0||choosetype==2" src="../assets/Bitmapnochoose.png" class="iconimg" alt="">
            <p>轻奢创业(上)</p>
            <img src="../assets/gostr.png" alt="" class="gostr">
          </div>
          <div class="icon_item">
            <img v-if="choosetype==2||choosetype==3" src="../assets/Bitmap2.png" alt="" class="iconimg">
            <img v-if="choosetype==0||choosetype==1" src="../assets/Bitmapnochoose.png" class="iconimg" alt="">
            <p>轻奢创业(下)</p>
            <img src="../assets/gostr.png" alt="" class="gostr">
          </div>
          <div class="icon_item">
            <img src="../assets/Bitmap3.png" alt="" class="iconimg">
            <p class="active">成为合伙人</p>
          </div>
        </div>
      </div>
    </div>

    <!--购买列表-->
    <div class="Listcontent">

      <div class="list_item">
        <div>
          <img v-if="choosetype==0||choosetype==2" src="../assets/Bitmap4.png" alt="">
          <img v-if="choosetype==1||choosetype==3" src="../assets/xiugai.png" alt="">
          <p class="title">轻奢创业冲刺课(上)</p>
          <p class="price">¥8400.00</p>
        </div>
        <button v-if="choosetype==0||choosetype==2" @click="goPay(1,8400)">确认购买</button>
        <button v-if="choosetype==1||choosetype==3" style="background: #FDF6EB">已购买</button>
      </div>

      <div class="list_item">
        <div>
          <img v-if="choosetype==0||choosetype==1" src="../assets/Bitmap4.png" alt="">
          <img v-if="choosetype==2||choosetype==3" src="../assets/xiugai.png" alt="">
          <p class="title">轻奢创业冲刺课(下)</p>
          <p class="price" @click="goPay(2,8400)">¥8400.00</p>
        </div>
        <button v-if="choosetype==0||choosetype==1" @click="goPay(2,8400)">确认购买</button>
        <button v-if="choosetype==2||choosetype==3" style="background: #FDF6EB">已购买</button>
      </div>
    </div>
    <van-loading type="spinner" v-show="isLoading" style="width:30px;height:30px;position: fixed;top: 50%;margin-top: -15px;left: 50%;margin-left: -15px;z-index: 9999999999999"/>
  </div>
</template>

<script>
  import crypto from 'crypto'
    export default {
        name: "becomeParner",
        data () {
            return {
              paramsuser: {
                userId: '',
                timestamp: '',
                sign: ''
              },
              configparam: {
                userId: '',
                timestamp: '',
              },
              params: {
                "amount": 0,
                "ip": "string",
                "type": 0,
                "updown": 0,
                "userId": 0
              },
              choosetype: '', //购买状态
              isLoading: true
            }
        },
        methods: {
          goPay (updown,money) {
            const _this = this
            this.params.amount = money
            this.params.updown = updown
            this.params.userId = this.$route.query.userId
            this.$router.push({
              path: '/goPay',
              query: {
                params: _this.params
              }
            })
          },
          getConfig (params) {
            const _this = this
            this.$api.getOrderstatus(params).then((res) => {
              if (res.code == 200) {
                _this.isLoading = false
                if (res.data.length == 0) {
                  _this.choosetype = 0
                }
                if (res.data[1].updown == '1') {
                  _this.choosetype = 1
                }
                if (res.data[1].updown == '2') {
                  _this.choosetype = 2
                }
                if (res.data.length==2) {
                  _this.choosetype = 3
                }
              }
            })
          },
          // 字典序排序
          getXun (obj) {
            var newkey = Object.keys(obj).sort()
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
          getTime () {
            return  Date.parse(new Date())
          },
          getSian (str) {
            console.log(str)
            var md5 = crypto.createHash("md5")
            md5.update(str)
            return md5.digest("hex")
          }
        },
        created () {
          this.paramsuser.timestamp = this.getTime()
          this.paramsuser.userId = this.$route.query.userId
          this.paramsuser.sign = this.getSian('userId=' + this.paramsuser.userId + '&timestamp=' + this.paramsuser.timestamp + '&ABCDEFHIJKL98712&*^&65@#$2334056MNOPQRSYIJIWANGL#$#UOUVWXYZ')
          this.getConfig(this.paramsuser)
        }
    }
</script>

<style scoped>
  .imgcontent {
    width: 100%;
    height: 100%;
  }
  .bgimg {
    width: 100%;
    height: 100%;
  }
  /*进程*/
  .jinchengicon {
    width: 100%;
    height: 202px;
    /*background: white;*/
    position: absolute;
    top: 0;
  }
  .jinchengicon p {
    color: #FDEAC2;
    letter-spacing: 1px;
    font-size: 14px;
    margin-top: 37px;
  }
  .icons {
    display: flex;
    width: 100%;
    margin-top: 29px;
  }
  .icons .icon_item {
    flex: 1;
    color: #FFFFFF;
    font-size: 12px;
    text-align: center;
    position: relative;
  }
  .icons .icon_item .iconimg {
    height: 44px;
    width: 39px;
    position: absolute;
    left: 50%;
    margin-left: -19.5px;
  }
  .icons .icon_item .gostr{
    width: 63px;
    height: 7px;
    position: absolute;
    top: 22px;
    right: -31.5px;
  }
  .icons .icon_item p {
    margin-top: 55px!important;
    /*color: white;*/
  }

  /*购买列表*/
  .Listcontent {
    height: auto;
    width: 100%;
    /*background: white;*/
    position: absolute;
    top: 5rem;
  }
  .list_item {
    margin-top: 26px;
  }
  .list_item img {
    width: 300px;
    height: 180px;
  }
  .list_item button {
    width: 300px;
    height: 49px;
    background: #FEE3BA;
    border: none;
    border-radius: 50px;
    letter-spacing: 1px;
    color: #D0021B;
    font-size: 18px;
    line-height: 49px;
    margin-top: 6px;
  }
  .list_item div {
    position: relative;
    text-align: center;
  }
  .list_item div p {
    font-size: 24px;
    letter-spacing: 1px;
  }
  .list_item p.title {
    position: absolute;
    width: 100%;
    color: #FEE3BA;
    top: 20px;
  }
  .list_item p.price {
    position: absolute;
    width: 100%;
    color: #FEE3BA;
    bottom: 20px;
  }
  /*.icons .icon_item p.active{*/
    /*color: #FFD678!important;*/
  /*}*/
</style>
