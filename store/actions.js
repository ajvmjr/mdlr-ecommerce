export default {
  openCart({ commit }) {
    commit('setShowCart', true)
  },
  closeCart({ commit }) {
    commit('setShowCart', false)
  },
  async nuxtServerInit({ commit }, context) {
    try {
      const data = await this.$axios.$get('/products')
      commit('setProducts', data)
    } catch (e) {
      context.error(e)
    }
  },
}
