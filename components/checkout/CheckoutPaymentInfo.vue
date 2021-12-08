<template>
  <div>
    <Input
      v-model="cardNumber"
      label="Número do Cartão"
      name="card-number"
      required
    />
    <div class="flex">
      <Input
        v-model="expirationDate"
        label="Data de expiração"
        name="card-expiration"
        required
      />
      <Input
        v-model="securityCode"
        label="Código de Segurança"
        name="card-code"
        required
      />
    </div>
  </div>
</template>

<script>
import Input from '@/components/common/Input';

export default {
  components: { Input },

  data() {
    return {
      cardNumber: '',
      expirationDate: '',
      securityCode: '',
    };
  },

  computed: {
    fieldsAreValid() {
      return Boolean(
        this.cardNumber && this.expirationDate && this.securityCode
      );
    },
  },

  watch: {
    fieldsAreValid() {
      this.$store.dispatch('setCheckoutFormValidity', {
        paymentInfoIsValid: this.fieldsAreValid,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}
</style>
