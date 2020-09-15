import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' */
import './assets/scss/index.scss'
// Install BootstrapVue
// @ts-ignore
Vue.use( BootstrapVue )

// @ts-ignore
Vue.use(IconsPlugin)

Vue.config.productionTip = false

// @ts-ignore
new Vue({
  render: h => h(App),
}).$mount('#app')
