<template>
  <div>
    <TheLatestCollections />
    <TheAbout />
    <Products :max="4" />
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

  middleware: ['initAuth'],

  data() {
    return {
      title: 'Modular E-commerce.',
    };
  },

  head() {
    return {
      title: this.title,
      meta: {
        hid: 'Home page',
        name: 'Home page',
        content: 'Página principal do E-commerce MDLR.',
      },
    };
  },

  mounted() {
    this.$store.dispatch('initAuth');
    this.$store.dispatch('getCart');
    this.$store.dispatch('toggleMenu', false);
  },
};
</script>
