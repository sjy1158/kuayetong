<template>
    <div class="starProducts">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" v-show="issum==true">
        <van-row>
          <van-col span="8" v-for="item in shoparr">
            <div class="shopjieshao" @click.prevent="openBuy($event,item.imageUrl,item.price,item.productName,item.subPrice)">
              <img :src="item.imageUrl" alt="">
              <div>
                <p>{{item.productName}}</p>
                <p>¥<span style="font-size:0.35rem;">{{item.price}}</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥{{item.subPrice}}</span></p>
              </div>
            </div>
          </van-col>
        </van-row>
      </van-pull-refresh>

      <div v-show="issum==false" style="margin-top: 2rem;margin-bottom: 1rem;">
        <div><img src="../assets/load_failed@2x.png" alt="" style="height: 1rem;width: 1rem;"></div>
        <span style="margin-top: 1rem;">暂无数据</span>
      </div>

      <van-sku
        v-model="showBase"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :hide-stock="sku.hide_stock"
        :quota="quota"
        :quota-used="quotaUsed"
        :reset-stepper-on-hide="resetStepperOnHide"
        :close-on-click-overlay="closeOnClickOverlay"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked">

        <template slot="sku-header-price" slot-scope="props">
          <div class="van-sku__goods-price">
            <p style="margin: 0px!important;padding-top: 0.1rem;">本商品已用余额抵扣<span>{{sub}}</span>元</p>
            <span class="van-sku__price-symbol" style="padding-top: 0.1rem;">￥</span><span class="van-sku__price-num">{{sku.price}}</span>
          </div>
        </template>
        <template slot="sku-stepper" slot-scope="props">
          <div style="height: 1rem;line-height: 1rem;">
            <span style="float: left;padding-left: 0.5rem;">购买数量</span>
            <van-stepper v-model="value" style="float: right;padding-right:0.5rem;" @plus="plus(value)" @minus="minus(value)"/>
          </div>
        </template>
        <template slot="sku-actions" slot-scope="props">
          <div class="van-sku-actions">
            <van-button bottom-action @click="onPointClicked">确定</van-button>
            <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
          </div>
        </template>
      </van-sku>
    </div>
</template>

<script>
    export default {
        name: "starProducts",
      data(){
        return{
          //明星产品列表
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
          sku: {
            tree: [
              {
              }
            ],
            list: [
              {
                id: 2259,
                price: 100,
                s1: '1215',
                s2: '1193',
                s3: '0',
                stock_num: 110
              }
            ],
            price: 0, // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
            none_sku: true, // 是否无规格商品
            hide_stock: true // 是否隐藏剩余库存
          },
          goods: {
            // 商品标题
            title: '本商品已用余额抵扣150元',
            // 默认商品 sku 缩略图
            picture: 'http://f2.topitme.com/2/6a/bc/113109954583dbc6a2o.jpg'
          },

        }
      },
      methods: {
        plus(val){
          this.sku.price = (this.price2*val).toFixed(2);
          this.sub = this.sub2*val;
        },
        minus(val){
          this.sku.price = (this.price2*val).toFixed(2);
          this.sub = this.sub2*val;
        },
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
        openBuy(el,imageurl,price,productName,sub){
          this.showBase = true;
          this.value=1;
          this.price2 = price-sub;
          this.sub2 = sub;
          this.goods.picture = imageurl;
          this.sku.price = (price-sub).toFixed(2);
          this.sub = sub;
          this.goods.title = productName;
        },
        onPointClicked(){
          var _this = this;
          this.$router.push({
            path:'/firmOrder',
           query:{
                price:_this.price2,
               val:_this.value
            }
          });
        },
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
          this.onRefresh();
        var shopid = localStorage.getItem('shopid');
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
      font-size: 0.34rem;
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
    }


</style>
