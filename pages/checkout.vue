<template>
  <div class="checkout">
    <div class="checkout__heading">
      <h1>Checkout</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkout {
  &__heading {
    align-items: center;
    border-bottom: 1px solid $main-border-color;
    display: flex;
    height: 30vh;
    justify-content: center;
    width: 100%;

    h1 {
      font-size: 3.2rem;
      font-family: $main-font-family;
      font-weight: 700;
    }
  }

  @media screen and (min-width: $sm) {
    &__heading {
      h1 {
        font-size: 5rem;
      }
    }
  }

  @media screen and (min-width: $md) {
    &__heading {
      h1 {
        font-size: 5.5rem;
      }
    }
  }

  @media screen and (min-width: $xl) {
    &__heading {
      h1 {
        font-size: 6rem;
      }
    }
  }
}
</style>
