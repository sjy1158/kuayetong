<template>
  <div style="margin-bottom: 61px;letter-spacing: .053333rem;">
    <!--<img src="../assets/bg2.jpg" alt="" style="width: 100%;height: 375px;">-->
    <!--图片轮播-->
    <div style="position: relative;width: 100%;height: 375px;">
      <van-swipe :autoplay="3000" :show-indicators="false" @change="change">
        <van-swipe-item v-for="item in imgUrl">
          <img :src="item" alt="" style="width: 100%;height: 375px;">
        </van-swipe-item>
      </van-swipe>
      <div class="slidesum" style=""><span style="padding-right: 2px;">{{index+1}}</span>/<span style="padding-left: 2px;">{{imgUrl.length}}</span></div>
      <img src="../assets/commerce_return_bg@3x.png" alt="" style="position: fixed;width: 32px;height: 32px;top: 23px;left: 10px;z-index: 9999999999999999999999;" @click="getLeft">
      <img v-if="isshangcang!=false" src="../assets/collection_sel@3x.png" style="position: fixed;width: 32px;height: 32px;top: 23px;right: 56px;z-index: 9999999999999999999999;" alt="" @click="shouCang">
      <img v-else src="../assets/collection@3x.png" style="position: fixed;width: 32px;height: 32px;top: 23px;right: 56px;z-index: 9999999999999999999999;" alt="" @click="shouCang">
      <img src="../assets/share@3x.png" style="position: fixed;width: 32px;height: 32px;top: 23px;right: 10px;z-index: 9999999999999999999999;" alt="">
    </div>

    <div style="height: auto;background: white;padding:10px;">
      <div style="width: 100%;height: 100%;">
        <div style="display: flex;height: 20px;line-height: 20px;">
          <div style="flex: 1;text-align: left"><span style="">¥{{prize}}元</span><span style="color: #FF0000;font-size: 16px;padding-left: 10px;">可抵扣{{subPrice}}元</span></div>
          <!--<div style="flex: 1;text-align: right;color: #717171;font-size: 10px;">销量：{{salesVolume}}件</div>-->
        </div>
        <div style="display: flex;text-align: left;font-size: 14px;color: #393939;font-weight: bold;padding-top: 10px;">
          {{name}}
        </div>
      </div>
    </div>

    <div style="width: 100%;height: 79px;background: white;margin-top: 10px;position: relative">
      <p style="text-align: left;padding-top: 15px;padding-left: 10px;"><span style="color: #717171">说明：</span><span style="padding-left: 8px;">本商品可用余额抵扣<span style="color: #FF0000">{{subPrice}}元</span></span></p>
        <p style="text-align: left;margin-top: 15px;padding-left: 10px;"><span style="color: #717171">库存：</span><span style="padding-left: 8px;">{{supply}}件</span></p>
    </div>

    <div style="height: 373px;background: white;padding-top: 10px;padding-bottom: 10px;margin-top: 10px;margin-bottom: 194px;" v-for="item in imgUrl">
      <img :src="item" alt="" style="width: 100%;height: 100%;">
    </div>
    <!--<router-view v-else></router-view>-->
    <!--&lt;!&ndash;<iframe  v-else :src="src1" allowtransparency="true"  onload="this.height=160"  id="framecontent" frameborder="0" scrolling="no" width="100%" style="border: none;height: 488px;"></iframe>&ndash;&gt;-->
    <div style="width: 96%;height: 184px;margin-top: 10px;padding-left: 2%;padding-right: 2%;background: white;position: fixed;bottom: 0px;" class="likeshop">
      <img src="../assets/the_text@4x.png" alt="" style="width: 100%;height:82px;margin-top: 15px;">
      <div style="padding-left: 10px;padding-right: 10px;margin-bottom: 20px;margin-top: 29px;">
        <button class="quikypay">立即购买</button>
      </div>
      <!--<div style="width: 100%;height: 100%;">-->
       <!--<img src="../assets/the_text@4x.png" alt="" style="width: 100%;height: 100%;">-->
      <!--</div>-->
    </div>

    <!--<img id="btngo" src="../assets/commerce_top@3x.png" alt="" style="width: 35px;height: 35px;position: fixed;bottom: 61px;right: 15px;" @click="goTop">-->
    <!--<button id="paybtn" type="button" style="position: fixed;bottom: 0px;left: 0px;" @click="openpay">-->
      <!--立即抵扣购买-->
    <!--</button>-->
  </div>
</template>

