export const state = () => ({
  showCart: false,
  showMenu: false,
  products: [],
  cart: [],
  cartTotal: 0,
  checkoutFormValidity: {
    customerIsValid: false,
    shippingAddressIsValid: false,
    paymentInfoIsValid: false,
  }
})
