<template>
  <div class="overlay">
    <div class="cart">
      <div class="cart__header">
        <h2 class="car__header__title">Seu carrinho</h2>
        <button class="btn" @click="closeCart">
          <span class="material-icons"> close </span>
        </button>
      </div>
      <div class="cart__msg">Nenhum item encontrado.</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeCart() {
      this.$store.dispatch('closeCart')
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  all: unset;
  cursor: pointer;
}
.overlay {
  background-color: hsla(228, 5%, 88%, 0.8);
  display: flex;
  justify-content: flex-end;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  opacity: 1;
  top: 0;
  transition: opacity 300ms ease 0s;
  z-index: 2;
}
.cart {
  animation: moveIn 0.4s;
  background: $secondary-white;
  font-family: $main-font-family;
  max-height: 100%;
  width: 25%;

  &__header {
    align-items: center;
    border-bottom: 1px solid #dfe0e2;
    display: flex;
    height: 6rem;
    justify-content: space-between;
    padding: 0 2.4rem;
  }

  &__msg {
    align-items: center;
    display: flex;
    font-size: 1.4rem;
    height: 100vh;
    justify-content: center;
    width: 100%;
  }

  @media screen and (max-width: $md) {
    width: 62%;
  }

  @media screen and (max-width: $sm) {
    width: 85%;
  }

  @media screen and (max-width: $xs) {
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;

    &__header {
      &__title {
        font-size: 1.8rem;
      }

      span {
        font-size: 2.8rem;
      }
    }
  }
}

@keyframes moveIn {
  0% {
    opacity: 0;
    transform: translateX(5rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
