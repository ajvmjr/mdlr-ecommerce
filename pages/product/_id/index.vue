<template>
  <div class="product">
    <div class="product__thumbnail">
      <img :src="productImage" alt="product image" />
    </div>
    <div class="product__info">
      <h2 class="product__info__title">{{ product.name }}</h2>
      <span class="product__info__price">{{ product.price }}</span>
      <p class="product__info__description">
        Easy pull on + go short in an allover vertical stripe pattern. Soft
        textured cotton is cut in a silhouette that hits above the knee with a
        split hem, featuring an elastic waist + adjustable exterior drawstring
        for a comfortable fit. Complete with front slip pockets and back patch
        pockets. Get them only at Urban Outfitters.
      </p>
      <div class="product__size-quantity">
        <ProductsSize v-model="chosenSize" />
        <ProductsQuantity v-model="quantity" />
      </div>
      <AppButton
        text="Adicionar ao carrinho"
        height="35px"
        width="200px"
        :disabled="disableButton"
        @click="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import { getStorage, setStorage } from '@/utils/storage';

import AppButton from '@/components/AppButton';
import ProductsSize from '@/components/ProductsSize';
import ProductsQuantity from '@/components/ProductsQuantity';

export default {
  components: { AppButton, ProductsSize, ProductsQuantity },

  async asyncData({ params, $axios }) {
    const product = await $axios.$get(`products/${params.id}`);
    return { product };
  },

  data() {
    return {
      chosenSize: '',
      quantity: '1',
    };
  },

  computed: {
    productImage() {
      return `${process.env.BASE_URL}files/${this.product.image}`;
    },
    disableButton() {
      return Boolean(!this.chosenSize);
    },
  },

  methods: {
    handleAddToCart() {
      const product = {
        ...this.product,
        size: this.chosenSize,
        quantity: this.quantity,
      };

      const cartExists = getStorage('products');
      let cartProducts = [];

      if (!cartExists) {
        cartProducts = [product];
        setStorage('products', cartProducts);

        return;
      }

      cartProducts = getStorage('products');

      cartProducts.push(product);

      setStorage('products', cartProducts);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  border-bottom: 1px solid $main-border-color;
  display: flex;
  flex-direction: column;
  font-family: $main-font-family;
  max-width: 100vw;

  &__thumbnail {
    max-width: 100%;

    img {
      width: 100%;
    }
  }

  &__info {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 3.2rem 2.4rem 6rem;

    &__title,
    &__price,
    &__description {
      color: $font-color-black;
    }

    &__title {
      font-size: 3.2rem;
      line-height: 4rem;
      margin-bottom: 1rem;
    }

    &__price {
      font-size: 3.2rem;
      line-height: 3.2rem;
      margin-bottom: 4rem;
    }

    &__description {
      font-size: 1.4rem;
      line-height: 2.4rem;
      margin-bottom: 3.2rem;
    }
  }

  @media screen and (min-width: $md) {
    align-items: center;
    flex-direction: row;
    height: 80vh;

    &__thumbnail {
      border-right: 1px solid $main-border-color;
      max-height: 100%;
      overflow: hidden;
      width: 40%;

      img {
        min-height: 100%;
        max-width: 100%;
      }
    }

    &__info {
      padding: 0 6rem;

      &__title {
        font-size: 4.4rem;
        margin-bottom: 1.4rem;
      }

      &__price {
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width: $xl) {
    height: 90vh;

    &__thumbnail {
      width: 50%;
    }

    &__info {
      padding: 0 6rem;
    }
  }
}
</style>
