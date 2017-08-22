import Vue from 'vue'
import Vuex from 'vuex'
import entry from './entry'
import work from './work'
import article from './article'
import share from './share'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    entry,
    work,
    article,
    share
  }
})

export default store
