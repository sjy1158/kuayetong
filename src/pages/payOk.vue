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
          this.$api.getPay1(params).then(function (res) {
            // setTimeout(_this.getPaystatus(res.orderId),3000);
            document.body.innerHTML=res.html.split('</form>')[0];
            document.forms[0].submit();
          });
        },
        // getPaystatus(orderId){
        //  var _this=this;
        //   this.$api.getpaystatus(orderId).then((res)=>{
        //       window.location.href='';
        //   })
        // }
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
