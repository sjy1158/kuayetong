<template>
  <div class="app" style="">
    <div class="title">
      梦想不死，彩旗不止，全国地面推广接力活动会-4月25日济南站
    </div>
    <div class="time">
      <i><img src="../assets/time@3x.png" alt=""></i><span>星期五 2018-05-25 13:44:54</span>
    </div>
    <!--主题内容-->
    <div class="textBox">
      <p>银杏叶状的家风牌、酒缸制成的花盆……近日，走进分水镇朝阳村，充满创意与乡村风情的庭院设计，令人眼前一亮。
      <p>今年来，分水镇以美丽庭院建设为抓手，注重产业、文化、文明、创意四个结合，做好 “美丽庭院+”文章。</p>
      <p>在点位选择上，分水镇围绕产业项目和助力村经济发展，坚持“小庭院大推动，小投入大见效”，把农户庭院变成创意的景区。
        计划通过美丽庭院创建，建成小源村松田、外范村大湾里、朝阳村竹桐坞等民宿示范点，为全镇美丽庭院打造样本与标杆。
      </p>
    </div>
    <div class="activeImg">
      <div>
        <img src="../assets/activeimg.png" alt="" style="width: 100%">
      </div>
    </div>
    <div class="textfoot">
      在环境改造中，
      该镇积极将“家庭”文化元素融入庭院建设，把家风家训、家庭和睦文化与“美丽庭院”创建有机结合起来，
      同时进一步挖掘培育“竹文化”“农耕文化”等，让庭院别有一番韵味。
    </div>
  </div>
</template>

<script>
    export default {
        name: "activityProfile",
      data(){
          return{

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

      mounted(){
      }
    }
</script>

<style scoped>
  .title{
    color: #393939;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    padding: 15px;
    letter-spacing: 1px;
  }
  .time{
    text-align: left;
    padding: 0px 16px;
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
  .activeImg{
    padding: 0px 10px;
  }
  .textfoot{
    padding: 20px 16px;
    color: #393939;
    font-size: 14px;
    text-align: left;
    letter-spacing: 2px;
  }
</style>
