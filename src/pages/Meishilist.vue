<template>
    <div class="meishilist" style="padding-top: 0.5rem;padding-bottom: 0.5rem;">
      <van-row v-show="issum==true">
        <van-col span="8" v-for="(item,index) in shoparr">
          <img :src="item.imageUrl" alt="" @click="openBusiness(item.id,index,item.superiorShopTypeId)">
          <p>{{item.name}}</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/merchants_fast_food_nobg@2x.png" alt="">
          <p>鸡腿</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/merchants_all_no_bg@2x.png" alt="">
          <p>鸡腿</p>
        </van-col>
      </van-row>

      <div v-show="issum==false" style="margin-top: 1rem;margin-bottom: 1rem;">
        <div><img src="../assets/load_failed@2x.png" alt="" style="height: 1rem;width: 1rem;"></div>
        <span style="margin-top: 1rem;">暂无数据</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Meishilist",
      data(){
          return{
            name:'',
            issum:true,
            id:'',
              shoparr:'',
          }
      },
      methods:{
        getshopimg(shopid){
          var _this = this;
          if(this.issum){
            this.$api.getShopimg(shopid).then(function (res) {
                if(res.sum==0){
                  _this.issum = false;
                }
                _this.shoparr = res.list;
                _this.name = res.name;
            })
          }else {
            return
          }
        },
        openBusiness(id1,index,id){
         this.$router.push({
           path:'/Businesshome',
           query:{
             index:index,
             id1:id1,
             id:id,
             name:this.name,
             userId:this.$route.query.userId
           }
         });
        }
      },
      watch: {
        $route(){
          var _this = this;
         this.id = this.$route.query.id;
         this.issum = true;
          _this.getshopimg(this.id);
        },
      },
      created(){
      },
      mounted(){

      }
    }
</script>

<style scoped>
  .van-row .van-col p{
    font-size: 11px!important;
    margin: 0px!important;
    padding-top: 0.25rem;
  }
  .van-row .van-col img{
   width: 50px;
    height: 33px;
  }
  .van-row .van-col{
    margin-bottom: 0.9rem;
  }
</style>
