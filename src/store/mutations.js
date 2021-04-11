import {
  SET_USER,
  SET_ASK_DETATL,
  SET_LIST
} from './mutations-types'

export default {
  // [SET_NEWS](state, payload) {
  //   state.news = payload
  // },
  // [SET_ASK](state, payload) {
  //   state.ask = payload
  // },
  [SET_USER](state, payload) {
    state.user = payload
  },
  [SET_ASK_DETATL](state, payload) {
    state.askDetail = payload
  },
  [SET_LIST](state, payload) {
    state.list = payload
  }
}
