export const state = () => ({
  showCart: false,
  showMenu: false,
  products: [],
  cart: [],
  cartTotal: 0,
  token: null,
  snackbar: {
    show: false,
    message: '',
  },
  checkoutFormValidity: {
    customerIsValid: false,
    shippingAddressIsValid: false,
    paymentInfoIsValid: false,
  }
})
