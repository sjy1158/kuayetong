<template>
<div>
  <van-nav-bar
    fixed
    title="地图导航"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <div style="margin-top: 61px;width: 100%;height: 100%;">
    <iframe :src="src" width="100%" style="border: none;position: absolute;height: 100%;position: absolute;left: 0px;"></iframe>
  </div>
</div>
</template>

<script>
    export default {
        name: "goLocation",
      data(){
          return{
            src:''
          }
      },
      created(){
          this.src="https://m.amap.com/navigation/index/daddr="+this.$route.query.latitude+"%2C"+this.$route.query.longitude+"%2C"+this.$route.query.location;
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1)
        }
      },
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 43px;
    width: 100%;
    line-height: 43px;
    padding-top: 18px;
  }
</style>
