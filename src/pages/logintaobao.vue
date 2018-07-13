<template>
  <div id="all" style="width: 100%;height: 100%;">
    <button type="button" @click="open" style="margin-top: 200px;">
      去领券
    </button>
    <div>
      <div class="button" style="position: absolute;z-index: 999999999999999;width: 100%;height: 500px;">
        <iframe src="https://login.m.taobao.com/login.htm?" id="preframe" scrolling="0" frameborder="0" width="100%" height="100%" style="border:none">

        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "logintaobao",
      data(){
          return{

          }
      },
      methods:{
          open(){
            this.$router.push('/comPurchase');
          }
      }
    }
</script>

<style scoped>

</style>
