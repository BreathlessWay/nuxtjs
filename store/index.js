import Vue from 'vue'
import Vuex from 'vuex'
import page from './page'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    page
  }
})

export default store
