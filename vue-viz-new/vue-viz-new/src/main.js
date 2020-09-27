// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import dataV from '@jiaminghi/data-view'
import axios from 'axios'
import echarts from 'echarts'
import liquidfill from "echarts-liquidfill"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./common/store/store"
import router from './router'

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(dataV)
Vue.use(ElementUI);
Vue.config.product

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
