<template>
  <section class="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-gradient-to-b from-slate-50 via-white to-white">
    <!-- Subtle Background Glows -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-100/40 via-indigo-50/20 to-transparent blur-3xl -z-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-6">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 shadow-xs">
          <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
          <span class="text-xs font-bold text-brand-700">Relievo 次世代服務業智慧排程 SaaS</span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
          徹底告別人工排單混亂<br />
          讓<span class="text-brand-600">智慧演算法</span>為您自動派工
        </h1>

        <!-- Subheadline -->
        <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          專為按摩養生、美容美甲、健康運動門市量身打造。整合<strong class="text-slate-900 font-bold">師傅公平雙輪牌 (FIFO)</strong>、<strong class="text-slate-900 font-bold">多維資源約束滿足計算</strong>與<strong class="text-slate-900 font-bold">跨空間複合套餐轉移</strong>，門市翻床率提升 35%！
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            @click="$emit('open-demo-modal')"
            class="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brand-600/30 hover:shadow-brand-600/40 transition-all transform active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles class="w-4 h-4" />
            <span>預約專人演示 (免費試用 14 天)</span>
          </button>

          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            class="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-sm sm:text-base shadow-xs transition-all flex items-center justify-center space-x-2"
          >
            <PlayCircle class="w-4 h-4 text-brand-600" />
            <span>直接進入線上 Live Demo</span>
          </a>
        </div>

        <!-- Trust Metrics -->
        <div class="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-200/80">
          <div class="text-center p-3">
            <div class="text-2xl sm:text-3xl font-black text-brand-600 font-mono">35% ↑</div>
            <div class="text-xs text-slate-500 font-medium mt-0.5">平均空間翻床率</div>
          </div>
          <div class="text-center p-3">
            <div class="text-2xl sm:text-3xl font-black text-brand-600 font-mono">&lt; 0.1s</div>
            <div class="text-xs text-slate-500 font-medium mt-0.5">多約束排程求解</div>
          </div>
          <div class="text-center p-3">
            <div class="text-2xl sm:text-3xl font-black text-brand-600 font-mono">100%</div>
            <div class="text-xs text-slate-500 font-medium mt-0.5">師傅輪牌透明公平</div>
          </div>
          <div class="text-center p-3">
            <div class="text-2xl sm:text-3xl font-black text-brand-600 font-mono">0 漏單</div>
            <div class="text-xs text-slate-500 font-medium mt-0.5">杜絕人工撞單糾紛</div>
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
