<template>
<div class="pagesbg" :style="note">
  <header class="mod">
    <img :src="userfrom.headImage" alt="" style="height: 24px;width: 24px;float: left">
    <span>{{userfrom.nickName}}邀你开启跨业之旅</span>
  </header>
  <footer class="mod1" style="">
    <!--底部导航分类异常显示-->
    <div style="height: auto;position: fixed;bottom: 0px;" :style="inputWidth">
        <div @click="openjianpan()" style="height: 1rem;">
          <input type="tel" autofocus ref="input" maxlength="11" placeholder="请输入手机号码" v-focus v-model="params.phone">
        </div>
        <div @click="openjianpan2()" style="height: 1rem;">
          <input type="text" ref="input2" placeholder="请输入密码" v-model="params.password">
        </div>
        <div style="margin-bottom: 0;">
          <button type="button" style="float: left" @click="downkyt()">直接下载</button>
          <button type="button" style="float: right" @click="startOpen()">立即注册</button>
        </div>
    </div>
    <!--底部导航分类异常ending-->
  </footer>
</div>
</template>

<script>
    export default {
        name: "Sharepage",
        data () {
          return{
            note: {
              backgroundImage: "url(" + require("../assets/bgimg.png") + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%"
            },
            inputWidth: {
              width: (window.screen.width - 76) + 'px'
            },
            params: {
              phone: '',
              password: '',
              userId: ''
            },
            userfrom: ''
          }
        },
      methods: {
        isSystm () {
          var u = navigator.userAgent, app = navigator.appVersion;
          return {
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          }
        },
        getuserInfo (id) {
          const _this = this
          this.$api.getInfor(id).then((res) => {
            _this.userfrom = res.user
          })
        },
        downkyt () {
          if (this.isSystm().ios) {
            window.location.href = 'itms-apps://itunes.apple.com/app/id1441515723'
          }
          if (this.isSystm().android) {
            window.location.href = 'https://sj.qq.com/myapp/detail.htm?apkName=com.xsr.kyt'
          }
        },
        startOpen () {
            const _this = this;
           var phone = /^[1][3,4,5,7,8][0-9]{9}$/
           if(!phone.test(this.params.phone)) {
             this.$toast('请输入正确的手机号')
           } else if (this.params.password.length < 6) {
              this.$toast('请输入正确密码')
           } else {
             this.$api.shareRegister(this.params).then((res) => {
               setTimeout((res) => {
                _this.downkyt()
               }, 1000)
             })
           }
        },
        openjianpan () {
          this.$refs.input.focus()
        },
        openjianpan2 () {
          this.$refs.input2.focus()
        }
      },
      mounted () {
          var Idarr = [];
          var arr = this.$geturl.getL();
          for (var i = 0; i < arr.length; i++) {
            Idarr.push(arr[i].split('=')[1]);
          }
        this.params.userId = Idarr[0];
        this.getuserInfo(this.params.userId)
        this.$refs.input.focus()
      }
    }
</script>

<style scoped>
  .mod{
    height: 35px;
    width: 100%;
    line-height: 35px;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(57,57,57,0.4);
    color: #FFFFFF;
  }
  .mod img{
    position: absolute;
    top:50%;
    left: 20px;
    margin-top: -12px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .mod span{
    font-size: 14px;
    letter-spacing: 1px;
    float: left;
    margin-left: 50px;
    vertical-align: middle;
  }
  .pagesbg{
    height: 100%;
    width: 100%;
    position: fixed;
  }
  .mod1{
    padding-left: 38px;
    padding-right: 38px;
  }
  .mod1 div{
    height: 1rem;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .mod1 div input{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin: 0 auto;
    height: 1rem;
    width: 100%;
    background: white;
    text-align: center;
    letter-spacing: 1px;
    color: black;
    font-size: 16px;
    border-radius: 30px;
    border: 1px solid #8F8F8F;
  }
  button{
    width: 3.5rem;
    height: 35px;
    background: #F08400;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 16px;
    letter-spacing: 1px;
  }
</style>
