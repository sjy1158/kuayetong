<template>
 <div class="nearShop">
   <!--<mt-header fixed :title="title">-->
     <!--<mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>-->
     <!--<mt-button icon="more" slot="right"></mt-button>-->
   <!--</mt-header>-->

   <!--<div class="date" style="display: none">-->
   <!--<el-amap vid="amap" :plugin="plugin" class="amap-demo"></el-amap>-->
   <!--</div>-->

   <!--<div style="height: 50px;color: black;display: flex">-->
   <!--<div style="height: 100%;width: 200px;background: aliceblue;flex: 1" class="location">-->
   <!--<img src="../assets/timg.jpg" alt="" style="height: 22px;width: 20px;">-->
   <!--<span>{{positions.address}}</span>-->
   <!--</div>-->
   <!--<div style="flex: 1">-->
   <!---->
   <!--</div>-->
   <!--</div>-->

   <div style="position: relative;height: 200px;width: 100%;">

     <div>
       <div class="date" style="display: none">
         <el-amap vid="amap" :plugin="plugin" class="amap-demo"></el-amap>
       </div>

       <div style="height: 50px;color: black;display: flex;" ref="location">
         <div style="height: 100%;width: 200px;flex: 1;color: white;" class="location">
           <img src="../assets/timg.jpg" alt="" style="height: 22px;width: 20px;">
           <span>{{positions.address}}</span>
         </div>
         <div style="flex: 1">

         </div>
       </div>
       <!--<button @click="show = !show">Toggle show</button>-->
       <!--<transition name="bounce">-->
       <!--<p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>-->
       <!--</transition>--!>
         <!--搜索框-->
      <div style="" :class="isfixed ? 'active1':'active2' " id="searchbox" ref="searchbox">
       <div style="display: flex;padding: 0px 10px 0px 10px;" class="searchbox2">
            <input type="text" v-model="value" ref="seachinput" class="div" placeholder="输入商品名称/宝贝标题搜索">
       </div>
        <div style="padding: 0px 10px 0px 10px;display: flex;font-size: 12px;color: white;margin-top: 15px;" class="shoplist">
          <div>肯德基</div>
          <div>汉堡王</div>
          <div>烤肉</div>
          <div>满30减15</div>
          <div>吃货公敌</div>
          <div>小龙虾</div>
          <div>鸡胗</div>
        </div>
      </div>
     </div>



       <div style="position: absolute;height: 200px;width: 100%;top: 0px;z-index: -99999;">
       <mt-swipe :auto="4000">
         <mt-swipe-item><img src="../assets/bg.jpg" alt="" style="width: 100%;"></mt-swipe-item>
         <mt-swipe-item><img src="../assets/bg2.jpg" alt="" style="width: 100%;"></mt-swipe-item>
         <mt-swipe-item><img src="../assets/bg3.jpg" alt="" style="width: 100%;"></mt-swipe-item>
       </mt-swipe>
         <div style="height: 30px;width:100%;background: white;position: absolute;bottom: -15px;border-radius: 50%;">
         </div>
         <div>1111111111111111</div>
       </div>
     </div>

     <div style="height: 100px;width: 100%;background: yellow">
      <div style="display: flex" class="flex1">
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
      </div>
     </div>
   <div style="height: 100px;width: 100%;background: yellow">
     <div style="display: flex" class="flex1">
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
     </div>
   </div>
   <div style="height: 100px;width: 100%;background: yellow">
     <div style="display: flex" class="flex1">
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
     </div>
   </div>
   <div style="height: 100px;width: 100%;background: yellow">
     <div style="display: flex" class="flex1">
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
     </div>
   </div>
   <div style="height: 100px;width: 100%;background: yellow">
     <div style="display: flex" class="flex1">
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
     </div>
   </div>
   <div style="height: 100px;width: 100%;background: yellow">
     <div style="display: flex" class="flex1">
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
       <div>11111</div>
     </div>
   </div>

     <!--<mt-tabbar fixed :selected="selected">-->
       <!--<mt-tab-item id="外卖" class="active">-->
         <!--<img slot="icon" src="">-->
         <!--外卖-->
       <!--</mt-tab-item>-->
       <!--<mt-tab-item id="订单">-->
         <!--<img slot="icon" src="">-->
         <!--订单-->
       <!--</mt-tab-item>-->
       <!--<mt-tab-item id="发现">-->
         <!--<img slot="icon" src="">-->
         <!--发现-->
       <!--</mt-tab-item>-->
       <!--<mt-tab-item id="我的">-->
         <!--<img slot="icon" src="">-->
         <!--我的-->
       <!--</mt-tab-item>-->
     <!--</mt-tabbar>-->
   </div>
  </template>

  <script>
      export default {
          name: "nearbyShops",
        data(){
            var self = this;
            return{
              isfixed:true,
              title:'外卖',
              value:'',
              positions:{
                lng:'',
                lat:'',
                address:'',
                loaded:false
              },
              center:[121.59996, 31.197646],
              plugin:[{
                pName:'Geolocation',
                events:{
                  init(o){
                    o.getCurrentPosition((status,result)=>{
                      // alert(result.formattedAddress);
                      self.positions.address = result.addressComponent.neighborhood
                    })
                  }
                }
              }]
            }
        },
        methods:{
          selected(){
            alert(11111)
          },
          getLocation(){

          },
          handleScroll () {
            var _this = this;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
              if(scrollTop == this.$refs.location.offsetHeight||scrollTop > this.$refs.location.offsetHeight){
              _this.isfixed = !_this.isfixed
              // alert(scrollTop);
              return
            }else {
              _this.isfixed = true
              return
            }
            return
          },
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll)
          this.handleScroll()
          this.getLocation()
        }
      }
  </script>

  <style>
    .active1{
      position: absolute;top:55px;width: 100%;
    }
    .active2{
      position: fixed;top: 0px;width: 100%;
      background: palevioletred;
      z-index: 999999999;
    }
    /*.div{*/
      /*animation: bounce-in .5s;*/
    /*}*/
    /*.div {*/
      /*animation: bounce-in .5s reverse;*/
    /*}*/
    /*@keyframes bounce-in {*/
      /*0% {*/
        /*transform: scale(0);*/
      /*}*/
      /*50% {*/
        /*transform: scale(1.5);*/
      /*}*/
      /*100% {*/
        /*transform: scale(1);*/
      /*}*/
    /*}*/

    .nearShop{
      /*margin-top: 40px;*/
      /*margin-bottom: 60px;*/
    }
    .active{
      /*background: gray;*/
      color: white;
    }
    .nearShop .mint-swipe-items-wrap{
      /*background: aliceblue;*/
      height: 200px!important;
      width: 100%;
      /*margin-top: 40px;*/
    }
    .date{
      height: 50px;
      background: blue;
      width: 100%;
      line-height: 50px;
    }
    .nearShop .mint-swipe-items-wrap .mint-swipe-item{
      background: red;
      line-height: 200px;
    }
    .nearShop .mint-search{
      height: 50px!important;
    }
    .nearShop .mint-swipe-indicators{
      bottom: 15px;
    }
    .nearShop .mint-swipe-indicators{
      /*background: black!important;*/
    }
    .nearShop .mint-swipe-indicators .mint-swipe-indicator{
      background: green!important;
    }
    .nearShop .mint-swipe-indicators .mint-swipe-indicator.is-active{
      background: yellow!important;
    }
    .location{
      font-size: 12px;
      line-height: 50px;
    }
    .location img{
      vertical-align:middle;
    }
    .location span{
      vertical-align:middle;
    }
    .shoplist div{padding-left: 5px;text-align: center;flex: 1;overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;}

    .div{
      flex: 1;
      padding-left: 10px;
      border-radius: 10px;height: 20px;width: 100%;outline: none;border: none;font-size: 12px;
    }
    .searchbox{
      animation: change 1s;
      -webkit-animation-fill-mode:forwards;
    }
    .searchbox2{
      animation: change3 1s;
      -webkit-animation-fill-mode:forwards;
    }
    .flex1 div{
      flex: 1;
    }
    /*@keyframes change{*/
        /*from {opacity: 1;margin-top: 10px; transform: scale(0,0);}*/
        /*to {opacity: 1;margin-top: -20px; height:30px;transform: scale(1,1);top: 20px;}*/
      /*}*/
    /*@keyframes change3{*/
      /*from {padding: 0px 10px 0px 10px;}*/
      /*to {padding: 0px;}*/
    /*}*/
  </style>
