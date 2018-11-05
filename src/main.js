// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './cube-ui'
import App from './App'
import router from './router'
import 'amfe-flexible'
import {ShowMessage, customToast} from './modules/control'
Vue.prototype.showAlert = ShowMessage
Vue.prototype.customToast = customToast
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
