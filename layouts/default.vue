<template>
  <div>
    <TheHeader />
    <transition name="slide-fade">
      <TheCart v-if="showCart" />
    </transition>
    <transition name="slide-up">
      <TheMenu v-if="showMenu" />
    </transition>
    <Nuxt />
    <TheSubscribe v-if="routeIsNotCheckout && routeIsNotAuth" />
    <TheFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TheHeader from '~/components/TheHeader';
import TheCart from '@/components/TheCart';
import TheMenu from '@/components/TheMenu';
import TheSubscribe from '@/components/TheSubscribe';
import TheFooter from '@/components/TheFooter';

export default {
  components: { TheHeader, TheCart, TheSubscribe, TheFooter, TheMenu },

  computed: {
    ...mapGetters(['showCart', 'showMenu']),

    routeIsNotCheckout() {
      return this.$route.name !== 'checkout';
    },

    routeIsNotAuth() {
      return this.$route.name !== 'auth';
    },
  },
};
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

.slide-up-leave-active {
  transition: all 0.3s;
}
.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10rem);
}
</style>
