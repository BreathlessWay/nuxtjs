import axios from 'axios'
import { UPDATE_SHARE_LIST } from './mutations'

export function GET_SHARE_LIST ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('shares', {params})
    .then(res => {
      let hasMore = true
      if (res.data.data.length < params.count) {
        hasMore = false
      } else if (res.data.data.length === params.count && res.data.meta.pagination.total <= res.data.data.length * params.page) {
        hasMore = false
      } else {
        hasMore = true
      }
      commit(UPDATE_SHARE_LIST, {
        request: {
          ...params
        },
        response: {
          list: res.data.data,
          total: res.data.meta.pagination.total,
          hasMore
        }
      })
      return res
    })
}
