<template>
  <router-link :to="productPath">
    <div class="card">
      <div class="card__image">
        <img :src="productImage" alt="product image" loading="lazy" />
      </div>
      <div class="card__info">
        <p class="card__info__title">{{ title }}</p>
        <span class="card__info__price">$ {{ price }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  computed: {
    productPath() {
      return `/product/${this.id}`;
    },
    productImage() {
      return `${process.env.BASE_URL}files/${this.image}`;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;

  @media screen and (min-width: $md) {
    width: 50%;
  }

  @media screen and (min-width: $xl) {
    width: 25%;
  }
}

.card {
  border: 0.5px solid $main-border-color;
  color: $font-color-black;
  font-family: $main-font-family;
  width: 100%;

  &__image {
    width: 100%;

    img {
      max-width: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 10rem;
    padding: 2rem;
    width: 100%;

    &__title {
      font-size: 2rem;
      line-height: 2.8rem;
    }

    &__price {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: $md) {
    &__image {
      img {
        height: 71.8rem;
        max-width: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    &__info {
      min-height: 14rem;
    }
  }
}
</style>
