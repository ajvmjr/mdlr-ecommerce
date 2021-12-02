import { getStorage, setStorage } from "@/utils/storage"

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

  addProductToCart({ dispatch }, product) {
    const cartExists = getStorage('products');
    let cartProducts = [];

    if (!cartExists) {
      cartProducts = [product];
      setStorage('products', cartProducts);

      return;
    }

    cartProducts = getStorage('products');

    cartProducts.push(product);

    setStorage('products', cartProducts);

    dispatch('getCart')
  },

  removeProductFromCart({ dispatch, rootState }, itemId) {
    const cart = rootState.cart;

    const index = cart.findIndex(product => product.id === itemId);

    cart.splice(index, 1);

    setStorage('products', cart);

    dispatch('getCart')
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
