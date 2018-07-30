<template>
    <div class="shopStore">
      <van-nav-bar
        fixed
        :title="title"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <!--搜索框-->
            <div class="searchbox" style="margin-top: 61px;">
              <div class="searchbox2">
                <div class="icon">
                  <van-icon name="search" />
                </div>
                <form @submit.prevent="submit" action="javascript:return true">
                  <input type="search"  v-model="value" placeholder="输入商家或商品名称搜索" ref="input1" @keyup="show($event)">
                </form>
              </div>
            </div>


            <!--商品tab切换-->
            <div class="slideshoptab" id="slideshoptab" style="">
              <div style="" id="tab1">
                <van-tabs type="line" @click="onClick" line-width="20" v-model="active">
                  <van-tab v-for="(item,index) in headerImg">
                    <div slot="title" @click="getId(item.id,index)">
                      <img :src="item.imageUrl" alt="" style="padding-top: 10px;height: 48px;width: 48px;border-radius: 50%;padding-top: 0px!important;" ref="imageList">
                      <p class="titleshop" style="font-size: 12px!important;">{{item.name}}</p>
                    </div>
                  </van-tab>
                </van-tabs>
              </div>
          </div>

      <div class="tabmenu" id="tabmenu" style="">
      <van-tabs @click="onClick2" line-width="20">
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
                  <img :src="item.shopHeadImageUrl" :v-lazy="item.shopHeadImageUrl" alt="" style="float: left" class="shopimg">
                  <div class="textbox">
                    <p>{{item.title}}</p>
                    <p class="titlelist"><img src="../assets/businesses_icon@2x.png" alt=""><span>{{item.shopType}}</span><span>人均消费{{item.averageMoney}}元</span><span style="position: absolute;right: 25px;"></span></p>
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

        <div v-show="issum==false" style="margin-top: 2rem;margin-bottom: 1rem;">
          <div><img src="../assets/load_failed@2x.png" alt="" style="height: 1rem;width: 1rem;"></div>
          <span style="margin-top: 1rem;">暂无数据</span>
        </div>
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
            issum:true,
            value:'',
            headerImg:'',
            id:'',
            id:'',
            title:'',
            menus:[
              '距离最近',
              '折扣最多',
              '销量最高'
            ],
            list: [],
            loading:true,
            finished: false,
            isLoading: false,
            // 获取列表数据
            params:{
              userId:this.$route.query.userId,
              productName:'',
              shopType:'',
              mark:0,
              pageNum:1,
              num:5
            },
            leng:0
          }
      },
      methods:{
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
                this.getList(this.params);
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
            this.getList(this.params);
          },
        // onClickLeft(){
        //   this.$route.meta.keepAlive=false;
        //   window.history.go(-1);
        // },
        getId(id){
          this.list = [];
          this.issum=true;
          this.params.pageNum = 1;
          this.params.shopType=id;
          this.finished=false;
          this.loading = true;
          this.getList(this.params);
        },
        //加载
        onLoad() {
            this.loading = true;
            this.issum=true;
            this.params.pageNum+=1;
            this.getList(this.params);
        },
        // //刷新
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
          }, 500);
        },
        onClickLeft(){
          this.$route.meta.keepAlive=false;
          this.$router.push('/nearbyShops');
          localStorage.removeItem('id');
          localStorage.removeItem('name');
        },
        // 获取列表
        getList(params){
          var _this = this;
          if(this.loading&&this.issum){
            this.$api.getShoplist(params).then(function (res) {
              if(res.sum==0){
                _this.issum=false;
                _this.finished = true;
              }
              _this.loading = false;
              if(res.list.length<5){
                _this.finished = true;
              };
              for(var i = 0;i<res.list.length;i++){
                _this.list.push(res.list[i]);
              }
              return;
            });
          }else {
            return
          }
        },
        getimg(id,index){
          var _this = this;
          this.$api.getShopimg(id).then(function (res) {
            _this.headerImg = res.list;
            _this.params.shopType = res.list[index].id;
            return _this.getList(_this.params);
          })
        },
        openShophome(shopid){
          this.$route.meta.keepAlive=true;
          this.$router.push({
            path:'/Shophome/starProducts',
            query:{
              root:1,
              shopid:shopid,
              pathid:2,
              url:this.$route.path,
              userId:this.$route.query.userId
            }
          });
        }
      },
      watch: {
        value (val) {
          if(val==''){
            this.list=[];
            this.params.pageNum = 1;
            this.issum = true;
            this.finished=false;
            this.loading = true;
            this.params.productName='';
            this.getList(this.params);
          }
        }
      },
      created:function(){
          var _this = this;
        var name = this.$route.query.name;
        this.id = this.$route.query.id;
        // alert(this.$route.query.userId);
        this.title = name;
        if(this.$route.query.root==1){
        this.getimg(this.id,0);
        }else {
          this.getimg(this.id,this.$route.query.index);
        }
      },
      mounted(){
        this.active = this.$route.query.index;
        this.$geturl.getL();
        // this.getId(this.$route.query.id1);
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
  /*van-hairline--bottom van-nav-bar .van-nav-bar--fixed*/
    .searchbox{
      height: 1.5rem;
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
    width: 100%;
    height: 0.9rem;
    border-radius: 0.5rem;
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -0.45rem;
    padding-left: 9%;
    padding-right: 0.3rem;
    outline: none;
    border: none;
    -webkit-appearance: none;
    box-shadow:0px 0px 8px #f2f2f2;
  }
    /*tab切换*/
    .van-tabs p{
      /*margin: 0px!important;*/
      padding: 0px!important;
      margin-top: -20px!important;
      margin-bottom: -4px!important;
      font-size: 0.37rem;
    }

    .van-tabs .van-tab{
      height: 2rem!important;
    }

  .van-cell p{
    margin: 0px!important;
  }
  .van-cell .shopimg{
    height: 2.2rem;
    width: 2.2rem;
  }
  .van-cell .textbox{
    margin-left: 2.5rem;
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
    border: 1px solid #f08400;
    border-radius: 5px;
    font-size: 10px;
    height: 14px;
    width: auto;
    padding-left: 2px;
    padding-right: 2px;
    line-height: 15px!important;
    text-align: center;
    float: left;
    margin-top: 7px;
    font-weight: bold;
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
    font-weight: bold;
    font-size: 14px;
  }

</style>
