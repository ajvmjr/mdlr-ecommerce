export default {
  showCart: state => state.showCart,
  showMenu: state => state.showMenu,
  products: state => state.products,
  cart: state => state.cart,
  cartTotal: state => state.cartTotal,
  snackbar: state => state.snackbar,
  checkoutFormValidity: state => state.checkoutFormValidity,
  isAuthenticated: state => state.token !== null,
}
