<template>
    <div class="shopStore">
      <mt-header fixed title="商家主页">
        <mt-button icon="back" slot="left" @click="backIndex"></mt-button>
        <mt-button icon="" slot="right">
          <img src="../assets/Collection.png" alt="" style="margin-right: 13px;">
          <img src="../assets/share.png" alt="" style="margin-right: 17px;">
        </mt-button>
      </mt-header>

      <div class="shopLogo" style="margin-top: 40px;">
        <mt-navbar>
          <mt-tab-item id="1">
            <img src="../assets/Starbuckshead.png" alt="" style="float: left;">
            <div>
              <p>星巴克Starbucks</p>
              <p>官方旗舰店</p>
            </div>
          </mt-tab-item>
          <mt-tab-item id="2">
            <button class="guanzhubtn">关注</button>
            <div style="float: right;padding-right: 10px;">
              <p>15565</p>
              <p>粉丝</p>
            </div>
          </mt-tab-item>
        </mt-navbar>
      </div>


      <div class="box1">
          <ul>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
            <li><img src="../assets/kfc.png" alt=""></li>
          </ul>
      </div>

      <div class="location2">
        <div class="placelocation" style="text-align: left">
          <img src="../assets/address.png" alt="" style="margin-left: 10px;vertical-align:middle;">
          <span style="vertical-align:middle;">杭州市江干区新塘路58号星巴克</span>
        </div>
        <div style="width: 30%;display: flex" class="placelocation2">
            <div style="margin-top: 12px;">
              <img src="../assets/Navigation.png" alt="">
              <a href="http://uri.amap.com/poidetail"><p style="margin: 0px;">导航</p></a>
            </div>
            <div style="line-height: 50px;">
                |
            </div>
            <div style="margin-top: 12px;">
              <img src="../assets/Telephone.png" alt="">
              <p style="margin: 0px;">电话</p>
            </div>
        </div>
      </div>


      <div class="tabs">
        <div style="position: relative;" :class="index==0 ? 'activeProduce':''" @click="tabactive(0)">
          <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="index==0 ? 'active4':''">

          </div>
          明星产品
        </div>

        <div style="position: relative;" :class="index==1 ? 'activeProduce':''" @click="tabactive(1)">
          <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="index==1 ? 'active4':''">

          </div>
          商家详情
        </div>
      </div>

      <div class="content">
        <div class="tabcontent" v-show="index==1">
            <ul>
              <li>
                <div>
                  <img src="../assets/Storeenvironment.png" alt="">
                  <span>店家环境</span>
                </div>
                <div class="box1" style="margin-top: 20px;">
                  <ul>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                    <li><img src="../assets/kfc.png" alt=""></li>
                  </ul>
                </div>
              </li>

            <!--服务时间-->
              <li>
                <div style="">
                  <img src="../assets/servicetime.png" alt="">
                  <span>服务时间</span>
                </div>
                <div style="padding-left: 36px;font-size: 12px;padding-top: 5px;">9:00-10:00</div>
              </li>

              <!--商家介绍-->
              <li>
                <div style="">
                  <img src="../assets/Businessintroduction.png" alt="">
                  <span>商家介绍</span>
                </div>
                <div style="padding-left: 36px;font-size: 12px;padding-top: 5px;">
                  星享更同步。现在您可以通过Apple Watch打开星巴克移动应用。更便捷地
                  支付、查询星享卡还有查找附近门店。
                </div>
              </li>


              <li>
                <div style="">
                  <img src="../assets/Businessannouncement.png" alt="">
                  <span>商家公告</span>
                </div>
                <div style="padding-left: 36px;font-size: 12px;padding-top: 5px;">
                  星享更同步。现在您可以通过Apple Watch打开星巴克移动应用。更便捷地
                  支付、查询星享卡还有查找附近门店。
                </div>
              </li>
            </ul>
        </div>


        <div class="box" v-show="index==0">
          <ul style="height: auto;width: 100%;">
            <li>
              <div class="shopimg">
                <img src="../assets/Chinesewolfberry.png" alt="">
              </div>
              <div class="shopsize">
                <p style="padding: 12px;">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p><span style="padding-left: 12px;">¥288</span><span style="padding-left: 32px;font-size: 14px;color: #FF0000">可抵¥150</span></p>
              </div>
            </li>
            <li>
              <div class="shopimg">
                <img src="../assets/Goldnanoscale.png" alt="">
              </div>
              <div class="shopsize">
                <p style="padding: 12px;">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p><span style="padding-left: 12px;">¥288</span><span style="padding-left: 32px;font-size: 14px;color: #FF0000">可抵¥150</span></p>
              </div>
            </li>
            <li>
              <div class="shopimg">
                <img src="../assets/Chinesewolfberry.png" alt="">
              </div>
              <div class="shopsize">
                <p style="padding: 12px;">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p><span style="padding-left: 12px;">¥288</span><span style="padding-left: 32px;font-size: 14px;color: #FF0000">可抵¥150</span></p>
              </div>
            </li>
            <li>
              <div class="shopimg">
                <img src="../assets/Goldnanoscale.png" alt="">
              </div>
              <div class="shopsize">
                <p style="padding: 12px;">新疆精河头茬枸杞，精选“中国枸杞之乡”</p>
                <p><span style="padding-left: 12px;">¥288</span><span style="padding-left: 32px;font-size: 14px;color: #FF0000">可抵¥150</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--//footer-->
      <div class="btn">
        <button @click="Paybill">话费抵扣买单</button>
      </div>
    </div>
</template>

<script>

    export default {
        name: "Businesshome",
      data(){
          return{
              index:0,
          }
      },
      computed: {
      },
      mounted(){
      },
      methods:{
          backIndex(){
            this.$router.push('/nearbyShops');
          },
          Paybill(){
            this.$router.push('/Paybill');
          },
        tabactive(index){
          this.index = index
        }
      }
    }
