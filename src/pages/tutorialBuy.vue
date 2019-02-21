<template>
  <div>
    <img src="../assets/tutorial.png" style="width: 100%;" alt="">
    <footer>
      <div class="footer">
        <button @click="goParner">立即购买</button>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data(){
      return {
      }
    },
    methods:{
      goParner () {
        this.$router.push({
          path: '/becomeParner'
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
