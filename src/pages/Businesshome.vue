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
      <div class="searchbox" style="margin-top: 1.1rem;">
        <div class="searchbox2">
          <div class="icon">
            <van-icon name="search" />
          </div>
          <input type="search"  v-model="value" placeholder="输入商家或商品名称搜索" ref="input1" @keyup="show($event)">
        </div>
      </div>


      <!--商品tab切换-->
      <div class="slideshoptab" id="slideshoptab" style="">
        <div style="" id="tab1">
          <van-tabs type="line" @click="onClick" line-width="20">
            <van-tab v-for="item in headerImg">
              <div slot="title" @click="getId(item.id)">
                <img :src="item.imageUrl" alt="" style="padding-top: 10px;">
                <p class="titleshop">{{item.name}}</p>
              </div>
            </van-tab>
          </van-tabs>
        </div>
    </div>


      <div class="tabmenu" id="tabmenu" style="">
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
                    <p class="titlelist"><img src="../assets/businesses_icon.png" alt=""><span>{{item.shopType}}</span><span>人均消费{{item.averageMoney}}元</span><span style="float: right"><100m</span></p>
                    <p class="discon" v-for="item1 in item.deductionList">
                      <span>{{item1.requireValue}}抵{{item1.value}}</span>
                    </p>
                  </div>
                </div>
              </van-cell>
            </van-list>
          </van-pull-refresh>
        </div>

        <div v-show="issum==false" style="margin-top: 2rem;">
          <span>暂无数据.........</span>
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
        onClickLeft(){
          this.$router.go(-1)
        },
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
          this.$router.push('/nearbyShops');
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
        getimg(id){
          var _this = this;
          this.$api.getShopimg(id).then(function (res) {
            _this.headerImg = res.list;
            _this.params.shopType = res.list[0].id;
            return _this.getList(_this.params);
          })
        },
        openShophome(shopid){
          this.$router.push('/Shophome/starProducts');
          localStorage.setItem('shopid',shopid);
        }
      },
      watch: {
        value (val) {
          if(val==''){
            this.list=[];
            this.params.pageNum = 1;
            this.finished=false;
            this.loading = true;
            this.params.productName='';
            this.getList(this.params);
          }
        }
      },
      created:function(){
          var _this = this;
        var name = localStorage.getItem("name");
        this.id = localStorage.getItem("id");
        this.title = name;
        this.getimg(this.id);
      },
      mounted(){
        // this.onClick2(0,'距离最近');
        // this.$api.getShopimg(this.id);
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

    .van-tabs .van-tab{
      height: 2rem!important;
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
    float: left;
    margin-right: 0.2rem!important;
  }
  .van-cell .textbox p:first-child{
    font-weight: bold;
  }

</style>
