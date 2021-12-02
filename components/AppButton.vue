<template>
  <button
    :style="{ height, width }"
    :type="type"
    :disabled="disabled"
    @click="onClick"
  >
    {{ text }}
  </button>
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
    height: {
      type: String,
      required: false,
      default: '100px',
    },
    width: {
      type: String,
      required: false,
      default: '100px',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: $main-black;
  border: none;
  color: $secondary-white;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  font-family: $main-font-family;
  font-weight: 400;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
