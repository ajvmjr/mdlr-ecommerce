<template>
  <form class="wrapper">
    <div class="wrapper__heading">
      <h2>Informações de Envio</h2>
    </div>
    <div class="wrapper__content">
      <Input
        v-model="form.fullname"
        label="Nome completo"
        name="fullname"
        required
      />
      <Input v-model="form.address" label="Endereço" name="address" required />
      <div class="wrapper__content__zip">
        <Input v-model="form.city" label="Cidade" name="city" required />
        <Input v-model="form.state" label="Estado" name="state" />
        <Input v-model="form.cep" label="Cep" name="cep" required />
      </div>
      <Input v-model="form.country" label="País" name="country" required />
    </div>
  </form>
</template>

<script>
import Input from '@/components/common/Input';

export default {
  components: { Input },

  data() {
    return {
      form: {
        fullname: '',
        street: '',
        city: '',
        state: '',
        cep: '',
        country: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid $main-border-color;
  margin: 1.5rem 0;
  width: 100%;

  &__heading {
    border-bottom: 1px solid $main-border-color;
    padding: 1rem 2rem;

    h2 {
      font-size: 1.6rem;
      font-family: $main-font-family;
      font-weight: bold;
    }
  }

  &__content {
    padding: 1rem 2rem;
  }

  @media screen and (min-width: $xl) {
    &__content {
      &__zip {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
