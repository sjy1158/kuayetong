import Vue from 'vue'
import Router from 'vue-router'
import nearbyShops from '../pages/nearbyShops'
import Businesshome from '../pages/Businesshome'
import Gastrosoph from '../pages/Gastrosoph'
import allShops from '../pages/allShops'

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
      path:'/Gastrosoph',
      component:Gastrosoph
    },
    {
      path:'/allShops',
      component:allShops
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
