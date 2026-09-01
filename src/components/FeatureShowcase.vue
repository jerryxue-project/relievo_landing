<template>
  <section id="features" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Core Engine
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          專為服務業複雜排班設計的<br /><span class="text-brand-600">4 大智慧核心能力</span>
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          不只是預約登記，更是結合門市空間容量、技師技能輪牌與時段演算的完整店務中樞。
        </p>
      </div>

      <!-- Features Grid (2x2 with rich visual layout) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Feature 1: Multi-resource constraint solver -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/30">
            <Cpu class="w-6 h-6" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-bold text-slate-900">1. 多維資源約束滿足演算法 (Constraint Solver)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              進單瞬間同步檢索「師傅當值狀態、技能項目、性別偏好、勞點指定、足浴沙發容量與單雙人包廂床位」。毫秒內給出最佳配置，若客滿主動演算推薦 4 組最接近空位時段。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-500 font-mono text-[11px]">
              <span>資源約束滿足檢查</span>
              <span class="text-emerald-600 font-bold">100% 通過</span>
            </div>
            <div class="space-y-1.5 pt-1">
              <div class="flex items-center justify-between bg-emerald-50 text-emerald-800 p-2 rounded-lg font-medium">
                <span>技師技能: 腳底 + 指壓 + 精油 (3/3 匹配)</span>
                <span class="font-bold">✔ OK</span>
              </div>
              <div class="flex items-center justify-between bg-emerald-50 text-emerald-800 p-2 rounded-lg font-medium">
                <span>空間設施: 單人指壓包廂床位 #02</span>
                <span class="font-bold">✔ OK</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2: Dual Queue Fair FIFO Rotation -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-600/30">
            <Users2 class="w-6 h-6" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-bold text-slate-900">2. 腳底 / 指壓雙輪牌公平派工 (FIFO Rotation)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              支援「腳底輪牌」與「指壓輪牌」獨立順位隊列。技師上下班打卡、外出休息歸隊、完工自動排入隊尾，全程透明透明無人工偏袒，徹底化解店內技師爭單心結。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-500 font-mono text-[11px]">
              <span>今日指壓輪牌順位</span>
              <span class="text-teal-600 font-bold">即時自動輪轉</span>
            </div>
            <div class="grid grid-cols-3 gap-2 text-center text-xs pt-1">
              <div class="p-2 rounded-xl bg-teal-50 border border-teal-200 font-bold text-teal-900">
                <span class="text-[10px] text-teal-600 block">第 1 順位</span>
                <span>08號 佳玲</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
                <span class="text-[10px] text-slate-400 block">第 2 順位</span>
                <span>05號 阿豪</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
                <span class="text-[10px] text-slate-400 block">第 3 順位</span>
                <span>11號 文傑</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 3: Staged Facility Transfer for Combos -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-600/30">
            <Shuffle class="w-6 h-6" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-bold text-slate-900">3. 複合套餐跨空間分段排程 (Multi-Stage Sequencer)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              業界首創複合療程智慧分段！例如「腳底 30 分 + 指壓 60 分」套餐，系統自動鎖定前段足浴沙發與後段包廂指壓床，並由同一位技師全程服務，無縫換場不卡關。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-500 font-mono text-[11px]">
              <span>分段空間時間軸</span>
              <span class="text-amber-600 font-bold">同一技師全程服務</span>
            </div>
            <div class="flex items-center space-x-2 pt-1">
              <div class="flex-1 bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center">
                <span class="text-[10px] text-amber-700 block font-semibold">階段 1 (30分鐘)</span>
                <span class="font-bold text-amber-900">足浴沙發區 #01</span>
              </div>
              <span class="text-slate-400 font-bold">&rarr;</span>
              <div class="flex-1 bg-brand-50 border border-brand-200 p-2.5 rounded-xl text-center">
                <span class="text-[10px] text-brand-700 block font-semibold">階段 2 (60分鐘)</span>
                <span class="font-bold text-brand-900">包廂指壓床 #03</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 4: Real-time Live Floor Dashboard -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
            <LayoutDashboard class="w-6 h-6" />
          </div>
          <div class="space-y-2">
            <h3 class="text-xl font-bold text-slate-900">4. 即時營運大看板與施作倒數計時 (Live Dashboard)</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              專為櫃檯設計的動態營運面板。施作中訂單動態展示綠/黃/紅進度條與剩餘分鐘數，支援一鍵「報到開工」、「加節延時」、「完工結帳」，現場營運節奏一目瞭然。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div class="flex items-center justify-between">
              <div class="font-bold text-slate-900 flex items-center space-x-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>施作中：08號 佳玲 (全身指壓)</span>
              </div>
              <span class="font-mono font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">剩餘 24 分鐘</span>
            </div>
            <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
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
