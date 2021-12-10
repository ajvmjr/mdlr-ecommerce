<template>
  <div>
    <h1>Olá!!</h1>
  </div>
</template>

<script>
export default {
  middleware: ['initAuth', 'auth'],

  mounted() {
    this.$store.dispatch('getCart');
  },
};
</script>
