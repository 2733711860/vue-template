import * as types from './mutation-types'

const mutations = {
  // 当前播放列表
  [types.SET_PLAYLIST](state, playlist) {
    state.playlist = playlist
  },
}

export default mutations
