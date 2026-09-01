<template>
  <div class="py-12 sm:py-16 space-y-16">
    <!-- Header -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
      <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
        Solutions Hub
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
        Relievo 多產業智慧解決方案矩陣
      </h1>
      <p class="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
        從單一門市到千店連鎖，Relievo 針對不同業態打造專屬排程與店務模組。
      </p>
    </div>

    <!-- Matrix Cards Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SolutionsMatrixSection />
    </div>

    <!-- Roadmap & Extension Ecosystem -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8 shadow-2xl">
        <div class="space-y-2">
          <div class="flex items-center space-x-2 text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles class="w-4 h-4" />
            <span>開放擴充架構 (Extensible SaaS Architecture)</span>
          </div>
          <h3 class="text-2xl font-extrabold text-white">未來系統擴充與 API 串接藍圖</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Relievo 採用現代微服務與 OpenAPI 架構，具備高度擴展性，能快速衍生至更多實體門市排程需求。
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
            <div class="font-bold text-brand-300">📱 LINE 官方預約串接</div>
            <p class="text-slate-400">支援顧客加入店家官方 LINE 帳號，直接進行 24 小時自助劃位與提醒推播。</p>
          </div>
          <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
            <div class="font-bold text-teal-300">💳 多元金流與定金預收</div>
            <p class="text-slate-400">支援綠界 / 藍新 / LINE Pay 定金線上預扣，徹底防止預約未到惡意放鳥。</p>
          </div>
          <div class="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-2">
            <div class="font-bold text-amber-300">📊 跨門市 BI 數據儀表板</div>
            <p class="text-slate-400">總部即時掌控全台分店技師工時、床位利用率、客單價與留客率統計分析。</p>
          </div>
        </div>

        <div class="text-center pt-4">
          <router-link
            to="/contact"
            class="inline-block px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs shadow-lg shadow-brand-600/30"
          >
            客製化系統需求諮詢 &rarr;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Sparkles } from 'lucide-vue-next'
import SolutionsMatrixSection from '../components/SolutionsMatrixSection.vue'
</script>
