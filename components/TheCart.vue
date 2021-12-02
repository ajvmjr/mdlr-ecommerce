<template>
  <div class="overlay">
    <div class="cart">
      <div class="cart__header">
        <h2 class="car__header__title">Seu carrinho</h2>
        <button class="btn" @click="closeCart">
          <span class="material-icons"> close </span>
        </button>
      </div>
      <div v-if="hasItems">
        <CartItem
          v-for="product in cart"
          :id="product.id"
          :key="product.id"
          :title="product.name"
          :image="product.image"
          :price="product.price"
          :size="product.size"
          :quantity="product.quantity"
        />
      </div>
      <div v-else class="cart__msg">Nenhum item encontrado.</div>
      <div class="cart__footer">
        <div class="cart__footer__info">
          <p>Subtotal</p>
          <span>$ {{ cartTotal }}</span>
        </div>
        <AppButton
          text="Prosseguir para o pagamento"
          height="44px"
          width="100%"
          :has-hover="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CartItem from './CartItem';
import AppButton from './AppButton';

export default {
  components: { CartItem, AppButton },
  computed: {
    ...mapGetters(['cart', 'cartTotal']),

    hasItems() {
      return this.cart && this.cart.length > 0;
    },
  },
  mounted() {
    this.setCloseByEscKey();
    this.getCartItems();
  },
  methods: {
    closeCart() {
      this.$store.dispatch('closeCart');
    },
    setCloseByEscKey() {
      window.addEventListener('keyup', ({ key }) => {
        if (key === 'Escape') this.closeCart();
      });
    },
    getCartItems() {
      this.$store.dispatch('getCart');
    },
  },
};
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
  min-height: 100vh;
  min-width: 100%;
  position: fixed;
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
  width: 30%;

  &__header {
    align-items: center;
    border-bottom: 1px solid $main-border-color;
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

  &__footer {
    border-top: 1px solid $main-border-color;
    bottom: 0;
    position: absolute;
    width: 30%;

    &__info {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 2rem 1.5rem;

      p,
      span {
        color: $font-color-black;
        font-family: $main-font-family;
        font-size: 1.4rem;
      }

      span {
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: $xl) {
    width: 40%;

    &__footer {
      width: 40%;
    }
  }

  @media screen and (max-width: $md) {
    width: 62%;

    &__footer {
      width: 62%;
    }
  }

  @media screen and (max-width: $sm) {
    width: 85%;

    &__footer {
      width: 85%;
    }
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

    &__footer {
      width: 100%;
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
