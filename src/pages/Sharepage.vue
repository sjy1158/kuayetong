<template>
<div class="pagesbg" :style="note">
  <div class="mod1" style="">
    <div style="height: auto;position: fixed;bottom: 0px;" :style="inputWidth">
        <div>
          <input type="text" placeholder="请输入手机号码" v-model="params.phone">
        </div>
        <div>
          <input type="text" placeholder="请输入密码" v-model="params.password">
        </div>
        <div style="margin-bottom: 0;">
          <button type="button" style="float: left" @click="downkyt()">直接下载</button>
          <button type="button" style="float: right" @click="startOpen()">立即注册</button>
        </div>
    </div>
  </div>
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
              backgroundSize: "100% 100%",
            },
            inputWidth: {
              width: (window.screen.width - 76) + 'px'
            },
            params:{
              phone:'',
              password:'',
              userId:''
            }
          }
        },
      methods:{
        downkyt () {
          window.location.href = 'http://app.kuayet.com/down/'
        },
        startOpen () {
            const _this=this;
           var phone = /^[1][3,4,5,7,8][0-9]{9}$/
           if(!phone.test(this.params.phone)) {
             this.$toast('请输入正确的手机号')
           } else if (this.params.password.length < 6) {
              this.$toast('请输入正确密码')
           } else {
             this.$api.shareRegister(this.params).then((res) => {
               setTimeout((res) => {
                window.location.href = 'http://app.kuayet.com/down/'
               }, 1000)
             })
           }
        }
      },
      mounted () {
          var Idarr = [];
          var arr = this.$geturl.getL();
          for (var i = 0; i < arr.length; i++) {
            Idarr.push(arr[i].split('=')[1]);
          }
        this.params.userId = Idarr[0];
      }
    }
</script>

<style scoped>
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
    height: 100%;
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
