<template>
<div style="margin-bottom: 61px;">
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
  </div>

  <div style="height: auto;background: white;padding:10px;">
      <div style="width: 100%;height: 100%;">
        <div style="display: flex;height: 20px;line-height: 20px;">
          <div style="flex: 1;text-align: left">{{source}}价<span style="color: #FF0000;font-size: 16px;padding-left: 10px;">¥{{prize}}元</span></div>
          <div style="flex: 1;text-align: right;color: #717171;font-size: 10px;">销量：{{salesVolume}}件</div>
        </div>
        <div style="display: flex;text-align: left;font-size: 14px;color: #393939;font-weight: bold;padding-top: 10px;">
         {{name}}
        </div>
      </div>
  </div>


  <div style="height: 2.2rem;background: white;margin-top: 10px;padding: 15px 34px;">
      <div style="width: 100%;height: 2.2rem;position: relative">
        <img src="../assets/commerce_coupons_bg@3x.png" alt="" style="width: 100%;height: 2.2rem;">
        <div class="leftdiv" style="">
          <p>{{deduction}}<span style="font-size: 12px;">元</span></p>
          <p>本商品可用余额抵扣</p>
          <p>（提交订单时会自动抵扣）</p>
        </div>
        <div class="rightdiv" style="" @click="openpay">
          立即抵扣
        </div>
      </div>
  </div>

  <div style="width: 100%;height: 60px;background: white;margin-top: 10px;border-bottom: 3px solid #F2F2F2;">
      <div style="width: 5rem;height: 60px;margin: 0 auto;display: flex" class="titleshop">
        <div style="">
          <img src="../assets/commerce_merchandise_line@3x.png" alt="" class="leftimg">
        </div>
        <div style="height: 60px;width: 3rem;position: absolute;left: 50%;margin-left: -1.5rem;">
          <img src="../assets/commerce_goods@3x.png" alt="" style="width: 18px;height: 18px;vertical-align: middle;padding-bottom:0.1rem;">
          <span style="vertical-align: middle;padding-left: 3px;">商品信息</span>
        </div>
        <div style="">
          <img src="../assets/commerce_merchandise_line2@3x.png" alt="" class="rightimg">
        </div>
      </div>
  </div>

  <div style="height: 373px;background: white;padding-top: 10px;padding-bottom: 10px;" v-for="item in imgUrl">
    <img :src="item" alt="" style="width: 100%;height: 100%;">
  </div>


  <div style="width: 100%;height: 60px;background: white;margin-top: 10px;">
    <div style="width: 5rem;height: 60px;margin: 0 auto;display: flex" class="titleshop">
      <div style="">
        <img src="../assets/commerce_merchandise_line@3x.png" alt="" class="leftimg">
      </div>
      <div style="height: 60px;width: 3rem;position: absolute;left: 50%;margin-left: -1.5rem;">
        <img src="../assets/commerce_like@3x.png" alt="" style="width: 18px;height: 18px;vertical-align: middle;padding-bottom:0rem;">
        <span style="vertical-align: middle;padding-left: 3px;">猜你喜欢</span>
      </div>
      <div style="">
        <img src="../assets/commerce_merchandise_line2@3x.png" alt="" class="rightimg">
      </div>
    </div>
  </div>


  <div style="height: auto;background: white;padding-left: 10px;padding-right: 10px;">
    <ul style="height: auto;">
      <li style="position: relative;" v-for="item in listArr" @click="openshop(item.id)">
        <img src="../assets/bg@3x.png" alt="" style="height: 128px;width: 100%;">
        <img :src="item.imageUrl" alt="" style="width: 100px;height: 100px;position: absolute;left: 10px;top: 50%;margin-top: -54px;">
        <div style="height: 100px;position: absolute;left:130px;top: 0px;text-align: left;padding-right: 10px;">
          <p style="font-size: 12px;">
            <img src="../assets/commerce_goods@3x.png" alt="" style="width: 12px;height: 12px;">
            {{item.name}}
          </p>
          <p style="height: 20px;line-height: 20px;">{{item.source}}价：<span style="color: #FF0000;font-size: 14px;">{{item.price.toFixed(2)}}</span>元 <span style="float: right;font-size: 10px;color: #717171">销量：{{item.salesVolume}}件</span></p>
          <div style="background: #FF0000;width: 94px;height: 24px;line-height: 24px;text-align: center;color: white;border-radius:10px;">可抵:{{item.deduction.toFixed(2)}}元</div>
        </div>
      </li>
      <!--<li style="position: relative;">-->
        <!--<img src="../assets/bg@3x.png" alt="" style="height: 128px;width: 100%;">-->
        <!--<img src="../assets/commerce_details2@3x.png" alt="" style="width: 100px;height: 100px;position: absolute;left: 10px;top: 50%;margin-top: -54px;">-->
        <!--<div style="height: 100px;position: absolute;left:130px;top: 0px;text-align: left;padding-right: 10px;">-->
          <!--<p style="font-size: 12px;">-->
            <!--<img src="../assets/commerce_goods@3x.png" alt="" style="width: 12px;height: 12px;">-->
            <!--金丽洁电动牙刷成人充电式超声波自动震动软-->
          <!--</p>-->
          <!--<p style="height: 20px;line-height: 20px;">天猫价：<span style="color: #FF0000;font-size: 14px;">1257.90</span>元 <span style="float: right;font-size: 10px;color: #717171">销量：2000件</span></p>-->
          <!--<div style="background: #FF0000;width: 94px;height: 24px;line-height: 24px;text-align: center;color: white;border-radius:10px;">可抵:30.00元</div>-->
        <!--</div>-->
      <!--</li>-->
      <!--<li style="position: relative;">-->
        <!--<img src="../assets/bg@3x.png" alt="" style="height: 128px;width: 100%;">-->
        <!--<img src="../assets/commerce_details2@3x.png" alt="" style="width: 100px;height: 100px;position: absolute;left: 10px;top: 50%;margin-top: -54px;">-->
        <!--<div style="height: 100px;position: absolute;left:130px;top: 0px;text-align: left;padding-right: 10px;">-->
          <!--<p style="font-size: 12px;">-->
            <!--<img src="../assets/commerce_goods@3x.png" alt="" style="width: 12px;height: 12px;">-->
            <!--金丽洁电动牙刷成人充电式超声波自动震动软-->
          <!--</p>-->
          <!--<p style="height: 20px;line-height: 20px;">天猫价：<span style="color: #FF0000;font-size: 14px;">1257.90</span>元 <span style="float: right;font-size: 10px;color: #717171">销量：2000件</span></p>-->
          <!--<div style="background: #FF0000;width: 94px;height: 24px;line-height: 24px;text-align: center;color: white;border-radius:10px;">可抵:30.00元</div>-->
        <!--</div>-->
      <!--</li>-->
      <!--<li style="position: relative;">-->
        <!--<img src="../assets/bg@3x.png" alt="" style="height: 128px;width: 100%;">-->
        <!--<img src="../assets/commerce_details2@3x.png" alt="" style="width: 100px;height: 100px;position: absolute;left: 10px;top: 50%;margin-top: -54px;">-->
        <!--<div style="height: 100px;position: absolute;left:130px;top: 0px;text-align: left;padding-right: 10px;">-->
          <!--<p style="font-size: 12px;">-->
            <!--<img src="../assets/commerce_goods@3x.png" alt="" style="width: 12px;height: 12px;">-->
            <!--金丽洁电动牙刷成人充电式超声波自动震动软-->
          <!--</p>-->
          <!--<p style="height: 20px;line-height: 20px;">天猫价：<span style="color: #FF0000;font-size: 14px;">1257.90</span>元 <span style="float: right;font-size: 10px;color: #717171">销量：2000件</span></p>-->
          <!--<div style="background: #FF0000;width: 94px;height: 24px;line-height: 24px;text-align: center;color: white;border-radius:10px;">可抵:30.00元</div>-->
        <!--</div>-->
      <!--</li>-->
    </ul>
  </div>
  <img id="btngo" src="../assets/commerce_top@3x.png" alt="" style="width: 35px;height: 35px;position: fixed;bottom: 61px;right: 15px;" @click="goTop">
  <button id="paybtn" type="button" style="position: fixed;bottom: 0px;left: 0px;" @click="openpay">
    立即抵扣购买
  </button>
