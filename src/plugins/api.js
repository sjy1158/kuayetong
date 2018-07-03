import axios from 'axios'
import { Toast } from 'vant'
import config from '../util/config'

// 处理服务端错误信息
axios.interceptors.response.use(response=>{
  if(response.data.code==200) {
    return response.data.data;
  } else if (response.data.code==300){
      return Toast(response.data.msg);;
  } else if(typeof response.data=="string"){
     return response.data;
  } else if(response.data.status==1){
    return response.data.lives;
  }else {
   return Toast(response.data.msg);
  }
});

const api = {
  //获取图标
  getImage(){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getShopAdvertiseImage',
    })
  },
  geticon() {
    return axios.request({
      method: 'get',
      url: '/api/crossindustry/shopPage/getShopTypeByLevel?level=1',
    })
  },
  // 获取店铺数据
  getShopimg(id) {
    return axios.request({
      method: 'get',
      url:'/api/crossindustry/shopPage/getShopTypeListByShopType',
      params: {
        shopTypeId: id
      }
    })
  },
  getShoplist(params) {
    return axios.request({
      method: 'get',
      url: '/api/crossindustry/shopPage/getShopByShopType',
      params: params
    })
  },

  //获取店铺信息
  getShopInformation(shopid) {
    return axios.request({
      method: 'get',
      url: '/api/crossindustry/shopPage/getShopInformation',
      params: {
        shopId: shopid
      }
    })
  },
  //获取产品列表
  getStroshops(shopid){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getShopProduct',
      params:{
        shopId:shopid
      }
    })
  },
  //获取折扣信息
  getDiscon(shopid){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getShopDeduction',
      params:{
        shopId:shopid
      }
    })
  },
  //立即抵扣
  payDicon(params){
      return axios.request({
        method:'get',
        url:'/api/crossindustry/shopPage/deductPay',
        params:params
      })
  },
  getWeather(city){
    return axios.request({
      method:'get',
      url:'http://restapi.amap.com/v3/weather/weatherInfo?key=534c5d265f9fb6b8907515fe31677328&city='+city,
    })
    // return axios.get('http://restapi.amap.com/v3/weather/weatherInfo?key=534c5d265f9fb6b8907515fe31677328&city=杭州').then(function (response) {
    //   alert(JSON.stringify(response.data))
    // })
  },
  //获取首页列表
  getIndexList(params){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/nearbyShops',
      params:params
    })
  },
  //首页搜索
  homeSearch(params){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/search',
      params:params
    })
  },
  //首页热词
  gethotWord(){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getHotWord'
    })
  },
  // 新闻条
  getheadLine() {
    return axios.request({
      method: 'get',
      url: '/api/crossindustry/shopPage/getHeadLine'
    })
  },

  // 支付宝支付
  getPay1(params){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/alipay/pay',
      params:params
    })
  },
  //获取卡列表
  getCardlist(params){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/userPage/getCardList',
      params:params
    })
  },
  // 充值
  manageRecharge(params){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/userPage/manageRecharge',
      params:params
    })
  },
  //获取用户列表
  getagentUser(params){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/userPage/getAgentUser',
      params:params
    })
  },
  //获取产品
  getProduct(productId){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getProductMessage',
      params:{
        productId:productId
      }
    })
  },
  // 获取订单状态
  getpaystatus(orderId){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/judgeOrderStatus',
      params:{
        orderId:orderId
      }
    })
  },
  // 获取用户信息
  getInfor(userid){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/phonePage/getUserInformation',
      params:{
        userId:userid
      }
    })
  },
  shareRegister(params){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/userManage/shareRegister',
      params:params
    })
  }
}
export default class Api {
  static install(Vue) {
    Object.defineProperty(Vue.prototype, '$api', {
      get() { return api }
    })
  }
}
