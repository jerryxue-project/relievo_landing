<template>
  <div class="py-12 sm:py-16 space-y-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
          🧘 規劃擴充中 · 瑜珈健身方案
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Relievo Studio 瑜珈健身工作室<br /><span class="text-indigo-600">團體課程與教練私教智慧排課系統</span>
        </h1>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          針對瑜珈、皮拉提斯、空中瑜珈與器械健身工作室設計。支援團課名額上限控管、候補名單自動遞補、教練私教與教室資源排班。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold">
            👥
          </div>
          <h3 class="font-bold text-slate-900 text-base">團課名額與候補遞補</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            設定每堂課最大學員上限，滿班自動開啟候補名單。有人取消時，系統自動依順位透過 LINE 即時通知遞補。
          </p>
        </div>

        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold">
            🏋️
          </div>
          <h3 class="font-bold text-slate-900 text-base">皮拉提斯核心床位管理</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            器械皮拉提斯（Reformer）床位數量限制與教練時段同步綁定，杜絕超賣或器械閒置。
          </p>
        </div>

        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl font-bold">
            🎟️
          </div>
          <h3 class="font-bold text-slate-900 text-base">扣堂點數與票券核銷</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            學員預約時自動核算堂數餘額，上課掃碼或手機報到自動扣點，教練拆帳鐘點費自動結算。
          </p>
        </div>
      </div>

      <div class="text-center pt-8">
        <router-link
          to="/contact"
          class="inline-block px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/30"
        >
          留下聯絡方式，優先取得搶先體驗資格 &rarr;
        </router-link>
      </div>
    </div>
  </div>
</template>
