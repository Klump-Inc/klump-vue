<template>
   <div id="klump__checkout" @click="payWithKlump"/>
</template>
<script>
export default /*#__PURE__*/ {
    name: 'KlumpCheckout',
    methods:{
        payWithKlump() {
           this.$emit('on-click')
		},
    },
    mounted() {
        const klumpScript = document.createElement("script");
        klumpScript.src = "https://js.useklump.com/klump.js";
        document.head.appendChild(klumpScript)
    }
}
</script>