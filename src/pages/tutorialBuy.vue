<template>
  <div>
    <img src="../assets/CEO.png" style="width: 100%;" alt="">
    <footer>
      <div class="footer">
        <button @click="goParner" :data-id="$route.query.userId">立即购买</button>
      </div>
    </footer>
    <van-loading type="spinner" v-show="isLoading" style="width:30px;height:30px;position: fixed;top: 50%;margin-top: -15px;left: 50%;margin-left: -15px;z-index: 9999999999999"/>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  export default {
    data(){
      return {
        isLoading: false
      }
    },
    methods:{
      goParner (e) {
        var userId = e.srcElement.dataset.id
        // alert(e.srcElement.dataset.id)
        if (userId!='') {
          this.getInfomation(userId)
        } else {
          return
        }
      },
      getInfomation (id) {
        const _this = this
        _this.isLoading = true
        this.$api.getInfo(id).then((res) => {
          if (res.code == 200) {
            if (res.data.grade.id>=3 && res.data.grade.id!=4) {
              _this.isLoading = false
              Toast('当前账户等级不符合购买条件，无法购买！')
            }else{
              _this.isLoading = false
              this.$router.push({
                path: '/becomeParner',
                query: {
                  userId: id
                }
              })
            }
          }
        })
      }
    },
    watch: {
    },
    computed: {
    },
    created(){
    },
    mounted(){
    }
  }
</script>

<style scoped>
  /*底部样式*/
  footer {
    position: fixed;
    bottom: 0;
    height: 69px;
    width: 100%;
    background: rgba(0,0,0,.5);
  }
  footer .footer {
    padding: 10px 27px;
  }
  footer .footer button {
    height: 49px;
    width: 100%;
    letter-spacing: 1px;
    color: #333333;
    font-size: 18px;
    font-weight: bold;
    border:none;
    background: #FEE3BA!important;
    border-radius: 50px;
    outline: none;
  }
</style>
