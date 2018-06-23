<template>
    <div>
      <div class="form">
        <div style="width: 100%;height: auto;background: white;border-radius: 10px;">
          <form action="">
            <div>
              <div>
                <label>开始ID</label>
                <input type="text" v-model="params.fromCardId" placeholder="输入卡片ID">
              </div>
              <div>
                <label>结束ID</label>
                <input type="text" v-model="params.toCardId" placeholder="输入卡片ID">
              </div>
              <div>
                <label>金额</label>
                <input type="text" v-model="params.money" placeholder="输入卡片金额">
              </div>
              <div>
                <label>状态</label>
                  <van-radio-group v-model="params.status" @change="change" style="color: #8f8f8f!important;">
                    <van-radio name="1">未使用</van-radio>
                    <van-radio name="2" style="margin-left: 40px;">已使用</van-radio>
                  </van-radio-group>
                </div>
            </div>
          </form>
        </div>
        <button type="button" class="button">快速查询</button>
        <table border="1" width="100%" cellspacing="0" cellpadding="2" style="margin-top: 22px;">
          <thead>
             <tr>
               <th>ID</th>
               <th>卡号</th>
               <th>密码</th>
               <th>金额</th>
               <th>状态</th>
             </tr>
          </thead>
          <tbody>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>充值</td>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
          </tbody>
        </table>
        <!--分页-->
        <div style="width: 100%;height: 62px;line-height:62px;position: relative">
          <input type="text" v-model="params.pageNum" placeholder="请输入页码数"
                 style="width: 80px;height: 20px;text-align:center;background: #cfcfcf;border: none;
                 float: left;font-size: 10px;position: absolute;left: 0px;top: 50%;margin-top: -10px;border-radius: 4px;">
          <span style="float: left;margin-left: 90px;color: #4AB1FE">快速跳转</span>
          <span>首页</span>
          <span style="margin-left: 10px">尾页</span>
          <span style="float: right">共计8000</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cardList",
      data(){
          return{
            params:{
              accountNumber:'15189763158',
              fromCardId:'',
              toCardId:'',
              money:'',
              status:'1',
              pageNum:1,
              num:10
            }
          }
      },
      methods:{
        change(name){
          alert(name);
        }
      }
    }
</script>

<style scoped>
  .form{
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 10px;
  }
  form label{
    width: 42px;
    text-align: left;
    padding-left: 20px;
  }
  form{
    font-size: 14px;
    margin-top: 10px;
  }
  form div div{
      display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #f2f2f2;
  }
  form div div:last-child{
    border: none!important;
  }
  form div div input{
    padding-left: 28px;
    border: none;
    color: #8F8F8F!important;
  }
  .van-radio-group .van-radio .van-radio__label{
    line-height: 40px!important;
  }
  .button{
    width: 100%;
    height: 33px;
    margin-top: 25px;
    text-align: center;
    border: none;
    background: #F08400;
    font-size: 16px;
    line-height: 33px;
    color: white;
    border-radius: 20px;
  }
  table{
    font-size: 12px!important;
  }
  table tr{
    height: 25px;
  }
  table tbody tr td:last-child{
    color: #4AB1FE;
  }
</style>
