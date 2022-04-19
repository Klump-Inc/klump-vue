# Flutterwave for Vue 2.x

> This is a Vue Package that helps you integrate Flutterwave - https://flutterwave.com/ easily"

[![NPM](https://img.shields.io/npm/v/vue-flutterwave.svg)](https://www.npmjs.com/package/vue-flutterwave) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

### Vue

Install the npm package:

```bash
npm install --save klump-checkout-vue
# OR
yarn add vue-klump-checkout-vue
```

Add the Vue plugin in your main.js and pass your [connect public key](#):

```javascript
import Vue from 'vue'
import Flutterwave from 'vue-flutterwave'

Vue.use(Flutterwave, { publicKey: 'YOUR CONNECT PUBLIC KEY' })
```

### Nuxt

Install the npm package:

```bash
npm install --save klump-checkout-vue
# OR
yarn add klump-checkout-vue
```

Create a `klumpcheckout.js` file in your `plugins` folder and add the Vue plugin:

```javascript
// plugins/klumpcheckout.js

import Vue from 'vue'
import KlumpCheckout from 'klump-checkout-vue'

Vue.use(Klumpcheckout)
//OR

import KlumpButton from 'klump-checkout-vue'
Vue.use(KlumpButton)
```

Go to your `nuxt.config.js` and add it to your plugin section

```javascript
/*
** Plugins to load before mounting the App
** https://nuxtjs.org/guide/plugins
*/
............
plugins: [{src: '~/plugins/klumpcheckout', ssr: false},],
...........

```

## Usage

klumpcheckout can be used in two ways, the first way is the controlled approach where you pass in all the required properties as a prop

```vue
<template>
  <form action="#">
    <div class="btn-wrapper">
        <input type="number" v-model="data.amount" />
        <klump-checkout
        :public-key="publicKey" 
        :data="data" 
        @on-error="onError" 
        @on-load="onLoad"
        @on-open="onOpen"
        @on-success="onSuccess"
        @on-close="onClose"
        />
    </div>
  </form>
</template>

<script>
import KlumpCheckout from 'klump-checkout-vue';
export default {
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
  }
}
</script>

```

The second approach only provides Klump button and the user handles and listen to all events

```vue
<template>
  <form action="#">
    <div class="btn-wrapper">
        <input type="number" v-model="data.amount" />
        <klump-button @on-click="PayWithKlump" />
    </div>
  </form>
</template>

<script>
import KlumpButton from 'klump-checkout-vue';
export default {
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

