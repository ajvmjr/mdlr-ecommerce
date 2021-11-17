<template>
  <header class="header">
    <div>
      <h1 class="header__title">MDLR</h1>
    </div>
    <div class="header__actions">
      <button class="header__actions header__actions--cart">
        <span class="material-icons icon"> shopping_cart </span>
        <div class="header__actions--cart__counter">0</div>
      </button>
      <button class="header__actions header__actions--menu">
        <span class="material-icons icon"> sort </span>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  align-items: center;
  background-color: $main-white;
  border-bottom: 1px solid #dfe0e2;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  position: sticky;

  &__title {
    color: $font-color-black;
    font-family: 'Space Mono';
    font-weight: 700;
  }

  &__actions {
    display: flex;

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
        font-family: 'Space Mono';
        justify-content: center;
        width: 1.8rem;
      }
    }

    &--menu {
      all: unset;
      transform: rotateY(180deg);
      width: 6rem;
    }
  }

  @media screen and (max-width: $xs) {
    padding: 0 2.4rem;

    &__actions {
      &__cart {
        .icon {
          font-size: 2.1rem;
        }
      }
    }

    &__title {
      font-size: 2.8rem;
      line-height: 4.4rem;
    }
  }
}
</style>
