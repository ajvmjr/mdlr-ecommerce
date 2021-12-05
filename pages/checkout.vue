<template>
  <div class="checkout">
    <div class="checkout__heading">
      <h1>Checkout</h1>
    </div>
    <div class="checkout__content">
      <section class="checkout__content__order-info">
        <CheckoutCustomer />
        <CheckoutShipping />
      </section>
      <section class="checkout__content__summary"></section>
    </div>
  </div>
</template>

<script>
import CheckoutCustomer from '@/components/checkout/CheckoutCustomer';
import CheckoutShipping from '@/components/checkout/CheckoutShipping';

export default {
  components: { CheckoutCustomer, CheckoutShipping },
};
</script>

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

  &__content {
    display: flex;
    flex-direction: column;

    padding: 0 2rem;
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

    &__content {
      &__order-info {
        max-width: 60%;
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
