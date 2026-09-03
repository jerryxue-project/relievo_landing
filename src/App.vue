<template>
  <div class="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
    <!-- Main Global Navbar -->
    <HeaderNavbar @open-demo-modal="isDemoModalOpen = true" />

    <!-- Main Router View -->
    <main class="flex-1">
      <router-view @open-demo-modal="isDemoModalOpen = true" />
    </main>

    <!-- Main Global Footer -->
    <FooterSection />

    <!-- Global Lead Demo Modal -->
    <LeadCaptureModal
      :is-open="isDemoModalOpen"
      @close="isDemoModalOpen = false"
    />

    <!-- Mobile Sticky Bottom Floating Action Bar (Mobile Only) -->
    <div class="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-4 py-2.5 lg:hidden flex items-center shadow-2xl shadow-slate-900/20">
      <button
        @click="isDemoModalOpen = true"
        class="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-extrabold text-center tracking-wide shadow-lg shadow-brand-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
      >
        <Sparkles class="w-4 h-4 flex-shrink-0" />
        <span class="tracking-wide">免費預約專人演示</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Sparkles } from 'lucide-vue-next'
import HeaderNavbar from './components/HeaderNavbar.vue'
import FooterSection from './components/FooterSection.vue'
import LeadCaptureModal from './components/LeadCaptureModal.vue'

const isDemoModalOpen = ref(false)
</script>
