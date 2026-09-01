<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <HeroSection @open-demo-modal="isDemoModalOpen = true" />

    <!-- Interactive Live Sandbox Scheduler Demo -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16 relative z-10">
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
