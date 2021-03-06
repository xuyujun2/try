import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

require('./mock.js')

Vue.config.productionTip = false

// import 'mint-ui/lib/style.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
