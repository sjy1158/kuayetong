<template>
  <div class="nearShop">
    <div class="search" style="position: fixed;top: 0px;z-index: 99999999999999999999;display: none" id="search">
      <div style="width:100%;background:white;position: absolute;">
        <form @submit.prevent="submit" action="javascript:return true">
          <input type="search" v-model="value" class="input2" style="margin-top: 27px;" placeholder="输入商品名称／宝贝标题搜索" ref="input1" @blur="clear()" @keyup="show($event)">
        </form>
      </div>
    </div>
    <!--头部-->
    <van-pull-refresh v-model="isLoading2" @refresh="onRefresh2">
      <div id="scrollheight">
        <div class="header">
          <el-amap vid="amap" v-if="mark=='1'" :plugin="plugin2" class="amap-demo" style="display: none"></el-amap>
          <el-amap vid="amap" v-else :plugin="plugin" class="amap-demo" style="display: none"></el-amap>
          <div>
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="item in images">
                <img :src="item.advertiseImageUrl" style="-webkit-font-smoothing:antialiased"/>
              </van-swipe-item>
            </van-swipe>
          </div>
          <!--天气显示-->
          <div class="titlelocation">
            <div class="locationtext">
              <img src="../assets/business_positioning@2x.png" alt="" style="width: 10px;height: 15px;">
              <!--<van-notice-bar style="background: none!important;left: 1rem;color: white!important;top: -0.1rem;" v-if="loaded">-->
              <!--{{formattedAddress}}-->
              <!--</van-notice-bar>-->
              <van-notice-bar  v-if="loaded" style="background: none!important;left: 1rem;color: white!important;top: -0.1rem;font-size: 16px!important;"
                               :text="formattedAddress"
              />

              <van-notice-bar style="background: none!important;left: 1rem;color: white!important;top: -0.1rem;font-size: 16px!important;" v-else>
                定位中...
              </van-notice-bar>

              <!--<span v-else>定位中...</span>-->
            </div>
            <div class="weather" style="margin-top: 5px;">
              <div class="weathertext">
                <p style="font-size: 15px;">{{tmp}}℃</p>
                <p style="font-size: 8px;">{{weather}}</p>
                <img v-show="weathericon==true" src="../assets/business_weather@2x.png" alt="" style="padding-left: 0.3rem;height: 20px;width: 18px;padding-top: 0.15rem;">
                <img v-show="weathericon==false" src="../assets/during_the_day@2x.png" alt="" style="padding-left: 0.3rem;height: 20px;width: 18px;padding-top: 0.15rem;">
              </div>
            </div>
          </div>
        <!--输入框-->
          <div class="search">
            <form @submit.prevent="submit" action="javascript:return true">
              <input type="search" v-model="value" class="input2" style="" placeholder="输入商品名称／宝贝标题搜索" ref="input1" @blur="clear()" @keyup="show($event)">
            </form>
          </div>

          <div class="shoptab">
            <ul id="choceshop">
              <li class="van-ellipsis" v-for="item in hotarr">{{item}}</li>
            </ul>
          </div>


        <div style="width: 110%;height: 50px;position: absolute; border-radius: 60% 60% 0 0;background: white;bottom: -30px;left: 50%;margin-left: -55%;-webkit-font-smoothing:antialiased" >

        </div>
      </div>
      <!--主题-->
      <div class="menulist" style="">
        <ul>
          <li v-for="item in iconarr" @click="openBusinesshome(item.name,item.id)">
            <img :src="item.imageUrl" alt="">
            <p>{{item.name}}</p>
          </li>
          <li @click="openMeishilist">
            <img src="../assets/merchants_all_icon@2x.png" alt="" style="width: 34px;height: 34px;">
            <p>查看全部</p>
          </li>
        </ul>
      </div>

      <!--通知栏-->
      <div class="slidexiaoxi">
        <div>
          <img src="../assets/business_business_headlines@2x.png" alt="" style="height: 28px;width: 27px;margin-top: 11px;">
        </div>
        <div>
          <img src="../assets/merchant_avatar@3x.png" alt="" style="width: 34px;height: 34px;margin-top: 5px;">
        </div>
        <!--<van-notice-bar :scrollable="true" v-if="loaded">-->
          <!--<span style="margin-right: 0.5rem;" v-for="item in linearr">{{item.id}}.{{item.headline}}</span>-->
        <!--</van-notice-bar>-->
        <div class="scroll-wrap">
          <ul class="scroll-content" :style="{ top }">
            <li v-for="item in linearr">
              <p style="font-size: 12px;color: #393939;font-weight: bold">{{item.headline}}</p>
              <p style="font-size: 12px;color: #393939;">@{{item.headline}}</p>
            </li>
            <li>
              <p style="font-size: 12px;color: #393939;font-weight: bold">黄焖鸡开业了,你造么？</p>
              <p style="font-size: 12px;color: #393939;">@黄焖鸡开业了,你造么？</p>
            </li>
          </ul>
        </div>

        <!--<van-notice-bar style="background: none!important;left: 1rem;color: white!important;top: -0.1rem;"-->
        <!--:text="formattedAddress"-->
        <!--/>-->
        <div style="float: right">
          <img src="../assets/merchant_notice@2x.png" alt="" style="width: 16px;height: 14px;vertical-align: middle;margin-right: 20px;">
          <span style="vertical-align: middle;">{{time2}}</span>
        </div>
      </div>
      <div style="width: 100%;height: 10px">

      </div>
    </div>

    <!--tab-->

    <div class="tabmenu" style="">
      <div class="neartitle"><img src="../assets/merchants_nearby_merchants@2x.png" alt="" style="width: 106px;height: 16px;"></div>
      <van-tabs @click="onClick2" sticky line-width="20" style="border-top: 0px!important;">
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
                <div class="pullbox" @click="openShophome(item.shopId)" :v-lazy="item">
                  <img :src="item.shopHeadImageUrl"  :v-lazy="item.shopHeadImageUrl" alt="" style="float: left" class="shopimg">
                  <div class="textbox" style="">
                    <p>{{item.title}}</p>
                    <p class="titlelist"><img src="../assets/businesses_icon@2x.png" alt=""><span>{{item.shopType}}</span><span style="padding-left: 10px;">人均消费{{item.averageMoney}}元</span><span style="position: absolute;right: 25px;">{{item.distanceString}}</span></p>
                    <p class="discon" v-if="item.deductionList.length!=0">
                      <span v-for="item1 in item.deductionList">{{item1.requireValue}}抵{{item1.value}}</span>
                    </p>
                    <p class="discon1" v-else>
                      <span>此店暂无优惠券~~~~~</span>
                    </p>
                  </div>
                </div>
              </van-cell>
            </van-list>
          </van-pull-refresh>
          <div v-show="finished==true" style="margin-top: 0.5rem;margin-bottom: 0.5rem;color: grey">
            加载完毕........
          </div>
        </div>
        <div v-show="issum==false" style="margin-top: 1rem;margin-bottom: 1rem;">
          <div><img src="../assets/load_failed@2x.png" alt="" style="height: 1rem;width: 1rem;"></div>
          <span style="padding-top: 0.7rem;">暂无数据</span>
        </div>

      </van-tabs>
    </div>
    </van-pull-refresh>
  </div>
