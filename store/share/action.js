import axios from 'axios'
import { UPDATE_SHARE_LIST } from './mutations'

export function GET_SHARE_LIST ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('shares', {params})
    .then(res => {
      commit(UPDATE_SHARE_LIST, {
        request: {
          ...params
        },
        response: {
          list: res.data.data,
          total: res.data.meta.pagination.total
        }
      })
      return res
    })
}
