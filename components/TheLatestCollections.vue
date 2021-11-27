<template>
  <div class="container">
    <div class="container__thumbnail"></div>
    <div class="container__content">
      <h3>Agora nas lojas</h3>
      <h2>Collection SS19</h2>
      <p>
        Conheça os novos Casacos, Camisetas, Calças, Shorts e Acessórios que a
        <b>MODULAR</b> tem a oferecer.
      </p>
      <AppButtonVue text="Ver coleção" />
    </div>
  </div>
</template>

<script>
import AppButtonVue from './AppButton';

export default {
  components: { AppButtonVue },
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid $main-border-color;
  font-family: $main-font-family;
  width: 100vw;

  &__thumbnail {
    background: url('../assets/images/hero.jpg');
    background-position: 50% 36%;
    background-size: cover;
    height: auto;
    min-height: 38rem;
    width: 100%;
  }

  &__content {
    align-items: center;
    display: flex;
    color: $font-color-black;
    flex-direction: column;
    padding: 3.2rem 2.4rem 6rem;
    text-align: center;
    width: 100%;

    h3 {
      font-size: 1.6rem;
      text-transform: uppercase;
    }

    h2 {
      font-size: 4.8rem;
      font-weight: 700;
      margin: 1.5rem 0;
    }

    p {
      font-size: 1.6rem;
      margin-bottom: 2.5rem;
    }
  }

  @media screen and (min-width: $sm) {
    h3 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 7rem;
      margin: 0;
    }
  }

  @media screen and (min-width: $md) {
    h2 {
      font-size: 7.7rem;
      margin: 0;
    }

    p {
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: $xl) {
    display: flex;
    flex-direction: row-reverse;
    height: 75vh;

    &__thumbnail {
      min-width: 50%;
    }

    &__content {
      align-items: flex-start;
      border-right: 1px solid $main-border-color;
      justify-content: center;
      padding: 0 14rem 0 7.2rem;

      h3 {
        font-size: 2.4rem;
      }

      h2 {
        font-size: 11.2rem;
        line-height: 12rem;
        text-align: left;
      }

      p {
        margin-top: 1rem;
        text-align: left;
      }
    }
  }
}
</style>
