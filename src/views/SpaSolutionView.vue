<template>
  <div class="py-12 sm:py-16 space-y-16">
    <!-- Header -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-xs font-bold text-emerald-800">現已全面上線 · 旗艦旗艦產品</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Relievo Spa 按摩養生館<br /><span class="text-brand-600">智慧排程與師傅輪牌派工系統</span>
          </h1>
          <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
            全台唯一真正解決「腳底/指壓雙輪牌公平性」、「男女師傅與勞點指定」、「複合套餐分段空間自動轉移」的專業級店務排程中樞。
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="http://localhost:5173"
              target="_blank"
              class="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lg shadow-brand-600/25 flex items-center space-x-2"
            >
              <PlayCircle class="w-4 h-4" />
              <span>立即試用線上 Demo 系統</span>
            </a>
            <router-link
              to="/contact"
              class="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
            >
              預約專人到店展示
            </router-link>
          </div>
        </div>

        <!-- Metric Card -->
        <div class="bg-gradient-to-br from-slate-900 to-brand-950 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6 max-w-md w-full">
          <h3 class="text-sm font-bold text-brand-300 uppercase tracking-wider">實體門市導入成效數據</h3>
          <div class="space-y-4">
            <div class="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700 flex items-center justify-between">
              <span class="text-xs text-slate-300">空間翻床率提升</span>
              <span class="text-xl font-bold font-mono text-emerald-400">+35% ~ 42%</span>
            </div>
            <div class="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700 flex items-center justify-between">
              <span class="text-xs text-slate-300">櫃檯排班爭議減少</span>
              <span class="text-xl font-bold font-mono text-teal-400">100% 降為 0</span>
            </div>
            <div class="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700 flex items-center justify-between">
              <span class="text-xs text-slate-300">複合套餐排單耗時</span>
              <span class="text-xl font-bold font-mono text-brand-300">&lt; 3 秒自動完成</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Sandbox Demo -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <InteractiveSchedulerDemo />
    </div>

    <!-- 6 Deep Highlights for Spa -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">為什麼頂尖養生會館選擇 Relievo Spa？</h2>
        <p class="text-xs text-slate-500">深入了解專為按摩產業設計的 6 大極致細節</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-lg">
            1
          </div>
          <h4 class="font-bold text-slate-900 text-sm">雙輪牌獨立 FIFO 隊列</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            腳底與指壓輪牌分開運作，師傅完工自動回到隊尾，打卡考勤與外出休息全自動聯動，師傅滿意度大幅提升。
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-50 text-brand-700 flex items-center justify-center font-bold text-lg">
            2
          </div>
          <h4 class="font-bold text-slate-900 text-sm">複合分段空間無縫銜接</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            「腳底+指壓」或「腳底+油推」套餐，演算法自動分段鎖定沙發與包廂，且同一技師全程負責，無須換人與繁複手動叫位。
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg">
            3
          </div>
          <h4 class="font-bold text-slate-900 text-sm">15 分鐘精確時段排程</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            嚴格以 15 分鐘為顆粒度排程，大幅提高空檔利用率，客滿時更自動演算推薦 4 組最接近空位時段，一鍵快速套用。
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-lg">
            4
          </div>
          <h4 class="font-bold text-slate-900 text-sm">男女師與勞點指定偏好</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            支援「指定男師」、「指定女師」、「勞點指定特定師傅」，演算法自動檢驗師傅專長技能（腳底/指壓/油推/修腳），精準無誤。
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div class="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold text-lg">
            5
          </div>
          <h4 class="font-bold text-slate-900 text-sm">即時營運大看板 & 倒數</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            前台一覽現場所有施作中訂單、綠黃紅動態進度條、剩餘分鐘數，支援一鍵「開工報到」、「加節延時」與「完工結帳」。
          </p>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg">
            6
          </div>
          <h4 class="font-bold text-slate-900 text-sm">全裝置 RWD 自適應</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            不管是櫃檯 iPad、總部 Mac/Windows 還是技師手機，介面字級與佈局皆完美自適應，零字體折行與破版問題。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PlayCircle } from 'lucide-vue-next'
import InteractiveSchedulerDemo from '../components/InteractiveSchedulerDemo.vue'
</script>
