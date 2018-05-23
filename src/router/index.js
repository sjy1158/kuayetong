import Vue from 'vue'
import Router from 'vue-router'
import nearbyShops from '../pages/nearbyShops'
import Businesshome from '../pages/Businesshome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/nearbyShops',
      component:nearbyShops
    },
    {
      path:'/Businesshome',
      component:Businesshome
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