<script>
  import { Dialog } from 'vant'
  export default {
    name: "comPurchase",
    data(){
      return{
        params2:{
          productId:'',
        },
        src:'',
        prize:'',
        subPrice:'',
        name:'',
        supply:'',
        source:'',
        salesVolume:'',
        index:0,
        deduction:'',
        imgUrl:[],
        listArr:[],
        cliHeight:'',
        logarr:[],
        location:'',
        location2:'',
        title:'',
        src1:'',
        isshangcang:false
      }
    },
    methods:{
      getLeft(){
        window.location.href="http://back.com";
      },
      shouCang(){
        this.isshangcang = !this.isshangcang;
      },
      // openpay(){
      //   var _this=this;
      //   Dialog.confirm({
      //     title: '提示',
      //     message: '此操作不可撤销，请确认使用本平台余额'+this.deduction+'元抵扣购物'
      //   }).then(() => {
      //     window.location.href=_this.location;
      //   }).catch(() => {
      //     return
      //   })
      // },
      getdinshang(params){
        const _this=this;
        this.$api.getStoreshop(params).then((res)=>{
          _this.imgUrl.push(res.list[0].imageUrl);
          _this.prize = res.list[0].price.toFixed(2);
          _this.subPrice = res.list[0].subPrice.toFixed(2);
          _this.name = res.list[0].productName;
          _this.supply = res.list[0].supply;
          // alert(res.list[0].imageUrl);
          // _this.prize=res.product.price.toFixed(2);
          // _this.name=res.list[0].imageUrl;
          // _this.source=res.product.source;
          // _this.imgUrl.push(res.list[0].imageUrl);
          // _this.salesVolume=res.product.salesVolume;
          // _this.deduction=res.product.deduction;
          // _this.listArr=res.list;
          // _this.location=res.product.qlink;
          // _this.title=res.product.source;
          // if(_this.title!="拼多多"){
          //   _this.location2=res.product.detailUrl;
          // }else{
          //   _this.src1=res.product.detailUrl;
          // }
          // if(_this.title=="拼多多"){
          //   _this.$router.push({
          //     path:'/pingDuo',
          //     query:{
          //       id:_this.params2.id
          //     }
          //   })
          // }
        })
      },
      // goxiangqing(){
      //   var _this=this;
      //   if(this.title!="拼多多"){
      //     window.location.href=this.location2;
      //   }else{
      //   }
      // },
      change(index){
        // alert(index);
      },
      // goTop(){
      //   document.body.scrollTop=0;
      // },
      // openshop(id){
      //   this.params2.id=id;
      //   // this.params.pId=id;
      //   // window.scrollTo(0);
      //   document.body.scrollTop=0;
      //   this.listArr=[];
      //   this.imgUrl=[];
      //   // this.getcoupon(this.params);
      //   this.getdinshang(this.params2);
      // },
    },
    created(){
      var arrstr=[];
      var arr=this.$geturl.getL();
      for(var i=0;i<arr.length;i++){
        arrstr.push(arr[i].split('=')[1]);
      }
      this.logarr=arrstr;
      this.params2.productId=arrstr[0];
    },
    mounted(){
      var _this=this;
      this.getdinshang(this.params2);
    }
  }
</script>

<style scoped>
  button{
    height: 41px;
    border: none;
    background: #FF0000;
    width: 100%;
    font-size: 16px;
    color: white;
    border-radius: 25px;
  }
  .tab div{
    padding-top: 6px;
  }
  .slidesum{
    position: absolute;bottom: 10px;right: 10px;
    color: #8F8F8F;
    font-size: 14px;
  }
  .leftdiv{
    width: 50%;height: 100%;position: absolute;left: 0px;top: -0.3rem;
    color: white;
  }
  .rightdiv{
    width: 50%;height: 100%;position: absolute;right: 0px;top: 0px;
    color: white;
    line-height: 2.2rem;
    font-size: 18px;
  }
  .leftdiv p{
    margin: 0px!important;
  }
  .leftdiv p:first-child{
    font-size: 24px;
    padding-top: 0.4rem;
    /*margin: 0px!important;*/
  }
  .leftdiv p:nth-child(2){
    font-size: 12px;
    padding-top: 0.1rem;
  }
  .leftdiv p:nth-child(3){
    font-size:8px;
  }
  .titleshop{
    font-size:14px;
    color: #393939;
    line-height: 60px;
  }
  .titleshop div{
    flex: 1;
  }
  .leftimg{
    width: 13px;
    height: 2px;
    margin-right: 0.5rem;
    margin-bottom:0.05rem;
    /*position: absolute;*/
    /*top: 50%;*/
    /*margin-top: -1px;*/
    /*left: 0px;*/
  }
  .rightimg{
    width: 13px;
    height: 2px;
    margin-left:0.5rem;
    margin-bottom:0.05rem;
    /*margin-top: -1px;*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*margin-top: -1px;*/
    /*right: 0px;*/
  }
  .allist ul{
    display: flex;
    padding: 5.5px;
  }
  .allist ul li{
    display: 1;
    height: 280px;
    width: 50%;
    /*background: #00c000;*/
    padding-left: 4.5px;
    padding-right: 4.5px;
  }
  .allist ul li div{
    width: 100%;
    height: 100%;
    background: url("../assets/bg3x.png") no-repeat;
    background-size: 100% 100%;
  }



  .van-row{
    background: white;
    padding-bottom: 0.2rem;
  }
  .van-row .van-col{
    width: 50%;
  }
  .van-row .van-col{
    margin-top: 0.3rem!important;
  }
  .van-row .van-col .shopjieshao{
    width: 4.7rem;
    height: auto;
    /*background: yellow;*/
    margin: 0 auto;
    box-shadow: 0 0 10px #b8bbbf;
    text-align: left;
  }
  .van-row .van-col .shopjieshao p:first-child{
    margin: 0px!important;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    padding-top: 0.2rem;
    height: 1rem;
    font-size: 12px;
  }
  .van-row .van-col .shopjieshao p:nth-child(2){
    margin: 0px!important;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    /*margin-bottom: 0.2rem;*/
  }
  .van-row .van-col .shopjieshao img{
    width: 100%;
    height: 182px;
    border-radius: 4px 4px 0px 0px;
  }
  .disconnum{
    padding-top: 0.9rem;
  }

  /*.likeshop{*/
    /*background: url("../assets/the_text@3x.png") no-repeat;*/
  /*}*/
</style>
