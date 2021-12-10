<template>
  <div class="summary">
    <div class="summary__details">
      <p class="description">Subtotal</p>
      <span class="value">$ {{ cartTotal }}</span>
    </div>
    <div class="summary__details">
      <p class="description">{{ info.option }}</p>
      <span class="value">$ {{ info.price }}</span>
    </div>
    <div class="summary__details bold">
      <p class="description">Total</p>
      <span class="value">$ {{ total }}</span>
    </div>
    <div class="summary__action">
      <AppButton
        :has-hover="false"
        :disabled="checkoutFormIsNotValid"
        text="Realizar pedido"
        height="40px"
        width="100%"
        @click="placeOrder"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppButton from '@/components/AppButton';

export default {
  components: { AppButton },

  props: {
    info: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters(['cartTotal', 'checkoutFormValidity']),

    total() {
      return Number(this.info.price) + Number(this.cartTotal);
    },

    checkoutFormIsNotValid() {
      return Object.values(this.checkoutFormValidity).some((value) => !value);
    },
  },

  methods: {
    placeOrder() {
      this.$router.push('/orders');
    },
  },
};
</script>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
.summary {
  display: flex;
  flex-direction: column;
  font-family: $main-font-family;

  &__details {
    display: flex;
    font-size: 1.4rem;
    margin-top: 0.5rem;
    justify-content: space-between;
  }

  &__action {
    margin-top: 1rem;
  }
}
</style>
