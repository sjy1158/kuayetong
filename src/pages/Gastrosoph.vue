<template>
  <div class="Gastrosoph">
    <mt-header fixed title="美食天下">
      <mt-button icon="back" slot="left" @click="backIndex"></mt-button>
    </mt-header>

    <div style="" class="searchInput">
     <div>
       <img src="../assets/search.png" alt="">
       <input type="text" placeholder="输入商家或商品名称搜索">
     </div>
    </div>

    <div class="box2" style="margin-top: 20px;" id="box1">
      <ul style="margin:0px!important;">
        <li id="li">
          <router-link to="/allShops"><img src="../assets/gourmetworld-all.png" alt=""></router-link>
          <div :class="index==0 ? 'activeslide':''" @click="activeslideTab(0)">全部</div>
        </li>
        <li>
          <img src="../assets/foodworld-fastfood.png" alt="">
          <div :class="index==1 ? 'activeslide':''" @click="activeslideTab(1)">快餐便当</div>
        </li>
        <li>
          <img src="../assets/foodworld-hamburgerfries.png" alt="">
          <div :class="index==2 ? 'activeslide':''" @click="activeslideTab(2)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/gourmetworld-all.png" alt="">
          <div :class="index==3 ? 'activeslide':''" @click="activeslideTab(3)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/foodworld-fastfood.png" alt="">
          <div :class="index==4 ? 'activeslide':''" @click="activeslideTab(4)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/foodworld-hamburgerfries.png" alt="">
          <div :class="index==5 ? 'activeslide':''" @click="activeslideTab(5)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/gourmetworld-all.png" alt="">
          <div :class="index==6 ? 'activeslide':''" @click="activeslideTab(6)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/foodworld-fastfood.png" alt="">
          <div :class="index==7 ? 'activeslide':''" @click="activeslideTab(7)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/foodworld-hamburgerfries.png" alt="">
          <div :class="index==8 ? 'activeslide':''" @click="activeslideTab(8)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/gourmetworld-all.png" alt="">
          <div :class="index==9 ? 'activeslide':''" @click="activeslideTab(9)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/foodworld-fastfood.png" alt="">
          <div :class="index==10 ? 'activeslide':''" @click="activeslideTab(10)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/foodworld-hamburgerfries.png" alt="">
          <div :class="index==11 ? 'activeslide':''" @click="activeslideTab(11)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/gourmetworld-all.png" alt="">
          <div :class="index==12 ? 'activeslide':''" @click="activeslideTab(12)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/foodworld-fastfood.png" alt="">
          <div :class="index==13 ? 'activeslide':''" @click="activeslideTab(13)">汉堡薯条</div>
        </li>
        <li>
          <img src="../assets/foodworld-hamburgerfries.png" alt="">
          <div :class="index==14 ? 'activeslide':''" @click="activeslideTab(14)">汉堡薯条</div>
        </li>
      </ul>
    </div>


    <div class="shoptab">
        <div style="position: relative;" :class="tabindex==0 ? 'activefont':''" @click="tabactive2(0)">
          <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="tabindex==0 ? 'activeTab':''">

          </div>
          距离最近
        </div>
        <div style="position: relative" :class="tabindex==1 ? 'activefont':''" @click="tabactive2(1)">
          <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="tabindex==1 ? 'activeTab':''">

          </div>
          抵扣最多
        </div>
        <div style="position: relative" :class="tabindex==2 ? 'activefont':''" @click="tabactive2(2)">
          <div style="width:20px;position: absolute;bottom: 0px;left: 50%;margin-left: -10px;" :class="tabindex==2 ? 'activeTab':''">

          </div>
          销量最高
        </div>
        <div></div>
    </div>

    <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">

      <ul class="page-loadmore-list">
        <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
      </ul>


      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>


      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>
    </mt-loadmore>


    <div class="slidecontent">
      <div v-show="tabindex==0">
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
      <div v-show="tabindex==1">
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
      </div>
      <div v-show="tabindex==2">
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "Gastrosoph",
      data(){
          return{
              index:0,
            tabindex:0,
              scrollLeft:0
          }
      },
      methods:{
          tabactive2:function(index){
              this.tabindex = index;
          },
          backIndex:function () {
            this.$router.push('/nearbyShops');
          },
        handleScroll3:function () {
           this.scrollLeft = document.getElementById('box1').scrollLeft

        },
        activeslideTab:function(index){
            this.index = index;

            var width = document.getElementById('li').offsetWidth;
            var scrollL = width*index;
            if(scrollL<window.screen.width/2){
              return
            }else {
              document.getElementById('box1').scrollLeft += width;
            }
            // document.getElementById('box1').scrollLeft =70 *(index+1);
            // alert(window.screen.width/2)
            // if(window.screen.width/2)
        }
      },
      mounted(){
          document.getElementById('box1').addEventListener('scroll',this.handleScroll3);
          // alert(document.getElementById('box1').scrollLeft)
      }
    }
</script>

<style>
  .Gastrosoph{
    background: white;
  }
  .Gastrosoph .mint-header{
    background: white!important;
    color: #393939;
    font-size: 18px!important;
  }
  .Gastrosoph .mint-header i{
    font-size: 18px!important;
  }
  .Gastrosoph .mint-search{
    margin-top: 40px;
    height: 70px!important;
  }


  .searchInput{
    height: 40px;width: 100%;margin-top: 40px;line-height: 40px;
  }
  .searchInput div{
    height: 100%;
    width: 90%;
    /*background: red;*/
    margin: 0 auto;
    position: relative;
  }
    .searchInput div img{
      position: absolute;
      height: 15px;
      width: 15px;
      top: 50%;
      left: 6%;
      margin-top: -7.5px;
    }
  .searchInput div input{
    height: 23px;
    width: 83%;
    padding-left: 7%;
    border: 1px #FFFFFF solid;
    box-shadow:0px 0px 0px 3px #F8F8F8;
    border-radius: 15px;
    outline: none;
    color: #909090;
  }


  .box2{
    width: 100%;
    height: 77px;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .box2::-webkit-scrollbar {
    display: none;
  }
  .box2 ul{
    display: flex;
    height: 80px;
    padding-left: 0px!important;
    /*padding-right: 10px!important;*/
    margin-top: 0px!important;
  }

  .box2 ul li{
    flex: 1;
    line-height: 0px!important;
    /*position: relative;*/
    /*margin-right: 10px;*/
  }
  .box2 ul li img{
    width: 48px;
    height: 40px;
  }
  .box2 ul li div{
      font-size: 12px;
    width: 50px;
    margin: 0 auto;
    margin-top: 8px!important;
    /*margin: 0px!important;*/
    /*width: 30px;*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*margin-left: -15px;*/
    padding-top: 10px;
    padding-bottom: 17px;
  }
  .activeslide{
    color: #F08400;
    border-bottom: 2px solid #F08400;
  }
  .box2 ul li img{
    padding: 0px 5px 0px 5px;
  }

  .shoptab{
    display: flex;
    border-bottom: 1px solid #f3f3f3;
    border-top: 1px solid #f3f3f3;
  }
  .shoptab div{
    flex: 1;
    font-size: 12px;
    padding-bottom: 10px;
    padding-top: 10px;
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

  .activeTab{
    border-bottom: 2px solid #F08400;
  }
  .activefont{
    color: #F08400;
  }
</style>
