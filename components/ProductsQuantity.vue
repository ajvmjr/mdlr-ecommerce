<template>
  <div class="wrapper">
    <label for="quantity">Quantidade</label>
    <input id="quantity" v-model="quantity" name="quantity" type="number" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },

  watch: {
    quantity() {
      this.$emit('input', this.quantity);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  font-family: $main-font-family;

  label {
    color: $font-color-black;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 3px;
    font-family: $main-font-family;
    height: 3.8rem;
    margin-bottom: 1rem;
    outline: none;
    padding: 0.8rem 0.6rem 1.2rem 0.8rem;
    width: 6rem;
  }
}
</style>
