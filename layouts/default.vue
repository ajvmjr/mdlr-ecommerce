<template>
  <div>
    <TheHeader />
    <TheCart v-if="false" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheCart from '@/components/TheCart'

export default {
  components: { TheHeader, TheCart },
}
</script>
