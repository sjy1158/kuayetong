<template>
  <div class="allShops">
    <!--搜索框-->
    <div class="searchbox" style="position: fixed;top: 0px;">
      <div class="searchbox2">
        <div class="left" @click="openMeishilist">
          <van-icon name="arrow-left" />
        </div>
        <div class="icon">
          <van-icon name="search" />
        </div>
        <input type="search" v-model="value" placeholder="输入商家或商品名称搜索" ref="input1" @keyup="show($event)">
      </div>
    </div>
    <div style="margin-top: 2.2rem;margin-right: 0.25rem;">
      <div style="width: 2.5rem;padding-top: 9px;font-size: 13px;float: left;">分类</div>
      <div style="width: 72%;float: right;padding-top: 9px;">
        <span style="float: left">{{name}}<span>(</span>{{shopSum}}<span>)</span></span>
        <span style="float: right">去频道</span>
      </div>
    </div>
    <!--侧边栏-->
    <div class="shoplist" style="top: 3.4rem;z-index: -99999999;margin-bottom: 2rem;position: fixed;">
      <div style="float: left;background: white">
        <ul style="width: 2.5rem;">
          <li v-for="item in tabarr" @click="onClick(item.id,item.sumShop,item.name)" v-bind:class="index==item.id ? 'active':''">{{item.name}}</li>
          <!--<li @click="onClick(1)" v-bind:class="index==1 ? 'active':''">甜点饮品</li>-->
          <!--<li @click="onClick(2)" v-bind:class="index==2 ? 'active':''">正餐优选</li>-->
          <!--<li @click="onClick(3)" v-bind:class="index==3 ? 'active':''">能量西餐</li>-->
          <!--<li @click="onClick(4)" v-bind:class="index==4 ? 'active':''">快食简餐</li>-->
          <!--<li @click="onClick(5)" v-bind:class="index==5 ? 'active':''">异国料理</li>-->
          <!--<li @click="onClick(6)" v-bind:class="index==6 ? 'active':''">鲜花蛋糕</li>-->
          <!--<li @click="onClick(7)" v-bind:class="index==7 ? 'active':''">家常菜</li>-->
          <!--<li @click="onClick(8)" v-bind:class="index==8 ? 'active':''">夜宵</li>-->
          <!--<li @click="onClick(9)" v-bind:class="index==9 ? 'active':''">早餐</li>-->
          <!--<li @click="onClick(10)" v-bind:class="index==10 ? 'active':''">小吃馆</li>-->
          <!--<li @click="onClick(11)" v-bind:class="index==11 ? 'active':''">小炒菜</li>-->
        </ul>
      </div>
    </div>

    <div style="width: 70%;background: white;float: right;margin-right: 0.25rem;position: absolute;right: 0px;top: 3.4rem;z-index: -99999">
      <router-view></router-view>
    </div>


  </div>
</template>

<script>
  import { Toast } from 'vant'
    export default {
        name: "allShops",
      data(){
          return{
              value:'',
              activeKey: 0,
              index:0,
              tabarr:'',
              path:'',
              name:'',
              shopSum:''
          }
      },
      methods: {
        show(ev){
          if(ev.keyCode==13){
            Toast('暂无法搜索')
          }
        },
        onClick(id,slideindex,name) {
          this.indextab++;
          this.index = id;
          this.name=name;
          this.shopSum=slideindex;
          this.$router.push({
            path:'/allShops/Meishilist',
            query:{
              id:id,
              lat:this.$route.query.lat,
              lng:this.$route.query.lng
            }
          })
        },
        openMeishilist(){
          // this.$router.push('/nearbyShops');
          this.sum=1+this.indextab;
          this.$router.replace('/nearbyShops');
        },
        getIcon(){
          var _this = this;
          this.$api.geticon().then(function (res) {
            // alert(res.sumShop);
            _this.tabarr = res.list;
            _this.onClick(_this.tabarr[0].id,_this.tabarr[0].sumShop,_this.tabarr[0].name);
          })
        }
      },
      mounted(){
          this.getIcon();
          this.indextab=0;
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
    height: 1.1rem;
    width: 5%;
    /*background: palevioletred;*/
    top: 50%;
    margin-top: -0.7rem;
    line-height: 1.6rem;
    z-index: 999999999999;
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
    width:90%;
    height: 0.8rem;
    border-radius: 0.5rem;
    position: absolute;
    left: 10%;
    top: 50%;
    margin-top: -0.4rem;
    padding-left: 9%;
    padding-right: 0.3rem;
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
      /*height: 10rem;*/
    /*background: palevioletred;*/
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .shoplist ul::-webkit-scrollbar{
    display: none;
  }
  .shoplist ul li{
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 13px;
  }
</style>
