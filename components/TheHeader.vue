<template>
  <header class="header">
    <div class="header__company">
      <h1 class="header__company__title">MDLR</h1>
      <span class="header__company__name">Online Store</span>
    </div>
    <nav class="header__navigation">
      <ul class="header__navigation__list">
        <nuxt-link to="/">
          <li class="header__navigation__list__list-item">Home</li>
        </nuxt-link>
        <nuxt-link to="/">
          <li class="header__navigation__list__list-item">Categorias</li>
        </nuxt-link>
        <nuxt-link to="/">
          <li class="header__navigation__list__list-item">Contato</li>
        </nuxt-link>
        <nuxt-link to="/">
          <li class="header__navigation__list__list-item">Login</li>
        </nuxt-link>
      </ul>
    </nav>
    <div class="header__actions">
      <button class="header__actions header__actions--cart" @click="openCart">
        <span class="material-icons icon"> shopping_cart </span>
        <div class="header__actions--cart__counter">{{ cart.length }}</div>
      </button>
      <button class="header__actions header__actions--menu">
        <span class="material-icons icon"> sort </span>
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['showCart', 'cart']),
  },
  methods: {
    openCart() {
      this.$store.dispatch('openCart');
    },
  },
};
</script>

<style lang="scss" scoped>
a.nuxt-link-active {
  all: unset;
}
.header {
  align-items: center;
  background-color: $main-white;
  border-bottom: 1px solid $main-border-color;
  display: flex;
  height: 6rem;
  font-family: $main-font-family;
  justify-content: space-between;
  padding: 0 2.4rem;
  position: sticky;
  z-index: 0;

  &__company {
    align-items: center;
    display: flex;

    &__title {
      color: $font-color-black;
      font-size: 2.8rem;
      font-weight: 700;
    }

    &__name {
      font-size: 1.6rem;
      font-weight: 400;
      margin-left: 1.6rem;
    }
  }

  &__navigation {
    display: flex;
    justify-content: flex-end;
    width: 78%;
    &__list {
      display: flex;

      &__list-item {
        font-size: 1.6rem;
        list-style-type: none;
        cursor: pointer;
        padding: 2rem;
        transition: all 0.3s;

        &:hover {
          color: grey;
        }
      }
    }
  }

  &__actions {
    display: flex;
    cursor: pointer;

    &--cart {
      all: unset;
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 4.8rem;

      &__counter {
        align-items: center;
        background-color: $font-color-black;
        border-radius: 50%;
        color: $main-white;
        display: flex;
        height: 1.8rem;

        justify-content: center;
        width: 1.8rem;
      }
    }

    &--menu {
      display: none;
    }
  }

  @media screen and (max-width: $md) {
    &__navigation {
      display: none;
    }

    &__actions {
      .icon {
        font-size: 2.4rem;
      }

      &--menu {
        all: unset;
        transform: rotateY(180deg);
        width: 6rem;
      }
    }
  }

  @media screen and (max-width: $xs) {
    &__actions {
      .icon {
        font-size: 2.2rem;
      }
    }

    &__company {
      &__title {
        line-height: 4.4rem;
      }

      &__name {
        display: none;
      }
    }
  }
}
</style>
