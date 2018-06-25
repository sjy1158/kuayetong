<template>
</template>

<script>
    export default {
        name: "payOk",
      data(){
        return{
            html:'html'
        }
      },
      methods:{
        getok(params){
          var _this = this;
          this.$api.getPay1(params).then(function (res) {
            document.body.innerHTML=res.html.split('</form>')[0];
            document.forms[0].submit();
            _this.getPaystatus(res.orderId);
          });
        },
        getPaystatus(orderId){
         var _this=this;
          this.$api.getpaystatus(orderId).then((res)=>{
              window.location.href='http://83z834.natappfree.cc/#/pageStatus';
              localStorage.setItem('paytype',res.type);
              localStorage.setItem('payMoney',res.money);
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
