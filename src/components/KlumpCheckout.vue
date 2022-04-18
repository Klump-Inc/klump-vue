<template>
   <div id="klump__checkout" @click="payWithKlump"></div>
</template>
<script>
export default {
    name: 'KlumpCheckout',
    props:{
        publicKey:{
            type: String,
            required: true,
        },
        data:{
            type: Object,
            required: true
        }
    },
    methods:{
        onSuccess(data) {
            this.$emit('on-success', data)
		},
		onError(data) {
            this.$emit('on-error', data)
		},
		onLoad(data) {
			this.$emit('on-load', data)
		},
		onOpen(data) {
			this.$emit('on-Open', data)
		},
		onClose(data) {
             this.$emit('on-close', data)
		},
        payWithKlump(){
            // eslint-disable-next-line no-undef
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
    },
}
</script>