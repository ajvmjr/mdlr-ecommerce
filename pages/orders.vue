<template>
  <div class="wrapper">
    <h1 class="title">Compras</h1>
    <Order v-for="(order, index) in orders" :key="index" :products="order" />
  </div>
</template>

<script>
import Order from '@/components/orders/Order';

export default {
  components: { Order },

  middleware: ['initAuth', 'auth'],

  async asyncData({ $axios }) {
    const orders = await $axios.$get('orders');
    return { orders };
  },

  mounted() {
    this.$store.dispatch('getCart');
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border-bottom: 1px solid $main-border-color;
}

.title {
  color: $font-color-black;
  font-family: $main-font-family;
  margin: 1rem 0;
  text-align: center;
}
</style>
