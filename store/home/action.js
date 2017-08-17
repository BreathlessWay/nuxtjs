import axios from 'axios'
import { UPDATE_ARTICLE_LIST, UPDATE_BASE_SETTING } from './mutations'

export function GET_ARTICLE_LIST ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('articles', {params})
    .then(res => {
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

export function GET_BASE_SETTING ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('settings')
    .then(res => {
      commit(UPDATE_BASE_SETTING, res.data)
      return res
    })
}
