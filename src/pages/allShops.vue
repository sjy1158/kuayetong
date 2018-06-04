<template>
  <div class="allShops">
    <!--搜索框-->
    <div class="searchbox" style="position: fixed;top: 0px;">
      <div class="searchbox2">
        <div class="left">
          <van-icon name="arrow-left" />
        </div>
        <div class="icon">
          <van-icon name="search" />
        </div>
        <input type="text" placeholder="输入商家或商品名称搜索">
      </div>
    </div>
    <!--搜索框ending-->
    <div class="gopindao" style="position: fixed;top: 2.1rem;width: 100%;z-index: 999999;background: #f2f2f2">
        <div style="float: left">美食</div>
      <div style="width: 70%;height: 1.5rem;float: right;margin-right: 0.3rem;line-height: 1.5rem;font-size: 0.3rem;">
        <span style="float: left">美食（1996）</span>
        <span style="float: right;">去频道</span>
      </div>
    </div>

    <!--侧边栏-->
    <div class="shoplist" style="top: 3.5rem;z-index: -99999999;margin-bottom: 2rem;position: fixed;">
      <div style="float: left;background: white">
        <ul style="width: 2.5rem;">
          <li @click="onClick(0)" v-bind:class="index==0 ? 'active':''">甜点饮品</li>
          <li @click="onClick(1)" v-bind:class="index==1 ? 'active':''">正餐优选</li>
          <li @click="onClick(2)" v-bind:class="index==2 ? 'active':''">能量西餐</li>
          <li @click="onClick(3)" v-bind:class="index==3 ? 'active':''">快食简餐</li>
          <li @click="onClick(4)" v-bind:class="index==4 ? 'active':''">异国料理</li>
          <li @click="onClick(5)" v-bind:class="index==5 ? 'active':''">鲜花蛋糕</li>
          <li @click="onClick(6)" v-bind:class="index==6 ? 'active':''">家常菜</li>
          <li @click="onClick(7)" v-bind:class="index==7 ? 'active':''">夜宵</li>
          <li @click="onClick(8)" v-bind:class="index==8 ? 'active':''">早餐</li>
          <li @click="onClick(9)" v-bind:class="index==9 ? 'active':''">小吃馆</li>
          <li @click="onClick(10)" v-bind:class="index==10 ? 'active':''">小炒菜</li>
        </ul>
      </div>
    </div>

    <div style="width: 70%;background: white;float: right;margin-right: 0.25rem;position: absolute;right: 0px;top: 3.5rem;z-index: -99999">
      <router-view></router-view>
    </div>


  </div>
</template>

<script>
    export default {
        name: "allShops",
      data(){
          return{
              activeKey: 0,
              index:0
          }
      },
      methods: {
        onClick(index) {
          this.index = index;
          switch (index){
            case 0:
              this.$router.push('/allShops/Meishilist');
              break
          }
        }
      },
      mounted(){
          this.onClick(0);
      }
    }
</script>

<style scoped>
  .active{
    font-weight: bold;
    background: #f2f2f2;
  }
  .left{
    position: absolute;
    left: 0px;
    height: 1.4rem;
    width: 5%;
    /*background: palevioletred;*/
    top: 50%;
    margin-top: -0.7rem;
    line-height: 1.7rem;
    z-index: 999999999999;
    font-size: 0.7rem!important;
  }
  .searchbox{
    height: 2.1rem;
    width: 94%;
    background: white;
    padding-left: 3%;
    padding-right: 3%;
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
    left: 10%;
    margin-top: -0.45rem;
    font-size: 15px;
    /*background: palevioletred;*/
    z-index: 999999999999999;
  }
  .searchbox .searchbox2 input{
    width:80%;
    height: 0.9rem;
    border-radius: 0.5rem;
    position: absolute;
    left: 10%;
    top: 50%;
    margin-top: -0.45rem;
    padding-left: 9%;
    outline: none;
    border: none;
    box-shadow:0px 0px 8px #f2f2f2;
  }

  /*//去频道*/
  .gopindao div:first-child{
      width: 2.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      /*background: white;*/
      /*margin-top: 10px;*/
    font-size: 0.3rem;
  }
  .gopindao div:nth-child(2){
    /*font-size: 0.4rem;*/
  }

  /*商品列表*/
  .van-badge-group{
      width: 2.5rem!important;
  }
  .van-badge-group .van-badge{
    background: white!important;
    font-size: 0.3rem!important;
    color: #393939!important;
  }
  .shoplist ul{
      height: 10rem;
    /*background: palevioletred;*/
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .shoplist ul::-webkit-scrollbar{
    display: none;
  }
  .shoplist ul li{
    height: 1.5rem;
    line-height: 1.5rem;
  }
</style>
