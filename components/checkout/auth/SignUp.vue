<template>
  <form class="form" @submit.prevent="onSubmit">
    <Input v-model="form.name" name="name" label="Nome" :value="form.name" />
    <Input
      v-model="form.email"
      name="email"
      label="E-mail"
      type="email"
      :value="form.name"
    />
    <Input
      v-model="emailConfirmation"
      name="email-confirmation"
      label="Confirme seu E-mail"
      type="email"
      :value="emailConfirmation"
    />
    <Input
      v-model="form.password"
      name="password"
      label="Senha"
      type="password"
      :value="form.password"
    />
    <Input
      v-model="passwordConfirmation"
      name="password-confirmation"
      label="Confirme sua senha"
      type="password"
      :value="passwordConfirmation"
    />
    <span class="form__span" @click="toggleSignUp">Já possui uma conta?</span>
    <AppButton
      :has-hover="false"
      :disabled="
        emailsAreNotEqual || passwordsAreNotEqual || formIsNotPopulated
      "
      text="Confirmar"
      type="submit"
      height="40px"
      width="100%"
    />
  </form>
</template>

<script>
import AppButton from '~/components/AppButton';
import Input from '~/components/common/Input';

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
      form: {
        name: '',
        email: '',
        password: '',
      },
      emailConfirmation: '',
      passwordConfirmation: '',
    };
  },

  computed: {
    emailsAreNotEqual() {
      return this.form.email !== this.emailConfirmation;
    },

    passwordsAreNotEqual() {
      return this.form.password !== this.passwordConfirmation;
    },

    formIsNotPopulated() {
      return Boolean(
        Object.values(this.form).some((value) => !value) ||
          !this.emailConfirmation ||
          !this.passwordConfirmation
      );
    },
  },

  methods: {
    async onSubmit() {
      const { name, email, password } = this.form;

      try {
        await this.$store.dispatch('signup', {
          name,
          email,
          password,
        });

        this.toggleSignUp();
      } catch (error) {
        console.error(error);
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
