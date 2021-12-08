export default {
  setShowCart(state, status) {
    state.showCart = status;
  },

  setShowMenu(state, status) {
    state.showMenu = status;
  },

  setProducts(state, products) {
    state.products = products;
  },

  setCart(state, cartItems) {
    state.cart = cartItems;
  },

  setCartTotal(state, total) {
    state.cartTotal = total;
  },

  setCheckoutFormValidity(state, payload) {
    state.checkoutFormValidity = payload
  }
}
