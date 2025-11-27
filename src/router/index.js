import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/system-components',
    name: 'SystemComponents',
    component: () => import('../pages/SystemComponents.vue')
  },
  {
    path: '/system-configuration',
    name: 'SystemConfiguration',
    component: () => import('../pages/SystemConfiguration.vue')
  },
  {
    path: '/usage-guide',
    name: 'UsageGuide',
    component: () => import('../pages/UsageGuide.vue')
  },
  {
    path: '/troubleshooting',
    name: 'Troubleshooting',
    component: () => import('../pages/Troubleshooting.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../pages/Search.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router