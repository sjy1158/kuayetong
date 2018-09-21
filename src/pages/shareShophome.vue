<template>
  <div class="shophome">
    <van-nav-bar
      fixed
      title="商家主页"
    />
    <div class="titleImg" style="margin-top: 55px;">
      <img v-if="shopHeadImageUrl!=''" :src="shopHeadImageUrl" alt="">
      <img v-else src="" alt="">
      <div class="titletext">
        <p>{{title}}</p>
      </div>
    </div>

    <!--优惠券-->
    <div class="slideyouhui" style="background: white">
      <ul v-if="disconarr.length!=0">
        <li v-for="item in disconarr">
          <img src="../assets/merchant_deduct_red_and_white@2x.png" alt="">
          <div style="position: absolute;top: 0.55rem;width:2.5rem;color: #FF0000;left: -0.2rem;">
            <p style="font-size: 9px!important;padding-top: 5px;">进店消费满</p>
            <p style="font-size: 12px!important;">¥{{item.requireValue}}</p>
          </div>
          <div style="position: absolute;top: 0.55rem;width:1.6rem;left: 2.15rem;color: #FFFFFF">
            <p style="font-size: 9px!important;padding-top: 5px;">进店消费满</p>
            <p style="font-size: 12px!important;">¥{{item.value}}</p>
          </div>
        </li>
      </ul>
      <p v-if="disconarr.length==0" style="color: red;text-align: left;padding-left: 25px;padding-top: 5px;">此店暂无优惠券~~~~~~~</p>
    </div>


    <!--地址-->
    <div class="location" style="position: relative;width: 100%;">
      <img src="../assets/merchant_address_box@2x.png" alt="" style="height: 50px;width: 96%;position: absolute;left: 7px;">
      <div style="width: 96%;position: absolute;left: 8px;top: -4px;">
        <div style="float: left;" class="locationicon">
          <img src="../assets/merchant_address_location@2x.png" alt="">
          <span style="padding-left: 0.1rem;">{{location}}</span>
        </div>
      </div>
    </div>
    <div class="swiper">
      <van-tabs @click="onClick" v-model="active" sticky line-width="20">
        <van-tab>
          <div slot="title" style="font-size: 14px;">
            明星产品
          </div>
        </van-tab>
        <van-tab>
          <div slot="title" style="font-size: 14px;">
            商家详情
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <button type="button" @click="openPay">立即抵扣买单</button>

    <div id="weixin-tip" v-show="!disweixin">
      <p>
        <img style="width:80%" src="http://api.kuayet.com:8028/imgsave.png" alt="微信打开"/>
      </p>
    </div>
  </div>
</template>

<script>
  import { Dialog } from 'vant'
  export default {
    name: "Shophome",
    data(){
      return{
        shopid:'',
        userIdL:'',
        index:1,
        headerTitle:'商家主页',
        path:'',
        menus:[
          '明星产品',
          '商家详情'
        ],
        title:'',
        shopHeadImageUrl:'',
        disconarr:'',
        location:'',
        call:'',
        latitude:'',
        longitude:'',
        disweixin:true
      }
    },
    methods:{
      onClick(index,title){
        this.indexS++;
        switch (index) {
          case 1:
            this.$router.push({
              path:"/shareShophome/shareBusinessdetails",
              query:{
                shopid:this.$route.query.shopid,
                root:this.$route.query.root,
                userId:this.$route.query.userId,
                mark:this.$route.query.mark
              }
            });
            break;
          case 0:
            this.$router.push({
              path:"/shareShophome/sharestarProducts",
              query:{
                shopid:this.$route.query.shopid,
                root:this.$route.query.root,
                userId:this.$route.query.userId,
                mark:this.$route.query.mark
              }
            });
        }
      },
      openPay(){
        var _this=this;
        Dialog.confirm({
          title: '提示',
          message: '请下载APP使用此功能'
        }).then(() => {
          if(_this.isweixin()){
            _this.disweixin = !_this.disweixin;
          }else{
            var hasapp = true;
            if(_this.isSysten().isanzhuo){
                window.location.href="kytstart://awaken/awakenback/scheme";
                setTimeout(function () {
                  window.location.href="http://app.kuayet.com/down/";
                },3000)
            }
            if(_this.isSysten().isios){
                window.location.href="kytstart://awaken/awakenback/scheme";
                setTimeout(function () {
                  window.location.href="http://app.kuayet.com/down/";
                },3000)
            }
          }
        }).catch(() => {
          return
        })
      },
      isSysten(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return{
          isanzhuo:u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
          isios:!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
      },
      isweixin(){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == "micromessenger"){
          return true
        }else {
          return false
        }
      },
      getInformation(shopid){
        var _this = this;
        this.$api.getShopInformation(shopid).then(function (res) {
          _this.latitude=res.latitude;
          _this.longitude=res.longitude;
          _this.title = res.title;
          _this.shopHeadImageUrl = res.shopHeadImageUrl;
          _this.disconarr = res.deductionList;
          _this.location = res.specificAddress;
          _this.call = res.phone;
        })
      }
    },
    // beforeRouteLeave(to, from, next) {
    //       from.meta.keepAlive = true;
    //       this.$route.meta.keepAlive=false;
    //       next();
    // },
    created(){
      var shopid = this.$route.query.shopid;
      // alert(this.$route.query.userId);
      // this.url=this.$route.query.url;
      this.getInformation(shopid);
    },
    mounted(){
      this.indexS=0;
      // var index=this.$router.query.indexS;
      this.onClick(0,'明星产品')
    }
  }
