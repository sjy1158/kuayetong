<template>
  <div class="starProducts">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" v-show="issum==true">
      <van-row>
        <van-col span="8" v-for="item in shoparr">
          <div class="shopjieshao">
            <img :src="item.imageUrl" alt="">
            <div>
              <p style="overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;">{{item.productName}}</p>
              <p>¥<span style="font-size:12px;">{{item.price}}</span><span style="margin-left: 0.5rem;font-size: 14px;color: #FF0000">可抵¥{{item.subPrice}}</span></p>
            </div>
          </div>
        </van-col>
      </van-row>
    </van-pull-refresh>

    <div v-show="issum==false" style="margin-top: 2rem;margin-bottom: 1rem;">
      <div><img src="../assets/load_failed@2x.png" alt="" style="height: 1rem;width: 1rem;"></div>
      <span style="margin-top: 1rem;">暂无数据</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sharestarProducts",
    data(){
      return{
        //明星产品列表
        shoptypeid:'',
        issum:true,
        shoparr:'',
        length:0,
        count: 0,
        isLoading: false,
        showBase:false,
        sub:'',
        sub2:'',
        price2:'',
        value:'',
        params:{
          productId:'',
          userId:this.$route.query.userId,
          num:''
        },
      }
    },
    methods: {
      onRefresh() {
        var _this = this;
        setTimeout(() => {
          this.isLoading = true;
          if(this.shoparr.length>=this.length){
            return setTimeout(()=>{
              _this.$toast('刷新成功');
              _this.isLoading = false;
            },500)
          }
        }, 500);
      },
      // openBuy(el,imageurl,price,productName,sub,shoptypeid){
      //   this.params.productId=shoptypeid;
      //   this.shoptypeid = shoptypeid;
      //   this.showBase = true;
      //   this.value=1;
      //   this.params.num=this.value;
      //   this.price2 = price-sub;
      //   this.sub2 = sub;
      //   this.goods.picture = imageurl;
      //   this.sku.price = (price-sub).toFixed(2);
      //   this.sub = sub;
      //   this.goods.title = productName;
      // },
      // onPointClicked(){
      //   var _this = this;
      //   this.$api.getNumpro(_this.params).then((res)=>{
      //     if(res!=undefined){
      //       this.$router.push({
      //         path:'/firmOrder',
      //         query:{
      //           price:_this.price2,
      //           val:_this.value,
      //           shoptypeid:_this.shoptypeid,
      //           userId:this.$route.query.userId,
      //           mark:this.$route.query.mark
      //         }
      //       });
      //     }
      //   })
      // },
      getProduce(shopid){
        var _this = this;
        this.$api.getStroshops(shopid).then(function (res) {
          if(res.sum==0){
            _this.issum=false;
          }
          _this.shoparr = res.list;
          _this.length = res.list.length;
        })
      },
    },
    created(){
      // this.onRefresh();
      var shopid=this.$route.query.shopid;
      this.getProduce(shopid);
    },
    mounted(){
    }
  }
</script>

<style scoped>
  .van-row{
    background: white;
    padding-bottom: 1.7rem;
  }
  .van-row .van-col{
    width: 50%;
  }
  .van-row .van-col{
    margin-top: 0.3rem!important;
  }
  .van-row .van-col .shopjieshao{
    width: 4.7rem;
    height: auto;
    /*background: yellow;*/
    margin: 0 auto;
    box-shadow: 0 0 10px #b8bbbf;
    text-align: left;
  }
  .van-row .van-col .shopjieshao p:first-child{
    margin: 0px!important;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    padding-top: 0.2rem;
    height: 1rem;
    font-size: 12px;
  }
  .van-row .van-col .shopjieshao p:nth-child(2){
    margin: 0px!important;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    /*margin-bottom: 0.2rem;*/
  }
  .van-row .van-col .shopjieshao img{
    width: 100%;
    height: 182px;
  }


</style>
