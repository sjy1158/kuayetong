<template>
  <div id="all" style="width: 100%;height: 100%;">
    <div>
      <div class="button" style="position: absolute;z-index: 999999999999999;width: 100%;height: 50px;display: none">
      <!--  <iframe :src="src" id="preframe" scrolling="0" frameborder="0" width="100%" height="50">-->
        <iframe :src="src" id="preframe" scrolling="no" style="height: 320px;border: 0px none;width: 552px;margin-top: -248px;margin-left: -24px;">
        </iframe>
      </div>
    </div>
    <button type="button" style="margin-top: 100px;" @click="getconpous">立即领券</button>
  </div>

</template>

<script>
    export default {
        name: "receiveCoupons",
      data(){
          return{
            params:{
              pId:'66',
              userId:'5d'
            },
            src:''
          }
      },
      methods:{
        getconpou(params){
          this.$api.getConpou(params).then((res)=>{
             this.src=res;
          })
        },
        getconpous(){
           this.$router.push('/comPurchase');
        }
      },
      created(){
          this.getconpou(this.params);
      },
      mounted(){
        setInterval(()=>{
            console.log(document.body.innerHTML);
        },1000)
      }
    }
</script>

<style scoped>
 .button{

 }
</style>
