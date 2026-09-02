<template>
  <div class="space-y-0">
    <!-- Hero Section (簡潔、直擊痛點、手機友善) -->
    <HeroSection @open-demo-modal="isDemoModalOpen = true" />

    <!-- 1. Core Features Highlights (特色介紹專注區) -->
    <FeatureShowcase />

    <!-- 3. Pain Points vs. Relievo Solution Comparison Matrix -->
    <section class="py-14 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs sm:text-sm font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Pain Points & Value
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            傳統白板 vs. Relievo 智慧系統
          </h2>
          <p class="text-sm sm:text-base text-slate-600">
            不改變店內既有規矩，系統自動適應您的門市流程
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <!-- Traditional Side -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-sm space-y-4">
            <div class="flex items-center space-x-2.5 text-rose-600 font-black text-lg sm:text-xl pb-3 border-b border-rose-100">
              <XCircle class="w-6 h-6 flex-shrink-0" />
              <span>傳統紙筆 / 白板排單困境</span>
            </div>
            <ul class="space-y-3.5 text-sm sm:text-base text-slate-700">
              <li class="flex items-start space-x-2.5">
                <span class="text-rose-500 font-bold text-base mt-0.5">✕</span>
                <span><strong class="text-slate-900">查位翻找 2 分鐘：</strong>對著白板心算算半天，客人等太久容易跑單。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-rose-500 font-bold text-base mt-0.5">✕</span>
                <span><strong class="text-slate-900">套餐容易卡床：</strong>腳底按完沒包廂，客人只能乾等尷尬。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-rose-500 font-bold text-base mt-0.5">✕</span>
                <span><strong class="text-slate-900">手動輪牌吵架：</strong>記錯順位引發偏心質疑，內部衝突不斷。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-rose-500 font-bold text-base mt-0.5">✕</span>
                <span><strong class="text-slate-900">新人培訓需 2 週：</strong>排班規則繁雜，店長不敢放心交接。</span>
              </li>
            </ul>
          </div>

          <!-- Relievo Modern Side -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-500 shadow-md space-y-4 relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-brand-600 text-white text-xs font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              推薦升級
            </div>
            <div class="flex items-center space-x-2.5 text-brand-700 font-black text-lg sm:text-xl pb-3 border-b border-brand-100">
              <CheckCircle2 class="w-6 h-6 text-brand-600 flex-shrink-0" />
              <span>Relievo 睿舒智慧排程系統</span>
            </div>
            <ul class="space-y-3.5 text-sm sm:text-base text-slate-800">
              <li class="flex items-start space-x-2.5">
                <span class="text-emerald-500 font-bold text-base mt-0.5">✔</span>
                <span><strong class="text-slate-900">3 秒雷達秒查空檔：</strong>免問個資，按兩下瞬間給出最佳時段。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-emerald-500 font-bold text-base mt-0.5">✔</span>
                <span><strong class="text-slate-900">自動銜接換房：</strong>沙發轉包廂精準卡位，空間多賺 35%。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-emerald-500 font-bold text-base mt-0.5">✔</span>
                <span><strong class="text-slate-900">雙軌公平自動輪牌：</strong>打卡進列、完工回隊尾，制度公開透明。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-emerald-500 font-bold text-base mt-0.5">✔</span>
                <span><strong class="text-slate-900">新進櫃檯 10 分鐘上手：</strong>點餐機直覺介面，第 1 天從容接單。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Multi-Industry Solutions Matrix (Expandable Architecture) -->
    <SolutionsMatrixSection />

    <!-- 5. ROI Calculator -->
    <RoiCalculator @open-demo-modal="isDemoModalOpen = true" />

    <!-- 6. Testimonials Section -->
    <TestimonialsSection />

    <!-- 7. Pricing Section (Hidden for now, preserved for future display) -->
    <!-- <PricingSection @open-demo-modal="isDemoModalOpen = true" /> -->

    <!-- 8. FAQ Section -->
    <FaqSection />

    <!-- 9. Bottom Action Banner -->
    <section class="py-16 sm:py-20 bg-gradient-to-r from-brand-600 via-indigo-600 to-teal-600 text-white text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          立即告別排班失誤，讓門市營收翻倍！
        </h2>
        <p class="text-brand-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
          加入全台頂尖養生會館與連鎖品牌，14 天全功能免費體驗，無需綁約。
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            @click="isDemoModalOpen = true"
            class="px-8 py-4 rounded-2xl bg-white text-brand-700 hover:bg-brand-50 font-black text-base sm:text-lg shadow-xl transition-all transform active:scale-95 cursor-pointer"
          >
            免費預約專人演示 & 試用
          </button>
        </div>
      </div>
    </section>

    <!-- Lead Capture Modal -->
    <LeadCaptureModal :is-open="isDemoModalOpen" @close="isDemoModalOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  CheckCircle2,
  XCircle
} from 'lucide-vue-next'
import HeroSection from '../components/HeroSection.vue'
import FeatureShowcase from '../components/FeatureShowcase.vue'
import SolutionsMatrixSection from '../components/SolutionsMatrixSection.vue'
import RoiCalculator from '../components/RoiCalculator.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import PricingSection from '../components/PricingSection.vue'
import FaqSection from '../components/FaqSection.vue'
import LeadCaptureModal from '../components/LeadCaptureModal.vue'

const isDemoModalOpen = ref(false)
</script>
