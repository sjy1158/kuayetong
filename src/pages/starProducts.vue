<template>
    <div class="starProducts">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-row>
          <van-col span="8">
            <div class="shopjieshao" @click.prevent="openBuy($event)">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="shopjieshao">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="shopjieshao">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="shopjieshao">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="shopjieshao">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="shopjieshao">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="shopjieshao">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="shopjieshao">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
          <van-col span="8">
            <div class="shopjieshao">
              <img src="../assets/merchant_product_pictures1@2x.png" alt="">
              <div>
                <p>新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p>¥<span style="font-size:0.35rem;">288</span><span style="margin-left: 0.5rem;font-size: 0.35rem;color: #FF0000">可抵¥150</span></p>
              </div>
            </div>
          </van-col>
        </van-row>
      </van-pull-refresh>


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
          count: 0,
          isLoading: false,
          showBase:false,
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
            price: '1.00', // 默认价格（单位元）
            stock_num: 227, // 商品总库存
            collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
            none_sku: true, // 是否无规格商品
            hide_stock: true // 是否隐藏剩余库存
          },
          goods: {
            // 商品标题
            title: '测试商品',
            // 默认商品 sku 缩略图
            picture: 'http://f2.topitme.com/2/6a/bc/113109954583dbc6a2o.jpg'
          },
          customStepperConfig: {
            // 自定义限购文案
            quotaText: '每次限购xxx件',
            // 自定义步进器超过限制时的回调
            handleOverLimit: (data) => {
              const { action, limitType, quota, quotaUsed } = data;

              if (action === 'minus') {
                Toast('至少选择一件商品');
              } else if (action === 'plus') {
                // const { LIMIT_TYPE } = Sku.skuConstants;
                if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
                  let msg = `单次限购${quota}件`;
                  if (quotaUsed > 0) msg += `，您已购买${quotaUsed}`;
                  Toast(msg);
                } else {
                  Toast('库存不够了~~');
                }
              }
            }
          },
        }
      },
      methods: {
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
          }, 500);
        },
        openBuy(){
          this.showBase = true;
        },
        onPointClicked(){
          this.$router.push('/firmOrder');
        }
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
    height: 6.8rem;
    /*background: yellow;*/
    margin: 0 auto;
    box-shadow: 0 0 10px #b8bbbf;
    text-align: left;
  }
    .van-row .van-col .shopjieshao p:first-child{
      margin: 0px!important;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      font-size: 0.34rem;
    }
    .van-row .van-col .shopjieshao p:nth-child(2){
      margin: 0px!important;
      padding-left: 0.2rem;
      padding-top: 0.2rem;
     /*margin-bottom: 0.2rem;*/
    }
    .van-row .van-col .shopjieshao img{
      width: 100%;
    }


</style>
