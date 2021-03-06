export const state = () => ({
  drawer: true
})

export const mutations = {
  CHANGE_DRAWER(state) {
    state.drawer = !state.drawer
  }
}

export const actions = {
  changeDrawer({ commit }) {
    commit('CHANGE_DRAWER')
  }
}
