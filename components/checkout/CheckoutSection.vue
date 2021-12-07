<template>
  <form class="wrapper">
    <div class="wrapper__heading">
      <h2>{{ title }}</h2>
    </div>
    <div class="wrapper__content">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid $main-border-color;
  margin: 1.5rem 0;
  width: 100%;

  &__heading {
    border-bottom: 1px solid $main-border-color;
    padding: 1rem 2rem;

    h2 {
      font-size: 1.6rem;
      font-family: $main-font-family;
      font-weight: bold;
    }
  }

  &__content {
    padding: 1rem 2rem;
  }
}
</style>
