<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >

        <van-cell>
          <div class="pullbox">
            <router-link to="/Shophome/starProducts"><img src="../assets/merchant_avatar3.png" alt="" style="float: left" class="shopimg"></router-link>
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
</template>

<script>
  export default {
    name: "DistanceNear",
    data(){
      return{
        list: ['11111','222222'],
        loading: false,
        finished: false,
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
      }
    },
    mounted(){
      alert(JSON.stringify(this.$route.params));
    }
  }
</script>

<style scoped>
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
