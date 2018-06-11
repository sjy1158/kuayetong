<template>
 <div class="nearShop">
   <!--头部-->
   <div id="scrollheight">
   <div class="header">
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
         <span>新塘路新传媒产</span>
       </div>
       <div class="weather">
         <div class="weathertext">
          <p style="font-size: 0.5rem;">27℃</p>
           <p>多云</p>
         </div>
       </div>
     </div>
      <!--输入框-->
     <div class="search">
       <input type="text" placeholder="输入商品名称／宝贝标题搜索">
     </div>

     <div class="shoptab">
       <ul id="choceshop">
         <li class="van-ellipsis">肯德基</li>
         <li class="van-ellipsis">汉堡王</li>
         <li class="van-ellipsis">肯德基</li>
         <li class="van-ellipsis">烤肉</li>
         <li class="van-ellipsis">满30减15</li>
         <li class="van-ellipsis">吃货公敌</li>
         <li class="van-ellipsis">小龙虾</li>
         <li class="van-ellipsis">满30减15</li>
         <li class="van-ellipsis">吃货公敌</li>
         <li class="van-ellipsis">小龙虾</li>
         <li class="van-ellipsis">满30减15</li>
         <li class="van-ellipsis">吃货公敌</li>
         <li class="van-ellipsis">小龙虾</li>
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
         <img src="../assets/Lookatthewhole.png" alt="" @click="openMeishilist">
         <p>查看全部</p>
       </li>
     </ul>
   </div>

   <!--通知栏-->
   <div class="slidexiaoxi">
      <div>
        <img src="../assets/business_business_headlines.png" alt="">
      </div>
     <div>
       <img src="../assets/merchant_avatar.png" alt="">
     </div>
     <van-notice-bar
       text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
       left-icon="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527658925226&di=57af8daf1382c8c982ccc5db1e39f932&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01635d571ed29832f875a3994c7836.png%40900w_1l_2o_100sh.jpg"
     />
     <div>
       2月3日
     </div>
   </div>
     <div style="width: 100%;height: 0.2rem">

     </div>
   </div>

  <!--tab-->

   <div class="tabmenu" style="">
     <div class="neartitle"><img src="../assets/merchants_nearby_merchants.png" alt=""></div>
     <van-tabs sticky line-width="20">
       <van-tab v-for="item in menus" :title="item">
         <div>
           <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
             <van-list
               v-model="loading"
               :finished="finished"
               @load="onLoad"
             >
               <van-cell>
                 <div class="pullbox">
                   <router-link to="/Shophome"><img src="../assets/merchant_avatar3.png" alt="" style="float: left" class="shopimg"></router-link>
                   <div class="textbox">
                     <p>星巴克Starbucks（新塘路2店）</p>
                     <p class="titlelist"><img src="../assets/businesses_icon.png" alt=""><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
                     <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
                   </div>
                 </div>
               </van-cell>
               <van-cell>
                 <div class="pullbox">
                   <img src="../assets/merchant_avatar3.png" alt="" style="float: left" class="shopimg">
                   <div class="textbox">
                     <p>星巴克Starbucks（新塘路2店）</p>
                     <p class="titlelist"><img src="../assets/businesses_icon.png" alt=""><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
                     <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
                   </div>
                 </div>
               </van-cell>
               <van-cell>
                 <div class="pullbox">
                   <img src="../assets/merchant_avatar3.png" alt="" style="float: left" class="shopimg">
                   <div class="textbox">
                     <p>星巴克Starbucks（新塘路2店）</p>
                     <p class="titlelist"><img src="../assets/businesses_icon.png" alt=""><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
                     <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
                   </div>
                 </div>
               </van-cell>
               <van-cell>
                 <div class="pullbox">
                   <img src="../assets/merchant_avatar3.png" alt="" style="float: left" class="shopimg">
                   <div class="textbox">
                     <p>星巴克Starbucks（新塘路2店）</p>
                     <p class="titlelist"><img src="../assets/businesses_icon.png" alt=""><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
                     <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
                   </div>
                 </div>
               </van-cell>
               <van-cell>
                 <div class="pullbox">
                   <img src="../assets/merchant_avatar3.png" alt="" style="float: left" class="shopimg">
                   <div class="textbox">
                     <p>星巴克Starbucks（新塘路2店）</p>
                     <p class="titlelist"><img src="../assets/businesses_icon.png" alt=""><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
                     <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
                   </div>
                 </div>
               </van-cell>
               <van-cell>
                 <div class="pullbox">
                   <img src="../assets/merchant_avatar3.png" alt="" style="float: left" class="shopimg">
                   <div class="textbox">
                     <p>星巴克Starbucks（新塘路2店）</p>
                     <p class="titlelist"><img src="../assets/businesses_icon.png" alt=""><span>咖啡糕点</span><span>人均消费68元</span><span style="float: right"><100m</span></p>
                     <p class="discon"><span>100抵10</span><span>100抵10</span><span>100抵10</span><span>100抵10</span></p>
                   </div>
                 </div>
               </van-cell>
             </van-list>
           </van-pull-refresh>

         </div>
       </van-tab>
     </van-tabs>
   </div>



 </div>
  </template>
  <script>
     import axios from 'axios'
      export default {
          name: "nearbyShops",
        data(){
            return {
              images: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527658925226&di=57af8daf1382c8c982ccc5db1e39f932&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01635d571ed29832f875a3994c7836.png%40900w_1l_2o_100sh.jpg',
                'https://img.yzcdn.cn/2.jpg'
              ],
              menus:[
                '距离最近',
                '折扣最多',
                '销量最高'
              ],
              isfixed:false,
              iconarr:'',
              list:['11111','2222222'],
              loading:false,
              finished:false,
              isLoading: false
            }
        },
        methods:{
          // 加载
          onLoad() {
            setTimeout(() => {
              for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
              }
              this.loading = false;

              if (this.list.length >= 40) {
                this.finished = true;
              }
            }, 500);
          },
          // 刷新
          onRefresh() {
            setTimeout(() => {
              this.$toast('刷新成功');
              this.isLoading = false;
              this.count++;
            }, 500);
          },

          openBusinesshome(name,id){
            this.$router.push('/Businesshome');
            localStorage.setItem("name", name);
            localStorage.setItem("id",id);
          },
          openMeishilist(){
            this.$router.push('/allShops');
          }
        },
        mounted(){
            var _this = this;
            window.addEventListener('scroll',this.watchScroll);
            var datajson = this.$api.geticon();
            datajson.then(function (res) {
             _this.iconarr = res.list;
            })
        }
        // data(){
        //     var self = this;
        //     return{
        //       list:[1,2,3,4],
        //       navBarWrap:false,
        //       tmp:'',
        //       weather:'',
        //       index:0,
        //       isfixed:false,
        //       title:'外卖',
        //       value:'',
        //       selected:'1',
        //       prizeList: [
        //         { name: '今日数据' },
        //         { name: 'uiuiuiuui' },
        //         { name: 'hkhhhhjkh' },
        //         { name: 'dadadada' },
        //         { name: 'dadadadada' }
        //       ],
        //       activeIndex: 0,
        //       center: [121.59996, 31.197646],
        //       lng: 0,
        //       lat: 0,
        //       loaded: false,
        //       address:'',
        //       plugin: [{
        //         pName: 'Geolocation',
        //         events: {
        //           init(o) {
        //             // o 是高德地图定位插件实例
        //             o.getCurrentPosition((status, result) => {
        //               if (result && result.position) {
        //                 self.address = result.formattedAddress;
        //                 self.lng = result.position.lng;
        //                 self.lat = result.position.lat;
        //                 self.center = [self.lng, self.lat];
        //                 self.loaded = true;
        //                 self.$nextTick();
        //               }
        //             });
        //           }
        //         }
        //       }]
        //     };
        // },
        // computed: {
        //   top() {
        //     return - this.activeIndex * 30 + 'px';
        //   }
        // },
        // methods:{
        //  getWeather () {
        //     var _this = this;
        //     axios.get('http://restapi.amap.com/v3/weather/weatherInfo?key=534c5d265f9fb6b8907515fe31677328&city=杭州').then(function (response) {
        //         var data = response.data;
        //       if(data.status==1){
        //         _this.tmp = data.lives[0].temperature;
        //         _this.weather = data.lives[0].weather;
        //       }
        //       }).catch(function (error) {
        //         alert(JSON.stringify(error))
        //     })
        //   },
        //   tabactive(index){
        //       this.index = index;
        //   },
        //   watchScroll(){
        //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //     var domheight = document.getElementById('alldom').offsetHeight;
        //     //  当滚动超过 50 时，实现吸顶效果
        //     if (scrollTop > 49) {
        //       this.navBarFixed = true
        //     } else {
        //       this.navBarFixed = false
        //     };
        //     if(scrollTop>domheight){
        //       this.isfixed = true;
        //     }else{
        //       this.isfixed = false;
        //     }
        //   },
        //   loadMore() {
        //     this.loading = true;
        //     setTimeout(() => {
        //       let last = this.list[this.list.length - 1];
        //       for (let i = 1; i <= 10; i++) {
        //         this.list.push(last + i);
        //       }
        //       this.loading = false;
        //     }, 2500);
        //   }
        //   },
        //
        //   mounted(){
        //     var _this = this;
        //     window.addEventListener('scroll',this.watchScroll);
        //   setInterval(()=> {
        //     if(this.activeIndex < this.prizeList.length) {
        //       this.activeIndex += 1;
        //     } else {
        //       this.activeIndex = 0;
        //     }
        //   }, 1000);
        //     this.getWeather();
        // }
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
      right: 0.8rem;
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
      margin-top: 0.3rem;
    }
    .slidexiaoxi div p{
      margin: 0px!important;
      padding: 0px!important;
    }
    .slidexiaoxi .van-notice-bar{
      width: 4.5rem;
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
      margin-bottom: 0.2rem!important;
    }
    .van-cell .shopimg{
      height: 2.2rem;
      width: 2.2rem;
    }
    .van-cell .textbox{
      margin-left: 2.5rem;
    }
    .van-cell .textbox p img{
      vertical-align:middle;
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
    }
    .van-cell .textbox p:first-child{
      font-weight: bold;
    }
  </style>
