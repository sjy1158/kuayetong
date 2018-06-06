<template>
    <div class="shopStore">
      <van-nav-bar
        fixed
        title="美食天下"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <!--搜索框-->
      <div class="searchbox" style="margin-top: 1.1rem;">
        <div class="searchbox2">
          <div class="icon">
            <van-icon name="search" />
          </div>
          <input type="text" placeholder="输入商家或商品名称搜索">
        </div>
      </div>


      <!--商品tab切换-->
      <div class="slideshoptab" id="slideshoptab" style="">
        <div style="" id="tab1">
          <van-tabs type="line" @click="onClick" line-width="20">
            <van-tab>
              <div slot="title">
                <img src="../assets/merchants_fast_food_normal.png" alt="">
                <p class="titleshop">全部</p>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <img src="../assets/seller_fries_normal.png" alt="">
                <p>快餐便当</p>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <img src="../assets/merchants_fast_food_normal.png" alt="">
                <p>汉堡薯条</p>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <img src="../assets/seller_fries_normal.png" alt="">
                <p>汉堡薯条</p>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <img src="../assets/merchants_fast_food_normal.png" alt="">
                <p>汉堡薯条</p>
              </div>
            </van-tab>
            <van-tab>
              <div slot="title">
                <img src="../assets/seller_fries_normal.png" alt="">
                <p>汉堡薯条</p>
              </div>
            </van-tab>
          </van-tabs>
        </div>
    </div>


      <div class="tabmenu" id="tabmenu" style="">
        <van-tabs @click="onClick2" sticky line-width="20">
          <van-tab v-for="item in menus" :title="item">
            <router-view></router-view>
          </van-tab>
        </van-tabs>
      </div>






    </div>
</template>

<script>

    import index from "../router";

    export default {
        name: "Businesshome",
      data(){
          return{
            menus:[
              '距离最近',
              '折扣最多',
              '销量最高'
            ],
          }
      },
      methods:{
        onClick(index,title){
          alert(index);
        },
        onClick2(index,title){
          switch(index){
            case 0:
              this.$router.push('/Businesshome/DistanceNearshopcenter')
              break
          }
        }
      },
      mounted(){
        this.onClick2(0,'距离最近')
      }
    }
</script>

<style scoped>
  .van-nav-bar{
    height: 1.1rem;
    width: 100%;
    line-height: 1.1rem;
    z-index: 50!important;
  }
  /*van-hairline--bottom van-nav-bar .van-nav-bar--fixed*/
    .searchbox{
      height: 2.1rem;
      width: 96%;
      background: white;
      padding-left: 2%;
      padding-right: 2%;
    }
    .searchbox .searchbox2{
      height: 100%;
      width: 100%;
      /*background: palevioletred;*/
      position: relative;
    }
    .searchbox .searchbox2 .icon{
      width: 1rem;
      height: 0.9rem;
      line-height: 1.1rem;
      position: absolute;
      top:50%;
      margin-top: -0.45rem;
      font-size: 15px;
    /*background: palevioletred;*/
      z-index: 1;
    }
  .searchbox .searchbox2 input{
    width: 91%;
    height: 0.9rem;
    border-radius: 0.5rem;
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -0.45rem;
    padding-left: 9%;
    outline: none;
    border: none;
    box-shadow:0px 0px 8px #f2f2f2;
  }
    /*tab切换*/
    .van-tabs p{
      margin: 0px!important;
      padding: 0px!important;
      font-size: 0.37rem;
    }
    .van-tabs img{
      margin-top: 10px;
    }
    .van-tabs .van-tab{
      height: 2rem!important;
    }



</style>
