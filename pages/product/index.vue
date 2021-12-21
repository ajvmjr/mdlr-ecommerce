<template>
  <div class="wrapper">
    <div class="wrapper__actions">
      <select v-model="filters.price" class="wrapper__actions__select">
        <option
          v-for="orderItem in orders"
          :key="orderItem.text"
          :value="orderItem"
        >
          {{ orderItem.text }}
        </option>
      </select>
      <select v-model="filters.category" class="wrapper__actions__select">
        <option value="" selected>Todas as categorias</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <Products v-if="hasProducts" />
    <h2 v-else class="wrapper__not-found">Nenhum produto encontrado :(</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Products from '@/components/Products';

export default {
  component: { Products },

  middleware: ['initAuth'],

  async asyncData({ $axios }) {
    const categories = await $axios.$get('categories');
    return { categories };
  },

  data() {
    return {
      orders: [
        { text: 'Menor Preço', value: 'asc' },
        { text: 'Maior Preço', value: 'desc' },
      ],
      filters: {
        price: { text: 'Menor Preço', value: 'asc' },
        category: '',
      },
    };
  },

  computed: {
    ...mapGetters(['products']),

    hasProducts() {
      return this.products.length > 0;
    },
  },

  watch: {
    filters: {
      deep: true,
      handler() {
        const { filters, searchByOrderAndCategorie } = this;

        const price = filters.price.value;
        const categoryId = filters.category.id;

        searchByOrderAndCategorie(price, categoryId);
      },
    },
  },

  mounted() {
    this.$store.dispatch('initAuth');
    this.$store.dispatch('toggleMenu', false);
  },

  methods: {
    async searchByOrderAndCategorie(price, categoryId) {
      await this.$store.dispatch('ordenateProducts', { price, categoryId });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  color: $font-color-black;
  font-family: $main-font-family;
  font-size: 1.4rem;

  &__actions {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    &__select {
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #cccccc;
      color: $font-color-black;
      display: block;
      font-size: 1.4rem;
      height: 3.8rem;
      line-height: 1.4;
      margin: 1rem;
      outline: none;
      width: 70%;
    }
  }

  &__not-found {
    text-align: center;
    font-size: 1.4rem;
    margin: 1rem;
  }

  @media screen and (min-width: $sm) {
    &__actions {
      flex-direction: row;

      &__select {
        width: 45%;
      }
    }
  }

  @media screen and (min-width: $md) {
    &__actions {
      justify-content: center;

      &__select {
        width: 25%;
      }
    }

    &__not-found {
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: $xl) {
    padding: 0 5rem;

    &__actions {
      justify-content: flex-end;

      &__select {
        cursor: pointer;
        width: 25%;
      }
    }
  }

  @media screen and (min-width: $xxl) {
    &__actions {
      &__select {
        width: 15%;
      }
    }
  }
}
</style>
