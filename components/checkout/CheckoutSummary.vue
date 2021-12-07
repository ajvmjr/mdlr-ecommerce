<template>
  <div class="summary">
    <div class="summary__details">
      <p class="description">Subtotal</p>
      <span class="value">$ 138</span>
    </div>
    <div class="summary__details">
      <p class="description">Frete X</p>
      <span class="value">$ 10</span>
    </div>
    <div class="summary__details bold">
      <p class="description">Total</p>
      <span class="value">$ 148</span>
    </div>
    <div class="summary__action">
      <AppButton text="Realizar pedido" height="40px" width="100%" />
    </div>
  </div>
</template>

<script>
import AppButton from '../AppButton';
export default {
  components: { AppButton },
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
