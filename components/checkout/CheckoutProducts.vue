<template>
  <div>
    <div v-for="item in cart" :key="item.id" class="product">
      <div class="product__image">
        <img :src="productImage(item.image)" alt="product" loading="lazy" />
      </div>
      <div class="product__info">
        <p class="product__info__title">{{ item.name }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Tamanho: {{ item.size }}</p>
      </div>
      <div class="product__price">
        <p>$ {{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cart']),
  },

  methods: {
    productImage(image) {
      return `${process.env.BASE_URL}files/${image}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  font-family: $main-font-family;
  flex-wrap: wrap;
  font-size: 1.4rem;
  gap: 2rem;
  margin-top: 5px;

  &__image {
    display: none;
    max-width: 10%;

    img {
      width: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;

    &__title {
      font-weight: bold;
    }
  }

  &__price {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    width: 20%;
  }

  @media screen and (min-width: $md) {
    &__image {
      display: block;
    }
  }
}
</style>
