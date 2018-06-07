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
  geticon(){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getShopTypeByLevel?level=1',
    })
  },
  // 获取店铺数据
  getShopimg(id){
    return axios.request({
      method:'get',
      url:'/api/crossindustry/shopPage/getShopTypeListByShopType?',
      params:{
        shopTypeId:id
      }
    })
  },
  getShoplist(params){
      return axios.request({
        method:'get',
        url:'/api/crossindustry/shopPage/getShopByShopType?',
        params:params
      })
  },
}

export default class Api {
  static install(Vue) {
    Object.defineProperty(Vue.prototype, '$api', {
      get() { return api }
    })
  }
}
