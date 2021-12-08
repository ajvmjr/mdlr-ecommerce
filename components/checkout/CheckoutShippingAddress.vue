<template>
  <div>
    <div class="zip">
      <Input v-model="form.cep" label="Cep" name="cep" required />
      <Input v-model="form.city" label="Cidade" name="city" required />
      <Input v-model="form.state" label="Estado" name="state" required />
    </div>
    <Input v-model="form.street" label="Endereço" name="address" required />
    <Input v-model="form.country" label="País" name="country" required />
  </div>
</template>

<script>
import Input from '@/components/common/Input';

export default {
  components: { Input },

  data() {
    return {
      form: {
        street: '',
        city: '',
        state: '',
        cep: '',
        country: '',
      },
    };
  },

  computed: {
    fieldsAreValid() {
      return Object.values(this.form).every((value) => value);
    },
  },

  watch: {
    fieldsAreValid() {
      this.$store.dispatch('setCheckoutFormValidity', {
        shippingAddressIsValid: this.fieldsAreValid,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.zip {
  @media screen and (min-width: $xl) {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
}
</style>
