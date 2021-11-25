<template>
  <div>
    <TheHeader />
    <TheCart v-if="showCart" />
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
