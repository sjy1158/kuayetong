<template>
  <div class="pingduo">
    <van-nav-bar
      fixed
      title="拼多多"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />


    <div style="position: relative;width: 100%;height: 375px;margin-top: 61px;">
      <van-swipe :autoplay="3000" :show-indicators="false" @change="change">
        <van-swipe-item v-for="item in imgUrl">
          <img :src="item" alt="" style="width: 100%;height: 375px;">
        </van-swipe-item>
      </van-swipe>
      <div class="slidesum" style=""><span style="padding-right: 2px;">{{index+1}}</span>/<span style="padding-left: 2px;">{{imgUrl.length}}</span></div>
      <!--<img src="../assets/commerce_return_bg@3x.png" alt="" style="position: fixed;width: 32px;height: 32px;top: 23px;left: 10px;z-index: 9999999999999999999999;" @click="getLeft">-->
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            imgUrl:[],
            index:0,
            params:{
              pid:this.$route.query.id
            }
          }
        },
      methods:{
        onClickLeft(){
          window.history.go(-1);
        },
        getduoduo(params){
          var _this=this;
          this.$api.getPingduo(params).then((res)=>{
            _this.imgUrl=res[0].goods_gallery_urls;
          })
        },
        change(index){
          this.index=index;
        }
      },
      mounted(){
          this.getduoduo(this.params);
      }
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 43px;
    width: 100%;
    line-height: 43px;
    padding-top: 18px;
    z-index: 99999999!important
  }
  .slidesum{
    position: absolute;bottom: 10px;right: 10px;
    color: #8F8F8F;
    font-size: 14px;
  }
</style>
