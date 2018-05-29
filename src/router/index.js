import Vue from 'vue'
import Router from 'vue-router'
import nearbyShops from '../pages/nearbyShops'
import Businesshome from '../pages/Businesshome'
import Gastrosoph from '../pages/Gastrosoph'
import allShops from '../pages/allShops'
import Paybill from '../pages/Paybill'
import payOver from '../pages/payOver'
import listItem from '../pages/listItem'

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
      path:'/Paybill',
      component:Paybill
    },
    {
      path:'/payOver',
      component:payOver
    },
    {
      path:'/listItem',
      component:listItem
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
