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
            document.body.innerHTML=res.split('</form>')[0];
            document.forms[0].submit();
          });
        },
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
