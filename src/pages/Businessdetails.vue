<template>
  <div class="Businessdetails">
      <div>
        <ul style="margin-bottom: 1.7rem;">
          <li>
            <div class="title">
              <img src="../assets/business_environment@2x.png" alt="">
              <span>店家环境</span>
            </div>

            <div class="slideyouhui">
             <ul v-if="shopImageList.length!=0" style="margin-left: 0.8rem;">
               <li v-for="item in shopImageList">
                 <img :src="item.imageUrl" alt="" style="width: 3rem;height: 2rem;">
               </li>
             </ul>
              <p v-if="shopImageList.length==0" style="color: red;text-align: left;padding-left: 0.8rem;padding-top: 5px;">此店暂未上传门店图片~~~~~~~</p>
            </div>
            <!--<van-tabs v-model="active" line-width="0">-->
              <!--<van-tab v-for="item in shopImageList">-->
                <!--<div slot="title">-->
                  <!--<img :src="item.imageUrl" alt="">-->
                <!--</div>-->
              <!--</van-tab>-->
            <!--</van-tabs>-->
          </li>
          <li>
            <div class="title">
              <img src="../assets/business_service_hours@2x.png" alt="">
              <span>服务时间</span>
            </div>
            <div style="padding-left: 0.85rem;padding-bottom:0.4rem;padding-right:0.4rem;text-align: left;font-size: 10px;">
              {{startTime}}-{{stopTime}}
            </div>
          </li>
          <li>
            <div class="title">
              <img src="../assets/merchants_introduction@2x.png" alt="">
              <span>商家介绍</span>
            </div>
            <div style="padding-left: 0.85rem;padding-bottom:0.4rem;padding-right:0.4rem;text-align: left;font-size: 10px;">
             {{introduce}}
            </div>
          </li>
          <li>
            <div class="title">
              <img src="../assets/merchant_notice@2x.png" alt="">
              <span>商家公告</span>
            </div>
            <div style="padding-left: 0.85rem;padding-bottom:0.4rem;padding-right:0.4rem;text-align: left;font-size: 10px;">
              {{notice}}
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
            showCustomAction:'',
            shopImageList:'',
            startTime:'',
            stopTime:'',
            introduce:'',
            notice:''
          }
      },
      methods:{
        getInformation(shopid){
          var _this = this;
          this.$api.getShopInformation(shopid).then(function (res) {
            _this.shopImageList = res.shopImageList;
            _this.startTime = res.startTimeString;
            _this.stopTime = res.stopTimeString;
            _this.introduce = res.introduce;
            _this.notice = res.notice;
          })
        }
      },
      created(){
        // var shopid = localStorage.getItem('shopid');
        var shopid=this.$route.query.shopid;
        this.getInformation(shopid);
      }
    }
</script>

<style scoped>

  .slideyouhui{
    width: 100%;
    height: auto;
    background: white;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .slideyouhui::-webkit-scrollbar{
    display: none;
  }
  .slideyouhui ul{
    display: flex;
  }
  .slideyouhui ul li{
    flex: 1;
    /*background: black;*/
    margin-right: 0.3rem;
    position: relative;
    font-size: 0.3rem;
    /*margin-top: 0.7rem;*/
    height: 2rem;
  }
  .slideyouhui ul li:last-child{
    padding-right: 0.8rem;
  }
  .slideyouhui ul li img{
    height: 100%;
    width: 5rem;
    float: left;
  }

    .Businessdetails{
      background: white;
    }
    /*.Businessdetails ul li:nth-child(1){*/
      /*width: 75%;*/
      /*!*margin-bottom: 0.5rem;*!*/
    /*}*/
    .van-tabs .van-tab{

    }
  .van-tabs .van-tab img{
    width: 100px;
    height: 88px;
  }
  .title{
    padding: 0.4rem;
    text-align: left;
    font-size: 0.37rem;
  }
  .title img{
   width: 12px;
    height: 12px;
    margin-top: -1px;
    vertical-align: middle;
    }
  .title span{
    font-size: 14px!important;
    vertical-align: middle;
  }
    .van-tab--active img{
      border: none!important;
    }
</style>
