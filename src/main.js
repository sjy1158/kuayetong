// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import Api from './plugins/api'
import 'vant/lib/vant-css/index.css'
import 'lib-flexible/flexible'
import AMap from 'vue-amap'

Vue.use(AMap)
Vue.use(Vant)
Vue.use(Api)

AMap.initAMapApiLoader({
  // 申请的高德key
  key: '93a787b168c22abb5f1b393e576f01ca',
  // 插件集合
  plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
