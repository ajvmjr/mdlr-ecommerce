<template functional>
  <footer class="footer">
    <div class="footer__company">
      <h4 class="footer__company__title">modular</h4>
    </div>
    <nav class="footer__navigation">
      <ul class="footer__navigation__list">
        <nuxt-link to="/">
          <li class="footer__navigation__list__list-item">
            Política de Privacidade
          </li>
        </nuxt-link>
        <nuxt-link to="/">
          <li class="footer__navigation__list__list-item">
            Termos & Condições
          </li>
        </nuxt-link>
        <nuxt-link to="/">
          <li class="footer__navigation__list__list-item">Envio</li>
        </nuxt-link>
      </ul>
    </nav>
    <div class="footer__social-medias">
      <img src="../assets/images/facebook.svg" alt="facebook social media" />
      <img src="../assets/images/twitter.svg" alt="twitter social media" />
      <img src="../assets/images/instagram.svg" alt="instagram social media" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
a.nuxt-link-active {
  all: unset;
}
.footer {
  align-items: center;
  background: $main-white;
  display: flex;
  flex-direction: column;
  font-family: $main-font-family;
  padding: 2.4rem 0;
  width: 100%;

  &__company {
    width: 100%;

    &__title {
      font-size: 2rem;
      text-transform: uppercase;
      text-align: center;
    }
  }

  &__navigation {
    &__list {
      display: flex;
      flex-direction: column;

      &__list-item {
        cursor: pointer;
        font-size: 1.4rem;
        list-style-type: none;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s;

        &:hover {
          color: grey;
        }
      }
    }
  }

  &__social-medias {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      margin: 0 1rem;
      width: 2.2rem;
    }
  }

  @media screen and (min-width: $sm) {
    &__navigation {
      &__list {
        flex-direction: row;

        &__list-item {
          padding: 2.5rem 2rem;
        }
      }
    }
  }

  @media screen and (min-width: $md) {
    flex-direction: row;

    &__company {
      width: 20%;

      &__name {
        text-align: right;
      }
    }

    &__navigation {
      width: 60%;

      &__list {
        &__list-item {
          padding: 2.5rem 1rem;
        }
      }
    }

    &__social-medias {
      cursor: pointer;
      width: 20%;
    }
  }

  @media screen and (min-width: $xl) {
    &__company {
      width: 10%;
    }

    &__navigation {
      display: flex;
      justify-content: center;
      width: 90%;

      &__list {
        &__list-item {
          padding: 1rem 2rem;
        }
      }
    }

    &__social-medias {
      width: 10%;
    }
  }
}
</style>
