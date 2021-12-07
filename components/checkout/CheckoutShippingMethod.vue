<template>
  <div>
    <CheckoutShippingMethodRadio
      label="Taxa fixa"
      name="freight"
      value="fixed"
      description="Taxa padrão para todos os envios."
      price="12"
      @click="selected = $event"
    />
    <CheckoutShippingMethodRadio
      label="Envio acelerado"
      name="freight"
      value="acceletared"
      description="Envio acelerado para receber seu produto em dois ou três dias."
      price="20"
      @click="selected = $event"
    />
    <CheckoutShippingMethodRadio
      label="Envio noturno"
      name="freight"
      value="overnight"
      description="Uma opção mais cara para receber seu pedido no próximo dia."
      price="35"
      @click="selected = $event"
    />
  </div>
</template>

<script>
import CheckoutShippingMethodRadio from '@/components/checkout/method/CheckoutShippingMethodRadio';

export default {
  components: { CheckoutShippingMethodRadio },

  data() {
    return {
      selected: 'A',
    };
  },
};
</script>
