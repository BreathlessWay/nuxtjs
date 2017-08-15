import * as actions from './action'
import * as mutationTypes from './mutations'

const state = {
  articleBase: {
    request: {
      page: 1,
      count: 9,
      tags: ''
    },
    response: []
  }
}

const mutations = {
  [mutationTypes.UPDATE_ARTICLE_LIST] (state, data) {
  }
}

export default {
  state,
  mutations,
  actions
}
