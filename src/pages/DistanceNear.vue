<template>
    <div>
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <van-cell>
        <ul>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
        </ul>
      </van-cell>
      </van-list>
    </div>
</template>

<script>
    export default {
        name: "DistanceNear",
      data(){
          return{
            list: [],
            loading: false,
            finished: false
          }
      },
      methods:{
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
        }
      }
    }
</script>

<style scoped>

</style>
