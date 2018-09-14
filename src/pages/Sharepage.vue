<template>
<div>
  <div class="content">
    <div class="invite">
      <img v-if="headImage!=null" :src="headImage" alt="" style="width: 24px;height: 24px;border-radius: 50%;">
      <img v-else src="../assets/head_portraityuan.png" alt="" style="width: 24px;height: 24px;border-radius: 50%;">
      <span style="padding-left: 50px">{{name}}邀你开启跨业之旅</span>
    </div>
    <img src="../assets/invite.png" alt="" style="width: 100%;margin-bottom:170px;">
    <div class="shareInput">
      <ul>
        <li><input type="text" v-model="params.phone" placeholder="请输入手机号码"></li>
        <li><input type="password" v-model="params.password" maxlength="16" minlength="6" placeholder="请输入密码"></li>
        <li><button type="button" @click="startOpen">开启跨业之旅</button></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Sharepage",
        data(){
          return{
            headImage:'',
            name:'',
            params:{
              phone:'',
              password:'',
              userId:''
            }
          }
        },
      methods:{
          getmation(userid){
            const _this=this;
            this.$api.getInfor(userid).then((res)=>{
              _this.headImage=res.user.headImage;
              _this.name=res.user.nickName;
            })
          },
        startOpen(){
            const _this=this;
           var phone=/^[1][3,4,5,7,8][0-9]{9}$/;
           if(!phone.test(this.params.phone)){
             this.$toast('请输入正确的手机号')
           }else if(this.params.password.length<6){
              this.$toast('请输入正确密码')
           }else{
             this.$api.shareRegister(this.params).then((res)=>{
               // this.$toast('工程师正在努力研发中...')
               setTimeout((res)=>{
                window.location.href="http://app.kuayet.com/down/"
               },1000)
             })
           }
        }
      },
      mounted(){
          var Idarr=[];
          var arr=this.$geturl.getL();
          for(var i=0;i<arr.length;i++){
            Idarr.push(arr[i].split('=')[1]);
          }
        this.params.userId=Idarr[0];
        this.getmation(this.params.userId);
      }
    }
</script>

<style scoped>
  div.content{
    width: 100%;
    height: auto;
  }
  div.invite{
    width: 100%;
    height: 35px;
    background: rgba(255,255,255,.3);
    position: fixed;
    top: 0px;
    line-height: 35px;
    font-size: 14px;
    color: #FFFFFF;
    text-align: left;
    font-family: PingFangSC;
  }
  div.invite img{
    position: absolute;
    top: 50%;
    margin-top: -12px;
    left: 20px;
  }
  div.shareInput{
    width: 100%;
    height: 170px;
    background: rgba(255,255,255,.9);
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
  div.shareInput ul li{
    padding-left: 38px;
    padding-right: 38px;
    margin-top: 15px;
  }
  div.shareInput ul li input{
    width: 100%;
    height: 35px;
    border-radius: 20px;
    border:1px solid #909090;
    text-align: center;
    font-size: 16px;
  }
  ::-webkit-input-placeholder{
    text-align: center;
    color: #8F8F8F;
    font-size: 14px;
  }
  button[type=button]{
    width: 100%;
    height: 35px;
    color: white;
    background: #f08400;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    margin-left: 2px;
  }
</style>
