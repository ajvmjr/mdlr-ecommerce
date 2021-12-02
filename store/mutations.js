export default {
  setShowCart(state, status) {
    state.showCart = status;
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
}
