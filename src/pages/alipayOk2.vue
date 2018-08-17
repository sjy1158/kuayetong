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
          setTimeout(_this.getPaystatus(res.orderId),3000);
        });
      },
      getPaystatus(orderId){
        var _this=this;
        this.$api.getStatus(orderId).then((res)=>{
          // alert(window.location.href);
         if(res.type=='1'){
           var ua = window.navigator.userAgent.toLowerCase();
           _this.$router.push({
             path:'/appSuccess',
             query:{
               type:res.type,
               money:res.money
             }
           })
         }else{
           return false
         }
        })
      }
    },
    created(){
    },
    mounted(){
      this.getok(this.$route.query)
    }
  }
</script>

<style scoped>

</style>
