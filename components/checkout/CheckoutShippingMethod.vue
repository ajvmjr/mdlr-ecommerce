<template>
  <div>
    <CheckoutShippingMethodRadio
      label="Taxa fixa"
      name="freight"
      value="Taxa Fixa"
      description="Taxa padrão para todos os envios."
      price="12"
      checked
      @click="updateSelected"
    />
    <CheckoutShippingMethodRadio
      label="Envio acelerado"
      name="freight"
      value="Envio acelerado"
      description="Envio acelerado para receber seu produto em dois ou três dias."
      price="20"
      @click="updateSelected"
    />
    <CheckoutShippingMethodRadio
      label="Envio noturno"
      name="freight"
      value="Envio noturno"
      description="Uma opção mais cara para receber seu pedido no próximo dia."
      price="35"
      @click="updateSelected"
    />
  </div>
</template>

<script>
import CheckoutShippingMethodRadio from '@/components/checkout/method/CheckoutShippingMethodRadio';

export default {
  components: { CheckoutShippingMethodRadio },

  data() {
    return {
      selected: {
        option: 'Taxa fixa',
        price: '12',
      },
    };
  },

  watch: {
    selected() {
      this.$emit('updateSummaryInfo', this.selected);
    },
  },

  methods: {
    updateSelected(selected) {
      this.selected = selected;
    },
  },
};
</script>
