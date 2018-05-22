// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import AMap from 'vue-amap'
Vue.use(MintUI)
Vue.use(AMap)

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
