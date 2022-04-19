<script>
import Vue from 'vue';
import KlumpCheckout from '@/klump-checkout.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    KlumpCheckout
  }
});
</script>

<template>
  <div id="app">
    <klump-checkout />
  </div>
</template>
