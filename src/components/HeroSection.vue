<template>
  <section class="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-slate-50 via-white to-white">
    <!-- Subtle Background Glows -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-100/40 via-indigo-50/20 to-transparent blur-3xl -z-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-6">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 shadow-xs">
          <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
          <span class="text-xs font-bold text-brand-700">專為按摩養生・美業沙龍打造的智慧排單系統</span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18]">
          別再用紙筆白板算破頭！<br />
          <span class="text-brand-600">1 秒排好床位與師傅</span>，從此不撞單
        </h1>

        <!-- Subheadline -->
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          電話一來不用心算翻簿子！<strong class="text-slate-900 font-bold">1秒秒排床位</strong>、<strong class="text-slate-900 font-bold">師傅自動輪流不吵架</strong>、<strong class="text-slate-900 font-bold">套餐換床無縫接軌</strong>，新進櫃檯第 1 天就能輕鬆接單！
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            @click="$emit('open-demo-modal')"
            class="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-600/40 transition-all transform active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles class="w-4 h-4" />
            <span>免費預約專人線上演示 (試用 14 天)</span>
          </button>

          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-sm sm:text-base shadow-xs transition-all flex items-center justify-center space-x-2"
          >
            <PlayCircle class="w-4 h-4 text-brand-600" />
            <span>直接看真實排程後台</span>
          </a>
        </div>

        <!-- Trust Metrics -->
        <div class="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-200/80">
          <div class="text-center p-3 bg-white/70 rounded-2xl border border-slate-100 shadow-xs">
            <div class="text-2xl sm:text-3xl font-black text-brand-600 font-mono">1 秒</div>
            <div class="text-xs text-slate-700 font-bold mt-0.5">自動排定不燒腦</div>
            <div class="text-[10px] text-slate-400">免看白板心算</div>
          </div>
          <div class="text-center p-3 bg-white/70 rounded-2xl border border-slate-100 shadow-xs">
            <div class="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">0 撞單</div>
            <div class="text-xs text-slate-700 font-bold mt-0.5">床位師傅不衝突</div>
            <div class="text-[10px] text-slate-400">杜絕預約重複</div>
          </div>
          <div class="text-center p-3 bg-white/70 rounded-2xl border border-slate-100 shadow-xs">
            <div class="text-2xl sm:text-3xl font-black text-brand-600 font-mono">100%</div>
            <div class="text-xs text-slate-700 font-bold mt-0.5">公平輪流派工</div>
            <div class="text-[10px] text-slate-400">師傅不再爭單吵架</div>
          </div>
          <div class="text-center p-3 bg-white/70 rounded-2xl border border-slate-100 shadow-xs">
            <div class="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">+35%</div>
            <div class="text-xs text-slate-700 font-bold mt-0.5">空間多賺翻床率</div>
            <div class="text-[10px] text-slate-400">套餐自動換床不卡關</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Sparkles, PlayCircle } from 'lucide-vue-next'

defineEmits(['open-demo-modal'])
</script>
