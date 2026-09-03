<template>
  <footer class="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        <!-- Brand Info -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-brand-500/25">
              <Sparkles class="w-5 h-5 text-white" />
            </div>
            <div>
              <span class="text-xl font-black text-white tracking-tight">Relivo 睿沃</span>
              <p class="text-xs text-slate-400">現代化服務業排程與派工雲端平台 (SaaS)</p>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
            為實體門市與預約服務業量身打造的次世代智慧引擎。徹底告別傳統紙本與白板排班混亂，實現多約束自動求解、公平輪牌派工與即時營運大看板。
          </p>
          <div class="flex items-center space-x-3 pt-2">
            <span class="text-xs text-slate-400">台灣研發 · 專為在地連鎖門市與單店優化</span>
          </div>
        </div>

        <!-- Product Matrix -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">產業解決方案矩陣</h4>
          <ul class="space-y-2 text-xs">
            <li>
              <router-link to="/solutions/spa" class="text-brand-400 hover:text-white flex items-center space-x-1.5 font-bold">
                <span>💆 按摩養生館系統</span>
                <span class="text-[9px] px-1 bg-emerald-900/60 text-emerald-300 rounded">線上版</span>
              </router-link>
            </li>
            <li>
              <router-link to="/solutions/beauty" class="text-slate-400 hover:text-white flex items-center space-x-1.5">
                <span>💅 美容美甲沙龍</span>
                <span class="text-[9px] px-1 bg-amber-900/60 text-amber-300 rounded">預告</span>
              </router-link>
            </li>
            <li>
              <router-link to="/solutions/fitness" class="text-slate-400 hover:text-white">
                🧘 瑜珈健身團課排程
              </router-link>
            </li>
            <li>
              <router-link to="/solutions" class="text-brand-400 hover:underline pt-1 inline-block">
                全部矩陣規劃 &rarr;
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Core Features -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">核心引擎技術</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><a href="#features" class="hover:text-white">多維資源約束求解演算法</a></li>
            <li><a href="#features" class="hover:text-white">腳底 / 指壓雙軌自動公平輪牌</a></li>
            <li><a href="#features" class="hover:text-white">複合分段空間轉移排程</a></li>
            <li><a href="#features" class="hover:text-white">即時營運大看板與倒數計時</a></li>
            <li><a href="#features" class="hover:text-white">全裝置自適應響應式設計 (RWD)</a></li>
          </ul>
        </div>

        <!-- Contact & Legal -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-white uppercase tracking-wider">聯絡與諮詢</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li>客服專線：0800-888-999</li>
            <li>業務諮詢：sales@relivo.tw</li>
            <li>服務時間：週一至週五 09:30 ~ 18:30</li>
            <li>
              <router-link to="/contact" class="inline-block mt-2 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs">
                立即預約線上諮詢
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Relivo 睿沃 (Relivo Dispatch). 版權所有 All Rights Reserved.</p>
        <div class="flex items-center space-x-6">
          <a href="#" class="hover:text-slate-400">服務條款</a>
          <a href="#" class="hover:text-slate-400">隱私權政策</a>
          <a href="#" class="hover:text-slate-400">系統可用性狀態 (99.99%)</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Sparkles } from 'lucide-vue-next'
</script>
