<template>
  <div class="allShops">
    <header id="header">
      <img src="../assets/return@3x.png" alt="" class="back">
      <div style="" class="searchInput2">
        <div>
          <img src="../assets/search.png" alt="">
          <input type="text" placeholder="输入商家或商品名称搜索">
        </div>
      </div>
    </header>
    <!--<div style="background: white" class="searchInput">-->
      <!--<div>-->
        <!--<img src="../assets/search.png" alt="">-->
        <!--<input type="text" placeholder="输入商家或商品名称搜索">-->
      <!--</div>-->
    <!--</div>-->

    <section class="mod">
      <div style="text-align: left;position: fixed;z-index: 9999999;background:#f1f0f0 " class="meishi">
        <span>美食</span>
        <span>美食（1996）</span>
        <span style="float: right">去频道▶</span>
      </div>

      <div class="tabcontentshop">
        <ul style="position: fixed!important;top:69px;">
          <li>甜点饮品</li>
          <li>正餐优选</li>
          <li>能量西餐</li>
          <li>快食简餐</li>
          <li>异国料理</li>
          <li>鲜花蛋糕</li>
          <li>家常菜</li>
          <li>夜宵</li>
          <li>早餐</li>
          <li>小吃馆</li>
          <li>小炒菜</li>
        </ul>
        <div class="shoplist2" style="margin-top: 30px;">
          <ul>
            <li>
              <img src="../assets/fastfood.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/hamburgerfries.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/fastfood.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/hamburgerfries.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/fastfood.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/hamburgerfries.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/fastfood.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/hamburgerfries.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/fastfood.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/hamburgerfries.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/fastfood.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/hamburgerfries.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/fastfood.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/hamburgerfries.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/fastfood.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/hamburgerfries.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
            <li>
              <img src="../assets/steak.png" alt="">
              <p>全部</p>
              <div>999</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "allShops"
    }
</script>

<style>
  html,body{
    background: #f1f0f0;
  }
  #header{
    height: 40px;
    width: 100%;
    background: white;
    position: fixed;
    top: 0px;
    left: 0px;
    line-height: 40px;
    /*padding: 0px 10px 0px 10px;*/
  }
  #header .back{
    float: left;
    padding-left: 10px;
    height: 20px;
    width: 10px;
    position: absolute;
    left: 0px;
    top: 50%;
    margin-top: -10px;
  }
  .allShops .mint-header{
    background: white!important;
    color: #393939;
    font-size: 18px!important;
    z-index: -9999999999;
  }
  .allShops .mint-header i{
    font-size: 18px!important;
  }
  .allShops .mint-search{
    margin-top: 40px;
    height: 70px!important;
  }

  .searchInput2{
    height: 40px;width: 100%;line-height: 40px;
  }
  .searchInput2 div{
    height: 100%;
    width: 90%;
    /*background: red;*/
    margin: 0 auto;
    position: relative;
  }
  .searchInput2 div img{
    position: absolute;
    height: 15px;
    width: 15px;
    top: 50%;
    left: 6%;
    margin-top: -7.5px;
  }
  .searchInput2 div input{
    height: 15px;
    width: 83%;
    padding-left: 7%;
    border: 1px #FFFFFF solid;
    box-shadow:0px 0px 0px 3px #F8F8F8;
    border-radius: 15px;
    outline: none;
    color: #909090;
    font-size: 12px;
  }
  .mod{
    font-size: 12px;
    /*margin-top: 40px;*/
    width: 100%;
    height: auto;
    background: #f1f0f0;
    margin-top: 40px;
  }
  .meishi{
    height: 47px;
    width: 100%;
    line-height: 47px;
  }
  .meishi span{
    margin-left: 15px;
  }
  .meishi span:nth-child(3){
    padding-right: 6px;
  }
  .tabcontentshop{
    width: 100%;
    height: auto;
  }
  .tabcontentshop ul{
    padding: 0px!important;
    width: 25%;
    height: auto;
    background: white;
    float: left;
    font-size: 14px;
    font-family: PingFangSC-Regular;
  }
  .tabcontentshop ul li{
    padding-top: 20px;
  }
  .tabcontentshop ul li img{
    width: 39px;
    height: 26px;
  }
  .tabcontentshop ul li:last-child{
    padding-bottom: 14px;
  }
  .shoplist2{
    width: 73%!important;
    height: auto;
    float: right;
    /*background: red!important;*/
    padding: 0% 1% 0% 1%!important;
  }
  .shoplist2 ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /*height: auto;*/
    /*display: flex;*/
    /*flex-wrap:wrap;*/
    /*margin: 0 auto;*/
    /*!*background: green;*!*/
    /*padding: 0px!important;*/

  }
  .shoplist2 ul li{
    /*height: 192px;*/
    flex: 1;
    width: 33%;
    height: 50px;
    /*background: red;*/
    min-width: 33%;
    /*box-shadow:3px 3px 8px 3px #F3F3F3;*/
    margin-bottom: 29px;
    /*margin-left: 1%;*/
    /*border-radius: 10px;*/
    max-width: 33%;
    font-size: 12px;
    padding: 0px!important;
    padding-top: 10px!important;
    /*position: relative;*/
    /*margin: 0px!important;*/
  }
  .shoplist2 ul li p{
    margin: 0px!important;
  }
  .shoplist2 ul li div{
    width: 50px;
    background: #f3f3f3;
    margin: 0 auto;
    color: #717171;
    margin-top: 4px!important;
    border-radius: 5px;
  }



</style>
