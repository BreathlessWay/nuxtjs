import * as actions from './action'
import * as mutationTypes from './mutations'
import Vue from 'vue'

const state = {
  workBase: {
    request: {
      page: 1,
      count: 9,
      tags: '',
      type: 'works'
    },
    response: {
      list: [],
      total: 0
    }
  },
  baseSetting: {}
}

const mutations = {
  [mutationTypes.UPDATE_WORK_LIST] (state, data) {
    Vue.set(state, data.request.tags, {
      ...state.workBase,
      ...data
    })
  },
  [mutationTypes.UPDATE_BASE_SETTING] (state, data) {
    state.baseSetting = data
  }
}

export default {
  state,
  mutations,
  actions,
  getters: {
    baseConfig: state => {
      return state.baseSetting
    }
  }
}
