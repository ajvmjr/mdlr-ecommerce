<template>
  <div>
    <TheLatestCollections />
    <TheAbout />
    <Products />
  </div>
</template>

<script>
import TheLatestCollections from '@/components/TheLatestCollections';
import TheAbout from '@/components/TheAbout';
import Products from '@/components/Products';

export default {
  components: {
    TheLatestCollections,
    TheAbout,
    Products,
  },

  middleware: ['initAuth', 'auth'],

  mounted() {
    this.$store.dispatch('getCart');
  },
};
</script>
