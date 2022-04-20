<script>
import Vue from 'vue';
import {KlumpCheckout} from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    KlumpCheckout,
  },
  data(){
    return{
      publicKey: 'klp_pk_1234abdc5678',
      data: {
            amount: 4100,
            shipping_fee: 100,
            currency: 'NGN',
            redirect_url: 'https://verygoodmerchant.com/checkout/confirmation',
            merchant_reference: 'what-ever-you-want-this-to-be',
            meta_data: {
              customer: 'Elon Musk',
              email: 'musk@spacex.com'
            },
            items: [
                {
                    image_url:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    item_url: 'https://www.paypal.com/in/webapps/mpp/home',
                    name: 'Awesome item',
                    unit_price: '2000',
                    quantity: 2,
                }
            ]
        },
    }
  },
  methods:{
    onSuccess(data){
      console.log(data)
    },
    onLoad(data){
      console.log(data)
    },
    onOpen(data){
      console.log(data)
    },
    onClose(data){
      console.log(data)
    },
    onError(data){
      console.log(data)
    },
    pay(){
        // eslint-disable-next-line no-new
        new Klump({
          publicKey: this.publicKey,
          data: this.data,
          onSuccess: this.onSuccess,
          onError: this.onError,
          onClose: this.onClose,
          onLoad: this.onLoad,
          onOpen: this.onOpen
        });
    }
  }
});
</script>

<template>
  <div id="app">
    <klump-checkout @on-click="pay" />
  </div>
</template>
