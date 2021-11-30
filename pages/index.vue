<template>
  <div>
    <TheLatestCollections />
    <TheAbout />
    <Products />
    <TheSubscribe />
  </div>
</template>

<script>
import TheLatestCollections from '@/components/TheLatestCollections';
import TheAbout from '@/components/TheAbout';
import Products from '@/components/Products';
import TheSubscribe from '@/components/TheSubscribe';

export default {
  components: { TheLatestCollections, TheAbout, Products, TheSubscribe },
};
</script>
