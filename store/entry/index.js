import * as actions from './action'
import * as mutationTypes from './mutations'

const state = {
  baseSetting: {}
}

const mutations = {
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
