<template>
  <button :style="{ padding }" @click="onClick">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    padding: {
      type: String,
      required: false,
      default: '12px 20px',
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  background: $main-black;
  border: none;
  color: $secondary-white;
  display: inline-block;
  font-size: 1.4rem;
  font-family: $main-font-family;
  font-weight: 400;
  text-align: center;
}
</style>
