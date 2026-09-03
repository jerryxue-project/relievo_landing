import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import SpaSolutionView from '../views/SpaSolutionView.vue'
import BeautySolutionView from '../views/BeautySolutionView.vue'
import FitnessSolutionView from '../views/FitnessSolutionView.vue'
import PricingView from '../views/PricingView.vue'
import ContactView from '../views/ContactView.vue'
import ShowcaseView from '../views/ShowcaseView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Relivo 睿沃 · 按摩養生館 1 秒智慧排單系統 (SaaS)' }
  },
  {
    path: '/showcase',
    name: 'Showcase',
    component: ShowcaseView,
    meta: { title: '系統全貌與功能演示 (業務向業主介紹專用) - Relivo 睿沃' }
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: SolutionsView,
    meta: { title: '多產業解決方案矩陣 - Relivo 睿沃' }
  },
  {
    path: '/solutions/spa',
    name: 'SpaSolution',
    component: SpaSolutionView,
    meta: { title: '按摩養生館智慧排程與輪牌派工系統 - Relivo Spa' }
  },
  {
    path: '/solutions/beauty',
    name: 'BeautySolution',
    component: BeautySolutionView,
    meta: { title: '美髮沙龍預約排班系統 (即將推出) - Relivo Beauty' }
  },
  {
    path: '/solutions/fitness',
    name: 'FitnessSolution',
    component: FitnessSolutionView,
    meta: { title: '瑜珈健身與團課私教排程系統 (規劃中) - Relivo Studio' }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: PricingView,
    meta: { title: '方案費用與計費方式 - Relivo 睿沃' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: '預約專人演示 - Relivo 睿沃' }
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
  document.title = to.meta.title || 'Relivo 睿沃 · 智慧預約排程派工 SaaS'
  next()
})

export default router