</template>
<script>
  import axios from 'axios'
  import storage from '../util/storage.js'
  export default {
    name: "nearbyShops",
    data(){
      var _this = this;
      return {
        typemark:'',
        linearr:[],
        activeIndex: 0,
        weathericon:'',
        time2:'',
        userId:'',
        hotarr:[],
        loadreload:true,
        issum:true,
        value:'',
        images: [],
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
        isLoading2:false,
        pageY:'',
        params:{
          userId:'',
          productName:'',
          latitude:'',
          longitude:'',
          pageNum:1,
          num:5,
          mark:1
        },
        markParams:{
          userId:''
        },
        mark:'',
        logarr:[],
        plugin2:'',
        plugin:[{
          pName:'Geolocation',
          events:{
            init(o){
              o.getCurrentPosition((status,result)=>{
                if(result&&result.position) {
                  _this.city = result.addressComponent.city;
                  _this.params.latitude = result.position.lng;
                  _this.params.longitude = result.position.lat;
                  _this.center = [_this.params.longitude, _this.params.latitude];
                  _this.loaded = true;
                  _this.finished = false;
                  _this.loading = true;
                  if(_this.params.latitude!=""&&_this.params.longitude!=""){
                   _this.formattedAddress = result.formattedAddress.split('市')[1];
                  }else{
                    _this.formattedAddress = "全部"
                  }
                  _this.getweather(_this.city);
                  _this.getindexList(_this.params);
                  _this.$nextTick();
                }else{
                  _this.params.latitude =_this.logarr[0];
                  _this.params.longitude = _this.logarr[1];
                  _this.center = [_this.params.longitude, _this.params.latitude];
                  _this.loaded = true;
                  _this.finished = false;
                  _this.loading = true;
                  if(_this.params.latitude!=""&&_this.params.longitude!=""){
                  _this.formattedAddress = _this.logarr[3].split('#')[0];
                  }else{
                    _this.formattedAddress = "全部"
                  }
                  // alert(JSON.stringify(_this.params));
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
      submit() {
        return false
      },
      // 刷新
      onRefresh2(){
        setTimeout(()=>{
          this.$toast('刷新成功');
          this.isLoading2=false;
          this.getIcon();
          this.gethot();
          this.gettime();
          this.getheadline();
          this.getBanner();
          this.list=[];
          this.loading=true;
          this.issum=true;
          this.finished=false;
          this.params.productName='';
          this.params.pageNum=1;
          this.params.num=5;
          this.getindexList(this.params);
        },500);
      },
      openShophome(shopid){
        document.body.scrollTop=0;
        document.getElementById('search').style.display='none';
        this.$router.push({
          path:'/Shophome/starProducts',
          query:{
            shopid:shopid,
            pathid:1,
            userId:this.userId,
            mark:this.mark
          }
        });
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
        document.body.scrollTop=0;
        document.getElementById('search').style.display='none';
        this.$router.push({
          path:'/Businesshome',
          query:{
            root:1,
            name:name,
            id:id,
            lat:this.params.latitude,
            lng:this.params.longitude,
            mark:this.mark
            // userId:this.userId
          }
        });
      },
      openMeishilist(){
        this.$router.push({
          path:'/allShops',
          query:{
            lat:this.params.latitude,
            lng:this.params.longitude
          }
        });
        // window.location.href='https://login.m.taobao.com/login.htm?';
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
      },
      // 获取banner图
      getBanner(){
        var _this=this;
        this.$api.getImage().then((res)=>{
          _this.images=res.list;
        })
      },
      getmark(params){
        var _this=this;
        this.$api.getMark(params).then((res)=>{
          _this.mark=res.user.mark
           if(_this.mark==1){
              _this.$router.push('/shareSome')
           }
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
    computed: {
      top() {
        return - this.activeIndex * 50 + 'px';
      }
    },
    created(){
      this.getBanner();
      this.getheadline();
      var arrstr=[];
      var arr=this.$geturl.getL();
      for(var i=0;i<arr.length;i++){
        arrstr.push(arr[i].split('=')[1]);
      }
      this.logarr=arrstr;
      this.userId=this.logarr[4];
      this.getmark(this.markParams);
      if(this.mark=='1'){
        this.$router.push('/shareSome')
      }
      this.params.userId=this.logarr[4];
      this.markParams.userId=this.logarr[4];
      this.params.longitude=this.logarr[0];
      this.params.latitude=this.logarr[1];
      if(this.logarr[5]==undefined){
        this.mark='';
      }else {
        this.mark=this.logarr[5]
      }
    },
    mounted(){
      this.userId=this.logarr[4];
      this.getmark(this.markParams);
      if(this.mark=='1'){
        this.$router.push('/shareSome')
      }
      this.markParams.userId=this.logarr[4];
      this.params.userId=this.logarr[4];
      this.params.longitude=this.logarr[0];
      this.params.latitude=this.logarr[1];
      if(this.logarr[5]==undefined){
        this.mark='';
      }else {
        this.mark=this.logarr[5]
      }
      var _this = this;
      var startX = 0,
        startY = 0;
      setInterval(() => {
        if(this.activeIndex < this.linearr.length) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      }, 2500);
      // alert(JSON.stringify(this.params));
      // this.getindexList(this.params);
      this.getweather('杭州');
      this.getIcon();
      this.gethot();
      this.gettime();
      setTimeout(()=>{
        document.querySelector('.van-tabs__line').style.transform='translateX(1.4rem)';
      },100);
      window.addEventListener('scroll',function () {
        var height=document.querySelector('.header').clientHeight;
        var pageY=window.pageYOffset;
        if(pageY>height||pageY==height){
          document.getElementById('search').style.display='block';
        }else{
          document.getElementById('search').style.display='none';
        }
        // alert(window.pageYOffset);
      })
    }
  }
</script>

<style scoped>
  .van-nav-bar{
    height: 43px;
    width: 100%;
    line-height: 43px;
    padding-top: 18px;
    z-index: 99999999!important
  }
  element {
    width: 20px!important;
    transform: translateX(50px)!important;
    transition-duration: 0.2s!important;
  }
  .scroll-wrap{
    width: 4.2rem;
    height: 50px;
    /*border: 1px solid blue;*/
    overflow: hidden;
  }

  .scroll-content{
    position: relative;
    transition: top 0.5s;}

  .scroll-content li{
    line-height: 20px;
    text-align: left;
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .header{
    width:100%;
    height:255px;
    position: relative;
    overflow: hidden;
    /*background:red;*/
  }
  .header .van-swipe{
    /*background: green;*/
    height:255px;
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
    top: 0.7rem;
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
    position: absolute;
    top: 0.26rem;
    left: 34px;
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
  .header .titlelocation .weather .weathertext img{
    height: 20px;
    width: 18px;
    position: absolute;
    right: -10px;
    left: 20px;
    top: 1px;
  }
  .header .weather p{
    margin: 0px!important;
  }

  .header .search form{
      /*background: palevioletred;*/
    width:12rem;
    height: 0.8rem;
    top:-0.05rem;
    position: absolute;
    left: 50%;
    margin-left: -6rem;
    /*background: green;*/

    /*position: absolute;*/
  }
  #search{
    width:100%;
    height: 0.8rem;
    top: 1.7rem;
    position: absolute;
  }
  #search input{
    height: 30px!important;
    width:90%!important;
    /*border: 1px solid grey;*/
    border: none;
    background: #EAEBEF;
    /*background: rgba(255,255,255,.95);*/
    box-shadow: 0px 0px 8px #f2f2f2;
    /*border-radius: 0.5rem;*/
    /*padding-left: 0.5rem;*/
    padding-right: 0.3rem;
    font-size: 14px;
    text-align: center;
    color: black;
    border-radius: 50px;
    margin-bottom: 10px;
  }
  .search2{
    width:100%;
    height: 0.8rem;
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .search2 input{
    height: 100%!important;
    width:100%!important;
    border: none;
    background: rgba(255,255,255,.95);
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.3rem;
    font-size: 14px;
    color: black;
  }
  .header .search form input{
    height: 100%!important;
    width:8.5rem!important;
    border: none;
    /*background: rgba(255,255,255,.95);*/
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.3rem;
    font-size: 14px;
    color: black;
    margin-top: 1.8rem;
  }
  .header .shoptab{
    width: 8rem;
    /*background: palevioletred;*/
    position: absolute;
    top:2.6rem;
    left: 50%;
    margin-left: -4rem;
    color: white;
    overflow-y: hidden;
    overflow-x: scroll;
    border: none!important;
  }
  .header .shoptab::-webkit-scrollbar{
    display: none;
  }
  .header .shoptab ul{
    display: flex;
    width: 20rem;
  }
  .header .shoptab ul li{
    font-size: 11px!important;
    width: 1.2rem;
    text-align: center;
  }

  /*主题*/
  .menulist{
    padding-left: 10px!important;padding-right: 10px!important;
    background: white;
  }
  .menulist ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 9px;
  }
  .menulist ul li{
    flex: 1;
    width: 20%;
    height: 49px;
    min-width: 20%;
    max-width: 20%;
    font-size: 12px;
    padding: 0px!important;
    padding-top: 20px!important;
    /*padding-top: 0.5rem!important;*/
  }
  .menulist ul li p{
    margin: 0px!important;
    padding-top: 5px;
    color: #393910;
    font-weight: normal;
  }
  .menulist ul li img{
    height: 25px!important;
    width: 25px!important;
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
    margin-top: 0.45rem;
  }
  .slidexiaoxi div p{
    margin: 0px!important;
    padding: 0px!important;
  }
  .slidexiaoxi .van-notice-bar{
    width: 3.5rem;
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
    font-size: 12px!important;
  }
  .tabmenu .neartitle{
    width: 100%;
    height: 1rem;
    background: white;
  }
  .tabmenu .neartitle img{
    margin-top: 0.5rem;
  }
  .van-tabs__wrap--page-top{
    top: 0px!important;
  }
  .van-cell{
    /*border-bottom: 1px solid #F2F2F2;*/
  }
  .van-cell p{
    margin: 0px!important;
    /*margin-bottom: 0.1rem!important;*/
  }
  .van-cell .shopimg{
    height: 70px;
    width: 70px;
  }
  .van-cell .textbox{
    margin-left: 85px;
  }
  .van-cell .textbox .titlelist img{
    height: 10px;
    width: 11px;
    margin-bottom: 2px;
    vertical-align:middle;
  }
  .van-cell .textbox .titlelist{
    font-size: 10px;
  }
  .van-cell .textbox .titlelist span{
    margin-left: 0.2rem;
    vertical-align:middle;
  }
  .van-cell .textbox .discon{
    /*overflow-x: scroll;*/
    color: #FF0000;
  }
  .van-cell .textbox .discon1{
    /*overflow-x: scroll;*/
    color: #FF0000;
  }
  .van-cell .textbox .discon span{
    margin-right: 0.2rem!important;
    border: 1px solid #F08400;
    border-radius: 3px;
    font-size: 10px;
    height: 14px;
    width: auto;
    padding-left: 2px;
    padding-right: 2px;
    line-height: 15px!important;
    text-align: center;
    float: left;
    font-weight: bold;
    margin-top: 7px;
  }
  .van-cell .textbox .discon1 span{
    margin-right: 0.2rem!important;
    font-size: 10px;
    height: 14px;
    width: auto;
    padding-left: 2px;
    padding-right: 2px;
    line-height: 15px!important;
    text-align: center;
    float: left;
    margin-top: 7px;
  }
  .van-cell .textbox p:first-child{
    font-weight:bolder;
    font-size: 14px;
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
