import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tax-address-list'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("@/views/HomePage.vue")
  },
  {
    path: '/tax-address-list',
    name: 'TaxAddressList',
    component: () => import("@/views/tax-address-list.vue")
  },
  {
    path: '/form-address/:code',
    props: true,
    name: 'FormAddress',
    component: () => import("@/views/form-address.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
