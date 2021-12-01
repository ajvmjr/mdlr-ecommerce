<template>
  <div class="products">
    <ProductsCard
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :title="product.name"
      :image="product.image"
      :price="product.price"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductsCard from '@/components/ProductsCard';

export default {
  components: { ProductsCard },
  computed: {
    ...mapGetters(['products']),
  },
  mounted() {
    this.$store.dispatch('getProducts');
  },
};
</script>

<style lang="scss" scoped>
.products {
  height: auto;
  width: 100%;
  min-width: 100%;

  @media screen and (min-width: $md) {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
