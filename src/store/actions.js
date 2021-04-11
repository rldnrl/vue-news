import {
  fetchUserInfo,
  fetchAskDetail,
  fetchList
} from '../api'
import {
  SET_USER,
  SET_ASK_DETATL
} from './mutations-types'

export default {
  // async FETCH_NEWS({ commit }) {
  //   const response = await fetchNewsList()
  //   commit(SET_NEWS, response)
  // },
  // async FETCH_ASK({ commit }) {
  //   const response = await fetchAskList()
  //   commit(SET_ASK, response)
  // },
  async FETCH_USERINFO({ commit }, payload) {
    const response = await fetchUserInfo(payload)
    commit(SET_USER, response.data)
  },
  async FETCH_ASK_DETAIL({ commit }, payload) {
    const response = await fetchAskDetail(payload)
    commit(SET_ASK_DETATL, response.data)
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName)
    commit('SET_LIST', response)
    return response
  }
}
