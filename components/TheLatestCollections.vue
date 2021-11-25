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
import AppButtonVue from './AppButton'

export default {
  components: { AppButtonVue },
}
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
}
</style>
