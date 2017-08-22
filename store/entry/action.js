import axios from 'axios'
import { UPDATE_BASE_SETTING } from './mutations'

export function GET_BASE_SETTING ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('settings')
    .then(res => {
      commit(UPDATE_BASE_SETTING, res.data)
      return res
    })
}
