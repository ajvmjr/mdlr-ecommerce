import { getStorage, setStorage } from "@/utils/storage"

export default {
  openCart({ commit }) {
    commit('setShowCart', true)
  },

  closeCart({ commit }) {
    commit('setShowCart', false)
  },

  toggleMenu({ commit, rootState }) {
    const status = !rootState.showMenu;

    commit('setShowMenu', status)
  },

  getCart({ commit, dispatch }) {
    const cartItems = getStorage('products')
    commit('setCart', cartItems)
    dispatch('calculateCartTotal')
  },

  calculateCartTotal({ commit, rootState }) {
    const cart = rootState.cart;

    const total = cart.reduce((acc, product) => {
      return acc + (Number(product.price) * Number(product.quantity))
    }, 0)

    commit('setCartTotal', total)
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

  setCheckoutFormValidity({ commit, rootState }, newValidityValue) {
    const [key, value] = Object.entries(newValidityValue).at(0);

    const currentFormState = { ...rootState.checkoutFormValidity };
    commit('setCheckoutFormValidity', {
      ...currentFormState,
      [key]: value,
    })
  },

  async getAddressByZipCode({}, cep) {
    const data = await this.$axios.$get(`/cep?cep=${cep}`)
    return data
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
