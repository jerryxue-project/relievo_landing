<template>
  <section id="pricing" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Pricing Plans
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          透明彈性的月費方案，無任何隱藏收費
        </h2>
        <p class="text-slate-600 text-sm sm:text-base">
          提供 14 天全功能免費體驗，滿意再付費。支援年繳 83 折優惠。
        </p>

        <!-- Annual / Monthly Toggle -->
        <div class="inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
          <button
            type="button"
            @click="isAnnual = false"
            class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
            :class="!isAnnual ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            按月計費
          </button>
          <button
            type="button"
            @click="isAnnual = true"
            class="px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer"
            :class="isAnnual ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'"
          >
            <span>年繳優惠</span>
            <span class="px-1.5 py-0.2 rounded text-[10px]" :class="isAnnual ? 'bg-brand-700 text-white' : 'bg-emerald-100 text-emerald-800'">省 2 個月</span>
          </button>
        </div>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 1. Starter (單店基礎版) -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-bold text-slate-900">單店輕量版 (Starter)</h3>
              <p class="text-xs text-slate-500 mt-1">適合 1~5 位技師的獨立個人工作室或小型養生館</p>
            </div>
            <div class="flex items-baseline space-x-1">
              <span class="text-3xl sm:text-4xl font-black text-slate-900 font-mono">NT$ {{ isAnnual ? '1,480' : '1,780' }}</span>
              <span class="text-xs text-slate-500 font-medium">/ 月</span>
            </div>
            <ul class="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-slate-200">
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>最多支援 6 位技師名冊</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>智慧自動排程與空位演算</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>基礎師傅輪牌管理</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>手機/平板/電腦全裝置自適應</span></li>
            </ul>
          </div>

          <button
            @click="$emit('open-demo-modal')"
            class="w-full py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            免費試用 14 天
          </button>
        </div>

        <!-- 2. Pro (旗艦專業版) - Recommended -->
        <div class="rounded-3xl bg-white border-2 border-brand-600 p-8 space-y-6 flex flex-col justify-between shadow-xl shadow-brand-600/10 relative">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span class="px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold shadow-md shadow-brand-600/30">
              多數店家首選 (Most Popular)
            </span>
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-bold text-slate-900">旗艦專業版 (Professional)</h3>
              <p class="text-xs text-slate-500 mt-1">適合 6~20 位技師的中大型實體養生會館</p>
            </div>
            <div class="flex items-baseline space-x-1">
              <span class="text-3xl sm:text-4xl font-black text-brand-600 font-mono">NT$ {{ isAnnual ? '2,880' : '3,480' }}</span>
              <span class="text-xs text-slate-500 font-medium">/ 月</span>
            </div>
            <ul class="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-slate-100">
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>最多支援 25 位技師名冊</span></li>
              <li class="flex items-center space-x-2 font-bold text-brand-900"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>腳底 / 指壓雙輪牌獨立 FIFO 隊列</span></li>
              <li class="flex items-center space-x-2 font-bold text-brand-900"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>複合套餐跨空間分段轉移排程</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>即時營運大看板與施作倒數進度條</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>客滿智慧推薦鄰近可行時段</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>專屬 LINE 官方技術客服支援</span></li>
            </ul>
          </div>

          <button
            @click="$emit('open-demo-modal')"
            class="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-lg shadow-brand-600/30 transition-all cursor-pointer"
          >
            立即開始免費試用 &rarr;
          </button>
        </div>

        <!-- 3. Enterprise (連鎖企業版) -->
        <div class="rounded-3xl bg-slate-50 border border-slate-200 p-8 space-y-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-bold text-slate-900">連鎖旗艦版 (Enterprise)</h3>
              <p class="text-xs text-slate-500 mt-1">適合 20 位以上技師或擁有多家分店的連鎖品牌</p>
            </div>
            <div class="flex items-baseline space-x-1">
              <span class="text-3xl sm:text-4xl font-black text-slate-900 font-mono">客製報價</span>
            </div>
            <ul class="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-slate-200">
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>無限技師與多門市跨店管理中樞</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>專屬伺服器隔離部署 (Private Cloud)</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>客製化 ERP / LINE 官方會員系統串接</span></li>
              <li class="flex items-center space-x-2"><Check class="w-4 h-4 text-brand-600 flex-shrink-0" /><span>專屬顧問現場教育訓練與流程導入</span></li>
            </ul>
          </div>

          <button
            @click="$emit('open-demo-modal')"
            class="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            聯絡專人洽詢方案
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'

defineEmits(['open-demo-modal'])

const isAnnual = ref(true)
</script>