</div>
</template>

<script>
  import { Dialog } from 'vant'
    export default {
        name: "comPurchase",
      data(){
          return{
            params:{
              pId:'',
              userId:''
            },
            params2:{
              id:''
            },
            src:'',
            prize:'',
            name:'',
            source:'',
            salesVolume:'',
            index:0,
            deduction:'',
            imgUrl:[],
            listArr:[],
            cliHeight:'',
            logarr:[],
          }
      },
      methods:{
        getLeft(){
            window.location.href="http://back.com";
        },
        openpay(){
          var _this=this;
          Dialog.confirm({
            title: '提示',
            message: '此操作不可撤销，请确认使用跨业通余额'+this.deduction+'元抵扣买单'
          }).then(() => {
              _this.getcoupon(_this.params);
          }).catch(() => {
            return
          })
        },
        getcoupon(params){
          this.$api.getConpou(params).then((res)=>{
            window.location.href=res;
            // var arrall=[];
            // var activityId=res.split('?')[1];
            // var arr=activityId.split('&');
            // for (var i=0;i<arr.length;i++){
            //   arrall.push(arr[i].split("=")[1])
            // };
            // var arrpd=arrall[1];
           // window.location.href='https://uland.taobao.com/coupon/edetail?e=/KfYv1f4RuQGQASttHIRqf5e1NUPk9EB35zW1YK2zpH73GnxKsppM+/jeYyibvzN4EmMoALL5Z8+D4SDSmjXfpQ5wfGz/u+Nx3iAE/j7p2ddiwTmD3eVNmuFqp8TFaHM52ttWb//2DPfHkioo+/RrQ==&traceId=0ab2017015314795170647938e&pid=mm_132210399_46844403_1735122725&activityId='+arrpd+'&src=cn666_com&tj1=1&tj2=1';
            // window.location.href="https://uland.taobao.com/coupon/edetail?"+res.split("?")[1]
          })
        },
        getdinshang(params){
          const _this=this;
            this.$api.getDinshang(params).then((res)=>{
              _this.prize=res.product.price.toFixed(2);
              _this.name=res.product.name;
              _this.source=res.product.source;
              _this.imgUrl.push(res.product.imageUrl);
              _this.salesVolume=res.product.salesVolume;
              _this.deduction=res.product.deduction;
              _this.listArr=res.list;
            })
        },
        change(index){
          // alert(index);
        },
        goTop(){
           document.body.scrollTop=0;
        },
        openshop(id){
          this.params2.id=id;
          this.params.pId=id;
          // window.scrollTo(0);
          document.body.scrollTop=0;
          this.listArr=[];
          this.imgUrl=[];
          // this.getcoupon(this.params);
          this.getdinshang(this.params2);
        },
      },
      created(){
        var arrstr=[];
        var arr=this.$geturl.getL();
        for(var i=0;i<arr.length;i++){
          arrstr.push(arr[i].split('=')[1]);
        }
        this.logarr=arrstr;
        this.params.pId=arrstr[0];
        this.params2.id=arrstr[0];
        this.params.userId=arrstr[1];
      },
      mounted(){
          this.getdinshang(this.params2);
      }
    }
</script>

<style scoped>
  button{
    height: 51px;
    border: none;
    background: #F67419;
    width: 100%;
    font-size: 16px;
    color: white;
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
    width: 50%;height: 100%;position: absolute;left: 0px;top: 0px;
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
</style>
