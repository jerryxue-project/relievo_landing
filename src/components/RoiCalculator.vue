<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs sm:text-sm font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
          ROI Calculator
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          試算 Relievo 為您的門市<br /><span class="text-brand-600">每月創造的營收與工時效益</span>
        </h2>
        <p class="text-sm sm:text-base text-slate-600">
          拖動滑桿輸入門市規模，即時預估排程最佳化帶來的真實回報。
        </p>
      </div>

      <div class="max-w-4xl mx-auto rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Sliders -->
          <div class="lg:col-span-6 space-y-6">
            <!-- Slider 1: Masseur count -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between text-sm sm:text-base font-bold">
                <span class="text-slate-200">門市技師 / 師傅人數：</span>
                <span class="font-mono font-black text-brand-400 text-xl">{{ masseurCount }} 位</span>
              </div>
              <input
                v-model.number="masseurCount"
                type="range"
                min="2"
                max="30"
                step="1"
                class="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div class="flex justify-between text-xs text-slate-400 font-mono">
                <span>2 人 (單店)</span>
                <span>15 人 (中型名店)</span>
                <span>30 人 (旗艦連鎖)</span>
              </div>
            </div>

            <!-- Slider 2: Average Service Price -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between text-sm sm:text-base font-bold">
                <span class="text-slate-200">平均單客消費金額：</span>
                <span class="font-mono font-black text-brand-400 text-xl">NT$ {{ avgTicket }}</span>
              </div>
              <input
                v-model.number="avgTicket"
                type="range"
                min="600"
                max="3000"
                step="100"
                class="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div class="flex justify-between text-xs text-slate-400 font-mono">
                <span>NT$ 600</span>
                <span>NT$ 1,500</span>
                <span>NT$ 3,000</span>
              </div>
            </div>

            <!-- Slider 3: Daily appointments per masseur -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between text-sm sm:text-base font-bold">
                <span class="text-slate-200">每位師傅每日平均單數：</span>
                <span class="font-mono font-black text-brand-400 text-xl">{{ dailyOrders }} 節/單</span>
              </div>
              <input
                v-model.number="dailyOrders"
                type="range"
                min="2"
                max="8"
                step="1"
                class="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
            </div>
          </div>

          <!-- Output Display -->
          <div class="lg:col-span-6 bg-slate-950/80 rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-6">
            <div class="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">
              預期每月營運提升效益
            </div>

            <div class="space-y-4">
              <div class="p-4 sm:p-5 rounded-2xl bg-brand-950/60 border border-brand-800/60 flex items-center justify-between">
                <div>
                  <span class="text-xs sm:text-sm text-slate-400 block font-medium">每月排程翻床額外增長營收</span>
                  <span class="text-2xl sm:text-3xl font-black text-brand-400 font-mono mt-0.5 block">+NT$ {{ monthlyAddedRevenue.toLocaleString() }}</span>
                </div>
                <span class="text-xs sm:text-sm text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1.5 rounded-lg border border-emerald-800">
                  +18% 產能
                </span>
              </div>

              <div class="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <span class="text-xs sm:text-sm text-slate-400 block font-medium">每月節省櫃檯排班與溝通工時</span>
                  <span class="text-2xl sm:text-3xl font-black text-teal-400 font-mono mt-0.5 block">{{ savedHours }} 小時</span>
                </div>
                <span class="text-xs sm:text-sm text-teal-400 font-bold bg-teal-950/80 px-2.5 py-1.5 rounded-lg border border-teal-800">
                  工時節省 90%
                </span>
              </div>
            </div>

            <button
              @click="$emit('open-demo-modal')"
              class="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-600/30 transition-all cursor-pointer"
            >
              免費預約專人為門市精算效益 &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

defineEmits(['open-demo-modal'])

const masseurCount = ref(8)
const avgTicket = ref(1200)
const dailyOrders = ref(4)

const monthlyAddedRevenue = computed(() => {
  // Conservative estimate: 0.5 extra order per masseur per day through optimal slot compacting
  const extraOrdersMonth = masseurCount.value * 0.5 * 26
  return Math.round(extraOrdersMonth * avgTicket.value)
})

const savedHours = computed(() => {
  // ~1.5 hour per day manual coordination saved
  return Math.round(1.5 * 26 * (masseurCount.value / 6))
})
</script>
