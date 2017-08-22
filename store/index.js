import Vue from 'vue'
import Vuex from 'vuex'
import work from './work'
import article from './article'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    work,
    article
  }
})

export default store
