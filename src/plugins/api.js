import axios from 'axios'
import { Toast } from 'vant'
// 处理服务端错误信息
axios.interceptors.response.use(response=>{
  if(response.data.isSuccess){
    return response.data.result
  }else {
    return Toast(response.data.message);
  }
});

const api = {
  //获取图标
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
      url: '/api/crossindustry/shopPage/getShopTypeListByShopType?',
      params: {
        shopTypeId: id
      }
    })
  },
  getShoplist(params) {
    return axios.request({
      method: 'get',
      url: '/api/crossindustry/shopPage/getShopByShopType?',
      params: params
    })
  },

  //获取店铺信息
  getShopInformation(shopid) {
    return axios.request({
      method: 'get',
      url: '/api/crossindustry/shopPage/getShopInformation?',
      params: {
        shopId: shopid
      }
    })
  },
  //获取产品列表
  getStroshops(shopid){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getShopProduct?',
      params:{
        shopId:shopid
      }
    })
  },
  //获取折扣信息
  getDiscon(shopid){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getShopDeduction?',
      params:{
        shopId:shopid
      }
    })
  },
  //立即抵扣
  payDicon(params){
      return axios.request({
        method:'get',
        url:'/api/crossindustry/shopPage/deductPay?',
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
