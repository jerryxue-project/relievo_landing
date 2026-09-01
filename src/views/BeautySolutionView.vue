<template>
  <div class="py-12 sm:py-16 space-y-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-bold border border-pink-200">
          💅 即將推出 · 早鳥預約體驗
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Relievo Beauty 美容美甲沙龍<br /><span class="text-pink-600">設計師作品集預約與座位排班系統</span>
        </h1>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          針對美甲、美睫、紋繡與護膚沙龍量身打造。支援設計師個人作品集線上選單、座位與高階光療儀器排程，大幅降低棄單率。
        </p>
      </div>

      <!-- Feature Teasers -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
            🎨
          </div>
          <h3 class="font-bold text-slate-900 text-base">作品集款式即選即約</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            顧客在手機預約時可直接挑選款式難度與施作時長（單色 60分 / 造型手繪 90分 / 延甲加購），自動為美甲師保留精準時段。
          </p>
        </div>

        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
            🪑
          </div>
          <h3 class="font-bold text-slate-900 text-base">座位與儀器多重排程</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            美甲桌、美睫躺椅、獨立美容室與高階導入儀器多重資源自動防撞，同一設計師多項服務自動銜接。
          </p>
        </div>

        <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
            💳
          </div>
          <h3 class="font-bold text-slate-900 text-base">定金線上預收防放鳥</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            整合 LINE Pay 與信用卡定金扣款，自動推播前一日預約提醒，徹底解決沙龍門市臨時爽約困擾。
          </p>
        </div>
      </div>

      <!-- Early Access Box -->
      <div class="max-w-2xl mx-auto mt-12 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200 text-center space-y-4">
        <h3 class="text-lg font-bold text-pink-900">成為首批 Relievo Beauty 早鳥體驗店家</h3>
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
