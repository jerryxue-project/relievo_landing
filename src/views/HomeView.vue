<template>
  <div class="space-y-0">
    <!-- Hero Section (簡潔、直擊痛點、手機友善) -->
    <HeroSection @open-demo-modal="isDemoModalOpen = true" />

    <!-- 1. Dedicated Showcase Gateway Card (引導業務與業主進入系統全貌展示頁) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 mb-16 relative z-20">
      <div class="rounded-3xl bg-gradient-to-r from-slate-900 via-brand-950 to-indigo-950 text-white p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-400/30">
            <Briefcase class="w-3.5 h-3.5" />
            <span>業務向業主介紹專用通道</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-black tracking-tight">
            想要查看系統完整畫面、甘特排程與現場演算法演示？
          </h3>
          <p class="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            我們為業務人員與門市業主準備了專屬的「系統全貌展示頁」，包含實機操作錄影、6大功能模組深潛與排程算力沙盒。
          </p>
        </div>

        <div class="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <router-link
            to="/showcase"
            class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-400 hover:to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-brand-500/25 flex items-center justify-center space-x-2 transition-all transform active:scale-95"
          >
            <span>💼 進入系統全貌展示頁</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
          <a
            href="http://localhost:5173"
            target="_blank"
            class="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center"
          >
            線上後台 Demo
          </a>
        </div>
      </div>
    </section>

    <!-- 2. Core Features Highlights (特色介紹專注區) -->
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
          <router-link
            to="/showcase"
            class="px-6 py-3.5 rounded-2xl bg-brand-800/80 hover:bg-brand-800 text-white font-bold text-sm border border-brand-400/40"
          >
            💼 查看系統完整演示 (業務專用)
          </router-link>
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
  Briefcase,
  ArrowRight,
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
