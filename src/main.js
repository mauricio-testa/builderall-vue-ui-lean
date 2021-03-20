import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'
import { BuilderallVueUi } from 'builderall-vue-ui'
import '@/sass/app.scss' // (the same file as in step 2)
import 'builderall-vue-ui/dist/builderall-vue-ui.css'

const BV_CONFIG = {
  BToast: {
    toaster: 'b-toaster-bottom-right',
    appendToast: true,
    noCloseButton: true,
    variant: 'success'
  },
  BModal: {
    centered: true,
    noFade: true
  }
}

Vue.config.productionTip = false
Vue.use(BootstrapVue, BV_CONFIG)
Vue.use(BuilderallVueUi, {
  rtl: document.documentElement.dir === 'rtl'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
