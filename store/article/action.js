import axios from 'axios'
import { UPDATE_ARTICLE_LIST } from './mutations'

export function GET_ARTICLE_LIST ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('articles', {params})
    .then(res => {
      commit(UPDATE_ARTICLE_LIST, {
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
