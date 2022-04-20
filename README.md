# Klump for Vue 2.x

> This is a Vue Package that helps you integrate Klump - https://useklump.com/ easily"



## Install

### Vue

Install the npm package:

```bash
npm install --save klump-checkout-vue
# OR
yarn add klump-checkout-vue
```

### Nuxt

Install the npm package:

```bash
npm install --save klump-checkout-vue
# OR
yarn add klump-checkout-vue
```



## Usage

```vue
<template>
  <form action="#">
    <div class="btn-wrapper">
        <input type="number" v-model="data.amount" />
        <klump-checkout @on-click="PayWithKlump" />
    </div>
  </form>
</template>

<script>
import KlumpCheckout from 'klump-checkout-vue';
export default {
  components:{
    KlumpCheckout
  },
  data() {
    return {
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
  methods: {
    onSuccess(data){
        // handles on successs callback
        console.log(data)
    },
    onLoad(data){
        // handles on load callback
        console.log(data)
    },
    onOpen(data){
        // handles on open callback
        console.log(data)
    },
    onClose(data){
        // handles on close callback
        console.log(data)
    },
    onError(data){
        // handles on error callback
        console.log(data)
    },
    payWithKlump(){
        // You can run your validation checks here
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
}
</script>

```

Please checkout
[Klump Documentation](https://docs.useklump.com/docs/getting-started) for more explanation and options

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

