import { getStorage } from "@/utils/storage"

export default {
  openCart({ commit }) {
    commit('setShowCart', true)
  },

  closeCart({ commit }) {
    commit('setShowCart', false)
  },

  getCart({ commit }) {
    const cartItems = getStorage('products')
    commit('setCart', cartItems)
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
