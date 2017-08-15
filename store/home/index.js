import * as actions from './action'
import * as mutationTypes from './mutations'

const state = {
  articleBase: {
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
  }
}

const mutations = {
  [mutationTypes.UPDATE_ARTICLE_LIST] (state, data) {
    console.log(data)
    state.articleBase = data
  }
}

export default {
  state,
  mutations,
  actions
}
