import { getStorage, setStorage, removeStorage } from "@/utils/storage"

export default {
  setSnackbar({ commit }, message) {
    setTimeout(() => commit('setSnackbar', {
      show: false,
      message: '',
    }), 3000);

    commit('setSnackbar', {
      show: true,
      message,
    });
  },

  openCart({ commit, dispatch }) {
    commit('setShowCart', true);
    dispatch('toggleMenu', false);
  },

  closeCart({ commit }) {
    commit('setShowCart', false);
  },

  toggleMenu({ commit, dispatch, rootState }, payload) {
    if (payload === false) {
      commit('setShowMenu', payload);
      return;
    }

    const status = !rootState.showMenu;

    commit('setShowMenu', status);

    if (status) {
      dispatch('closeCart');
    }
  },

  getCart({ commit, dispatch }) {
    const cartItems = getStorage('products');
    commit('setCart', cartItems);
    dispatch('calculateCartTotal');
  },

  calculateCartTotal({ commit, rootState }) {
    const cart = rootState.cart;

    if (!cart) return 0;

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

  initAuth({ commit, dispatch }, req) {

    if(!req) {
      const token = getStorage('token');

      if(!token) {
        dispatch('logout');
        return;
      }

      commit('setToken', token)
      setStorage('token', token)
    }
  },

  async ordenateProducts({ commit }, { price, categoryId }) {
    const data = await this.$axios.$get('/products', {
      params: { price, categoryId }
    });
    commit('setProducts', data);
  },

  async placeOrder({ commit, rootState }) {
    const cart = rootState.cart;

    await this.$axios.$post('orders', {
      products: cart.map(({ id, quantity }) => ({ id, quantity }))
    });

    commit('setCart', [])
    setStorage('products', [])
  },

  async signup({}, { name, email, password }) {
    await this.$axios.$post('users', {
      name,
      email,
      password
    });
  },

  async signin({ commit, dispatch }, { email, password }) {
    try {
      const data = await this.$axios.$post('auth', {
        email,
        password
      });

      commit('setToken', data.token);
      setStorage('token', data.token);
    } catch (error) {
      dispatch('logout');
      throw error;
    }
  },

  async getAddressByZipCode({}, cep) {
    const data = await this.$axios.$get(`/cep?cep=${cep}`);
    return data;
  },

  async nuxtServerInit({ commit }, context) {
    try {
      const data = await this.$axios.$get('/products');
      commit('setProducts', data);
    } catch (e) {
      context.error(e);
    }
  },
}
