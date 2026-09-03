<template>
  <section class="py-14 sm:py-20 bg-slate-50 border-y border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div class="space-y-2">
          <span class="text-xs sm:text-sm font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            Multi-Industry Matrix
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            多產業智慧 SaaS 解決方案
          </h2>
          <p class="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            核心排程引擎適配多元服務業態，為不同門市量身打造。
          </p>
        </div>

        <router-link
          to="/solutions"
          class="inline-flex items-center space-x-1.5 text-sm sm:text-base font-bold text-brand-600 hover:text-brand-700 self-start md:self-auto group"
        >
          <span>查看完整矩陣</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </router-link>
      </div>

      <!-- Matrix Cards Grid (3 industry solutions) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 1. Spa & Massage (Live Flagship) -->
        <div class="rounded-3xl bg-white border-2 border-brand-500/80 p-6 sm:p-8 shadow-xl shadow-brand-500/10 space-y-5 relative flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
          <div class="absolute top-5 right-5">
            <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 flex items-center space-x-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>已上線</span>
            </span>
          </div>

          <div class="space-y-3.5">
            <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-2xl shadow-xs">
              💆
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">Relivo Spa 按摩養生</h3>
              <p class="text-xs sm:text-sm text-brand-600 font-bold mt-0.5">智慧排單與公平輪牌系統</p>
            </div>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              專為腳底按摩、全身指油壓設計。1 秒排好床位與師傅、套餐無縫換床、雙軌自動輪牌。
            </p>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-800 pt-2 border-t border-slate-100">
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>腳底 / 指壓 雙軌獨立自動輪牌</span>
              </li>
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>男女師指定、包廂床位秒排</span>
              </li>
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>彩色大螢幕進度條，剩幾分一眼看清</span>
              </li>
            </ul>
          </div>

          <div class="pt-4">
            <router-link
              to="/solutions/spa"
              class="w-full block py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm text-center shadow-md shadow-brand-600/20 transition-all"
            >
              產品專頁
            </router-link>
          </div>
        </div>

        <!-- 2. Beauty & Nails (Coming Soon) -->
        <div class="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5 relative flex flex-col justify-between hover:-translate-y-1 hover:border-rose-300 transition-all duration-300">
          <div class="absolute top-5 right-5">
            <span class="px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold border border-rose-200/80">
              即將推出
            </span>
          </div>

          <div class="space-y-3.5">
            <div class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center text-2xl shadow-xs">
              ✂️
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">Relivo Beauty 美髮美甲</h3>
              <p class="text-xs sm:text-sm text-rose-700 font-bold mt-0.5">AI 諮詢助理 · 燙染插單 · 設施防撞</p>
            </div>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              LINE AI 智慧初診與工時報價、剪染燙分段插單、美甲圖鑑與沖水鏡位防撞。
            </p>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-800 pt-2 border-t border-slate-100">
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>LINE AI 諮詢助理（前期溝通免人工）</span>
              </li>
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>燙染靜置空檔智慧插單剪洗</span>
              </li>
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>鏡位、沖水台與美甲桌多設施防撞</span>
              </li>
            </ul>
          </div>

          <div class="pt-4">
            <router-link
              to="/solutions/beauty"
              class="block w-full py-3 rounded-xl bg-rose-50 hover:bg-rose-100/80 text-rose-800 font-bold text-sm text-center border border-rose-200/80 transition-colors"
            >
              搶先登記早鳥體驗 &rarr;
            </router-link>
          </div>
        </div>

        <!-- 3. Fitness & Yoga (Planning) -->
        <div class="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5 relative flex flex-col justify-between hover:-translate-y-1 hover:border-indigo-300 transition-all duration-300">
          <div class="absolute top-5 right-5">
            <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
              規劃中
            </span>
          </div>

          <div class="space-y-3.5">
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl shadow-xs">
              🧘
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900">Relivo Studio 瑜珈健身</h3>
              <p class="text-xs sm:text-sm text-indigo-600 font-bold mt-0.5">團課名額與教練私教排課</p>
            </div>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              瑜珈教室、皮拉提斯器械床、私教排課，支援團體名額控管與候補自動遞補。
            </p>
            <ul class="space-y-2 text-xs sm:text-sm text-slate-800 pt-2 border-t border-slate-100">
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>團課人數上限與自動候補遞補</span>
              </li>
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>皮拉提斯器械床位精準排程</span>
              </li>
              <li class="flex items-center space-x-2">
                <Check class="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>教練私教時段線上即時預約</span>
              </li>
            </ul>
          </div>

          <div class="pt-4">
            <router-link
              to="/solutions/fitness"
              class="block w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm text-center transition-colors"
            >
              查看方案規劃 &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'
</script>
