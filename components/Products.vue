<template>
  <div class="products">
    <ProductsCard
      v-for="product in productsWithMaxLength"
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

  props: {
    max: {
      type: [String, Number],
      required: false,
      default: 'all',
    },
  },

  computed: {
    ...mapGetters(['products']),

    productsWithMaxLength() {
      const { max, products } = this;

      if (max === 'all') return products;

      return products.slice(0, max);
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  border-bottom: 1px solid $main-border-color;
  height: auto;
  width: 100%;
  min-width: 100%;

  @media screen and (min-width: $md) {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
