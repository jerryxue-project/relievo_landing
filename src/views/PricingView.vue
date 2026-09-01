<template>
  <div class="py-12 sm:py-16 space-y-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PricingSection @open-demo-modal="isDemoModalOpen = true" />
      <FaqSection />
      <LeadCaptureModal :is-open="isDemoModalOpen" @close="isDemoModalOpen = false" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PricingSection from '../components/PricingSection.vue'
import FaqSection from '../components/FaqSection.vue'
import LeadCaptureModal from '../components/LeadCaptureModal.vue'

const isDemoModalOpen = ref(false)
</script>
