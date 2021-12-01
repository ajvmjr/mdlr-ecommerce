<template>
  <div class="wrapper">
    <label for="tamanho" class="wrapper__label">Tamanho</label>
    <select
      id="tamanho"
      v-model="selected"
      name="tamanho"
      class="wrapper__select"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['P', 'M', 'G', 'GG'],
      selected: '',
    };
  },
  watch: {
    selected() {
      this.$emit('input', this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: $main-font-family;
  display: flex;
  flex-direction: column;
  width: 100%;

  &__label {
    color: $font-color-black;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  &__select {
    background-color: #ffffff;
    background-image: linear-gradient($secondary-white 0, #f3f3f3 100%);
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #cccccc;
    color: $font-color-black;
    display: block;
    font-size: 1.4rem;
    height: 3.8rem;
    line-height: 1.4;
    margin-bottom: 1rem;
    padding: 1.2rem 1.2rem;
    outline: none;
    width: 100%;

    &:focus {
      border-bottom: 1px solid rgb(0, 153, 255);
    }

    option {
      /* min-height: 5px; */
      padding: 0 2px 1px;
    }
  }
}
</style>
