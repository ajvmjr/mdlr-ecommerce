<template>
  <div class="subscribe">
    <h3>Se inscreva</h3>
    <form class="subscribe__form" @submit.prevent="onSubmit">
      <input
        v-model="name"
        type="text"
        placeholder="Nome"
        class="subscribe__form__inputs"
      />
      <input
        v-model="lastname"
        type="text"
        placeholder="Sobrenome"
        class="subscribe__form__inputs"
      />
      <input
        v-model="email"
        type="text"
        placeholder="E-mail"
        class="subscribe__form__inputs"
      />
      <AppButton
        text="Se inscrever"
        type="submit"
        height="38px"
        width="135px"
      />
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';

export default {
  components: { AppButton },
  data() {
    return {
      name: '',
      lastname: '',
      email: '',
    };
  },
  methods: {
    onSubmit() {
      alert('here!');
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  border-bottom: 1px solid $main-border-color;
  font-family: $main-font-family;
  padding: 4rem 2rem 6rem;

  h3 {
    color: $font-color-black;
    font-size: 3.8rem;
    margin: 2rem 0 2.4rem;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;

    &__inputs {
      background: white;
      border: 0.5px solid #dfdfe2;
      border-top: none;
      border-right: none;
      border-left: none;
      color: $font-color-black;
      font-family: $main-font-family;
      outline: none;
      margin-bottom: 1.6rem;
      padding: 2.2rem 1rem 1rem;
      transition: all 0.5s;

      &::placeholder {
        color: #dfdfe2;
        font-family: $main-font-family;
        letter-spacing: 0.5px;
      }

      &:focus {
        border-bottom: 0.5px solid $main-black;
      }
    }
  }

  @media screen and (min-width: $sm) {
    h3 {
      margin: 2rem 0 0;
    }
  }

  @media screen and (min-width: $md) {
    &__form {
      align-items: center;
      flex-direction: row;

      &__inputs {
        margin-right: 2.4rem;
        padding: 2.2rem 0.5rem 1rem;
      }
    }
  }

  @media screen and (min-width: $xl) {
    &__form {
      &__inputs {
        padding: 2.2rem 3rem 1rem;
        width: 30%;
      }
    }
  }
}
</style>
