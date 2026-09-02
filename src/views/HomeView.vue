<template>
  <div class="space-y-0">
    <!-- Hero Section (簡潔、直擊痛點、手機友善) -->
    <HeroSection @open-demo-modal="isDemoModalOpen = true" />

    <!-- 1. Core Features Highlights (特色介紹專注區) -->
    <FeatureShowcase />

    <!-- 3. Pain Points vs. Relievo Solution Comparison Matrix -->
    <section class="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Pain Points & Value
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            傳統手寫白板 vs. Relievo 睿舒智慧
          </h2>
          <p class="text-xs sm:text-sm text-slate-500">
            不用改變店內既有收費與輪牌規矩，系統自動適應您的店務流程
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <!-- Traditional Side -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-sm space-y-4">
            <div class="flex items-center space-x-2.5 text-rose-600 font-black text-lg pb-3 border-b border-rose-100">
              <XCircle class="w-6 h-6" />
              <span>傳統紙筆 / 白板排單困境</span>
            </div>
            <ul class="space-y-3 text-xs sm:text-sm text-slate-600">
              <li class="flex items-start space-x-2.5">
                <span class="text-rose-500 font-black mt-0.5">✕</span>
                <span><strong>電話翻簿子心算：</strong>客人來電詢問，櫃檯對著白板翻找 2 分鐘才敢回覆，容易跑單。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-rose-500 font-black mt-0.5">✕</span>
                <span><strong>複合套餐易卡床：</strong>腳底轉全身指壓常發生「人按完但沒包廂床可躺」的窘境。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-rose-500 font-black mt-0.5">✕</span>
                <span><strong>師傅爭單吵架：</strong>人工作記輪牌順位，容易產生「櫃檯私心偏袒特定師傅」的內部衝突。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-rose-500 font-black mt-0.5">✕</span>
                <span><strong>新人櫃檯培訓難：</strong>店內規則複雜，新人至少要教 1~2 週才敢放手接電話。</span>
              </li>
            </ul>
          </div>

          <!-- Relievo Modern Side -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-500 shadow-md space-y-4 relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              推薦升級
            </div>
            <div class="flex items-center space-x-2.5 text-brand-700 font-black text-lg pb-3 border-b border-brand-100">
              <CheckCircle2 class="w-6 h-6 text-brand-600" />
              <span>Relievo 睿舒智慧排程系統</span>
            </div>
            <ul class="space-y-3 text-xs sm:text-sm text-slate-700">
              <li class="flex items-start space-x-2.5">
                <span class="text-emerald-500 font-black mt-0.5">✔</span>
                <span><strong>3 秒電話雷達查位：</strong>免問個資，按兩下瞬間得知有無空位或最近可做時段。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-emerald-500 font-black mt-0.5">✔</span>
                <span><strong>自動分段轉移空間：</strong>系統自動計算腳底沙發與包廂床位銜接，同一師傅按到底。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-emerald-500 font-black mt-0.5">✔</span>
                <span><strong>雙軌獨立公平輪牌：</strong>上班自動進佇列、完工自動回隊尾，公信透明不爭執。</span>
              </li>
              <li class="flex items-start space-x-2.5">
                <span class="text-emerald-500 font-black mt-0.5">✔</span>
                <span><strong>新進櫃檯 10 分鐘上手：</strong>介面直覺如點餐機，iPad 隨開即用，免裝專用主機。</span>
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
    <section class="py-16 bg-gradient-to-r from-brand-600 via-indigo-600 to-teal-600 text-white text-center">
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
