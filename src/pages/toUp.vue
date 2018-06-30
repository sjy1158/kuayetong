<template>
  <div>
    <div style="padding: 30px;height: 3rem;">
      <div style="width:100%;height: 45px;border-radius: 30px;">
        <input type="text" v-model="params.phone" style="width:92%;height: 100%;border: none;border-radius: 30px;padding-left: 20px;" placeholder="请输入手机号码">
      </div>
      <button type="button" @click="toupPay">充值</button>
    </div>
    <div style="text-align: left;padding-left: 20px;padding-right: 20px;position: absolute;bottom: 60px;color: #717171;font-size: 12px;">
      <p>充值卡说明：</p>
      <p>该充值卡仅供跨业通平台充值使用，不可作为手机SIM卡话费与提现使用</p>
    </div>
  </div>
</template>

<script>
  import { Dialog } from 'vant';
    export default {
        name: "toUp",
      data(){
          return{
            params:{
              cardId:this.$route.query.cardId,
              phone:''
            }
          }
      },
      methods:{
        toupPay(){
          const _this = this;
          if(this.params.phone!=0){
            Dialog.confirm({
              title: '标题',
              message: '确认充值吗？'
            }).then(() => {
                _this.$api.manageRecharge(_this.params).then((res)=>{
                  // alert(res)
                })
            }).catch(() => {
              return
            });
          }else{
            Dialog.alert({
              message: '请输入正确的手机号'
            }).then(() => {
              return
            });

          }
        }
      },
      mounted(){
      }
    }
</script>

<style scoped>
  input{
    color: #8F8F8F;
    font-size: 16px;
  }
  button[type="button"]{
    width: 228px;
    height: 37px;
    background: #F08400;
    border: none;
    border-radius: 20px;
    font-size: 18px;
    color: white;
    margin-top: 25px;
  }
</style>
