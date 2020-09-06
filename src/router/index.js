import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import A1 from '../views/borderAndBackground/backgroundChip.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/A1',
  name: 'A1',
  component: A1
}, ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router