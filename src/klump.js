import KlumpCheckout from './KlumpCheckout.vue'
const Klumpjs = {
    // eslint-disable-next-line no-unused-vars
    install: (Vue, options) => {
        Vue.component('klump-checkout', KlumpCheckout)
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Klumpjs);
}

export default Klumpjs