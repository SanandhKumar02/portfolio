import Vue from 'vue'
import vuetify from './plugins/vuetify'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'


Vue.config.productionTip = false

library.add(fas, fab)


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app').component('fa', FontAwesomeIcon)
