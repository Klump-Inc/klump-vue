(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.KlumpCheckout = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

    var script = {
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
            onSuccess: function onSuccess(data) {
                this.$emit('on-success', data);
    		},
    		onError: function onError(data) {
                this.$emit('on-error', data);
    		},
    		onLoad: function onLoad(data) {
    			this.$emit('on-load', data);
    		},
    		onOpen: function onOpen(data) {
    			this.$emit('on-Open', data);
    		},
    		onClose: function onClose(data) {
                 this.$emit('on-close', data);
    		},
            payWithKlump: function payWithKlump(){
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
        mounted: function mounted() {
            var klumpScript = document.createElement("script");
            klumpScript.src = "https://js.useklump.com/klump.js";
            document.head.appendChild(klumpScript);
        }
    };

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", {
        id: "klump__checkout",
        onClick: _cache[0] || (_cache[0] = function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return ($options.payWithKlump && $options.payWithKlump.apply($options, args));
      })
      }))
    }

    script.render = render;
    script.__file = "src/KlumpCheckout.vue";

    var Klumpjs = {
        // eslint-disable-next-line no-unused-vars
        install: function (Vue, options) {
            Vue.component('klump-checkout', script);
        }
    };

    // Automatic installation if Vue has been added to the global scope.
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(Klumpjs);
    }

    exports["default"] = Klumpjs;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
