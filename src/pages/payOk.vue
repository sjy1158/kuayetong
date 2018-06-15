<template>
    <div class="payok" v-html="html">

    </div>
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
            window.location.href = res.data;
          })
        },
      },
      created(){
        alert(JSON.stringify(this.$route.query));
        this.getok(this.$route.query)
      },
      mounted(){
        //   alert(JSON.stringify(this.$route.query));
        // this.getok(this.$route.query)
      }
    }
</script>

<style scoped>

</style>
