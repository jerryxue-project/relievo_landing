<template>
  <div class="py-12 sm:py-16 space-y-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-bold border border-pink-200">
          ✂️💅 即將推出 · 早鳥預約體驗
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Relivo Beauty 美髮美甲沙龍<br /><span class="text-pink-600">設計師作品預約、燙染空檔與座位排程系統</span>
        </h1>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          專為美髮沙龍與美甲工作室量身打造。支援剪染燙跨時段分工（靜置等待時穿插剪髮）、作品集線上選款、洗頭沖水台與美甲座位防撞排程，徹底告別預約塞車與客人久候。
        </p>
      </div>

      <!-- Feature Teasers -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
            ✂️
          </div>
          <h3 class="font-bold text-slate-900 text-base">美髮剪染燙分段智慧排班</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            燙髮/染髮等待空檔（如靜置 45 分鐘）系統自動智慧排入快速剪洗，單一設計師翻椅產能最大化、現場不塞車。
          </p>
        </div>

        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
            💅
          </div>
          <h3 class="font-bold text-slate-900 text-base">美甲作品圖鑑即選即約</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            顧客線上預約直接挑選款式難度（單色 60 分 / 手繪 90 分 / 卸甲加購），自動為美甲師精準鎖定座位與施作工時。
          </p>
        </div>

        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
            💺
          </div>
          <h3 class="font-bold text-slate-900 text-base">沖水台、儀器與美甲桌防撞</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            剪髮鏡位、洗頭沖水區、蒸氣烘罩機與美甲桌多資源即時防衝突，避免多位設計師搶同一台儀器或座位的尷尬。
          </p>
        </div>
      </div>

      <!-- Early Access Box -->
      <div class="max-w-2xl mx-auto mt-12 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200 text-center space-y-4">
        <h3 class="text-lg font-bold text-pink-900">成為首批 Relivo Beauty 早鳥體驗店家</h3>
        <p class="text-xs text-pink-800 max-w-lg mx-auto">
          搶先登記的店家將享有上線首半年 5 折優惠，並由產品團隊提供專屬客製化功能與 1 對 1 導入支援。
        </p>
        <div class="pt-2">
          <router-link
            to="/contact"
            class="inline-block px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs shadow-lg shadow-pink-600/30"
          >
            立即搶先登記早鳥名額 &rarr;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
