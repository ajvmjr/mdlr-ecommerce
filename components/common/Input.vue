<template>
  <div class="input-wrapper">
    <label :for="name">{{ label }} {{ required ? '*' : '' }}</label>
    <input :id="name" v-model="value" :type="type" :name="name" />
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },

  data() {
    return {
      value: '',
    };
  },

  watch: {
    value() {
      this.$emit('input', this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;

  label,
  input {
    color: $font-color-black;
    font-family: $main-font-family;
    font-size: 1.4rem;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.8rem;
  }

  input {
    background: $main-white;
    border: 1px solid $main-border-color;
    height: 3.8rem;
    outline: none;
    padding: 0 1rem;
    width: 100%;
  }
}
</style>
