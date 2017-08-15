import axios from 'axios'
import { UPDATE_ARTICLE_LIST } from './mutations'

export function GET_ARTICLE_LIST ({state, rootState, commit, dispatch, getters}, params = {}) {
  return axios.get('articles', {params})
    .then(res => {
      commit(UPDATE_ARTICLE_LIST, res)
      return res
    })
}
