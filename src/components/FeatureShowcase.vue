<template>
  <section id="features" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Why Relievo · 零學習門檻
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          為什麼養生館老闆與櫃檯，<br /><span class="text-brand-600">用過就回不去了？</span>
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          徹底告別長達 2 週的新人培訓！4 大看家本領，把排單、輪牌、空間換房化繁為簡，前台人員流動再也不用擔心店務大亂。
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
            <div class="flex items-center space-x-2">
              <h3 class="text-xl font-bold text-slate-900">1. ⚡ 1 秒秒排！免背規則不撞單</h3>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">新手免心算</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              電話一響，客人說「我們 3 個人要做套餐」，系統瞬間自動核對所有床位、包廂與師傅時間，1 秒排好最順方案。新手櫃檯免背師傅技能與房間規則，照著螢幕點選即排。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-500 font-mono text-[11px]">
              <span>智慧防撞單檢查</span>
              <span class="text-emerald-600 font-bold">✔ 完美排定無衝突</span>
            </div>
            <div class="space-y-1.5 pt-1">
              <div class="flex items-center justify-between bg-emerald-50 text-emerald-800 p-2 rounded-lg font-medium">
                <span>師傅技能與空檔: 腳底 + 指壓 (已鎖定)</span>
                <span class="font-bold">✔ OK</span>
              </div>
              <div class="flex items-center justify-between bg-emerald-50 text-emerald-800 p-2 rounded-lg font-medium">
                <span>床位安排: 單人包廂指壓床 #02</span>
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
            <div class="flex items-center space-x-2">
              <h3 class="text-xl font-bold text-slate-900">2. 👥 師傅自動輪流排，公平公開不吵架</h3>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold">免手動記順位</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              內建「腳底」與「指壓」獨立排隊輪牌。打卡上班自動進隊列、按完自動排到隊尾，新手前台不用擔心算錯輪牌順位得罪師傅，制度透明師傅向心力高。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-500 font-mono text-[11px]">
              <span>今日指壓排隊順位</span>
              <span class="text-teal-600 font-bold">系統自動排隊</span>
            </div>
            <div class="grid grid-cols-3 gap-2 text-center text-xs pt-1">
              <div class="p-2 rounded-xl bg-teal-50 border border-teal-200 font-bold text-teal-900">
                <span class="text-[10px] text-teal-600 block">第 1 順位 (該上場)</span>
                <span>08號 佳玲</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
                <span class="text-[10px] text-slate-400 block">第 2 順位 (準備)</span>
                <span>05號 阿豪</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-100 border border-slate-200 font-medium text-slate-700">
                <span class="text-[10px] text-slate-400 block">第 3 順位 (休息)</span>
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
            <div class="flex items-center space-x-2">
              <h3 class="text-xl font-bold text-slate-900">3. 🔄 腳底轉全身自動換床，同個師傅按到底</h3>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">免手排換房</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              做複合套餐最怕卡床！系統自動安排「前 30 分坐腳底椅 ➔ 後 60 分進包廂躺床」，空間精準銜接、同一位師傅全程服務，空間多賺 35%！
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div class="flex items-center justify-between text-slate-500 font-mono text-[11px]">
              <span>套餐自動分段路徑</span>
              <span class="text-amber-600 font-bold">同一位師傅全程服務</span>
            </div>
            <div class="flex items-center space-x-2 pt-1">
              <div class="flex-1 bg-amber-50 border border-amber-200 p-2.5 rounded-xl text-center">
                <span class="text-[10px] text-amber-700 block font-semibold">前半段 (30分鐘)</span>
                <span class="font-bold text-amber-900">腳底沙發 #01</span>
              </div>
              <span class="text-slate-400 font-bold">&rarr;</span>
              <div class="flex-1 bg-brand-50 border border-brand-200 p-2.5 rounded-xl text-center">
                <span class="text-[10px] text-brand-700 block font-semibold">後半段 (60分鐘)</span>
                <span class="font-bold text-brand-900">包廂指壓床 #03</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 4: Real-time Live Floor Dashboard -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 hover:shadow-xl transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-lg shadow-brand-600/30">
            <LayoutDashboard class="w-6 h-6" />
          </div>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <h3 class="text-xl font-bold text-slate-900">4. 📊 點餐機般直覺大看板：10 分鐘上手</h3>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 font-bold">第 1 天獨立值班</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              櫃檯大螢幕即時顯示每張床進度條。綠燈剛開始、黃燈快按完、紅燈超時，客人要加節、結帳按一下就完成，新進人員第 1 天就能自信值班。
            </p>
          </div>
          <!-- Visual snippet -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <div class="flex items-center justify-between">
              <div class="font-bold text-slate-900 flex items-center space-x-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>正在施作：08號 佳玲 (全身指壓)</span>
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
