import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/scripts/base'
import '@/assets/styles/base.css'

new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
