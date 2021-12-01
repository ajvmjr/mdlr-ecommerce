export default {
  openCart({ commit }) {
    commit('setShowCart', true)
  },
  closeCart({ commit }) {
    commit('setShowCart', false)
  },
  async getProducts({ commit }) {
    const data  = await this.$axios.$get('/products')
    commit('setProducts', data)
  }
}