</script>

<style>

  .bottom{

  }
  .active4{
    border-bottom: 2px solid #F08400;
  }
  .activeProduce{
    color: #F08400;
  }
 .box1{
   width: 100%;
   height: 50px;
   /*background: pink;*/
   overflow-x: scroll;
   overflow-y: hidden;
 }
  .box1::-webkit-scrollbar {
    display: none;
  }
 .box1 ul{
   display: flex;
   height: 80px;
   padding-left: 0px!important;
   /*padding-right: 10px!important;*/
   margin-top: 0px!important;
 }

 .box1 ul li{
   flex: 1;
   /*margin-right: 10px;*/
 }
 .box1 ul li img{
   padding: 0px 5px 0px 5px;
 }


  .shopStore .mint-header{
    background: white!important;
    color: #393939;
    font-size: 18px!important;
  }
  .shopStore .mint-header i{
    font-size: 18px!important;
  }
  .shopLogo{
    display: flex;
    padding: 10px;
  }
  .shopLogo div{
    flex: 1;
  }
  .shopLogo p{
    margin: 0px!important;
    margin-top: 2px!important;
    color: #4A4A4A;
    font-size: 14px;
    font-weight: bold;
    padding-left: 15px;
    padding-top: 5px;
  }
  .guanzhubtn{
    height: 27px;
    width: 63px;
    margin-top: 10px;
    background: #FF0000;
    border: none;
    color: white;
    border-radius: 5px;
    float: right;
  }
   .shopLogo .mint-tab-item-label{
      height: 50px;
     /*background: pink;*/
   }
   .location2{
     /*width: 100%;*/
     height: 50px;
     /*background: red;*/
     display:flex;
     /*line-height: 50px;*/
     width: 90%;
     box-shadow:3px 3px 8px #F3F3F3;
     font-size: 12px;
     margin: 0 auto;
     margin-top: 23px!important;
   }
   .location2 div{
      height: 50px;
     /*background: green;*/
   }
   .location2 .placelocation{
     font-size: 12px;
     width: 70%;
     line-height: 50px;
   }
   .placelocation2 div{
     margin-right: 15px;
   }
   .placelocation2 a{
     text-decoration:none;
     color: #4A4A4A;
   }
   .tabs{
     display: flex;
     border-bottom: 1px solid #f3f3f3;
   }
   .tabs div{
     flex: 1;
     padding: 10px 0px 10px 0px;
     font-size: 14px;
   }

   .tabcontent{
     padding-bottom: 10px;
     width: 100%;
     height: auto;
     margin-bottom: 50px;
   }
   .tabcontent ul{
     /*width: 100%;*/
     padding-left: 0px!important;
     height: auto;
     /*background: green;*/
   }
   .tabcontent ul li{
     width: 100%;
     /*background: red;*/
     text-align: left;
     font-size: 14px;
     margin-bottom: 20px;
   }
  .tabcontent ul li div img{
    padding-left: 14px;
    vertical-align:middle;
  }
  .tabcontent ul li div span{
    padding-left: 7px;
    vertical-align:middle;
  }
  .tabcontent .box1{
    height: 100px;
  }
  .tabcontent .box1 ul li img{
    height: 88px;
    width: 114px;
  }
  .box{
    padding: 10px;
    margin-bottom: 50px;
    /*background: red;*/
  }
  .box ul{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap:wrap;
    margin: 0 auto;
    /*background: green;*/
    padding: 0px!important;
    /*background: red;*/
      /*padding: 10px;*/
  }
  .box ul li{
    /*height: 192px;*/
    flex: 1;
    width: 50%;
    height: 261px;
    /*background: red;*/
    min-width: 50%;
    box-shadow:3px 3px 8px 3px #F3F3F3;
    margin-bottom: 10px;
    /*margin-left: 1%;*/
    /*border-radius: 10px;*/
    max-width: 50%;
  }
  .box ul li .shopimg{
    width: 100%;
    height: 181px;
    text-align: center;
    /*position: relative;*/
    /*background: black;*/
  }
  .box ul li .shopimg img{
    width: 90%;
    height: 90%;
    margin-top: 10px;
    /*padding: 5px;*/
  }
  .box ul li .shopsize{
    height: 80px;
    width: 100%;
    /*background: green;*/
    text-align: left;
    font-size: 12px;
    border-radius: 10px;
  }
  .box ul li .shopsize p{
    margin: 0px!important;
    /*padding: 12px;*/
  }
  .btn{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
  }
  .btn button{
    color: white;
    background: #F08400;
    height: 49px;
    width: 100%;
    border: none;
    font-size: 18px;
    font-weight: bold;
  }
  /*.box{*/
    /*width: 100%;*/
    /*margin: 0 auto;*/
    /*height: auto;*/
    /*display: flex;*/
    /*flex-wrap:wrap;*/

    /*!*padding: 10px;*!*/
  /*}*/
  /*.box div{*/
    /*flex: 1;*/
       /*width: 50%;*/
    /*height: 261px;*/
    /*!*background: red;*!*/
          /*min-width: 50%;*/
         /*!*max-width: 50%;*!*/
    /*!*padding: 10px;*!*/
  /*}*/
  /*.box div .shopimg{*/
    /*height: 192px;*/
    /*width: 100%;*/
    /*!*background: green;*!*/
    /*!*float: left;*!*/
  /*}*/
  /*.box div .shopsize{*/
    /*background: red;*/
    /*height: 50px;*/
    /*width: 100%;*/
    /*margin-bottom: 0px;*/
  /*}*/





</style>
