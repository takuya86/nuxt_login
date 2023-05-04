export const state = () => ({
  user: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setInitialState(state) {
    state.user = []
  }
}

export const actions = {
  async login({ commit }, user) {
    try {
      const response = await this.$auth.loginWith('local', {
        data: {
          name: user.name,
          email: user.email,
          password: user.password
        }
      })
      commit('setUser', response.data.data)
      this.$router.push('/')
      return response
    } catch (error) {
      console.log('ログインエラー', error.response.data.errors)
      throw error
    }
  },
  async logout({ commit }) {
    await this.$auth.logout()
    commit('setInitialState')
    this.$router.push(`/auth/signin`)
  }
}