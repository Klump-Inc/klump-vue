<template>
  <div id="app">
    <KlumpCheckout 
    public-key="klp_pk_test_e4aaa1a8e96644ad9af23fa453ddd6ffa39a8233a88c4b93860f119c8cd9a332" 
    :data="data" 
    @on-error="onError" 
    @on-load="onLoad"
    @on-open="onOpen"
    @on-success="onSuccess"
    @on-close="onClose"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
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
  }
}
</script>

