<template>
 <div class="nearShop">

   <div id="alldom">
   <div style="position: relative;height: 200px;width: 100%;">

     <div>
       <div class="date" style="display: none">
         <el-amap vid="amap" :plugin="plugin" class="amap-demo"></el-amap>
       </div>

       <div style="height: 50px;color: black;display: flex;" ref="location">
         <div style="margin-left: 41px;">
             <div style="height: 50px;width: 15px;float: left;position: relative">
               <img src="../assets/positioning@2x.png" alt="" style="width:15px;height: 20px;position: absolute;left: 0px;top:50%;margin-top: -10px;">
             </div>
             <div style="width: 200px;height: 50px;float: left;margin-left: 3px;overflow-x: scroll;color: white;overflow-y: hidden" class="scrolltitle" id="scrollTitle">
               <div style="text-align: left;width:450px;height: 50px;line-height: 50px;">
                <span v-if="loaded" style="" class="locationtext">
                  {{address}}
                  </span>
                  <span v-else style="" class="locationtext">正在定位</span>
               </div>
             </div>

             <!--<div style="height: 100%;width: 200px;flex: 1;color: white;font-size: 16px;overflow-x: scroll" class="location">-->
               <!--<div style="width: 200px!important;background: black!important;height: 100%;margin-left:45px;">-->
                 <!--<div>-->
                   <!--<span v-if="loaded" style="" class="locationtext">-->
                      <!--{{address}}-->
                    <!--</span>-->
                   <!--<span v-else style="" class="locationtext">正在定位</span>-->
                 <!--</div>-->
               <!--</div>-->
               <!--&lt;!&ndash;<span>{{positions.address}}</span>&ndash;&gt;-->
             <!--</div>-->
           </div>
         <div style="flex: 1;" class="weather">
              <div class="weathernum">
                <p style="font-size: 16px;">{{tmp}}℃</p>
                <p style="font-size: 12px;">{{weather}}</p>
              </div>
         </div>
       </div>

         <!--搜索框-->
      <div style="" :class="navBarFixed == true ? 'navBarWrap' :''" id="searchbox" ref="searchbox">
       <div style="display: flex;" :class="navBarFixed == true ? 'searchBox' :'searchbox2'">
            <input type="text" v-model="value" ref="seachinput" class="div" placeholder="输入商品名称/宝贝标题搜索" :class="navBarFixed == true ? 'navBarInput' :''">
       </div>
        <div style="padding: 0px 10px 0px 10px;display: flex;font-size: 12px;color: white;margin-top: 15px;" :class="navBarFixed == true ? 'overhide' :'shoplist'">
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

     <div style="width: 100%;margin-top: 20px;font-size: 12px;" class="listimgTab">
      <div style="display: flex" class="flex1">
        <div>
          <img src="../assets/PartnershipCenter.png" alt="">
          <p>合作中心</p>
        </div>
        <div>
          <img src="../assets/Enterpriseconsulting.png" alt="">
          <p>企业咨询</p>
        </div>
        <div>
          <router-link to="/listItem"><img src="../assets/Gourmetworld.png" alt=""></router-link>
          <p>美食天下</p>
        </div>
        <div>
          <img src="../assets/酒店设施-运动健身.png" alt="">
          <p>运动健身</p>
        </div>
        <div>
          <img src="../assets/购物.png" alt="">
          <p>时尚购物</p>
        </div>
      </div>
     </div>
   <div style="width: 100%;font-size: 12px;" class="listimgTab">
     <div style="display: flex" class="flex1">
       <div>
         <img src="../assets/Flowersinthefield.png" alt="">
         <p>花田喜事</p>
       </div>
       <div>
         <img src="../assets/Lifeservice.png" alt="">
         <p>生活服务</p>
       </div>
       <div>
         <img src="../assets/Performanceticketing.png" alt="">
         <p>演出票务</p>
       </div>
       <div>
         <img src="../assets/Hairdressingbeauty.png" alt="">
         <p>美容美发</p>
       </div>
       <div>
         <img src="../assets/Lookatthewhole.png" alt="">
         <p>查看全部</p>
       </div>
     </div>
   </div>

   <div class="scrollTop">
     <div class="scrollTopflex1">
          <div style="width: 50%;float: left;font-weight: bold">
              商家<br/>头条
          </div>
       <div style="width: 50%;float: right;line-height: 50px;">
         <img src="../assets/Enterpriseconsulting.png" alt="">
       </div>
     </div>
     <div class="scroll-wrap">
       <ul class="scroll-content" :style="{ top }">
         <li v-for="item in prizeList">{{item.name}}</li>
       </ul>
     </div>
     <div style="line-height: 30px;text-align: right;padding-right: 17px;">
      2月3日
     </div>
   </div>

   <div style="width: 100%;height: 10px;background: #f2f2f2;"></div>
   </div>

   <div style="height: auto" :class="isfixed==true?'gotofixed':''">
     <div class="title" id="title">
       <span style="font-style: italic;font-size: 2px;">//</span><span class="titleshop">附近商家</span><span style="font-style: italic;font-size: 2px;">//</span>
     </div>

     <div class="slideleft" style="border-bottom: 1px solid #F3F3F3;">
       <div style="position: relative" :class="index==0 ? 'active':''" @click="tabactive(0)">
         <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="index==0 ? 'activeTab':''">

         </div>
         距离最近
       </div>
       <div style="position: relative" :class="index==1 ? 'active':''" @click="tabactive(1)">
         <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="index==1 ? 'activeTab':''">

         </div>
         折扣最多
       </div>
       <div style="position: relative" :class="index==2 ? 'active':''" @click="tabactive(2)">
         <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="index==2 ? 'activeTab':''">

         </div>
         评分最高
       </div>
       <div style="position: relative" :class="index==3 ? 'active':''" @click="tabactive(3)">
         <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="index==3 ? 'activeTab':''">

         </div>
         销量最高
       </div>
     </div>
   </div>

   <div class="slidecontent">
     <div v-show="index==0">
      <div class="listshop">
        <div style="float: left;width: 20%;">
          <img src="../assets/kfc.png" alt="">
        </div>
        <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
          <p>星巴克Starbucks（新塘路2店）</p>
          <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
          <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
        </div>
      </div>
     <div class="listshop">
       <div style="float: left;width: 20%;">
         <img src="../assets/kfc.png" alt="">
       </div>
       <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
         <p>星巴克Starbucks（新塘路2店）</p>
         <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
         <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
       </div>
     </div>
     <div class="listshop">
       <div style="float: left;width: 20%;">
         <img src="../assets/kfc.png" alt="">
       </div>
       <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
         <p>星巴克Starbucks（新塘路2店）</p>
         <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
         <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
       </div>
     </div>
     <div class="listshop">
       <div style="float: left;width: 20%;">
         <img src="../assets/kfc.png" alt="">
       </div>
       <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
         <p>星巴克Starbucks（新塘路2店）</p>
         <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
         <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
       </div>
     </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
     </div>
     <div v-show="index==1">
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <router-link to="/Businesshome"><img src="../assets/starbucks.png" alt=""></router-link>
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/starbucks.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/starbucks.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/starbucks.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
     </div>
     <div v-show="index==2">
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/kfc.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
     </div>
     <div v-show="index==3">
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/starbucks.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/starbucks.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/starbucks.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
       <div class="listshop">
         <div style="float: left;width: 20%;">
           <img src="../assets/starbucks.png" alt="">
         </div>
         <div style="text-align: left;padding-left: 11px;border-bottom: 1px solid #f3f3f3;float: right;width: 80%;">
           <p>星巴克Starbucks（新塘路2店）</p>
           <p class="shop"><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
           <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
         </div>
       </div>
     </div>
   </div>
   <div>

   </div>

   <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
     <ul>
       <li v-for="item in list">{{ item }}</li>
     </ul>
   </mt-loadmore>

   <!--<div>-->
     <!--<div>距离最近</div>-->
     <!--<div>折扣最多</div>-->
     <!--<div>评分最高</div>-->
     <!--<div>销量最高</div>-->
   <!--</div>-->

   </div>
  </template>
  <script>
     import axios from 'axios'
      export default {
          name: "nearbyShops",
        data(){
            var self = this;
            return{
              navBarWrap:false,
              tmp:'',
              weather:'',
              index:0,
              isfixed:false,
              title:'外卖',
              value:'',
              selected:'1',
              prizeList: [
                { name: '今日数据' },
                { name: 'uiuiuiuui' },
                { name: 'hkhhhhjkh' },
                { name: 'dadadada' },
                { name: 'dadadadada' }
              ],
              activeIndex: 0,
              center: [121.59996, 31.197646],
              lng: 0,
              lat: 0,
              loaded: false,
              address:'',
              plugin: [{
                pName: 'Geolocation',
                events: {
                  init(o) {
                    // o 是高德地图定位插件实例
                    o.getCurrentPosition((status, result) => {
                      if (result && result.position) {
                        self.address = result.formattedAddress;
                        self.lng = result.position.lng;
                        self.lat = result.position.lat;
                        self.center = [self.lng, self.lat];
                        self.loaded = true;
                        self.$nextTick();
                      }
                    });
                  }
                }
              }]
            };
        },
        computed: {
          top() {
            return - this.activeIndex * 30 + 'px';
          }
        },
        methods:{
         getWeather () {
            var _this = this;
            axios.get('http://restapi.amap.com/v3/weather/weatherInfo?key=534c5d265f9fb6b8907515fe31677328&city=杭州').then(function (response) {
                var data = response.data;
              if(data.status==1){
                _this.tmp = data.lives[0].temperature;
                _this.weather = data.lives[0].weather;
              }
              }).catch(function (error) {
                alert(JSON.stringify(error))
            })
          },
          tabactive(index){
              this.index = index;
          },
          handleScroll2() {
            if(document.getElementById('scrollTitle').scrollLeft == 0){
              var time = setInterval(()=>{
                  document.getElementById('scrollTitle').scrollLeft +=20;
              },1000)
            }
          },
          watchScroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var domheight = document.getElementById('alldom').offsetHeight;
            //  当滚动超过 50 时，实现吸顶效果
            if (scrollTop > 49) {
              this.navBarFixed = true
            } else {
              this.navBarFixed = false
            };
            if(scrollTop>domheight){
              this.isfixed = true;
            }else{
              this.isfixed = false;
            }
          }
          },

          mounted(){
            var _this = this;
            window.addEventListener('scroll',this.watchScroll);
          setInterval(()=> {
            if(this.activeIndex < this.prizeList.length) {
              this.activeIndex += 1;
            } else {
              this.activeIndex = 0;
            }
          }, 1000);
            this.getWeather();
            this.handleScroll2();
        }
      }
  </script>

  <style>
    .gotofixed{
      position: fixed;width:100%;top: 40px;background: white;
    }
    .overhide{
      display: none!important;
    }
    .navBarWrap {
      position:fixed;
      top:0;
      z-index:999;
      width: 100%;
      padding: 0px!important;
    }
    .searchBox{
      padding: 0px!important;
    }
    .navBarInput{
      padding: 10px!important;
      border-radius: 0px!important;
      width: 100%!important;
      height: 30px!important;
      /*color: white!important;*/
      background: #f2f2f2!important;
    }
    .active{
      color: #F08400!important;
    }
    .active1{
      position: absolute;top:55px;width: 100%;
    }
    .active2{
      position: fixed;top: 0px;width: 100%;
      background: palevioletred;
      z-index: 999999999;
    }

    .activeTab{
      border-bottom: 2px solid #F08400;
    }

    .weather{
      font-size: 12px;
      position: relative;
    }
    .weather .weathernum{
      height: 30px;
      width: 30px;
      position: absolute;
      top:50%;
      right: 30px;
      margin-top: -15px;
      /*background: red;*/
      /*right: 0px;*/
    }
    .weather p{
      margin: 0px!important;
      color: white;
    }
    .nearShop .scrolltitle::-webkit-scrollbar {
      display: none;
    }{

    }
    .nearShop .mint-swipe-indicators{
      position: absolute;
      top: 185px;
      z-index: 99999999999999999;
      /*background: green;*/
      /*margin-top: 20px;*/
    }
    .nearShop .location{
      position: relative;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .nearShop .location img{
      position: absolute;
      left: 41px;
      top: 50%;
      margin-top: -10px;
    }
    .nearShop .location span{
      background: linear-gradient(to right, white,white );
      -webkit-background-clip: text;
      color: transparent;
    }
    .nearShop .mint-swipe-indicators .mint-swipe-indicator{
      height: 5px!important;
      width: 20px!important;
      border-radius: 0px!important;
      background: #909090!important;
      /*z-index: 99999999999999999;*/
    }
    .nearShop .mint-swipe-indicators .mint-swipe-indicator.is-active{
      background: #EE6723!important;
    }
    .listimgTab img{
      height: 25px;
      width: 25px;
    }
    .scrollTop{
      display: flex;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .scrollTop div{
      height: 30px;
      flex: 1;
      /*line-height: 30px;*/
      font-size: 12px;
    }
    .scroll-wrap{
      width: 100%;
      height: 30px;
      /*background: pink;*/
      /*border: 1px solid blue;*/
      overflow: hidden;
    }

    .scroll-content{
      position: relative;
      padding-left: 0px!important;
      margin: 0px!important;
      /*background: green;*/
      height: auto;
      transition: top 0.5s;
    }

    .title{
      color:#FD4F4F;
      font-size: 16px;
      font-weight: bold;
      font-family: PingFangSC-Medium;
      padding-top: 15px;
      padding-bottom: 10px;
    }
    .title .titleshop{
      padding: 0px 8px 0px 8px;
    }
 /*   .slideFixed{
      position: fixed;width: 100%;
      top: 50px;
      background: gray!important;
      z-index: 9999999;
    }*/
    .slideleft{
      display: flex;
      font-size: 12px;
    }
    .slideleft div{
      flex: 1;
      color: #393939;
      font-family: PingFangSC-Regular;
      padding-bottom: 10px;
    }
    .slidecontent{
      width: 100%;
      height: auto;
      /*padding-bottom: 20px;*/
    }
    .slidecontent .listshop{
      padding: 16px;
      height: 95px;
      /*background: pink;*/
      display: flex;
      font-size: 12px;
    }
    .slidecontent .listshop p{
      margin: 0px!important;
      padding-bottom: 10px;
      /*padding-left: 11px;*/
    }
    .shop span{
      padding-right: 10px;
      color: #393939;
    }
    .discon{
      display: flex;
      font-size: 10px;
      padding-bottom: 0px!important;
    }
    .discon span{
      flex: 1;
      border: 1px solid #F08400;
      color: #FF0000;
      margin-right: 3px;
      /*margin-left: 3px;*/
      padding: 1px;
    }
    li{
      line-height: 30px;
      width: 100%;
      text-align: center;
      /*background: pink;*/
    }
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
    .searchbox2{
      padding: 0px 10px 0px 10px;
    }
    .searchbox{
      animation: change 1s;
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
