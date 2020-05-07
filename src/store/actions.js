import * as types from './mutation-types'

// 当前播放列表
export const setPlaylist = function({ commit }, playlist) {
  commit(types.SET_PLAYLIST, playlist)
}
