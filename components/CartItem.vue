<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img src="../assets/images/hero.jpg" alt="product" />
    </div>
    <div class="cart-item__info">
      <h2 class="cart-item__info__title">
        Long Sleeve Patterned Flannel Shirt
      </h2>
      <p class="cart-item__info__price">$ 39.00</p>
      <p class="cart-item__info__size">Size: S</p>
      <span>Remover</span>
    </div>
    <div class="cart-item__quantity">1</div>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  border-bottom: 0.5px solid $main-border-color;
  display: flex;
  font-family: $main-font-family;
  width: 100%;

  &__image {
    background: $main-white;
    border-right: 1px solid $main-border-color;
    width: 10rem;

    img {
      height: 100%;
      width: 100%;
    }
  }

  &__info {
    display: flex;
    border-right: 1px solid $main-border-color;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    margin: 0 1.6rem;
    padding-left: 1.2rem;

    &__title,
    &__price,
    &__size,
    span {
      color: $font-color-black;
      font-size: 1.4rem;
    }

    &__title {
      font-weight: 700;
    }

    span {
      color: #cbcbcecc;
      margin-top: 0.5rem;
    }
  }

  &__quantity {
    align-items: center;
    align-self: stretch;
    background: $secondary-white;
    display: flex;
    font-size: 2.8rem;
    font-weight: 300;
    justify-content: center;
    padding-right: 1rem;
    width: 7rem;
    -webkit-align-self: stretch;
  }
}
</style>
