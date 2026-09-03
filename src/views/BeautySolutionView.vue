<template>
  <div class="py-12 sm:py-16 space-y-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Top Title Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-pink-50 text-pink-700 text-xs font-bold border border-pink-200 shadow-xs inline-flex items-center space-x-1.5">
          <span>✂️💅</span>
          <span>即將推出 · 早鳥預約體驗</span>
        </span>
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Relivo Beauty 美髮美甲沙龍<br />
          <span class="text-pink-600">AI 智慧諮詢助理 · 燙染空檔排班 · 設施自動防撞</span>
        </h1>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
          專為美髮沙龍與美甲工作室打造。內建「LINE 24H AI 諮詢助理」，自動完成前期髮況診斷、參考照分析與工時報價，減少 80% 設計師手動訊息干預；搭配剪染燙等待空檔智慧插單與座位排程，產能翻倍不塞車。
        </p>
      </div>

      <!-- AI Chatbot Interactive Workflow Showcase -->
      <div class="mt-12 max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-slate-900 to-pink-950 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white shadow-2xl space-y-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div class="space-y-1">
            <div class="inline-flex items-center space-x-2 text-pink-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles class="w-4 h-4 text-pink-400" />
              <span>AI Front-end Assistant · 前期溝通零人工干預</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-white">美髮專屬「LINE AI 智慧諮詢助理」運作流程</h3>
          </div>
          <span class="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-400/30 self-start md:self-auto">
            ⚡ 設計師免放下剪刀秒回
          </span>
        </div>

        <!-- Chat Mockup & Designer Card Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Left: Simulated LINE Chat Dialog -->
          <div class="lg:col-span-7 bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-slate-700/80 space-y-3.5 shadow-inner">
            <div class="flex items-center justify-between pb-2 border-b border-slate-700 text-xs text-slate-400 font-mono">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span class="text-slate-200 font-bold">LINE 官方帳號 · 24H 智慧接單中</span>
              </div>
              <span>AI 諮詢模式</span>
            </div>

            <!-- Chat bubbles -->
            <div class="space-y-3 text-xs sm:text-sm">
              <!-- Customer Bubble -->
              <div class="flex items-start justify-end space-x-2">
                <div class="bg-pink-600 text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%] space-y-1 shadow-sm">
                  <p>我想染這張照片的奶茶灰棕色，想約這週，大概多少錢？要做多久？📸 [附參考照片]</p>
                </div>
                <div class="w-7 h-7 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-200 flex-shrink-0">
                  客
                </div>
              </div>

              <!-- AI Assistant Response -->
              <div class="flex items-start space-x-2">
                <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-xs text-white font-bold flex-shrink-0">
                  AI
                </div>
                <div class="bg-slate-700/90 text-slate-100 p-3 rounded-2xl rounded-tl-xs max-w-[90%] space-y-2 border border-slate-600/60">
                  <p class="leading-relaxed">
                    ✨ 收到美照！這款需要進行 <strong>1 次溫和褪色 + 結構式護髮</strong> 才能呈現透亮感。請問您近 6 個月內有染過黑、開架泡泡染或漂髮嗎？
                  </p>
                </div>
              </div>

              <!-- Customer Bubble 2 -->
              <div class="flex items-start justify-end space-x-2">
                <div class="bg-pink-600 text-white p-2.5 rounded-2xl rounded-tr-xs max-w-[80%] shadow-sm">
                  <p>沒有染黑過，目前是深棕色～</p>
                </div>
                <div class="w-7 h-7 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-200 flex-shrink-0">
                  客
                </div>
              </div>

              <!-- AI Booking Quote & Smart Slot -->
              <div class="flex items-start space-x-2">
                <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-xs text-white font-bold flex-shrink-0">
                  AI
                </div>
                <div class="bg-slate-700/90 text-slate-100 p-3 rounded-2xl rounded-tl-xs max-w-[90%] space-y-2 border border-pink-500/40">
                  <div class="text-pink-300 font-bold">📋 智慧初診診斷完成：</div>
                  <ul class="text-[11px] text-slate-300 space-y-1">
                    <li>• 髮長預估：及胸長髮 (Long)</li>
                    <li>• 建議項目：客製奶茶灰染 + 褪色1次 + 剪髮 + 結構護</li>
                    <li>• 精準工時：<strong class="text-white">150 分鐘</strong>（自動為設計師鎖定空檔）</li>
                    <li>• 預估費用：<strong class="text-pink-300 font-mono">NT$ 3,600 ~ 4,200</strong></li>
                  </ul>
                  <div class="pt-1 text-[11px] text-slate-200">
                    👑 設計師 Leo 本週最佳空檔：
                    <div class="flex gap-1.5 mt-1.5">
                      <span class="bg-pink-500/30 text-pink-200 px-2 py-1 rounded-lg border border-pink-400/40 font-bold">週四 14:00</span>
                      <span class="bg-slate-600 text-slate-300 px-2 py-1 rounded-lg">週五 15:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Designer Pre-Consultation Summary Card -->
          <div class="lg:col-span-5 space-y-4">
            <div class="bg-gradient-to-b from-slate-800 to-slate-850 p-5 rounded-2xl border border-pink-500/30 space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-slate-700">
                <div class="flex items-center space-x-2">
                  <CheckCircle2 class="w-4 h-4 text-emerald-400" />
                  <span class="text-xs font-bold text-white">設計師行前 30 秒簡報卡</span>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono">已收定金</span>
              </div>

              <div class="space-y-2.5 text-xs text-slate-300">
                <div class="flex justify-between">
                  <span class="text-slate-400">預約顧客：</span>
                  <span class="font-bold text-white">王小姐 (0912-***-456)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">指名設計師：</span>
                  <span class="font-bold text-pink-300">Leo 總監</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">時段與鏡位：</span>
                  <span class="font-bold text-white">週四 14:00 ~ 16:30 (鏡位 #03)</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">沖水台需求：</span>
                  <span class="font-bold text-teal-300">14:40 & 16:15 (已預留)</span>
                </div>
                <div class="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700 text-[11px] text-slate-300">
                  <span class="text-pink-400 font-bold block mb-0.5">💡 AI 備註：</span>
                  顧客及胸髮長、無染黑史、想染奶茶霧灰。已預留 150 分鐘，15:00~15:45 等待上色期間可穿插 1 位快速剪髮！
                </div>
              </div>
            </div>

            <div class="p-3 bg-pink-950/40 rounded-xl border border-pink-500/20 text-xs text-pink-200 space-y-1">
              <span class="font-bold block">🚀 效益：</span>
              <span>設計師專注現場手藝，AI 自動把關客人需求與排程工時，0 認知落差。</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 4 Core Feature Teasers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        <!-- Feature 1: AI Chatbot -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border-2 border-pink-400/80 shadow-lg shadow-pink-500/10 space-y-3 relative flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold shadow-xs">
              🤖
            </div>
            <div class="space-y-1">
              <div class="flex items-center space-x-1.5">
                <h3 class="font-extrabold text-slate-900 text-base">LINE AI 智慧諮詢助理</h3>
                <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-pink-100 text-pink-800 font-bold">核心亮點</span>
              </div>
              <p class="text-xs text-pink-600 font-bold">前期溝通零人工干預</p>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              自動分析參考照、初診髮長、避開染黑漂髮地雷、預估精準施作時間與價格，免設計師停下手邊工作手動回訊。
            </p>
          </div>
        </div>

        <!-- Feature 2: Hair Gap Insertion -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-pink-300 transition-all">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
              ✂️
            </div>
            <div class="space-y-1">
              <h3 class="font-extrabold text-slate-900 text-base">美髮剪染燙分段智慧插單</h3>
              <p class="text-xs text-pink-600 font-bold">翻椅產能極大化</p>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              燙染等待空檔（如靜置 45 分鐘）系統自動智慧排入快速洗剪，單一設計師多客平行施作、現場不塞車。
            </p>
          </div>
        </div>

        <!-- Feature 3: Nail Styles -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-pink-300 transition-all">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
              💅
            </div>
            <div class="space-y-1">
              <h3 class="font-extrabold text-slate-900 text-base">美甲作品圖鑑即選即約</h3>
              <p class="text-xs text-pink-600 font-bold">款式與工時精準鎖定</p>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              顧客線上直接挑選款式難度（單色 60 分 / 手繪 90 分 / 卸甲加購），自動為美甲師鎖定美甲桌與施作時間。
            </p>
          </div>
        </div>

        <!-- Feature 4: Seat & Equipment Solver -->
        <div class="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-pink-300 transition-all">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-xl font-bold">
              💺
            </div>
            <div class="space-y-1">
              <h3 class="font-extrabold text-slate-900 text-base">沖水台、烘罩與美甲桌防撞</h3>
              <p class="text-xs text-pink-600 font-bold">多設施資源自動約束</p>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              剪髮鏡位、洗頭沖水台、蒸氣加熱機與美甲桌多資源即時防衝突，避免多位設計師搶儀器的尷尬。
            </p>
          </div>
        </div>
      </div>

      <!-- Early Access Box -->
      <div class="max-w-2xl mx-auto mt-12 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200 text-center space-y-4 shadow-sm">
        <h3 class="text-lg sm:text-xl font-black text-pink-950">搶先成為首批 Relivo Beauty 早鳥體驗店家</h3>
        <p class="text-xs sm:text-sm text-pink-800 max-w-lg mx-auto leading-relaxed">
          搶先登記的美髮沙龍與美甲工作室，將享有上線首半年 5 折優惠，並由產品團隊提供專屬客製化 LINE AI 諮詢助理設定與 1 對 1 導入支援。
        </p>
        <div class="pt-2">
          <router-link
            to="/contact"
            class="inline-block px-8 py-3.5 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-extrabold text-sm shadow-xl shadow-pink-600/30 transition-all transform active:scale-95"
          >
            立即搶先登記美髮美甲早鳥名額 &rarr;
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Sparkles, CheckCircle2 } from 'lucide-vue-next'
</script>
