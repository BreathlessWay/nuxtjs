import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import workDetail from './work-detail'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    home,
    workDetail
  }
})

export default store
