import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userId: '',
    params: {}
  },
  mutations: {
    setParams: function (state, params) {
      state.params = params
    }
  }
})

export default store

