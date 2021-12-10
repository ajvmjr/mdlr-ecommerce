<template>
  <div class="container">
    <div class="container__form-wrapper">
      <SignUp v-if="isSignUp" :toggle-sign-up="toggleSignUp" />
      <SignIn v-else :toggle-sign-up="toggleSignUp" />
    </div>
  </div>
</template>

<script>
import SignUp from '~/components/checkout/auth/SignUp';
import SignIn from '~/components/checkout/auth/SignIn';

export default {
  components: { SignUp, SignIn },

  data() {
    return {
      isSignUp: true,
    };
  },

  mounted() {
    this.$store.dispatch('getCart');
  },

  methods: {
    toggleSignUp() {
      this.isSignUp = !this.isSignUp;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 84vh;
  width: 100%;

  &__form-wrapper {
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 1rem 0;
    width: 90%;
  }

  @media screen and (min-width: $md) {
    &__form-wrapper {
      max-width: 60%;
    }
  }

  @media screen and (min-width: $xl) {
    &__form-wrapper {
      max-width: 40%;
    }
  }

  @media screen and (min-width: $xxl) {
    &__form-wrapper {
      max-width: 25%;
    }
  }
}
</style>
