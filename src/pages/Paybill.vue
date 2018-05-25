<template>
  <div class="paybill">
    <mt-header fixed title="星巴克Starbucks">
      <mt-button v-link="'/'" icon="back" slot="left"></mt-button>
    </mt-header>

    <div>
      <div class="form">
        <form action="">
          <div class="input">
            <label>订单金额(元)</label>
            <input type="text" placeholder="请询问服务员后输入">
          </div>
          <div class="input" style="border-bottom: none!important;">
            <label>抵扣类别(元)</label>
            <input type="text" v-model="value" placeholder="请选择" disabled="true" style="background: white">
            <ul class="chosesize">
              <li><span :class="id == 0 ? 'activechose':''" @click="chosesize(0,'11111')">满100抵10元</span></li>
              <li><span :class="id == 1 ? 'activechose':''" @click="chosesize(1,'22222')">满100抵10元</span></li>
              <li><span :class="id == 2 ? 'activechose':''" @click="chosesize(2,'33333')">满100抵10元</span></li>
              <li><span :class="id == 3 ? 'activechose':''" @click="chosesize(3,'4444444')">满100抵10元</span></li>
            </ul>
          </div>
          <button type="submit" @click="openMessage">立即抵扣买单</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
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
          MessageBox({
            title: '提示',
            message: '此操作不可撤销，请确认使用跨业通余额'+this.prize+'元抵扣买单？',
            showCancelButton: true
          });
        }
      }
    }
</script>

<style>
  .mint-msgbox-content{
    font-size: 14px!important;
    font-family: PingFangSC-Regular!important;
  }
  .mint-msgbox-message{
    color: #393939!important;
  }
  .mint-msgbox-btns .mint-msgbox-confirm{
    color: #F08400!important;
  }
  .mint-msgbox-btns .mint-msgbox-cancel{
    color: #F08400!important;
  }
  body,html{
    background: #f1f0f0;
  }
  .activechose{
    background:  #FF0000;
    color: white!important;
  }
  .form{
    height: 194px;
    width: 80%;
    background: white;
    margin: 0 auto;
    margin-top: 70px!important;
    border-radius: 10px;
    padding: 5%;
    font-size: 16px;
    /*font-weight: bold;*/
    font-family: PingFangSC-Regular;
  }
  .form .input{
    padding-top: 15px;
    padding-bottom: 35px;
    border-bottom: 1px solid #F3F3F3;
  }
  .form .input label{
    float: left;
  }
  .form .input input{
    float: right;
    border: none;
    color: gray;
    outline: none;
    text-align: right;
    height: 25px;
  }

  .chosesize{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap:wrap;
    margin: 50px auto;
    /*background: green;*/
    padding: 0px!important;
    font-size: 12px;
  }
  .chosesize li{
    width: 50%;
    flex: 1;
    min-width: 50%;
    max-width: 50%;
    margin-bottom: 25px;
  }
  .chosesize li span{
    padding: 5px 10px;
    border: 1px solid #FF0000;
    color: #FF0000;
    border-radius: 14px;
  }
  .paybill .mint-header{
    background: white!important;
    color: #393939;
    font-size: 18px!important;
  }
  .paybill .mint-header i{
    font-size: 18px!important;
  }
  button[type='submit']{
    width: 100%;
    border: none;
    background: #F08400;
    color: white;
    height: 40px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
  }
</style>
