<template>
  <div class="py-12 sm:py-16 space-y-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
          🏥 規劃擴充中 · 醫療與復健方案
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Relievo Clinic 物理治療與自費診所<br /><span class="text-blue-600">治療師與專屬診療室智慧預約排程</span>
        </h1>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          針對徒手物理治療所、運動復健診所與自費醫美門診設計。自動排程治療師時段、專屬診療室與高階震波/雷射儀器。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">
            🩺
          </div>
          <h3 class="font-bold text-slate-900 text-base">自費療程分段排程</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            初診評估 30 分 + 徒手治療 60 分 + 儀器電療 20 分，演算法自動銜接各階段空間與儀器排程。
          </p>
        </div>

        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">
            🔒
          </div>
          <h3 class="font-bold text-slate-900 text-base">個資隱私與病歷註記</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            符合醫療隱私標準的加密資料存儲，支援治療師於預約單內記載患處部位與歷次復健進度。
          </p>
        </div>

        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">
            📈
          </div>
          <h3 class="font-bold text-slate-900 text-base">治療師業績與利用率報表</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            統計各治療師工時、各治療室使用率與回診留存率，為診所經營者提供精準營運決策數據。
          </p>
        </div>
      </div>

      <div class="text-center pt-8">
        <router-link
          to="/contact"
          class="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
        >
          諮詢診所客製化導入方案 &rarr;
        </router-link>
      </div>
    </div>
  </div>
</template>
