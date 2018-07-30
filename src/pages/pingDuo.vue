<template>
  <div class="pingduo">
    <div style="height: auto;width: 94%;background: #FFFBFF;padding: 3%;">
      <div style="background: #FFFBFF;text-align: left;color: #4A474A;letter-spacing: 2px;line-height: 20px;">
          {{introce}}
      </div>
    </div>
    <div style="position: relative;width: 100%;height: auto;">
      <ul>
        <li v-for="item in imgUrl"><img :src="item" :v-lazy="item" alt="" style="width: 100%;"></li>
        <!--<li><img src="../assets/address.png" alt="" style="width: 100%;"></li>-->
        <!--<li><img src="../assets/address.png" alt="" style="width: 100%;"></li>-->
      </ul>
      <!--<van-swipe :autoplay="3000" :show-indicators="false" @change="change">-->
        <!--<van-swipe-item v-for="item in imgUrl">-->
          <!--<img :src="item" alt="" style="width: 100%;height: 375px;">-->
        <!--</van-swipe-item>-->
      <!--</van-swipe>-->
      <!--<div class="slidesum" style=""><span style="padding-right: 2px;">{{index+1}}</span>/<span style="padding-left: 2px;">{{imgUrl.length}}</span></div>-->
    </div>
    <div style="height: 30px;line-height: 30px;color: #A19FA0;background: #FFFBFF" @click="show">
      <span>点击查看商品价格说明</span>
      <img src="../assets/commerce_drop_down copy@3x.png" alt="" style="width: 12px;height: 6px;" :class="isshow? 'rote' : '' ">
    </div>
    <div v-show="isshow" style="height: auto;width: 94%;background: white;padding: 3%;text-align: left;color: #A19FA0;letter-spacing: 2px;line-height: 20px;">
        {{introcesize}}
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
              // pid:'389046'
              pid:this.$route.query.id
            },
            introce:'',
            introcesize:'',
            isshow:false
          }
        },
      methods:{
        getduoduo(params){
          var _this=this;
          this.$api.getPingduo(params).then((res)=>{
            // alert(JSON.stringify(res));
            _this.introcesize=res[0].goods_name;
            _this.introce=res[0].goods_desc;
            _this.imgUrl=res[0].goods_gallery_urls;
          })
        },
        change(index){
          this.index=index;
        },
        show(){
          this.isshow=!this.isshow;
        }
      },
      watch: {
        // 如果路由有变化，会再次执行该方
      },
      mounted(){
          this.getduoduo(this.params);
      }
    }
</script>

<style scoped>
  .slidesum{
    position: absolute;bottom: 10px;right: 10px;
    color: #8F8F8F;
    font-size: 14px;
  }

  .rote{
    transform: rotate(180deg);
    -ms-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -webkit-transform:rotate(180deg);
    -o-transform:rotate(180deg);
  }
</style>
