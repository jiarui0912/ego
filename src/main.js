import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import api from './api'


Vue.prototype.$api = api;
Vue.config.productionTip = false


let user = localStorage.getItem('user');
if (user) {
  store.commit('loginModule/setUser', JSON.parse(user))
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
