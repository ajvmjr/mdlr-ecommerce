<template>
  <form class="form" @submit.prevent="onSubmit">
    <Input
      v-model="email"
      name="email"
      label="E-mail"
      type="email"
      :value="email"
    />
    <Input
      v-model="password"
      name="password"
      label="Senha"
      type="password"
      :value="password"
    />
    <span class="form__span" @click="toggleSignUp"
      >Não possui uma conta? Cadastre-se.</span
    >
    <AppButton
      :has-hover="false"
      :disabled="formIsNotPopulated"
      text="Confirmar"
      type="submit"
      height="40px"
      width="100%"
    />
  </form>
</template>

<script>
import AppButton from '@/components/AppButton';
import Input from '@/components/common/Input';

export default {
  components: { AppButton, Input },

  props: {
    toggleSignUp: {
      type: Function,
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      email: '',
      password: '',
    };
  },

  computed: {
    formIsNotPopulated() {
      return Boolean(!this.email || !this.password);
    },
  },

  methods: {
    async onSubmit() {
      const { email, password } = this;

      try {
        await this.$store.dispatch('signin', {
          email,
          password,
        });

        this.$router.push('/orders');
      } catch (error) {
        this.$store.dispatch('setSnackbar', 'Usuário ou senha incorretos.');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 1rem;

  &__span {
    color: $font-color-black;
    cursor: pointer;
    font-family: $main-font-family;
    font-size: 1.2rem;
    font-weight: bold;
    float: right;
    margin-bottom: 1rem;
  }
}
</style>
