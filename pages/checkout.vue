<template>
  <div class="checkout">
    <div class="checkout__heading">
      <h1>Checkout</h1>
    </div>
    <div class="checkout__content">
      <section class="checkout__content__order-info">
        <CheckoutSection title="Informações do comprador">
          <CheckoutCustomer />
        </CheckoutSection>

        <CheckoutSection title="Endereço de envio">
          <CheckoutShippingAddress />
        </CheckoutSection>

        <CheckoutSection title="Frete">
          <CheckoutShippingMethod />
        </CheckoutSection>

        <CheckoutSection title="Informações de pagamento">
          <CheckoutPaymentInfo />
        </CheckoutSection>

        <CheckoutSection title="Produtos">
          <CheckoutProducts />
        </CheckoutSection>
      </section>
      <section class="checkout__content__summary">
        <CheckoutSection title="Sumário do pedido">
          <CheckoutSummary />
        </CheckoutSection>
      </section>
    </div>
  </div>
</template>

<script>
import CheckoutCustomer from '@/components/checkout/CheckoutCustomer';
import CheckoutShippingAddress from '@/components/checkout/CheckoutShippingAddress';
import CheckoutSection from '@/components/checkout/CheckoutSection';
import CheckoutShippingMethod from '@/components/checkout/CheckoutShippingMethod';
import CheckoutPaymentInfo from '@/components/checkout/CheckoutPaymentInfo';
import CheckoutSummary from '@/components/checkout/CheckoutSummary';
import CheckoutProducts from '@/components/checkout/CheckoutProducts';

export default {
  components: {
    CheckoutCustomer,
    CheckoutShippingAddress,
    CheckoutSection,
    CheckoutShippingMethod,
    CheckoutPaymentInfo,
    CheckoutSummary,
    CheckoutProducts,
  },
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
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;

      &__order-info {
        max-width: 60%;
        width: 100%;
      }

      &__summary {
        max-width: 40%;
        width: 100%;
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
