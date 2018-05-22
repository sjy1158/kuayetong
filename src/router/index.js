import Vue from 'vue'
import Router from 'vue-router'
import nearbyShops from '../pages/nearbyShops'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/nearbyShops',
      component:nearbyShops
    },
    {
      path:'*',
      redirect:'/nearbyShops'
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
