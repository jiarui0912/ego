export default {
  namespaced: true,
  state: {
    userInfo: {
      user: '',
      token: ''
    }
  },
  mutations: {
    setUser (state, params) {
      state.userInfo = params
    }
  },
  actions: {

  },
  getters: {

  }
}