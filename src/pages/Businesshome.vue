<template>
    <div class="shopStore">
      <mt-header title="商家主页">
        <mt-button icon="back" slot="left" @click="backIndex"></mt-button>
        <mt-button icon="" slot="right">
          <img src="../assets/Collection.png" alt="" style="margin-right: 13px;">
          <img src="../assets/share.png" alt="" style="margin-right: 17px;">
        </mt-button>
      </mt-header>

      <div class="shopLogo">
        <mt-navbar>
          <mt-tab-item id="1">
            <img src="../assets/Starbuckshead.png" alt="" style="float: left">
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
          <div class="place">
              <div style="float: left"><img src="../assets/address.png" alt=""><span>杭州市江干区新塘路58号星巴克</span></div>

              <div style="background: white;height: 100%;width: 30%;float: right">
                <div></div>
              </div>
          </div>
      </div>

    </div>
</template>

<script>

    export default {
        name: "Businesshome",
      data(){
          return{

          }
      },
      computed: {
      },
      mounted(){
      },
      methods:{
          backIndex(){
            this.$router.push('/nearbyShops');
          }
      }
    }
</script>

<style>

 .box1{
   width: 100%;
   height: 50px;
   /*background: pink;*/
   overflow-x: scroll;
   overflow-y: hidden;
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
    width: 100%;
    height: 51px;
    background: red;
  }
  .location2 .place{
    height: 51px;
    width: 90%;
    background: green;
    margin: 0 auto;
    display: flex;
    font-size: 12px;
    line-height: 51px;
  }
  .location2 .place span{
    padding-left: 6px;
  }





</style>
