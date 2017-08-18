import * as actions from './action'
import * as mutationTypes from './mutations'
import Vue from 'vue'

const state = {
  articleBase: {
    request: {
      page: 1,
      count: 10,
      tags: '',
      type: 'articles'
    },
    response: {
      list: [],
      total: 0
    }
  }
}

const mutations = {
  [mutationTypes.UPDATE_ARTICLE_LIST] (state, data) {
    Vue.set(state, data.request.tags ? data.request.tags : '全部文章', {
      ...state.articleBase,
      ...data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
