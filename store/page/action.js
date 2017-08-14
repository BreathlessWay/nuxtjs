import axios from 'axios'
import { UPDATE_CONFIG } from './mutations'

export function GET_CONFIG ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('')
    .then(res => {
      commit(UPDATE_CONFIG, res)
    })
}
