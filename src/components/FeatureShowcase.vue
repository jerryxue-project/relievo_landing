<template>
  <section id="features" class="py-14 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="text-xs sm:text-sm font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
          Why Relivo · 零學習門檻
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          為什麼養生館老闆與櫃檯，<br /><span class="text-brand-600">用過就回不去了？</span>
        </h2>
        <p class="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
          徹底告別 2 週新人培訓！4 大核心功能，把排單、輪牌、換房化繁為簡。
        </p>
      </div>

      <!-- Features Grid (2x2 with rich visual layout) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <!-- Feature 1: Multi-resource constraint solver -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-5 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/30">
            <Cpu class="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900">1. ⚡ 1 秒智慧排單，杜絕撞單</h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">免心算</span>
            </div>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              多人預約、複合套餐瞬間自動對齊床位與師傅，免翻簿子心算，1 秒排出最佳方案。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2.5">
            <div class="flex items-center justify-between text-slate-600 font-mono text-xs sm:text-sm font-medium">
              <span>智慧防撞單檢查</span>
              <span class="text-emerald-600 font-bold">✔ 完美排定無衝突</span>
            </div>
            <div class="space-y-2 pt-1">
              <div class="flex items-center justify-between bg-emerald-50 text-emerald-800 p-2.5 rounded-xl font-semibold text-xs sm:text-sm">
                <span>師傅技能與空檔: 腳底 + 指壓 (已鎖定)</span>
                <span class="font-bold">✔ OK</span>
              </div>
              <div class="flex items-center justify-between bg-emerald-50 text-emerald-800 p-2.5 rounded-xl font-semibold text-xs sm:text-sm">
                <span>床位安排: 單人包廂指壓床 #02</span>
                <span class="font-bold">✔ OK</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Dual Queue Fair FIFO Rotation -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-5 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-600/30">
            <Users2 class="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900">2. 👥 師傅自動輪牌，公信不吵架</h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold">先到先排 · 公平輪流</span>
            </div>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              打卡自動進列、完工自動回隊尾。規則透明無私心，新手前台不再擔心排錯順位得罪師傅。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2.5">
            <div class="flex items-center justify-between text-slate-600 font-mono text-xs sm:text-sm font-medium">
              <span>今日指壓排隊順位</span>
              <span class="text-teal-600 font-bold">系統自動排隊</span>
            </div>
            <div class="grid grid-cols-3 gap-2 text-center text-xs sm:text-sm pt-1">
              <div class="p-2.5 rounded-xl bg-teal-50 border border-teal-200 font-bold text-teal-900">
                <span class="text-xs text-teal-600 block">第 1 順位 (該上場)</span>
                <span class="text-sm font-extrabold">08號 佳玲</span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
                <span class="text-xs text-slate-500 block">第 2 順位 (準備)</span>
                <span class="text-sm font-bold">05號 阿豪</span>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
                <span class="text-xs text-slate-500 block">第 3 順位 (休息)</span>
                <span class="text-sm font-bold">11號 文傑</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Staged Facility Transfer for Combos -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-5 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-600/30">
            <Shuffle class="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900">3. 🔄 套餐無縫換床，空間多賺 35%</h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">同師傅到底</span>
            </div>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              腳底轉指壓自動銜接包廂與沙發，同師傅全程服務不卡床，大幅提高翻床率與坪效。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2.5">
            <div class="flex items-center justify-between text-slate-600 font-mono text-xs sm:text-sm font-medium">
              <span>套餐自動分段路徑</span>
              <span class="text-amber-600 font-bold">同一位師傅全程服務</span>
            </div>
            <div class="flex items-center space-x-2 pt-1">
              <div class="flex-1 bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center">
                <span class="text-xs text-amber-700 block font-semibold">前半段 (30分鐘)</span>
                <span class="font-bold text-amber-900 text-xs sm:text-sm">腳底沙發 #01</span>
              </div>
              <span class="text-slate-400 font-bold">&rarr;</span>
              <div class="flex-1 bg-brand-50 border border-brand-200 p-2.5 rounded-xl text-center">
                <span class="text-xs text-brand-700 block font-semibold">後半段 (60分鐘)</span>
                <span class="font-bold text-brand-900 text-xs sm:text-sm">包廂指壓床 #03</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 4: Real-time Live Floor Dashboard -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-5 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/30">
            <LayoutDashboard class="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <h3 class="text-xl sm:text-2xl font-bold text-slate-900">4. 📊 點餐機式大看板，10 分鐘上手</h3>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 font-bold">第 1 天接單</span>
            </div>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              彩色進度條一眼掌握剩餘時間，加節、結帳按一下搞定，新進櫃檯第 1 天自信值班。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2.5">
            <div class="flex items-center justify-between">
              <div class="font-bold text-slate-900 flex items-center space-x-1.5 text-xs sm:text-sm">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>正在施作：08號 佳玲 (全身指壓)</span>
              </div>
              <span class="font-mono font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded text-xs">剩餘 24 分鐘</span>
            </div>
            <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-brand-500 to-emerald-500 h-full w-3/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Cpu, Users2, Shuffle, LayoutDashboard } from 'lucide-vue-next'
</script>
