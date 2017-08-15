import axios from 'axios'
import { UPDATE_ARTICLE_LIST } from './mutations'

export function GET_ARTICLE_LIST ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('articles', {params})
    .then(res => {
      console.log(res.data.meta.pagination.total)
      let hasMore = true
      if (res.data.data.length < params.count) {
        hasMore = false
      } else if (res.data.data.length === params.count && res.data.meta.pagination.total <= res.data.data.length * params.page) {
        hasMore = false
      } else {
        hasMore = true
      }
      commit(UPDATE_ARTICLE_LIST, {
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
