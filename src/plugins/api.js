import axios from 'axios'
import { Toast } from 'vant'
import config from '../util/config'
//每个请求添加头部
// axios.interceptors.request.use(request =>{
//   request.headers['channel']=localStorage.getItem('channel');
//   return request;
// })
// 处理服务端错误信息
axios.interceptors.response.use(response=>{
  if(response.data.code==200) {
    return response.data
  } else {
    Toast(response.data.msg);
    return
  }
});

const api = {
  //获取首页图标
  getImage(){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/getShopAdvertiseImage',
    })
  },
  //获取首页level
  geticon() {
    return axios.request({
      method: 'get',
      url:config.baseUrl+'/crossindustry/shopPage/getShopTypeByLevel?level=1',
    })
  },
  // 获取店铺数据
  getShopimg(id) {
    return axios.request({
      method: 'get',
      url:config.baseUrl+'/crossindustry/shopPage/getShopTypeListByShopType',
      params: {
        shopTypeId: id
      }
    })
  },
  getShoplist(params) {
    return axios.request({
      method: 'get',
      url:config.baseUrl+'/crossindustry/shopPage/getShopByShopType',
      params: params
    })
  },

  //获取店铺信息
  getShopInformation(shopid) {
    return axios.request({
      method: 'get',
      url:config.baseUrl+'/crossindustry/shopPage/getShopInformation',
      params: {
        shopId: shopid
      }
    })
  },
  //获取产品列表
  getStroshops(shopid){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/getShopProduct',
      params:{
        shopId:shopid
      }
    })
  },
  //获取立即抵扣折扣信息
  getDiscon(shopid){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/getShopDeduction',
      params:{
        shopId:shopid
      }
    })
  },
  //立即抵扣
  payDicon(params){
      return axios.request({
        method:'get',
        url:config.baseUrl+'/crossindustry/shopPage/deductPay',
        params:params
      })
  },
  // 获取天气
  getWeather(city){
    return axios.request({
      method:'get',
      url:'http://restapi.amap.com/v3/weather/weatherInfo?key=534c5d265f9fb6b8907515fe31677328&city='+city,
    })
  },
  //获取首页列表
  getIndexList(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/nearbyShops',
      params:params
    })
  },
  //首页搜索
  homeSearch(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/search',
      params:params
    })
  },
  //首页热词
  gethotWord(){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/getHotWord'
    })
  },
  // 新闻条
  getheadLine() {
    return axios.request({
      method: 'get',
      url:config.baseUrl+'/crossindustry/shopPage/getHeadLine'
    })
  },

  // 支付宝支付
  getPay1(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/alipay/pay',
      params:params
    })
  },
  //获取卡列表
  getCardlist(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/userPage/getCardList',
      params:params
    })
  },
  // 充值
  manageRecharge(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/userPage/manageRecharge',
      params:params
    })
  },
  //获取用户列表
  getagentUser(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/userPage/getAgentUser',
      params:params
    })
  },
  //获取产品
  getProduct(productId){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/getProductMessage',
      params:{
        productId:productId
      }
    })
  },
  // 获取订单状态
  getpaystatus(orderId){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/judgeOrderStatus',
      params:{
        orderId:orderId
      }
    })
  },
  // 获取用户信息
  getInfor(userid){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/phonePage/getUserInformation',
      params:{
        userId:userid
      }
    })
  },
  shareRegister(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/userManage/shareRegister',
      params:params
    })
  },
  // 领取优惠券
  getConpou(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/powerPurchaser/getQuanlink',
      params:params
    })
  },
  getDinshang(params){
      return axios.request({
        method:'get',
        url:config.baseUrl+'/crossindustry/powerPurchaser/getpro',
        params:params
      })
  },
  getConpoulist(){
    return axios.request({
      method:'get',
      url:'https://acs.m.taobao.com/h5/mtop.alimama.union.hsf.mama.coupon.apply/1.0/?jsv=2.3.16&appKey=12574478&t=1531309271615&sign=0536daeed24b11ef94e8ab7cb11ba33e&api=mtop.alimama.union.hsf.mama.coupon.apply&AntiCreep=true&v=1.0&ecode=1&LoginRequest=true&type=jsonp&dataType=jsonp&callback=mtopjsonp3&data=%7B%22sellerId%22%3A%223063594148%22%2C%22activityId%22%3A%22e9419e51fa234e0ea6178fe8ba116d11%22%2C%22pid%22%3A%22mm_33231688_7050284_23466709%22%2C%22mteeUa%22%3A%22110%23QAZkAUkfkBKWgnaH2wgAMuy2kMJ2vkNOmkm2hQ7%2F8DBLkhOryE2IjQk2QgVn81KCjKkchQ7y8bBokPkoi%2F%2F%2Fjn3ekQap8MGQm0jchn0y833skkkpheK62miDbToEbcrgSg%2FOdXeJMGTCUFFwRe6ztrrKgTvwsTfjcz49bEciskT47TmwjsSQ44W3sOgwpO144yjOsfIisG2kGOmwjTcwkkTa0Ovis9T4acwOs3kkQxYKqTrej9TBkdYEgIwM2pUkDoGWrXrJC4LQE7HGM5jXLd%2FjKKOTclbEYKG7niwI3cJ9tdfy3o8LEOf0UKfaGD%2BMCBzz2byqnRPetTfkAmNvW0mqR3mMSJBYFJb4SOZlxznzm%2FerqKZpnlGM%2Bcj%2BhS8jRm3kjMLUC0E5C75Zo%2F5LV6pra2tseQPCn26ARWv5d8FI%2BUt6McEOr4AfAcrZSRtJiScvRBgeXP90ewACanD0pVWH82B03BSfrGFeUkjdRrl4gIbBNy5CKSMZ1VPWXxefSQnAJHzNJ6Cqy%2FkukAD74K%3D%3D%22%2C%22umidToken%22%3A%22HV01PAAZ0baf6cca73c35d125b45efd00025fb9f%22%7D'
    })
  },

  // 微信支付
  payWei(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/wx/pay.do',
      params:params
    })
  },
  // 定位api
  getMap(){
    return axios.request({
      method:'get',
      url:'https://m.amap.com/detail/index/poiid=B000AAFAC5&callnative=1'
    })
  },
  // 拼多多详情接口
  getPingduo(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/powerPurchaser/getDetail',
      params:params
    })
  },
  // 获取角色
  getMark(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/phonePage/getUserInformation',
      params:params
    })
  },
  // 内部支付
  getAlipay2(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/alipay/payTwo',
      params:params
    })
  },
  // 微信支付2
  getWeixin2(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/wx/payTwo.do',
      params:params
    })
  },
  // 获取回调
  getStatus(id){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/judgeOrderStatusOffLine',
      params:{
        id:id
      }
    })
  },
  //获取短信提示
  getMessg(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/getMoney',
      params:params
    })
  },
  //判断库存
  getNumpro(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/judgeUserAndProduct',
      params:params
    })
  },
  // 获取商家商品详情
  getStoreshop(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/getProductMessage',
      params:params
    })
  },
  //收藏
  getScang(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/shopPage/collect',
      params:params
    })
  },
  //活动详情
  activityDetail(params){
    return axios.request({
      method:'get',
      url:config.baseUrl+'/crossindustry/findPage/FindActivityDetalis',
      params:params
    })
  },
  // 获取用户信息
  getInfo (id) {
    return axios.get('http://q11.shop:8090/app/user/getInfo', {
      params: {
        userId: id
      }
    })
  },
  //获取config参数
  getConfig (params) {
    return axios.post('http://q11.shop:8090/app/user/upgrad/wxPay', params)
  },
  //获取状态
  getOrderstatus (params) {
    return axios.post('http://q11.shop:8090/app/user/upgrad/orderStauts', params)
  }
}
export default class Api {
  static install(Vue) {
    Object.defineProperty(Vue.prototype, '$api', {
      get() { return api }
    })
  }
}
