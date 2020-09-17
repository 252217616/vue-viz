// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import dataV from '@jiaminghi/data-view'
// import * as G2 from "@antv/g2";
import axios from 'axios'
import echarts from 'echarts'


Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
// Vue.use(G2)
Vue.use(dataV)
Vue.config.product

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
