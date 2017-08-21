import Vue from 'vue'
import Vuex from 'vuex'
import work from './work'
import workDetail from './work-detail'
import article from './article'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    work,
    workDetail,
    article
  }
})

export default store
