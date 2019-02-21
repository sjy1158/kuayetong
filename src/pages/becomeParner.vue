<template>
  <div>
    <div class="imgcontent">
      <img src="../assets/Group.png" alt="" class="bgimg">
      <div class="jinchengicon">
        <p>合伙人角色进阶需购买全套课程共¥1680</p>
        <!--购买显示图标-->
        <div class="icons">
          <div class="icon_item">
            <img src="../assets/Bitmap1.png" alt="" class="iconimg">
            <p>轻奢创业(上)</p>
            <img src="../assets/gostr.png" alt="" class="gostr">
          </div>
          <div class="icon_item">
            <img src="../assets/Bitmap2.png" alt="" class="iconimg">
            <p>轻奢创业(下)</p>
            <img src="../assets/gostr.png" alt="" class="gostr">
          </div>
          <div class="icon_item">
            <img src="../assets/Bitmap3.png" alt="" class="iconimg">
            <p class="active">成为合伙人</p>
          </div>
        </div>
      </div>
    </div>

    <!--购买列表-->
    <div class="Listcontent">

      <div class="list_item">
        <img src="../assets/Bitmap4.png" alt="">
        <button @click="goPay">确认购买</button>
      </div>

      <div class="list_item">
        <img src="../assets/Bitmap4.png" alt="">
        <button @click="goPay">确认购买</button>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "becomeParner",
        data () {
            return {
            }
        },
        methods: {
          goPay () {
            this.$router.push({
              path: '/goPay'
            })
          }
        }
    }
</script>

<style scoped>
  .imgcontent {
    width: 100%;
    height: 100%;
  }
  .bgimg {
    width: 100%;
    height: 100%;
  }
  /*进程*/
  .jinchengicon {
    width: 100%;
    height: 202px;
    /*background: white;*/
    position: absolute;
    top: 0;
  }
  .jinchengicon p {
    color: #FDEAC2;
    letter-spacing: 1px;
    font-size: 14px;
    margin-top: 37px;
  }
  .icons {
    display: flex;
    width: 100%;
    margin-top: 29px;
  }
  .icons .icon_item {
    flex: 1;
    color: #FFFFFF;
    font-size: 12px;
    text-align: center;
    position: relative;
  }
  .icons .icon_item .iconimg {
    height: 44px;
    width: 39px;
    position: absolute;
    left: 50%;
    margin-left: -19.5px;
  }
  .icons .icon_item .gostr{
    width: 63px;
    height: 7px;
    position: absolute;
    top: 22px;
    right: -31.5px;
  }
  .icons .icon_item p {
    margin-top: 55px!important;
    /*color: white;*/
  }

  /*购买列表*/
  .Listcontent {
    height: auto;
    width: 100%;
    /*background: white;*/
    position: absolute;
    top: 5rem;
  }
  .list_item {
    margin-top: 26px;
  }
  .list_item img {
    width: 300px;
    height: 180px;
  }
  .list_item button {
    width: 300px;
    height: 49px;
    background: #FEE3BA;
    border: none;
    border-radius: 50px;
    letter-spacing: 1px;
    color: #D0021B;
    font-size: 18px;
    line-height: 49px;
    margin-top: 6px;
  }
  /*.icons .icon_item p.active{*/
    /*color: #FFD678!important;*/
  /*}*/
</style>
