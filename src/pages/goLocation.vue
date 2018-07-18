<template>
<div>
  <van-nav-bar
    fixed
    title="地图导航"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</div>
</template>

<script>
    export default {
        name: "goLocation",
      data(){
          return{

          }
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1);
        }
      }
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
