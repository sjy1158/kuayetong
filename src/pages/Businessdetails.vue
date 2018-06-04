<template>
  <div class="Businessdetails">
      <div>
        <ul style="margin-bottom: 1.7rem;">
          <li>
            <div class="title">
              <img src="../assets/business_environment@2x.png" alt="">
              <span>店家环境</span>
            </div>
            <van-tabs v-model="active" line-width="0">
              <van-tab>
                <div slot="title">
                  <img src="../assets/business_environment_pictures@2x.png" alt="">
                </div>
              </van-tab>
              <van-tab>
                <div slot="title">
                  <img src="../assets/business_environment_pictures@2x.png" alt="">
                </div>
              </van-tab>
              <van-tab>
                <div slot="title">
                  <img src="../assets/business_environment_pictures@2x.png" alt="">
                </div>
              </van-tab>
              <van-tab>
                <div slot="title">
                  <img src="../assets/business_environment_pictures@2x.png" alt="">
                </div>
              </van-tab>
              <van-tab>
                <div slot="title">
                  <img src="../assets/business_environment_pictures@2x.png" alt="">
                </div>
              </van-tab>
              <van-tab>
                <div slot="title">
                  <img src="../assets/business_environment_pictures@2x.png" alt="">
                </div>
              </van-tab>
              <van-tab>
                <div slot="title">
                  <img src="../assets/business_environment_pictures@2x.png" alt="">
                </div>
              </van-tab>
            </van-tabs>
          </li>
          <li>
            <div class="title">
              <img src="../assets/business_service_hours@2x.png" alt="">
              <span>服务时间</span>
            </div>
            <div style="padding-left: 0.4rem;padding-bottom:0.4rem;padding-right:0.4rem;text-align: left">
              9:00-10:00
            </div>
          </li>
          <li>
            <div class="title">
              <img src="../assets/merchants_introduction@2x.png" alt="">
              <span>商家介绍</span>
            </div>
            <div style="padding-left: 0.4rem;padding-bottom:0.4rem;padding-right:0.4rem;text-align: left">
              星享更同步。现在您可以通过Apple Watch打开星巴克移动应用。更便捷地 支付、查询星享卡还有查找附近门店。
            </div>
          </li>
          <li>
            <div class="title">
              <img src="../assets/merchant_notice@2x.png" alt="">
              <span>商家公告</span>
            </div>
            <div style="padding-left: 0.4rem;padding-bottom:0.4rem;padding-right:0.4rem;text-align: left">
              星享更同步。现在您可以通过Apple Watch打开星巴克移动应用。更便捷地 支付、查询星享卡还有查找附近门店。
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Businessdetails",
      data(){
          return{
            showCustomAction:''
          }
      }
    }
</script>

<style scoped>
    .Businessdetails{
      background: white;
    }
    .Businessdetails ul li:nth-child(1){
      width: 100%;
      margin-bottom: 2.5rem;
    }
    .van-tabs .van-tab{

    }
  .van-tabs .van-tab img{
    height: 2.75rem;
    margin-top: 0.6rem;
  }
  .title{
    padding: 0.4rem;
    text-align: left;
    font-size: 0.37rem;
  }
  .title img{
    width: 0.37rem;
    vertical-align: middle;
    }
  .title span{
    vertical-align: middle;
  }
</style>
