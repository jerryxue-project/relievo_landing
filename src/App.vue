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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderNavbar from './components/HeaderNavbar.vue'
import FooterSection from './components/FooterSection.vue'
import LeadCaptureModal from './components/LeadCaptureModal.vue'

const isDemoModalOpen = ref(false)
</script>
