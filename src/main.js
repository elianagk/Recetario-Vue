import Vue from 'vue'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import router from './router'
Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './registerServiceWorker'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VueSocialSharing);
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
