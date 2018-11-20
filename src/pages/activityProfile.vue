<template>
  <div class="app" style="">
    <div id="Loading" v-show="loading">
      <div class="loader-inner ball-beat">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="title">
     {{dataobj.title}}
    </div>
    <div class="time">
      <i><img src="../assets/time@3x.png" alt=""></i><span v-html="str"></span>
    </div>
    <!--主题内容-->
    <div class="textBox">
      <div v-for="item in dataobj.detalis">
        <img v-if="item.match(/http:\/\/.+/)" :src="item" class="bottom" alt="">
        <p v-if="item.match(/http:\/\/.+/)==null">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "activityProfile",
      data(){
          return{
            dataURL:'',
            params:{
              type:this.$route.query.type,
              id:this.$route.query.id
            },
            dataobj:{},
            str:'',
            loading:true
          }
      },
      beforeCreate () {
        document.querySelector('body').style.width = '100%';
        document.querySelector('body').style.height = '100%';
        document.querySelector('html').style.width = '100%';
        document.querySelector('html').style.height = '100%';
        document.querySelector('body').setAttribute('style', 'background-color:white');
        document.querySelector('html').setAttribute('style', 'background-color:white');
        next();
      },

      beforeDestroy () {
        document.querySelector('body').removeAttribute('style');
        document.querySelector('html').removeAttribute('style');
        next();
      },
      methods:{
          getActivity(params){
            const _this = this;
            this.$api.activityDetail(params).then((res)=>{
                _this.loading = false;
                res.activityNotice.time = _this.changeTime(res.activityNotice.time);
                res.activityNotice.detalis = JSON.parse(res.activityNotice.detalis);
                // alert(JSON.stringify(res.activityNotice.detalis));
                // res.activityNotice.detalis = JSON.stringify(res.activityNotice.detalis).replaceAll(/\\/g,'');
                _this.dataobj = res.activityNotice;
            })
          },
          changeTime(time){
              var weekarry = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
              var time = new Date(time);
              var month = time.getMonth()+1;
              month = month<10?"0"+month:month;
              var hours = time.getHours()<10?"0"+time.getHours():time.getHours();
              var minues = time.getMinutes()<10?"0"+time.getMinutes():time.getMinutes();
              var second = time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds();
            // 星期五 2018-05-25 13:44:54
            //   var date = weekarry[time.getDay()]+time.getFullYear()+'-'+month+'-'+time.getDate()+hours+":"+minues+":"+second;
              this.str = "<span>"+weekarry[time.getDay()]+'&nbsp;'+time.getFullYear()+'-'+month+'-'+time.getDate()+"&nbsp;"+hours+":"+minues+":"+second+"</span>"
              // return date;
          }
      },
      created(){
         this.getActivity(this.params);
      },
      mounted(){
      }
    }
</script>

<style scoped>
  .bottom{
    width: 100%;float: left;
    margin-bottom: 16px;
  }
  /*.textBox p:first-child{*/
    /*margin-top: 0px!important;*/
  /*}*/
  /*.textBox img:first-child{*/
    /*margin-top: 0px!important;*/
  /*}*/
  .title{
    color: #393939;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    padding: 15px;
    letter-spacing: 1px;
    line-height: 28px;
  }
  .time{
    text-align: left;
    padding: 10px 16px;
  }
  i img{
    vertical-align: middle;
    height: 12px;
    width: 12px;
  }
  .time span{
    color: #393939;
    font-size: 12px;
    padding-left: 7px;
    vertical-align: middle;
  }
  .textBox{
    text-align: left;
    padding: 0px 16px;
    color: #393939;
    font-size: 14px;
    letter-spacing: 2px;
  }
  .textBox p{
    text-indent: 2em;
    line-height: 25px;
  }
  .activeImg{
    padding: 0px 10px;
  }
  .textfoot{
    padding: 20px 0px;
    color: #393939;
    font-size: 14px;
    text-align: left;
    letter-spacing: 2px;
    line-height: 25px;
  }
  /*loading加载*/
  #Loading {
    top:50%;
    left:50%;
    position: absolute;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    z-index:100;
  }
  @-webkit-keyframes ball-beat {
    50% {
      opacity: 0.2;
      -webkit-transform: scale(0.75);
      transform: scale(0.75); }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1); } }

  @keyframes ball-beat {
    50% {
      opacity: 0.2;
      -webkit-transform: scale(0.75);
      transform: scale(0.75); }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1); } }

  .ball-beat > div {
    background-color: #F67419;
    width: 15px;
    height: 15px;
    border-radius: 100% !important;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat 0.7s 0s infinite linear;
    animation: ball-beat 0.7s 0s infinite linear; }
  .ball-beat > div:nth-child(2n-1) {
    -webkit-animation-delay: 0.35s !important;
    animation-delay: 0.35s !important; }
</style>
