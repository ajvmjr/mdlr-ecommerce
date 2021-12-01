<template>
  <div class="products">
    <ProductsCard />
    <ProductsCard />
    <ProductsCard />
    <ProductsCard />
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
