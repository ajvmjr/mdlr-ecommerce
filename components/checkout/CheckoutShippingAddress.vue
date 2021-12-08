<template>
  <div>
    <div class="zip">
      <Input
        v-model="form.cep"
        :value="form.cep"
        label="Cep"
        name="cep"
        required
      />
      <Input
        v-model="form.city"
        :value="form.city"
        label="Cidade"
        name="city"
        required
      />
      <Input
        v-model="form.state"
        :value="form.state"
        label="Estado"
        name="state"
        required
      />
    </div>
    <Input
      v-model="form.street"
      :value="form.street"
      label="Endereço"
      name="address"
      required
    />
    <Input
      v-model="form.country"
      :value="form.country"
      label="País"
      name="country"
      required
    />
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

    async 'form.cep'() {
      if (!this.form.cep) return;

      const cepConsult = await this.$store.dispatch(
        'getAddressByZipCode',
        this.form.cep
      );

      this.form = { ...this.form, ...cepConsult };
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
