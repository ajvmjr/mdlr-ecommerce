<template>
  <router-link to="/product/2">
    <div class="card">
      <div class="card__image">
        <img src="../assets/images/hero.jpg" alt="product image" />
      </div>
      <div class="card__info">
        <p class="card__info__title">Lucien Stripe Knit Volley Short</p>
        <span class="card__info__price">$ 39.00</span>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;

  @media screen and (min-width: $md) {
    width: 50%;
  }

  @media screen and (min-width: $xl) {
    width: 25%;
  }
}

.card {
  border: 0.5px solid $main-border-color;
  color: $font-color-black;
  font-family: $main-font-family;
  width: 100%;

  &__image {
    width: 100%;

    img {
      max-width: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 10rem;
    padding: 2rem;
    width: 100%;

    &__title {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    &__price {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: $md) {
    &__info {
      min-height: 14rem;
    }
  }
}
</style>
