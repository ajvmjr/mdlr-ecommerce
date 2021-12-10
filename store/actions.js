import { getStorage, setStorage, removeStorage } from "@/utils/storage"

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

  logout({ commit }) {
    commit('setToken', null);
    removeStorage('token');
  },

  initAuth({ commit, dispatch }) {
    const token = getStorage('token');

    if(!token) {
      dispatch('logout');
      return;
    }

    commit('setToken', token)
    setStorage('token', token)

    return;
  },

  async signup({}, { name, email, password }) {
    try {
      await this.$axios.$post('users', {
        name,
        email,
        password
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async signin({ commit, dispatch }, { email, password }) {
    try {
      const data = await this.$axios.$post('auth', {
        email,
        password
      });

      commit('setToken', data.token)
      setStorage('token', data.token)
    } catch (error) {
      dispatch('logout');
      throw error;
    }
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
