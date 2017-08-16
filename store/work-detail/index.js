import * as actions from './action'
import * as mutationTypes from './mutations'

const state = {
  shareIcon: {
    request: {
      page: 1,
      count: 4
    },
    response: {
      list: [],
      total: 0
    }
  }
}

const mutations = {
  [mutationTypes.UPDATE_SHARE_ICON] (state, data) {
    state.shareIcon = data
  }
}

export default {
  state,
  mutations,
  actions
}
