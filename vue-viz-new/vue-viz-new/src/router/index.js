import Vue from 'vue'
import Router from 'vue-router'
import SellingCockpit from '@/components/SellingCockpit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SellingCockpit',
      component: SellingCockpit
    }
  ]
})
