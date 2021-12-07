<template>
  <Input v-model="email" label="Email" name="email" required />
</template>

<script>
import Input from '@/components/common/Input';

export default {
  components: { Input },

  data() {
    return {
      email: '',
    };
  },
};
</script>
