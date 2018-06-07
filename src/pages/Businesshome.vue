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
          <input type="text" placeholder="输入商家或商品名称搜索">
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
            <div>
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list
                  v-model="loading"
                  :finished="finished"
                  :offset="10"
                  @load="onLoad"
                >
                  <van-cell v-for="item in list">
                    <div class="pullbox">
                      <router-link to="/Shophome"><img :src="item.shopHeadImageUrl" alt="" style="float: left" class="shopimg"></router-link>
                      <div class="textbox">
                        <p>{{item.title}}</p>
                        <p class="titlelist"><img src="../assets/businesses_icon.png" alt=""><span>{{item.shopType}}</span><span>人均消费{{item.averageMoney}}元</span><span style="float: right"><100m</span></p>
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

    import index from "../router";

    export default {
        name: "Businesshome",
      data(){
          return{
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
            loading: true,
            finished: false,
            isLoading: false,
            // 获取列表数据
            params:{
              shopType:'',
              mark:0,
              pageNum:1,
              num:5
            }
          }
      },
      methods:{
        getId(id){
          alert(id);
        },
        // 加载
        onLoad() {
          // this.params.pageNum++;
          // alert(JSON.stringify(this.params));
          // this.getList(this.params);
          // return;
            // this.params.pageNum = this.params.pageNum+1;
            // this.loading = false;
            // alert(JSON.stringify(this.params))
            // this.loading = false;
            // for (let i = 0; i < 10; i++) {
            //   this.list.push(this.list.length + 1);
            // }
            // this.loading = false;
            //
            // if (this.list.length >= 40) {
            //   this.finished = true;
            // }
        },
        // 刷新
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
          }, 500);
        },
        onClickLeft(){
          this.$router.push('/nearbyShops');
        },
        // 获取列表
        getList(params){
          var _this = this;
          this.$api.getShoplist(params).then(function (res) {
            _this.loading = false;
            for(var i = 0;i<res.length;i++){
              _this.list.push(res[i]);
            }
            return;
          });
        },
        getimg(id){
          var _this = this;
          this.$api.getShopimg(id).then(function (res) {
            _this.headerImg = res;
            _this.params.shopType = res[0].id;
            return _this.getList(_this.params);
          })
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
        this.onClick2(0,'距离最近');
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
    margin-right: 0.2rem!important;
  }
  .van-cell .textbox p:first-child{
    font-weight: bold;
  }

</style>
