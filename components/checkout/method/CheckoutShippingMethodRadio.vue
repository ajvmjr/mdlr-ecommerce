<template>
  <div class="wrapper">
    <input
      :name="name"
      :value="value"
      :checked="checked"
      class="wrapper__input"
      type="radio"
      @click="$emit('click', { option: value, price })"
    />
    <label :for="name" class="wrapper__label"
      >{{ label }} - {{ price }}.00</label
    >
    <p class="wrapper__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 1rem;
  &__input,
  &__label,
  &__description {
    font-family: $main-font-family;
  }

  &__input {
    margin-right: 5px;
  }

  &__label,
  &__description {
    font-size: 1.2rem;
  }

  &__label {
    font-weight: bold;
  }

  &__description {
    margin-left: 2rem;
  }

  @media screen and (min-width: $md) {
    &__label,
    &__description {
      font-size: 1.4rem;
    }
  }
}
</style>
