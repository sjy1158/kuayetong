<template>
</template>

<script>
  export default {
    name: "payOk",
    data(){
      return{
        html:'html',
        orderId:''
      }
    },
    methods:{
      getok(params){
        var _this = this;
        this.$api.getAlipay2(_this.$route.query.data).then(function (res) {
          var html=res.html.replace(/\\/g,'');
          document.body.innerHTML=html.split('</form>')[0];
          document.forms[0].submit();
          // alert(window.location.href);
          return setTimeout(_this.getPaystatus(res.orderId),3000);
        });
      },
      getPaystatus(orderId){
        var _this=this;
        this.$api.getStatus(orderId).then((res)=>{
          // alert(window.location.href);
           _this.$router.push({
             path:'/outSuccess',
             query:{
               type:res.type,
               money:res.money
             }
           })
        })
      }
    },
    created(){
    },
    mounted(){
      this.getok(this.$route.query)
      // alert(this.$route.query.data.userId)
    }
  }
</script>

<style scoped>

</style>
