<template>
  <div>
    <TheHeader />
    <transition name="slide-fade">
      <TheCart v-if="showCart" />
    </transition>
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TheHeader from '~/components/TheHeader'
import TheCart from '@/components/TheCart'

export default {
  components: { TheHeader, TheCart },
  computed: {
    ...mapGetters(['showCart']),
  },
}
</script>

<style lang="scss" scoped>
.slide-fade-leave-active {
  transition: all 0.3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(5rem);
}
</style>
