<template>
  <div class="order">
    <div class="order__header">
      <h3 class="order__header__number">
        Pedido Nº: {{ products[0].order_id }}
      </h3>
      <span class="order__header__total">$ {{ orderTotal }}</span>
    </div>
    <nuxt-link
      v-for="product in products"
      :key="product.id"
      :to="`/product/${product.id}`"
      class="order__info"
    >
      <div class="order__info__image">
        <img :src="productImage(product.image)" alt="product" loading="lazy" />
      </div>
      <div class="order__info__details">
        <p class="order__info__details__product-name">{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <p>quantidade: {{ product.quantity }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  computed: {
    orderTotal() {
      return this.products.reduce((acc, product) => {
        return Number(acc) + Number(product.price) * product.quantity;
      }, 0);
    },
  },

  methods: {
    productImage(image) {
      return `${process.env.BASE_URL}files/${image}`;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  all: unset;
  cursor: pointer;
}
.order {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  color: $font-color-black;
  font-family: $main-font-family;
  font-size: 1.4rem;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  width: 90%;

  &__header {
    align-items: center;
    border-bottom: 1px solid $main-border-color;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    &__number {
      font-weight: normal;
      width: 80%;
    }

    &__total {
      font-weight: bold;
    }
  }

  &__info {
    width: 100%;

    &:not(:last-child) {
      border-bottom: 2px solid $main-border-color;
    }

    &__image {
      display: none;
    }

    &__details {
      align-items: space-between;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      &__product-name {
        font-weight: bold;
      }
    }
  }

  @media screen and (min-width: $sm) {
    &__info {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;

      &__image {
        display: block;
        width: 30%;

        img {
          max-width: 100%;
        }
      }

      &__details {
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }

  @media screen and (min-width: $md) {
    width: 60%;

    &__info {
      &__image {
        width: 20%;
      }
    }
  }

  @media screen and (min-width: $xl) {
    width: 50%;

    &__info {
      &__image {
        width: 20%;
      }
    }
  }

  @media screen and (min-width: $xxl) {
    width: 40%;

    &__info {
      &__image {
        width: 20%;
      }
    }
  }
}
</style>
