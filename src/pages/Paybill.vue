<template>
  <div class="paybill">
    <van-nav-bar
      fixed
      title="星巴克Starbucks"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div class="form" style="margin-top: 2rem;">
      <form action="" style="">
          <div class="input">
            <label>订单金额(元)</label>
            <input type="text" placeholder="请询问服务员后输入">
          </div>
          <div class="input" style="border-bottom: none;">
            <label>抵扣类别(元)</label>
            <input type="text" placeholder="请选择" v-model="value">
          </div>
          <ul class="chosesize" style="background: white">
            <li><span :class="id == 0 ? 'activechose':''" @click="chosesize(0,'满100抵10元')">满100抵10元</span></li>
            <li><span :class="id == 1 ? 'activechose':''" @click="chosesize(1,'满200抵10元')">满200抵10元</span></li>
            <li><span :class="id == 2 ? 'activechose':''" @click="chosesize(2,'满300抵10元')">满300抵10元</span></li>
            <li><span :class="id == 3 ? 'activechose':''" @click="chosesize(3,'满400抵10元')">满400抵10元</span></li>
          </ul>
        <button type="button" @click="openMessage">立即抵扣买单</button>
      </form>
    </div>

    <!--<div>-->
      <!--<div class="form">-->
        <!--<form action="">-->
          <!--<div class="input">-->
            <!--<label>订单金额(元)</label>-->
            <!--<input type="text" placeholder="请询问服务员后输入">-->
          <!--</div>-->
          <!--<div class="input" style="border-bottom: none!important;">-->
            <!--<label>抵扣类别(元)</label>-->
            <!--<input type="text" v-model="value" placeholder="请选择" disabled="true" style="background: white">-->
            <!--<ul class="chosesize">-->
              <!--<li><span :class="id == 0 ? 'activechose':''" @click="chosesize(0,'11111')">满100抵10元</span></li>-->
              <!--<li><span :class="id == 1 ? 'activechose':''" @click="chosesize(1,'22222')">满100抵10元</span></li>-->
              <!--<li><span :class="id == 2 ? 'activechose':''" @click="chosesize(2,'33333')">满100抵10元</span></li>-->
              <!--<li><span :class="id == 3 ? 'activechose':''" @click="chosesize(3,'4444444')">满100抵10元</span></li>-->
            <!--</ul>-->
          <!--</div>-->
          <!--<button type="button" @click="openMessage">立即抵扣买单</button>-->
        <!--</form>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
    import { Dialog } from 'vant'
    export default {
        name: "Paybill",
      data(){
          return{
            id:-1,
            value:'',
            prize:3000
          }
      },
      methods:{
          chosesize(id,val){
            this.id = id;
            this.value = val;
          },
        openMessage(){
            var _this = this;
          Dialog.confirm({
            title: '提示',
            message: '此操作不可撤销，请确认使用跨业通余'+'3000'+'元抵扣买单'
          }).then(() => {
            this.$router.push('/paySuccess');
          }).catch(() => {
           return
          });
        }
      }
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 1.1rem;
    width: 100%;
    line-height: 1.1rem;
  }
  .activechose{
    background:  #FF0000;
    color: white!important;
  }
  .form{
    width: 94%;
    height: auto;
    /*background: white;*/
    padding-left: 3%;
    padding-right: 3%;
    border-radius: 20px;
  }
  .form form{
    margin: 0px!important;
  }
  .input{
    width: 94%;
    height: 1.68rem;
    line-height: 1.68rem;
    background: white;
    position: relative;
    padding-left: 3%;
    padding-right: 3%;
    border-bottom: 1px solid #F2F2F2;
  }
  .input label{
    float: left;
    font-size: 0.4rem;
  }
  .input input{
    float: right;
    height: 1rem;
    position: absolute;
    right: 0px;
    top: 50%;
    margin-top: -0.55rem;
    border: none;
    outline: none;
    font-size: 0.4rem;
    text-align: right;
    padding-right: 0.3rem;
  }
  ul.chosesize{
    width:94%;
    height: auto;
    display: flex;
    flex-wrap:wrap;
    /*margin: 50px auto;*/
    /*background: green;*/
    padding-left: 3%!important;
    padding-right: 3%!important;
    padding-bottom: 10%!important;
    font-size: 0.37rem;
    /*margin-top: 2rem;*/
  }
  ul.chosesize li{
    width: 50%;
    flex: 1;
    min-width: 50%;
    max-width: 50%;
    margin-top: 0.8rem;
    /*margin-bottom: 25px;*/
    color:#FF0000;
  }
  ul.chosesize li span{
    padding: 0.2rem;
    border: 1px solid #FF0000;
  }

  button[type=button]{
    width: 100%;
    height: 1.25rem;
    background: #F08400;
    border: none;
    color: white;
    font-size: 0.5rem;
    margin-top: 1.25rem;
    font-weight: bold;
  }
</style>
