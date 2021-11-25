export default {
  openCart({ commit }) {
    commit('setShowCart', true)
  },
  closeCart({ commit }) {
    commit('setShowCart', false)
  }
}
