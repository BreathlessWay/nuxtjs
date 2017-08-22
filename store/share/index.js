import * as actions from './action'
import * as mutationTypes from './mutations'
import Vue from 'vue'

const state = {
  shareBase: {
    request: {
      page: 1,
      count: 28
    },
    response: {
      list: [],
      total: 0
    }
  }
}

const mutations = {
  [mutationTypes.UPDATE_SHARE_LIST] (state, data) {
    Vue.set(state, data.request.tags, {
      ...state.shareBase,
      ...data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
