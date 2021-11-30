<template>
  <div>
    <TheLatestCollections />
    <TheAbout />
    <Products />
    <TheSubscribe />
    <TheFooter />
  </div>
</template>

<script>
import TheLatestCollections from '@/components/TheLatestCollections';
import TheAbout from '@/components/TheAbout';
import Products from '@/components/Products';
import TheSubscribe from '@/components/TheSubscribe';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheLatestCollections,
    TheAbout,
    Products,
    TheSubscribe,
    TheFooter,
  },
};
</script>
