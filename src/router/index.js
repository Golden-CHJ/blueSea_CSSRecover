import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import A1 from '../views/borderAndBackground/backgroundChip.vue'
import A2 from '../views/borderAndBackground/boxshadowAndoutline.vue'
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/A1',
  name: 'A1',
  component: A1
}, {
  path: '/A2',
  name: 'A2',
  component: A2
}, ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router