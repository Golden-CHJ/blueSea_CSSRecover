import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import A1 from '../views/borderAndBackground/backgroundChip.vue'
import A2 from '../views/borderAndBackground/boxshadowAndoutline.vue'
import A3 from '../views/borderAndBackground/backgroundPoSition.vue'
import A4 from '../views/borderAndBackground/borderInnerRadius.vue'
import A5 from '../views/borderAndBackground/tiaowenbeijin.vue'

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
}, {
  path: '/A3',
  name: 'A3',
  component: A3
}, {
  path: '/A4',
  name: 'A4',
  component: A4
}, {
  path: '/A5',
  name: 'A5',
  component: A5
}, ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router