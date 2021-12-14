<template>
  <div class="wrapper">
    <ul class="wrapper__menu-list">
      <nuxt-link to="/">
        <li class="header__navigation__list__list-item">Home</li>
      </nuxt-link>
      <nuxt-link to="/">
        <li class="header__navigation__list__list-item">Categorias</li>
      </nuxt-link>
      <nuxt-link to="/orders">
        <li v-if="isAuthenticated" class="header__navigation__list__list-item">
          Meus Pedidos
        </li>
      </nuxt-link>
      <nuxt-link v-if="!isAuthenticated" to="/auth">
        <li class="header__navigation__list__list-item">Login</li>
      </nuxt-link>
      <nuxt-link v-else to="/">
        <li class="header__navigation__list__list-item" @click="logout">
          Sair
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
  },

  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.wrapper {
  animation: moveBottom 0.3s ease-in-out;
  border-top: 1px solid $main-border-color;
  font-family: $main-font-family;
  left: 0;
  position: sticky;
  top: 6rem;
  width: 100%;
  z-index: 2;

  &__menu-list {
    position: absolute;
    width: 100%;

    a {
      width: 100%;

      li {
        background: $main-white;
        border-bottom: 1px solid $main-border-color;
        color: #222;
        font-size: 1.6rem;
        padding: 2rem 2.4rem;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: $xl) {
    display: none;
  }
}

@keyframes moveBottom {
  0% {
    opacity: 0;
    transform: translateY(-10rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
