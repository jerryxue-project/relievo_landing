<template>
  <div class="py-12 sm:py-16 space-y-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Title Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="px-4 py-1.5 rounded-full bg-blush-50 text-blush-700 text-xs font-bold border border-blush-200 shadow-xs inline-flex items-center space-x-1.5">
          <span>✂️💈</span>
          <span>即將推出 · 早鳥預約體驗</span>
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Relivo Beauty 美髮沙龍<br />
          <span class="text-blush-600">
            AI 智慧諮詢助理 · 設計師雙重確認 · 燙染空檔排班
          </span>
        </h1>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          專為專業美髮沙龍與髮藝工作室打造。內建「LINE 24H AI 諮詢助理」，自動完成前期髮況診斷、參考照分析與工時報價；搭配<strong>設計師 3 秒一鍵審核機制</strong>與燙染等待空檔智慧插單，翻椅產能極大化、溝通零負擔。
        </p>
      </div>

      <!-- AI Chatbot Interactive Workflow Showcase (Sleek Salon Dark-mode with Blush Pink Accents) -->
      <div class="mt-12 max-w-5xl mx-auto bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white shadow-xl space-y-8 relative">
        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div class="space-y-1">
            <div class="inline-flex items-center space-x-2 text-blush-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles class="w-4 h-4 text-blush-400" />
              <span>AI Front-end Assistant + Human in the Loop · 完美人機協作</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">「AI 初診整理 ＋ 設計師 3 秒確認」雙重把關流程</h3>
          </div>
          <span class="px-3.5 py-1.5 rounded-full bg-blush-500/20 text-blush-200 text-xs font-bold border border-blush-400/30 self-start md:self-auto flex items-center space-x-1.5 shadow-xs">
            <span>🛡️</span>
            <span>設計師 100% 最終掌控權</span>
          </span>
        </div>

        <!-- Chat Mockup & Designer Card Grid -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Left: Simulated LINE Chat Dialog -->
          <div class="lg:col-span-7 bg-slate-850/95 rounded-2xl p-4 sm:p-5 border border-slate-750 space-y-3.5 shadow-inner">
            <div class="flex items-center justify-between pb-2 border-b border-slate-700/80 text-xs text-slate-400 font-mono">
              <div class="flex items-center space-x-2">
                <div class="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-xs shadow-emerald-400/50"></div>
                <span class="text-slate-200 font-bold">LINE 官方帳號 · 24H 智慧接單中</span>
              </div>
              <span class="text-blush-300 font-semibold text-[11px]">1. AI 前置初診</span>
            </div>

            <!-- Chat bubbles -->
            <div class="space-y-3 text-xs sm:text-sm">
              <!-- Customer Bubble -->
              <div class="flex items-start justify-end space-x-2">
                <div class="bg-blush-500 text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%] space-y-1 shadow-sm font-medium">
                  <p>我想染這張照片的奶茶灰棕色，想約這週，大概多少錢？要做多久？📸 [附參考照片]</p>
                </div>
                <div class="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-200 flex-shrink-0 border border-slate-600">
                  客
                </div>
              </div>

              <!-- AI Assistant Response -->
              <div class="flex items-start space-x-2">
                <div class="w-7 h-7 rounded-full bg-blush-500 flex items-center justify-center text-xs text-white font-bold flex-shrink-0 shadow-xs">
                  AI
                </div>
                <div class="bg-slate-800 text-slate-100 p-3 rounded-2xl rounded-tl-xs max-w-[90%] space-y-2 border border-slate-700">
                  <p class="leading-relaxed">
                    ✨ 收到美照！這款需要進行 <strong>1 次溫和褪色 + 結構式護髮</strong> 才能呈現透亮感。請問您近 6 個月內有染過黑、開架泡泡染或漂髮嗎？
                  </p>
                </div>
              </div>

              <!-- Customer Bubble 2 -->
              <div class="flex items-start justify-end space-x-2">
                <div class="bg-blush-500 text-white p-2.5 rounded-2xl rounded-tr-xs max-w-[80%] shadow-sm font-medium">
                  <p>沒有染黑過，目前是深棕色～想約週四 14:00！</p>
                </div>
                <div class="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-200 flex-shrink-0 border border-slate-600">
                  客
                </div>
              </div>

              <!-- AI Booking Quote & Pending Confirmation -->
              <div class="flex items-start space-x-2">
                <div class="w-7 h-7 rounded-full bg-blush-500 flex items-center justify-center text-xs text-white font-bold flex-shrink-0 shadow-xs">
                  AI
                </div>
                <div class="bg-slate-800 text-slate-100 p-3 rounded-2xl rounded-tl-xs max-w-[90%] space-y-2 border border-blush-400/30">
                  <div class="text-blush-300 font-bold">📋 需求與工時已為您盤點完畢：</div>
                  <ul class="text-[11px] text-slate-300 space-y-0.5">
                    <li>• 及胸長髮 ｜ 客製奶茶灰染 + 褪色1次 + 剪髮 + 結構護</li>
                    <li>• 預估工時：<strong class="text-white">150 分鐘</strong> ｜ 預估費用：<strong class="text-blush-300 font-mono">NT$ 3,600 ~ 4,200</strong></li>
                  </ul>
                  <div class="pt-1.5 p-2 bg-slate-900/90 rounded-xl border border-blush-500/30 text-[11px] text-blush-200 flex items-center space-x-2">
                    <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0"></span>
                    <span>預約單已送交 <strong>Leo 總監</strong> 親自審核中，核准後立即通知您！</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Designer Pre-Consultation Review Card -->
          <div class="lg:col-span-5 space-y-4">
            <div class="bg-slate-800 p-5 rounded-2xl border border-blush-400/30 space-y-4 shadow-xl">
              <div class="flex items-center justify-between pb-3 border-b border-slate-700">
                <div class="flex items-center space-x-2">
                  <CheckCircle2 class="w-4 h-4 text-blush-400" />
                  <span class="text-xs font-bold text-white">2. 設計師手機推播 · 3秒審核卡</span>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold font-mono">待確認</span>
              </div>

              <div class="space-y-2.5 text-xs text-slate-300">
                <div class="flex justify-between">
                  <span class="text-slate-400">預約顧客：</span>
                  <span class="font-bold text-white">王小姐 (0912-***-456)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">指名時段：</span>
                  <span class="font-bold text-blush-300">本週四 14:00 ~ 16:30 (150分)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">自動安排：</span>
                  <span class="font-bold text-white">鏡位 #03 ｜ 沖水台 14:40 & 16:15</span>
                </div>
                <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700 text-[11px] text-slate-300">
                  <span class="text-blush-300 font-bold block mb-0.5">💡 AI 初診備註：</span>
                  及胸長髮、無染黑史、想染奶茶霧灰。15:00~15:45 等待上色期間已標記為空檔，可穿插 1 位剪髮客人！
                </div>

                <!-- Interactive 3-Second Action Buttons for Designer -->
                <div class="pt-2 border-t border-slate-700/80 space-y-2">
                  <div class="text-[11px] font-bold text-white flex items-center justify-between">
                    <span>👨‍🎨 設計師最後把關動作：</span>
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <button type="button" class="py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center space-x-1 shadow-sm cursor-pointer">
                      <span>✅ 確認接單 (成立預約)</span>
                    </button>
                    <button type="button" class="py-2.5 px-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs flex items-center justify-center space-x-1 cursor-pointer">
                      <span>✏️ 微調時間 / 報價</span>
                    </button>
                  </div>
                  <p class="text-[10px] text-slate-400 text-center">
                    設計師按確認後，系統自動發送「Leo 總監已親自確認預約」通知給客人
                  </p>
                </div>
              </div>
            </div>

            <div class="p-3 bg-slate-850/80 rounded-xl border border-blush-500/20 text-xs text-blush-200 space-y-1 shadow-xs">
              <span class="font-bold block text-blush-300">🚀 效益：</span>
              <span>AI 省去 15 分鐘繁瑣打字，設計師花 3 秒精準把關，雙方滿意度 100%。</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 Core Feature Teasers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        <!-- Feature 1: AI Chatbot + Designer Review -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border-2 border-blush-200/90 hover:border-blush-400 shadow-sm space-y-3 relative flex flex-col justify-between transition-all duration-300">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-blush-50 text-blush-600 flex items-center justify-center text-xl font-bold shadow-xs border border-blush-100">
              🤖
            </div>
            <div class="space-y-1">
              <div class="flex items-center space-x-1.5">
                <h3 class="font-extrabold text-slate-900 text-base">AI 初診 ＋ 設計師確認</h3>
                <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-blush-50 text-blush-700 font-bold border border-blush-200">雙重把關</span>
              </div>
              <p class="text-xs text-blush-600 font-bold">前期溝通省時 90%</p>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              AI 自動分析參考照、初診髮長、避開染黑漂髮地雷並算好工時，推播摘要讓設計師 3 秒一鍵核准，零糾紛。
            </p>
          </div>
        </div>

        <!-- Feature 2: Hair Gap Insertion -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-blush-300 transition-all">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-blush-50 text-blush-600 flex items-center justify-center text-xl font-bold shadow-xs border border-blush-100">
              ✂️
            </div>
            <div class="space-y-1">
              <h3 class="font-extrabold text-slate-900 text-base">剪染燙分段智慧插單</h3>
              <p class="text-xs text-blush-600 font-bold">翻椅產能極大化</p>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              燙染等待空檔（如靜置 45 分鐘）系統自動智慧排入快速洗剪，單一設計師多客平行施作、現場不塞車。
            </p>
          </div>
        </div>

        <!-- Feature 3: Hairstyles & Pricing Portfolio -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-blush-300 transition-all">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-blush-50 text-blush-600 flex items-center justify-center text-xl font-bold shadow-xs border border-blush-100">
              💇‍♀️
            </div>
            <div class="space-y-1">
              <h3 class="font-extrabold text-slate-900 text-base">髮型圖鑑與精準工時</h3>
              <p class="text-xs text-blush-600 font-bold">項目與鏡位精準鎖定</p>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              顧客線上直接挑選設計師髮型作品與項目（洗剪 45分 / 燙染 150分 / 護髮加購），自動依髮長精準鎖定工時與鏡位。
            </p>
          </div>
        </div>

        <!-- Feature 4: Seat & Equipment Solver -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-blush-300 transition-all">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-blush-50 text-blush-600 flex items-center justify-center text-xl font-bold shadow-xs border border-blush-100">
              💺
            </div>
            <div class="space-y-1">
              <h3 class="font-extrabold text-slate-900 text-base">鏡位、沖水台與烘罩防撞</h3>
              <p class="text-xs text-blush-600 font-bold">多設施資源自動約束</p>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              剪髮鏡位、洗頭沖水台、蒸氣加熱機與溫塑燙儀器多資源即時防衝突，避免多位設計師搶設施的尷尬。
            </p>
          </div>
        </div>
      </div>

      <!-- Early Access Box (Soft Blush Pink Solid) -->
      <div class="max-w-2xl mx-auto mt-12 bg-blush-50 rounded-3xl p-8 sm:p-10 border border-blush-200 text-center space-y-4 shadow-sm">
        <h3 class="text-xl sm:text-2xl font-black text-slate-900">搶先成為首批 Relivo Beauty 美髮沙龍早鳥體驗店家</h3>
        <p class="text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
          搶先登記的美髮沙龍與髮型設計師工作室，將享有上線首半年 5 折優惠，並由產品團隊提供專屬客製化 LINE AI 諮詢助理設定與 1 對 1 導入支援。
        </p>
        <div class="pt-2">
          <router-link
            to="/contact"
            class="inline-block px-8 py-4 rounded-2xl bg-blush-500 hover:bg-blush-600 text-white font-extrabold text-sm sm:text-base shadow-md shadow-blush-500/20 transition-all transform active:scale-95"
          >
            立即搶先登記美髮早鳥名額 &rarr;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Sparkles, CheckCircle2 } from 'lucide-vue-next'
</script>
