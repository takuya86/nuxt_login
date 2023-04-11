export const state = () => ({
  user: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  async login({ commit }, user) {
    try {
      const response = await this.$auth.loginWith('local', {
        data: {
          email: user.email,
          password: user.password
        }
      })
      commit('setUser', response.data.data)
      this.$router.push('/')
      return response
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}