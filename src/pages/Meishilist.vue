<template>
    <div class="meishilist" style="padding-top: 0.5rem;padding-bottom: 0.5rem;">
      <van-row>
        <van-col span="8" v-for="item in shoparr">
          <img :src="item.imageUrl" alt="">
          <p>{{item.name}}</p>
        </van-col>
      </van-row>
    </div>
</template>

<script>
    export default {
        name: "Meishilist",
      data(){
          return{
            id:'',
              shoparr:'',
          }
      },
      methods:{
        getshopimg(shopid){
          var _this = this;
          this.$api.getShopimg(shopid).then(function (res) {
              _this.shoparr = res;
          })
        }
      },
      watch: {
        $route(){
          var _this = this;
         this.id = this.$route.query.id;
          _this.getshopimg(this.id);
        },
      },
      created(){
      },
      mounted(){
          this.getshopimg(this.$route.query.id);
      }
    }
</script>

<style scoped>
  .van-row .van-col p{
    margin: 0px!important;
    padding-top: 0.25rem;
  }
  .van-row .van-col{
    margin-bottom: 0.9rem;
  }
</style>