</script>

<style scoped>
  #weixin-tip{position: fixed; left:0; top:45px; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}
  .van-nav-bar{
    height: 43px;
    width: 100%;
    line-height: 43px;
    padding-top: 18px;
    z-index:9999999!important;
  }
  .titleImg{
    height: 1.5rem;
    width: 100%;
    background: white;
    position: relative;
  }
  .titleImg img{
    position: absolute;
    left: 0.6rem;
    top: 18%;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  .titleImg .titletext{
    position: absolute;
    left: 80px;
    top: 0.4rem;
    /*top: 0.6rem;*/
    text-align: left;
    font-size: 14px;
    font-weight: bold;
  }
  .titleImg .titletext p{
    margin-top: 0.4rem;
    /*margin: 0px!important;*/
    margin-bottom: 4px!important;
    font-size: 14px;
  }

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
    /*flex: 1;*/
    /*background: black;*/
    /*margin-right: 0.5rem;*/
    position: relative;
    font-size: 0.3rem;
    margin-top: 0.7rem;
    height: 2rem;
  }
  .slideyouhui ul li p{
    /*font-size: 12px!important;*/
    margin: 0px!important;
    /*padding-left: 0.2rem;*/
  }
  .slideyouhui ul li img{
    height: 100%;
    width: 4rem;
    float: left;
  }
  .slideyouhui .discon{
    position:absolute;height: 1rem;left: 0px;top: 50%;margin-top: -0.5rem;
    float: left;
    color: #FF0000;
    text-align: center;
  }
  .slideyouhui .discon p{
    margin: 0px!important;
    font-size: 0.3rem!important;
    padding-left: 0.3rem;
  }
  .slideyouhui .discon2{
    position:absolute;width: 50%;height: 1rem;left: 2.3rem;top: 50%;margin-top: -0.5rem;
    color: white;
  }
  .slideyouhui .discon2 p{
    margin: 0px!important;
    padding-right: 0.2rem;
  }
  .location{
    height: 1.6rem;
    width: 100%;
    background: white;
  }
  .location .locationicon{
    line-height: 1.6rem;
    vertical-align:middle;
    font-size:12px;
  }
  .location .locationicon img{
    height: 16px;
    width: 17px;
    vertical-align:middle;
    padding-left: 0.4rem;
    margin-top: -0.1rem;
  }
  .location .locationicon2 p{
    margin: 0px!important;
    font-size: 10px!important;
  }
  .location .locationicon2 div{
    margin-top: 0.4rem;
  }
  .location .locationicon2 img{
    height: 12px;
    width: 12px;
  }

  button[type=button]{
    width: 100%;
    height: 45px;
    background: #F08400;
    position: fixed;
    bottom: 0px;
    left: 0px;
    border: none;
    color: white;
    /*font-weight: bold;*/
    font-size: 18px;
    z-index: 100;
  }
  .van-tabs__wrap .van-tabs__wrap--page-top .van-hairline--top-bottom{
    top: 1.1rem!important;
  }

  /*.slideyouhui{*/
  /*width: 100%;*/
  /*height: 50px;*/
  /*!*background: pink;*!*/
  /*overflow-x: scroll;*/
  /*overflow-y: hidden;*/
  /*background: white;*/
  /*}*/
  /*.slideyouhui ul{*/
  /*display: flex;*/
  /*height: 2rem;*/
  /*background: white;*/
  /*padding-left: 0px!important;*/
  /*!*padding-right: 10px!important;*!*/
  /*margin-top: 0px!important;*/
  /*}*/
  /*.slideyouhui ul li{*/
  /*!*flex: 1;*!*/
  /*width: 3.4rem;*/
  /*margin-right: 0.6rem;*/
  /*!*background: white;*!*/
  /*position: relative;*/
  /*!*background: black;*!*/
  /*}*/
  /*.slideyouhui ul li img{*/
  /*width: 3rem;*/
  /*height: 1.5rem;*/
  /*position: absolute;*/
  /*left: 0px;*/
  /*top: 0px;*/
  /*}*/

  /*.van-tab{*/
  /*min-width: auto;*/
  /*}*/

</style>
