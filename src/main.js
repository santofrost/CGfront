import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router.js'
import moment from 'moment'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

Vue.prototype.moment = moment
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
