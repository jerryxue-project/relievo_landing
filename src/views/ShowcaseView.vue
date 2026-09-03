<template>
  <div class="py-10 sm:py-16 space-y-16 bg-slate-50/60 min-h-screen">
    <!-- Top Pitch Deck Header (專為業務向業主介紹打造) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-br from-slate-900 via-brand-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
        <!-- Radiant Accent Background Glow -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-4xl space-y-6">
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-bold">
            <Briefcase class="w-3.5 h-3.5" />
            <span>💼 業務向業主介紹專用 · 系統全貌與功能演示</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Relivo 睿沃<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-teal-200 to-indigo-200">
              全方位店務排程中樞 · 系統完整樣貌
            </span>
          </h1>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            本頁面專供業務團隊向按摩養生館老闆、店長現場展示系統操作全貌。
            包含即時營運大盤、智慧甘特排程、師傅公平輪牌、3秒快速雷達與多約束派工演算法。
          </p>

          <!-- Quick Action Buttons -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-400 hover:to-indigo-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-brand-500/30 flex items-center space-x-2 transition-all transform active:scale-95 cursor-pointer"
            >
              <ExternalLink class="w-4 h-4" />
              <span>🚀 立即開啟真實管理後台 Demo</span>
            </a>

            <button
              type="button"
              @click="isLeadModalOpen = true"
              class="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer flex items-center space-x-2"
            >
              <CalendarCheck class="w-4 h-4 text-brand-300" />
              <span>預約專人到店安裝與輔導</span>
            </button>
          </div>

          <!-- 4 Core Boss Metrics -->
          <div class="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-800/80">
            <div class="p-3 bg-white/5 rounded-2xl border border-white/10">
              <div class="text-xl sm:text-2xl font-black text-brand-300 font-mono">+35%</div>
              <div class="text-xs text-slate-300 font-bold mt-0.5">空間翻床率提升</div>
              <div class="text-[10px] text-slate-400">套餐自動換床不卡關</div>
            </div>

            <div class="p-3 bg-white/5 rounded-2xl border border-white/10">
              <div class="text-xl sm:text-2xl font-black text-emerald-400 font-mono">0 爭議</div>
              <div class="text-xs text-slate-300 font-bold mt-0.5">師傅輪牌公信力</div>
              <div class="text-[10px] text-slate-400">系統自動排隊不偏心</div>
            </div>

            <div class="p-3 bg-white/5 rounded-2xl border border-white/10">
              <div class="text-xl sm:text-2xl font-black text-teal-300 font-mono">&lt; 3 秒</div>
              <div class="text-xs text-slate-300 font-bold mt-0.5">電話空位秒查</div>
              <div class="text-[10px] text-slate-400">免看白板、免心算</div>
            </div>

            <div class="p-3 bg-white/5 rounded-2xl border border-white/10">
              <div class="text-xl sm:text-2xl font-black text-amber-300 font-mono">10 分鐘</div>
              <div class="text-xs text-slate-300 font-bold mt-0.5">新人櫃檯上手</div>
              <div class="text-[10px] text-slate-400">iPad 開啟隨即使用</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 1. Real System Live Mockup Full Showcase -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            <Laptop class="w-3.5 h-3.5" />
            <span>實機功能畫面切換</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            一體化門市管理後台介面
          </h2>
          <p class="text-xs sm:text-sm text-slate-500">
            點選下方分頁標籤，即時檢視儀表板、甘特排程、師傅輪牌、新增預約與各項店務管理畫面
          </p>
        </div>

        <a
          href="http://localhost:5173"
          target="_blank"
          class="inline-flex items-center space-x-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-300 shadow-2xs transition-all"
        >
          <span>在新分頁開啟全螢幕 Demo</span>
          <ExternalLink class="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      <AppLiveMockupPreview />
    </section>

    <!-- 2. Interactive Constraint Solver Sandbox -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center max-w-3xl mx-auto space-y-2">
        <div class="inline-flex items-center space-x-2 text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          <Cpu class="w-3.5 h-3.5" />
          <span>核心排程演算法現場演示</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          現場測試：0.05 秒多約束排程算力
        </h2>
        <p class="text-xs sm:text-sm text-slate-500">
          業務可現場讓業主輸入任意人數、複合項目（腳底+指壓）與指定師傅條件，親眼見證演算法即時運算
        </p>
      </div>

      <InteractiveSchedulerDemo />
    </section>

    <!-- 3. 6 Core Deep Modules Matrix for Business Pitch -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center max-w-3xl mx-auto space-y-2">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          6 大核心模組 · 業務向業主深潛解說矩陣
        </h2>
        <p class="text-xs sm:text-sm text-slate-500">
          逐一擊破養生館經營中最耗損人力、最常發生衝突的環節
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Module 1 -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-brand-300 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-bold">
            <Zap class="w-6 h-6" />
          </div>
          <h3 class="text-base font-black text-slate-900">1. ⚡ 3 秒電話空位與時段雷達</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            客人來電詢問「現在有 2 個人可以做嗎？」，櫃檯免問客人電話個資，點兩下 3 秒回報有無空位。若目前客滿，雷達自動算出「最快 15:15 有空檔，需等 20 分」，一秒轉為正式預約。
          </p>
          <div class="bg-amber-50/70 p-3 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 space-y-1">
            <span class="font-bold block">💡 業主效益：</span>
            <span>電話應對時間從 2 分鐘縮短至 15 秒，不漏接任何過路客與電話單。</span>
          </div>
        </div>

        <!-- Module 2 -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-brand-300 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 border border-brand-200 flex items-center justify-center font-bold">
            <Layers class="w-6 h-6" />
          </div>
          <h3 class="text-base font-black text-slate-900">2. 🔄 跨床椅分段轉場派工</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            針對「腳底 45分 + 全身指壓 60分」熱門雙享套餐，系統自動將前半段排在腳底沙發椅、後半段無縫轉移至包廂指壓床，並保證同位師傅一按到底。
          </p>
          <div class="bg-brand-50/70 p-3 rounded-xl border border-brand-200/80 text-[11px] text-brand-900 space-y-1">
            <span class="font-bold block">💡 業主效益：</span>
            <span>徹底釋放包廂指壓床空檔，不再讓客人全程佔著大床洗腳，店面翻床率提升 35% 以上。</span>
          </div>
        </div>

        <!-- Module 3 -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-brand-300 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-bold">
            <Users class="w-6 h-6" />
          </div>
          <h3 class="text-base font-black text-slate-900">3. ⚖️ 雙軌獨立公平輪牌順位</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            「腳底輪牌」與「指壓/油推輪牌」獨立隊列，師傅上班刷卡打卡自動進佇列、施作完畢自動回隊尾，完美支援「勞點指定」、「指定女師」、「指定男師」例外抽牌機制。
          </p>
          <div class="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200/80 text-[11px] text-emerald-900 space-y-1">
            <span class="font-bold block">💡 業主效益：</span>
            <span>杜絕「櫃檯偏心特定師傅」、「偷換單爭議」，建立公信透明的排單制度，留住優秀資深師傅。</span>
          </div>
        </div>

        <!-- Module 4 -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-brand-300 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center font-bold">
            <Clock class="w-6 h-6" />
          </div>
          <h3 class="text-base font-black text-slate-900">4. 📊 智慧甘特時段排程大看板</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            以 15 分鐘為顆粒度的彩色甘特圖，橫軸為時間軸，縱軸依序展示「單人包廂」、「VIP雙人房」、「腳底沙發區」。一秒掌握全店當日所有床位佔用與空檔。
          </p>
          <div class="bg-indigo-50/70 p-3 rounded-xl border border-indigo-200/80 text-[11px] text-indigo-900 space-y-1">
            <span class="font-bold block">💡 業主效益：</span>
            <span>告別手寫白板與立可帶塗改，無論是電話改期或現場加節，拖拉點選立即更新全店看板。</span>
          </div>
        </div>

        <!-- Module 5 -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-brand-300 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center font-bold">
            <TrendingUp class="w-6 h-6" />
          </div>
          <h3 class="text-base font-black text-slate-900">5. 💰 一鍵結帳、分段抽成與營收結算</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            支援現金、LINE Pay、刷卡、會員儲值扣卡。完工結帳後自動按師傅抽成趴數（例如 5/5、6/4 拆帳）即時計算技師業績與點工節數，日結月結 1 秒產出報表。
          </p>
          <div class="bg-teal-50/70 p-3 rounded-xl border border-teal-200/80 text-[11px] text-teal-900 space-y-1">
            <span class="font-bold block">💡 業主效益：</span>
            <span>月底不再需要會計花 3 天人工作帳核對簽單，薪資獎金清清楚楚零糾紛。</span>
          </div>
        </div>

        <!-- Module 6 -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-brand-300 transition-all">
          <div class="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-bold">
            <Smartphone class="w-6 h-6" />
          </div>
          <h3 class="text-base font-black text-slate-900">6. 📱 平板/手機/電視螢幕全端自適應</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            純雲端 SaaS 架構，免買昂貴專用 POS 主機。櫃檯用 iPad，休息室放 50 吋電視當輪牌大螢幕，老闆人在外地用手機也能即時查看今日營業額與現場床位。
          </p>
          <div class="bg-purple-50/70 p-3 rounded-xl border border-purple-200/80 text-[11px] text-purple-900 space-y-1">
            <span class="font-bold block">💡 業主效益：</span>
            <span>硬體成本直省 80%，全自動雲端即時同步，店面斷網備份自動續傳。</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Rapid 3-Step Onboarding Plan -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <div class="inline-flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck class="w-3.5 h-3.5" />
            <span>無痛快速導入保障</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            最快當天即可完成導入上線
          </h2>
          <p class="text-xs sm:text-sm text-slate-500">
            由 Relivo 專屬顧問協助店內床位編號、師傅名冊與服務價目建置，櫃檯無痛接軌
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
            <div class="w-9 h-9 rounded-xl bg-brand-600 text-white font-mono font-black flex items-center justify-center text-sm">
              01
            </div>
            <h4 class="font-black text-slate-900 text-sm">基礎資料匯入 (10分鐘)</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              專人協助建立店內設施（幾張腳底沙發、幾張包廂床）、師傅編號專長與服務項目價目表。
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
            <div class="w-9 h-9 rounded-xl bg-indigo-600 text-white font-mono font-black flex items-center justify-center text-sm">
              02
            </div>
            <h4 class="font-black text-slate-900 text-sm">櫃檯人員 15 分鐘實機培訓</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              透過直覺化卡片介面，櫃檯人員學會快速查位、新增預約、打卡輪牌與點擊結帳。
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
            <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white font-mono font-black flex items-center justify-center text-sm">
              03
            </div>
            <h4 class="font-black text-slate-900 text-sm">正式上線與 14 天免費保障</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              全面上線運作，專屬線上技術顧問即時待命，試用期間不滿意隨時全額退費。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Action Pitch CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-brand-600 via-indigo-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-6">
        <h2 class="text-2xl sm:text-4xl font-black tracking-tight">
          立即為門市預約一對一專人實機演示
        </h2>
        <p class="text-brand-100 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
          我們的專業顧問將攜帶 iPad 親臨您的養生會館，現場以您的店內配置進行完整流程實測！
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            @click="isLeadModalOpen = true"
            class="px-8 py-3.5 rounded-2xl bg-white text-brand-700 hover:bg-brand-50 font-black text-sm shadow-xl transition-all transform active:scale-95 cursor-pointer"
          >
            填表預約專人到店演示
          </button>
          <a
            href="http://localhost:5173"
            target="_blank"
            class="px-6 py-3.5 rounded-2xl bg-brand-800/80 hover:bg-brand-800 text-white font-bold text-sm border border-brand-400/40"
          >
            直接開啟線上管理後台 Demo
          </a>
        </div>
      </div>
    </section>

    <!-- Lead Capture Modal -->
    <LeadCaptureModal :is-open="isLeadModalOpen" @close="isLeadModalOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Briefcase,
  ExternalLink,
  CalendarCheck,
  Laptop,
  Cpu,
  Zap,
  Layers,
  Users,
  Clock,
  TrendingUp,
  Smartphone,
  ShieldCheck
} from 'lucide-vue-next'
import AppLiveMockupPreview from '../components/AppLiveMockupPreview.vue'
import InteractiveSchedulerDemo from '../components/InteractiveSchedulerDemo.vue'
import LeadCaptureModal from '../components/LeadCaptureModal.vue'

const isLeadModalOpen = ref(false)
</script>
