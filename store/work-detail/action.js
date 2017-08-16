import axios from 'axios'
import { UPDATE_SHARE_ICON } from './mutations'

export function GET_SHARE_ICON ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('shares', {params})
    .then(res => {
      commit(UPDATE_SHARE_ICON, {
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
