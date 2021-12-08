<template>
  <div class="input-wrapper">
    <label :for="name">{{ label }} {{ required ? '*' : '' }}</label>
    <input
      :id="name"
      v-model="inputValue"
      :type="type"
      :name="name"
      :value="value"
    />
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
    value: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
      inputValue: '',
    };
  },

  watch: {
    inputValue() {
      this.$emit('input', this.inputValue);
    },

    value() {
      this.inputValue = this.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;

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
    margin-bottom: 1rem;
    outline: none;
    padding: 0 1rem;
    width: 100%;
  }
}
</style>
