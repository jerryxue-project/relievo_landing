import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import SpaSolutionView from '../views/SpaSolutionView.vue'
import BeautySolutionView from '../views/BeautySolutionView.vue'
import FitnessSolutionView from '../views/FitnessSolutionView.vue'
import PricingView from '../views/PricingView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Relievo 睿舒智慧 · 服務業預約排程與智慧派工雲端平台 (SaaS)' }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: SolutionsView,
    meta: { title: '多產業解決方案矩陣 - Relievo 睿舒智慧' }
  },
  {
    path: '/solutions/spa',
    name: 'SpaSolution',
    component: SpaSolutionView,
    meta: { title: '按摩養生館智慧排程與輪牌派工系統 - Relievo Spa' }
  },
  {
    path: '/solutions/beauty',
    name: 'BeautySolution',
    component: BeautySolutionView,
    meta: { title: '美容美甲美睫沙龍預約系統 (即將推出) - Relievo Beauty' }
  },
  {
    path: '/solutions/fitness',
    name: 'FitnessSolution',
    component: FitnessSolutionView,
    meta: { title: '瑜珈健身與團課私教排程系統 (規劃中) - Relievo Fitness' }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingView,
    meta: { title: '方案費用與計費方式 - Relievo 睿舒智慧' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: '預約專人演示與 14 天免費試用 - Relievo 睿舒智慧' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Relievo 睿舒智慧 · 智慧預約排程派工 SaaS'
  next()
})

export default router
