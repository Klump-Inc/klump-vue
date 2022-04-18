<template>
   <div id="klump__checkout" @click="payWithKlump"/>
</template>
<script>
export default /*#__PURE__*/ {
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
    mounted() {
        const klumpScript = document.createElement("script");
        klumpScript.src = "https://js.useklump.com/klump.js";
        document.head.appendChild(klumpScript)
    }
}
</script>