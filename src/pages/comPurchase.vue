<template>
<div>
  <img src="../assets/bg2.jpg" alt="" style="width: 100%;height: 375px;">
  <button type="button" style="position: fixed;bottom: 0px;left: 0px;" @click="openpay">
    立即抵扣购买
  </button>
  <div style="padding: 10px;height: 80px;background: white">
      <div style="width: 100%;height: 100%;">
        <div style="display: flex">
          <div style="flex: 1;text-align: left">天猫价<span>¥1257.90元</span></div>
          <div style="flex: 1;text-align: right">销量：2000件</div>
        </div>
        <div style="display: flex;text-align: left;padding-top: 15px;">
          新疆精河头茬枸杞，精选“中国枸杞之乡”新疆精河头茬枸 杞，精选“中国枸杞之乡”
        </div>
      </div>
  </div>

  <div style="height: 50px;overflow: hidden;margin-top: 10px;">
    <iframe :src="src" id="preframe" scrolling="no" style="height: 300px;border: 0px none;width: 100%;margin-top: -180px;margin-left: -24px;">
    </iframe>
  </div>
  <!--<div style="height: 75px;width: 150px;background: #f08400;margin: 0 auto;color: white;margin-top: 10px!important;">-->
    <!--<div id="all" style="width: 100%;height: 100%;">-->
      <!--<div>-->
        <!--<div class="button" style="position: absolute;z-index: 999999999999999;width: 100%;height: 50px;display: none">-->
          <!--&lt;!&ndash;  <iframe :src="src" id="preframe" scrolling="0" frameborder="0" width="100%" height="50">&ndash;&gt;-->
        <!---->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
</div>
</template>

<script>
  import { Dialog } from 'vant'
    export default {
        name: "comPurchase",
      data(){
          return{
            params:{
              pId:'66',
              userId:'5d'
            },
            src:''
          }
      },
      methods:{
        openpay(){
          var _this=this;
          Dialog.confirm({
            title: '提示',
            message: '此操作不可撤销，请确认使用跨业通余额'+0.00+'元抵扣买单'
          }).then(() => {
            _this.$api.getConpou(_this.params).then((res)=>{
              _this.src=res;
            })
          }).catch(() => {
            return
          })
        }
      }
    }
</script>

<style scoped>
  button{
    height: 51px;
    border: none;
    background: #F67419;
    width: 100%;
    font-size: 16px;
    color: white;
  }
  .tab div{
    padding-top: 6px;
  }
</style>
