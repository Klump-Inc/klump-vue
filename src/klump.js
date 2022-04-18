import KlumpCheckout from './components/KlumpCheckout.vue'
const Klumpjs = {
    // eslint-disable-next-line no-unused-vars
    install: (Vue, options) => {
        Vue.mixin({
            mounted() {
                const klumpScript = document.createElement("script");
                klumpScript.src = "https://js.useklump.com/klump.js";
                document.head.appendChild(klumpScript)
            }
        });
        Vue.component(KlumpCheckout.name, KlumpCheckout)
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    console.log(window.Vue)
    window.Vue.use(Klumpjs);
}

export default Klumpjs