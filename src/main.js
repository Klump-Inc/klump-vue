import Vue from 'vue'
import App from './App.vue'
import Klumpjs from './klump'

Vue.config.productionTip = false
Vue.use(Klumpjs);

new Vue({
  render: h => h(App),
}).$mount('#app')
