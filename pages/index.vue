<template>
  <div>
    <TheLatestCollections />
    <TheAbout />
  </div>
</template>

<script>
import TheLatestCollections from '@/components/TheLatestCollections';
import TheAbout from '@/components/TheAbout';

export default {
  components: { TheLatestCollections, TheAbout },
};
</script>
