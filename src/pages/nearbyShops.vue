<template>
 <div class="nearShop">

     <van-loading color="black" class="top active" style="height: 1rem;width: 1rem;position: absolute;z-index: 999999999999999;left: 50%;margin-left: -0.5rem;opacity:0;top: 5rem;background: white;box-shadow:0px 0px 8px gray;border-radius: 50%;"/>

   <!--头部-->
   <div id="scrollheight">
   <div class="header">
     <el-amap vid="amap" :plugin="plugin" class="amap-demo" style="display: none"></el-amap>
     <div>
       <van-swipe :autoplay="3000">
         <van-swipe-item v-for="(image, index) in images" :key="index">
           <img :src="image"/>
         </van-swipe-item>
       </van-swipe>
     </div>
     <!--天气显示-->
     <div class="titlelocation">
       <div class="locationtext">
         <img src="../assets/business_positioning@2x.png" alt="">

         <van-notice-bar style="background: none!important;left: 1rem;color: white!important;top: -0.1rem;" v-if="loaded">
           {{formattedAddress}}
          </van-notice-bar>

         <van-notice-bar style="background: none!important;left: 1rem;color: white!important;top: -0.1rem;" v-else>
           定位中...
         </van-notice-bar>

         <!--<span v-else>定位中...</span>-->
       </div>
       <div class="weather">
         <div class="weathertext">
          <p style="font-size: 0.5rem;">{{tmp}}℃</p>
           <p>{{weather}}</p>
           <img v-show="weathericon==true" src="../assets/business_weather@2x.png" alt="" style="padding-left: 0.3rem;height: 0.6rem;width: 0.55rem;padding-top: 0.15rem;">
           <img v-show="weathericon==false" src="../assets/during_the_day@2x.png" alt="" style="padding-left: 0.3rem;height: 0.6rem;width: 0.55rem;padding-top: 0.15rem;">
         </div>
       </div>
     </div>
      <!--输入框-->
     <div class="search">
       <input type="search" v-model="value" placeholder="输入商品名称／宝贝标题搜索" ref="input1" @keyup="show($event)">
     </div>

     <div class="shoptab">
       <ul id="choceshop">
         <li class="van-ellipsis" v-for="item in hotarr">{{item}}</li>
      </ul>
     </div>
   </div>

   <!--主题-->
   <div class="menulist">
     <ul>
       <li v-for="item in iconarr">
        <img :src="item.imageUrl" alt="" style="width: 0.81rem;height: 0.81rem" @click="openBusinesshome(item.name,item.id)">
         <p>{{item.name}}</p>
       </li>
       <li>
         <img src="../assets/merchants_all_icon@2x.png" alt="" style="width: 0.81rem;height: 0.81rem" @click="openMeishilist">
         <p>查看全部</p>
       </li>
     </ul>
   </div>

   <!--通知栏-->
   <div class="slidexiaoxi">
      <div>
        <img src="../assets/business_business_headlines@2x.png" alt="" style="height: 0.7rem;width: 0.7rem;">
      </div>
     <div>
       <img src="../assets/merchant_avatar@2x.png" alt="" style="height: 1rem;width: 1rem;">
     </div>
     <van-notice-bar mode="link" :scrollable="true">
       <span style="margin-right: 0.5rem;" v-for="item in linearr">{{item.id}}.{{item.headline}}</span>
     </van-notice-bar>
     <div>
       {{time2}}
     </div>
   </div>
     <div style="width: 100%;height: 0.2rem">

     </div>
   </div>

  <!--tab-->

   <div class="tabmenu" style="">
     <div class="neartitle"><img src="../assets/merchants_nearby_merchants@2x.png" alt="" style="height: 0.5rem;width: 3.5rem;"></div>
     <van-tabs @click="onClick2" sticky line-width="20">
       <van-tab v-for="item in menus" :title="item">

       </van-tab>
       <div v-show="issum==true">
         <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
           <van-list
             v-model="loading"
             :finished="finished"
             :offset="10"
             @load="onLoad"
           >
             <van-cell v-for="item in list">
               <div class="pullbox">
                 <img :src="item.shopHeadImageUrl" alt="" style="float: left" class="shopimg" @click="openShophome(item.shopId)">
                 <div class="textbox">
                   <p>{{item.title}}</p>
                   <p class="titlelist"><img src="../assets/businesses_icon@2x.png" alt=""><span>{{item.shopType}}</span><span>人均消费{{item.averageMoney}}元</span><span style="float: right"><100m</span></p>
                   <p class="discon" v-for="item1 in item.deductionList">
                     <span>{{item1.requireValue}}抵{{item1.value}}</span>
                   </p>
                 </div>
               </div>
             </van-cell>
           </van-list>
         </van-pull-refresh>
         <div v-show="finished==true" style="margin-top: 0.5rem;margin-bottom: 0.5rem;">
           加载完毕........
         </div>
       </div>

       <div v-show="issum==false" style="margin-top: 1rem;margin-bottom: 1rem;">
         <div><img src="../assets/load_failed@2x.png" alt="" style="height: 1rem;width: 1rem;"></div>
         <span style="padding-top: 0.7rem;">暂无数据</span>
       </div>

     </van-tabs>
   </div>



 </div>
  </template>
  <script>
     import axios from 'axios'
      export default {
          name: "nearbyShops",
        data(){
            var _this = this;
            return {
              linearr:[],
              weathericon:'',
              time2:'',
              hotarr:[],
              loadreload:true,
              issum:true,
              value:'',
              images: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527658925226&di=57af8daf1382c8c982ccc5db1e39f932&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01635d571ed29832f875a3994c7836.png%40900w_1l_2o_100sh.jpg',
                'https://img.yzcdn.cn/2.jpg'
              ],
              menus:[
                '距离最近',
                '折扣最多',
                '销量最高'
              ],
              sum:'',
              isfixed:false,
              iconarr:'',
              list:[],
              loading:true,
              finished:false,
              isLoading: false,
              city:'',
              center:[121.59996, 31.197646],
              formattedAddress:'',
              tmp:'',
              weather:'',
              loaded:false,
              params:{
                productName:'',
                latitude:'',
                longitude:'',
                pageNum:1,
                num:5,
                mark:0
              },
              plugin:[{
                pName:'Geolocation',
                events:{
                  init(o){
                    o.getCurrentPosition((status,result)=>{
                      if(result&&result.position){
                        setTimeout(function () {
                          document.querySelector('.top').classList.remove('active');
                        },1000);
                        // alert(JSON.stringify(result));
                        _this.city = result.addressComponent.city;
                        _this.params.latitude=result.position.lat;
                        _this.params.longitude = result.position.lng;
                        _this.loaded = true;
                        _this.finished=false;
                        _this.loading = true;
                         _this.formattedAddress = result.formattedAddress;
                        _this.getweather(_this.city);
                        _this.getindexList(_this.params);
                        _this.$nextTick();
                      }
                    })
                  }
                }
              }]
            }
        },
        methods:{
          openShophome(shopid){
            this.$router.push('/Shophome');
            localStorage.setItem('shopid',shopid);
            localStorage.setItem('pathid',1)
          },
          show(ev){
            var _this = this;
           if(ev.keyCode==13){
             if(this.$refs.input1.value!=''){
             this.list = [];
             this.issum=true;
            this.$refs.input1.blur();
            this.params.pageNum = 1;
             this.finished=false;
             this.loading = true;
            this.params.productName=this.$refs.input1.value;
            this.getindexList(this.params);
             }
           }
          },
          onClick2(index){
            this.list = [];
            this.issum=true;
            this.params.pageNum = 1;
            this.finished=false;
            this.loading = true;
            this.params.mark=index;
            this.getindexList(this.params);
          },
          // 加载
          onLoad() {
            this.loading = true;
            this.issum=true;
            this.params.pageNum+=1;
            this.getindexList(this.params);
          },
          // 刷新
          onRefresh() {
            setTimeout(() => {
              this.$toast('刷新成功');
              this.isLoading = false;
            }, 500);
          },

          openBusinesshome(name,id){
            this.$router.push('/Businesshome');
            localStorage.setItem("name", name);
            localStorage.setItem("id",id);
          },
          openMeishilist(){
            this.$router.push('/allShops');
          },
          getweather(city){
            var _this = this;
            this.$api.getWeather(city).then(function (res) {
              _this.tmp=res[0].temperature;
              _this.weather = res[0].weather;
             var time = res[0].reporttime;
             _this.changetime(new Date(time).getHours());
            })
          },
          changetime(time){
            if(7<time<18){
              this.weathericon =false;
              return;
            }else{
              this.weathericon =true;
              return;
            }
          },
          getindexList(params){
            var _this = this;
            if(this.loading&&this.issum){
              this.$api.getIndexList(params).then(function (res) {
                _this.loading = false;
                if(res.sum==0){
                    _this.issum=false;
                    _this.finished = true;
                };
                if(res.list.length<5){
                  _this.finished = true;
                };
                for (var i = 0;i<res.list.length;i++){
                    _this.list.push(res.list[i])
                }
                return;
              })
            }else{
              return
            }
          },
          getIcon(){
            var _this = this;
            var datajson = this.$api.geticon();
            datajson.then(function (res) {
              _this.iconarr = res.list;
            });
          },
          gethot(){
            var _this = this;
            this.$api.gethotWord().then(function (res) {
              _this.hotarr=res.list
            })
          },
          gettime(){
            var time = new Date();
            this.time2 = (time.getMonth()+1)+'月'+time.getDate()+'日';
            return this.time2
          },
          getheadline(){
            var _this = this;
            this.$api.getheadLine().then(function (res) {
              _this.linearr=res.list;
            })
          }
      },
        watch: {
          value (val) {
            if(val==''){
              this.list=[];
                this.params.pageNum = 1;
                this.finished=false;
                this.issum = true;
                this.loading = true;
                this.params.productName='';
                this.getindexList(this.params);
            }
          }
        },
        mounted(){
            var _this = this;
          var startX = 0,
            startY = 0;
          this.getIcon();
          this.gethot();
          this.gettime();
          this.getheadline();
          document.getElementById('scrollheight').addEventListener('touchstart',function (e) {
            startX=e.touches[0].pageX;
            startY=e.touches[0].pageY;
          })
          document.getElementById('scrollheight').addEventListener('touchmove',function (e) {
            var y = e.touches[0].pageY;
            if(y-startY>0){
              if(_this.loadreload){
              document.querySelector('.top').classList.add('active');
                  _this.getIcon();
                  _this.gethot();
                  _this.loadreload = false;
              setTimeout(function () {
                    _this.loadreload = true;
                    document.querySelector('.top').classList.remove('active');
                  },1000);
              }
            }
          })
        }
      }
  </script>

  <style scoped>
    .header{
      width:100%;
      height:5rem;
      position: relative;
      /*background:red;*/
    }
    .header .van-swipe{
      /*background: green;*/
      height: 5rem;
    }
    .header .van-swipe img{
      width: 100%!important;
      height: 100%;
    }
    .header .titlelocation{
      height: 0.7rem;
      width:100%;
      /*background: red;*/
      position: absolute;
      top: 1rem;
      color: white;
    }
    .header .titlelocation .locationtext{
      width: 50%;
      height: 100%;
      /*background: black;*/
      position: relative;
      line-height: 0.7rem;
      text-align: left;
      float: left;
    }
    .header .titlelocation .locationtext span{
      margin-left: 1.4rem;
    }
    .header .titlelocation img{
      width: 0.35rem;
      height: 0.5rem;
      position: absolute;
      left: 0.8rem;
      top: 50%;
      margin-top: -0.25rem;
    }
    .header .titlelocation .weather{
      width: 50%;
      /*background: green;*/
      height: 100%;
      float: right;
      position: relative;
    }
    .header .titlelocation .weather .weathertext{
      position: absolute;
      height: 0.7rem;
      right: 1.5rem;
      top: 50%;
      margin-top: -0.5rem;
    }
    .header .weather p{
      margin: 0px!important;
    }

    .header .search{
      /*background: palevioletred;*/
      width: 8.5rem;
      height: 0.8rem;
      top: 2.1rem;
      position: absolute;
      left: 50%;
      margin-left: -4.25rem;
      /*background: green;*/

      /*position: absolute;*/
    }
    .header .search input{
      height: 100%!important;
      width: 8rem!important;
      border: none;
      color: #8F8F8F;
      background: rgba(255,255,255,.7);
      border-radius: 0.5rem;
      padding-left: 0.5rem;
    }
    .header .shoptab{
      width: 8rem;
      /*background: palevioletred;*/
      position: absolute;
      top:3.2rem;
      left: 50%;
      margin-left: -4rem;
      color: white;
      overflow-y: hidden;
      overflow-x: scroll;
    }
    .header .shoptab::-webkit-scrollbar{
      display: none;
    }
    .header .shoptab ul{
      display: flex;
      width: 20rem;
    }
    .header .shoptab ul li{
      width: 1.2rem;
      text-align: center;
    }

    /*主题*/
    .menulist{
      height: 5.2rem;
      width: 100%;
      background: white;
    }
    .menulist ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    .menulist ul li{
      flex: 1;
      width: 20%;
      height: 50px;
      min-width: 20%;
      margin-bottom: 0.4rem;
      max-width: 20%;
      font-size: 12px;
      padding: 0px!important;
      padding-top: 0.5rem!important;
    }
    /*通告篮*/
    .slidexiaoxi{
      height: 1.5rem;
      width: 100%;
      background: white;
    }
    .slidexiaoxi div{
      float: left;
    }
    .slidexiaoxi div:first-child img{
      margin-left: 0.6rem;
      margin-top: 0.25rem;
      font-weight: bold;
    }
    .slidexiaoxi div:nth-child(2){
      margin-left: 0.25rem;
      margin-top: 0.1rem;
    }
    .slidexiaoxi div:last-child{
      float: right;
      margin-right: 0.6rem;
      margin-top: 0.4rem;
    }
    .slidexiaoxi div p{
      margin: 0px!important;
      padding: 0px!important;
    }
    .slidexiaoxi .van-notice-bar{
      width: 4rem;
      height: 0.7rem;
      background: white;
      color: #393939;
      /*background: palevioletred;*/
      font-size: 0.3rem;
      margin-top: 0.14rem;
    }
    .slidexiaoxi .van-notice-bar .van-notice-bar__wrap{
        height: 1.24rem!important;
    }

    /*切换*/
    .tabmenu .van-tabs .van-tab{
      font-size: 0.3rem!important;
    }
    .tabmenu .neartitle{
        width: 100%;
        height: 1.4rem;
      background: white;
    }
    .tabmenu .neartitle img{
      margin-top: 0.5rem;
    }
    .van-tabs__wrap--page-top{
      top: 0px!important;
    }

    .van-cell p{
      margin: 0px!important;
      margin-bottom: 0.1rem!important;
    }
    .van-cell .shopimg{
      height: 2.2rem;
      width: 2.2rem;
    }
    .van-cell .textbox{
      margin-left: 2.5rem;
    }
    .van-cell .textbox .titlelist img{
    height: 0.4rem;width: 0.4rem;
      margin-bottom: 0.1rem;
      vertical-align:middle;
    }
    .van-cell .textbox .titlelist{
      font-size: 0.35rem;
    }
    .van-cell .textbox .titlelist span{
      margin-left: 0.2rem;
      vertical-align:middle;
    }
    .van-cell .textbox .discon{
      /*overflow-x: scroll;*/
      color: #FF0000;
    }
    .van-cell .textbox .discon span{
      margin-right: 0.2rem!important;
      border: 1px solid #f08400;
      border-radius: 5px;
      font-size: 0.3rem;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      text-align: center;
      float: left;
    }
    .van-cell .textbox p:first-child{
      font-weight: bold;
    }

    .active{
      animation: mytop 1s infinite;
    }
    @keyframes mytop
    {
      from{top: 5rem;opacity: 0}
      to{top:7rem;opacity: 1}
    }
  </style>
