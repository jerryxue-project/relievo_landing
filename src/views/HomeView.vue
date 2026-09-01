<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <HeroSection @open-demo-modal="isDemoModalOpen = true" />

    <!-- 1. Real System Live Mockup (Style C - Modern SaaS Clean) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-20 relative z-20">
      <div class="text-center mb-4">
        <span class="text-xs font-bold text-slate-500 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-slate-200 shadow-xs inline-flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>即時系統介面互動展示（點擊上方分頁切換功能畫面）</span>
        </span>
      </div>
      <AppLiveMockupPreview />
    </section>

    <!-- 2. Interactive Live Sandbox Scheduler Engine -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
      <div class="text-center mb-6 space-y-2">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Interactive Sandbox
        </span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          親自體驗多約束排程演算法的運算威力
        </h2>
        <p class="text-xs sm:text-sm text-slate-500">
          自由調整人數、項目與性別偏好，演算法即時以毫秒級速度計算最佳技師與空間配置
        </p>
      </div>
      <InteractiveSchedulerDemo />
    </section>

    <!-- Core Features Showcase -->
    <FeatureShowcase />

    <!-- Multi-Industry Solutions Matrix (Expandable Architecture) -->
    <SolutionsMatrixSection />

    <!-- ROI Calculator -->
    <RoiCalculator @open-demo-modal="isDemoModalOpen = true" />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Pricing Section -->
    <PricingSection @open-demo-modal="isDemoModalOpen = true" />

    <!-- FAQ Section -->
    <FaqSection />

    <!-- Bottom Action Banner -->
    <section class="py-16 bg-gradient-to-r from-brand-600 to-indigo-700 text-white text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
          立即告別排班失誤，讓門市營收翻倍！
        </h2>
        <p class="text-brand-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          加入全台頂尖養生會館與連鎖品牌，14 天全功能免費體驗，無需綁約。
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            @click="isDemoModalOpen = true"
            class="px-8 py-3.5 rounded-2xl bg-white text-brand-700 hover:bg-brand-50 font-black text-sm shadow-xl transition-all transform active:scale-95 cursor-pointer"
          >
            免費預約專人演示 & 試用
          </button>
          <a
            href="http://localhost:5173"
            target="_blank"
            class="px-6 py-3.5 rounded-2xl bg-brand-800/80 hover:bg-brand-800 text-white font-bold text-sm border border-brand-400/40"
          >
            直接進入線上 Demo 系統
          </a>
        </div>
      </div>
    </section>

    <!-- Lead Capture Modal -->
    <LeadCaptureModal :is-open="isDemoModalOpen" @close="isDemoModalOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import AppLiveMockupPreview from '../components/AppLiveMockupPreview.vue'
import InteractiveSchedulerDemo from '../components/InteractiveSchedulerDemo.vue'
import FeatureShowcase from '../components/FeatureShowcase.vue'
import SolutionsMatrixSection from '../components/SolutionsMatrixSection.vue'
import RoiCalculator from '../components/RoiCalculator.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import PricingSection from '../components/PricingSection.vue'
import FaqSection from '../components/FaqSection.vue'
import LeadCaptureModal from '../components/LeadCaptureModal.vue'

const isDemoModalOpen = ref(false)
</script>
