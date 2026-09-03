<template>
  <div class="relative max-w-7xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
    <!-- Browser Mockup Header Bar -->
    <div class="bg-slate-100/90 border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
      <!-- Window Dots -->
      <div class="flex items-center space-x-2">
        <span class="w-3 h-3 rounded-full bg-rose-400"></span>
        <span class="w-3 h-3 rounded-full bg-amber-400"></span>
        <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
        <div class="hidden sm:flex items-center space-x-1.5 ml-3 bg-white px-3 py-1 rounded-lg border border-slate-200 text-[11px] font-mono text-slate-600 shadow-xs">
          <Lock class="w-3 h-3 text-emerald-600" />
          <span>https://app.relivo.tw/dashboard</span>
          <span class="text-slate-300">|</span>
          <span class="text-brand-600 font-bold">Relivo 睿沃 v2.0</span>
        </div>
      </div>

      <!-- Interactive View Switcher Tabs (Mobile Touch Friendly) -->
      <div class="flex items-center space-x-1 bg-slate-200/80 p-1 rounded-xl text-xs font-bold overflow-x-auto max-w-full scrollbar-none">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          @click="activeTab = tab.id"
          class="px-2.5 sm:px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer whitespace-nowrap flex-shrink-0"
          :class="activeTab === tab.id ? 'bg-white text-brand-700 shadow-xs font-extrabold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'"
        >
          <component :is="tab.icon" class="w-3.5 h-3.5 flex-shrink-0" />
          <span>{{ tab.label }}</span>
        </button>
      </div>

      <!-- Top CTA in mock -->
      <a
        href="http://localhost:5173"
        target="_blank"
        class="hidden md:inline-flex items-center space-x-1 text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-2.5 py-1.5 rounded-lg border border-brand-200 transition-colors"
      >
        <span>進入真實後台</span>
        <ExternalLink class="w-3 h-3" />
      </a>
    </div>

    <!-- Inner Application Canvas (Style C - Modern SaaS Clean) -->
    <div class="bg-slate-50 p-3.5 sm:p-7 min-h-[480px] sm:min-h-[540px]">
      <!-- 1. TAB: Dashboard Live View -->
      <div v-if="activeTab === 'dashboard'" class="space-y-6 animate-fadeIn">
        <!-- Top App Navbar Mockup -->
        <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center shadow-md shadow-brand-500/25">
              <Sparkles class="w-5 h-5 text-white" />
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <span class="font-extrabold text-base text-slate-900 tracking-tight">Relivo 睿沃</span>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-semibold border border-brand-200">v2.0 SaaS 智慧排程</span>
              </div>
              <p class="text-[11px] text-slate-500">現代化按摩預約與智慧派工系統</p>
            </div>
          </div>

          <div class="flex items-center space-x-3">
            <div class="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
              <Clock class="w-3.5 h-3.5 text-brand-600" />
              <span>今日即時營運 14:28:45</span>
            </div>
            <button
              @click="activeTab = 'booking'"
              class="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-600/20 flex items-center space-x-1.5 cursor-pointer"
            >
              <PlusCircle class="w-4 h-4" />
              <span>+ 新增預約 (15分間隔)</span>
            </button>
          </div>
        </div>

        <!-- KPI Metrics Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card space-y-1">
            <div class="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>今日預約總數</span>
              <CalendarCheck class="w-4 h-4 text-brand-600" />
            </div>
            <div class="text-2xl font-black text-slate-900 font-mono">18 <span class="text-xs font-normal text-slate-500">組</span></div>
            <div class="text-[11px] text-emerald-600 font-semibold">比昨日同期 +22%</div>
          </div>

          <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card space-y-1">
            <div class="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>正在施作中</span>
              <Activity class="w-4 h-4 text-emerald-600" />
            </div>
            <div class="text-2xl font-black text-emerald-600 font-mono">5 <span class="text-xs font-normal text-slate-500">位客人</span></div>
            <div class="text-[11px] text-slate-500 font-semibold">佔用 5 床 / 2 腳底椅</div>
          </div>

          <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card space-y-1">
            <div class="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>待報到顧客</span>
              <Clock class="w-4 h-4 text-amber-600" />
            </div>
            <div class="text-2xl font-black text-amber-600 font-mono">3 <span class="text-xs font-normal text-slate-500">組</span></div>
            <div class="text-[11px] text-amber-700 font-semibold">最近一組於 14:45 到店</div>
          </div>

          <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card space-y-1">
            <div class="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>今日預估營業額</span>
              <span class="text-xs font-bold text-brand-600">NTD</span>
            </div>
            <div class="text-2xl font-black text-brand-600 font-mono">$38,600</div>
            <div class="text-[11px] text-emerald-600 font-semibold">翻床率指標 88.5%</div>
          </div>
        </div>

        <!-- In-Progress Live Countdown Cards -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold text-slate-900 flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>現場施作中即時倒數計時看板 (Active In-Progress)</span>
            </h3>
            <span class="text-xs text-slate-500 font-medium">秒級動態進度同步</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Card 1: 08号 佳玲 (Combo Staged) -->
            <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card space-y-3 relative overflow-hidden">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-900">王小姐 (2位同行)</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  施作中 (後段指壓)
                </span>
              </div>
              <div class="text-xs space-y-1 text-slate-600">
                <div>項目：<span class="font-bold text-slate-900">招牌超值套餐 (90分)</span></div>
                <div>師傅：<span class="font-bold text-brand-700">08號 佳玲師傅 (女師)</span></div>
                <div>空間：<span class="font-bold text-slate-900">VIP 雙人包廂床 #02</span></div>
              </div>
              <!-- Progress Bar & Timer -->
              <div class="space-y-1 pt-1">
                <div class="flex justify-between text-xs font-mono">
                  <span class="text-slate-500 text-[11px]">進度 68%</span>
                  <span class="font-bold text-emerald-600">剩餘 24 分鐘</span>
                </div>
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-brand-500 to-emerald-500 h-full w-[68%] rounded-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-end space-x-2 pt-1">
                <button class="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200">
                  +15分延時
                </button>
                <button class="px-3 py-1 text-xs rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700">
                  完工結帳 (自動歸底)
                </button>
              </div>
            </div>

            <!-- Card 2: 05号 阿豪 (Body 60) -->
            <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card space-y-3 relative overflow-hidden">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-900">李先生</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  施作中
                </span>
              </div>
              <div class="text-xs space-y-1 text-slate-600">
                <div>項目：<span class="font-bold text-slate-900">全身經絡指壓 (60分)</span></div>
                <div>師傅：<span class="font-bold text-brand-700">05號 阿豪師傅 (男師)</span></div>
                <div>空間：<span class="font-bold text-slate-900">單人包廂床 #01</span></div>
              </div>
              <div class="space-y-1 pt-1">
                <div class="flex justify-between text-xs font-mono">
                  <span class="text-slate-500 text-[11px]">進度 42%</span>
                  <span class="font-bold text-emerald-600">剩餘 35 分鐘</span>
                </div>
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-brand-500 to-emerald-500 h-full w-[42%] rounded-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-end space-x-2 pt-1">
                <button class="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200">
                  +15分延時
                </button>
                <button class="px-3 py-1 text-xs rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700">
                  完工結帳
                </button>
              </div>
            </div>

            <!-- Card 3: 02号 淑芬 (Foot 45) -->
            <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card space-y-3 relative overflow-hidden">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-900">陳貴賓</span>
                <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  即將完工
                </span>
              </div>
              <div class="text-xs space-y-1 text-slate-600">
                <div>項目：<span class="font-bold text-slate-900">經典腳底按摩 (45分)</span></div>
                <div>師傅：<span class="font-bold text-brand-700">02號 淑芬師傅 (女師)</span></div>
                <div>空間：<span class="font-bold text-slate-900">腳底沙發椅 #04</span></div>
              </div>
              <div class="space-y-1 pt-1">
                <div class="flex justify-between text-xs font-mono">
                  <span class="text-slate-500 text-[11px]">進度 88%</span>
                  <span class="font-bold text-amber-600">剩餘 5 分鐘</span>
                </div>
                <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-brand-500 to-amber-500 h-full w-[88%] rounded-full"></div>
                </div>
              </div>
              <div class="flex items-center justify-end space-x-2 pt-1">
                <button class="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200">
                  +15分延時
                </button>
                <button class="px-3 py-1 text-xs rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700">
                  完工結帳
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. TAB: Queue Board Live View -->
      <div v-else-if="activeTab === 'queues'" class="space-y-6 animate-fadeIn">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-base font-bold text-slate-900">師傅雙軌獨立輪牌看板</h3>
            <p class="text-xs text-slate-500">腳底輪牌與指壓輪牌獨立運作，完工結帳自動輪轉至隊尾</p>
          </div>
          <span class="px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold">
            公平輪牌運作中（完工自動回隊尾）
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Foot Queue -->
          <div class="bg-white border border-teal-200 rounded-2xl p-5 shadow-card space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-teal-100">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  🦶
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">腳底按摩輪牌隊列</h4>
                  <span class="text-[11px] text-teal-600 font-semibold">當值師傅 8 位</span>
                </div>
              </div>
              <span class="text-xs bg-teal-50 text-teal-700 font-bold px-2 py-1 rounded">第 1 順位優先派工</span>
            </div>

            <!-- Queue list -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between p-3 rounded-xl bg-teal-50/70 border border-teal-300 shadow-xs">
                <div class="flex items-center space-x-3">
                  <span class="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <span class="font-bold text-slate-900 text-xs">08號 佳玲師傅 (女師)</span>
                    <div class="text-[11px] text-teal-700">專長: 腳底, 指壓, 油推 · 待命中</div>
                  </div>
                </div>
                <span class="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">下一位上工</span>
              </div>

              <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center space-x-3">
                  <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <span class="font-bold text-slate-800 text-xs">05號 阿豪師傅 (男師)</span>
                    <div class="text-[11px] text-slate-500">專長: 腳底, 指壓 · 待命中</div>
                  </div>
                </div>
                <span class="text-[11px] text-slate-500">第 2 順位</span>
              </div>

              <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center space-x-3">
                  <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <span class="font-bold text-slate-800 text-xs">11號 文傑師傅 (男師)</span>
                    <div class="text-[11px] text-slate-500">專長: 腳底, 修腳 · 待命中</div>
                  </div>
                </div>
                <span class="text-[11px] text-slate-500">第 3 順位</span>
              </div>
            </div>
          </div>

          <!-- Body Queue -->
          <div class="bg-white border border-brand-200 rounded-2xl p-5 shadow-card space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-brand-100">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                  💆
                </div>
                <div>
                  <h4 class="text-sm font-bold text-slate-900">全身指壓/油推輪牌隊列</h4>
                  <span class="text-[11px] text-brand-600 font-semibold">當值師傅 7 位</span>
                </div>
              </div>
              <span class="text-xs bg-brand-50 text-brand-700 font-bold px-2 py-1 rounded">獨立隊列計算</span>
            </div>

            <!-- Queue list -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between p-3 rounded-xl bg-brand-50/70 border border-brand-300 shadow-xs">
                <div class="flex items-center space-x-3">
                  <span class="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <span class="font-bold text-slate-900 text-xs">02號 淑芬師傅 (女師)</span>
                    <div class="text-[11px] text-brand-700">專長: 指壓, 精油油推 · 待命中</div>
                  </div>
                </div>
                <span class="text-[11px] font-bold text-brand-700 bg-brand-100 px-2 py-0.5 rounded">下一位上工</span>
              </div>

              <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center space-x-3">
                  <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <span class="font-bold text-slate-800 text-xs">08號 佳玲師傅 (女師)</span>
                    <div class="text-[11px] text-slate-500">專長: 腳底, 指壓, 油推 · 待命中</div>
                  </div>
                </div>
                <span class="text-[11px] text-slate-500">第 2 順位</span>
              </div>

              <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center space-x-3">
                  <span class="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <span class="font-bold text-slate-800 text-xs">05號 阿豪師傅 (男師)</span>
                    <div class="text-[11px] text-slate-500">專長: 腳底, 指壓 · 待命中</div>
                  </div>
                </div>
                <span class="text-[11px] text-slate-500">第 3 順位</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. TAB: 15-Minute Booking Wizard Live View -->
      <div v-else-if="activeTab === 'booking'" class="space-y-6 animate-fadeIn max-w-2xl mx-auto">
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl space-y-4">
          <div class="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div class="w-9 h-9 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
              <Sparkles class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-slate-900">新增按摩預約與智慧派工 (最新 Style C 15分鐘選擇器)</h3>
              <p class="text-[11px] text-slate-500">多維資源約束即時求解 · 15 分鐘精確時段分段</p>
            </div>
          </div>

          <!-- 1. Customer Info with Chinese Validation Indicators -->
          <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2">
            <span class="text-xs font-bold text-brand-700 uppercase">顧客基本資料</span>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="text-[11px] text-slate-600 font-medium block mb-1">顧客姓名 <span class="text-rose-500 font-bold">*</span></label>
                <input type="text" value="王小明" readonly class="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 font-medium" />
              </div>
              <div>
                <label class="text-[11px] text-slate-600 font-medium block mb-1">連絡電話 <span class="text-rose-500 font-bold">*</span></label>
                <input type="text" value="0912345678" readonly class="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 font-mono" />
              </div>
            </div>
          </div>

          <!-- 2. The 15-Minute Segmented Interval Picker -->
          <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-200 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-brand-700 uppercase">預約日期與 15 分鐘開始時間</span>
              <div class="flex items-center space-x-1">
                <span class="text-[10px] px-1.5 py-0.5 bg-brand-100 text-brand-700 font-bold rounded">現在</span>
                <span class="text-[10px] px-1.5 py-0.5 bg-slate-200 text-slate-700 font-semibold rounded">+15分</span>
                <span class="text-[10px] px-1.5 py-0.5 bg-slate-200 text-slate-700 font-semibold rounded">+30分</span>
              </div>
            </div>

            <div class="grid grid-cols-12 gap-2 items-center">
              <div class="col-span-4">
                <select class="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 font-bold">
                  <option>14 點</option>
                  <option>15 點</option>
                  <option>16 點</option>
                </select>
              </div>
              <!-- 4 Segmented Minute Buttons -->
              <div class="col-span-8 grid grid-cols-4 gap-1">
                <button
                  v-for="m in ['00', '15', '30', '45']"
                  :key="m"
                  type="button"
                  @click="mockMinute = m"
                  class="py-1.5 text-xs font-mono font-bold rounded-lg border transition-all cursor-pointer text-center"
                  :class="mockMinute === m ? 'bg-brand-600 text-white border-brand-600 shadow-xs ring-1 ring-brand-400' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'"
                >
                  :{{ m }}
                </button>
              </div>
            </div>
          </div>

          <!-- Realtime Allocation Success Card -->
          <div class="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-300 text-xs space-y-2">
            <div class="flex items-center justify-between text-emerald-900 font-bold">
              <div class="flex items-center space-x-1.5">
                <CheckCircle2 class="w-4 h-4 text-emerald-600" />
                <span>此 14:{{ mockMinute }} 時段可預約（智慧最佳方案排定）</span>
              </div>
              <span class="font-mono text-emerald-800">預計結束: 15:{{ mockMinute }}</span>
            </div>
            <div class="bg-white p-2.5 rounded-lg border border-emerald-200 text-slate-700 space-y-1">
              <div>匹配師傅：<span class="font-bold text-slate-900">08號 佳玲師傅 (女師)</span> · 輪牌第 1 順位</div>
              <div>分段空間：<span class="font-bold text-brand-700">足浴沙發 #01 (前30分) &rarr; 指壓床 #03 (後60分)</span></div>
            </div>
          </div>

          <div class="flex justify-end pt-1">
            <button class="px-6 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-md shadow-brand-600/20">
              確認成立預約
            </button>
          </div>
        </div>
      </div>

      <!-- 4. TAB: Timeline Grid View -->
      <div v-else-if="activeTab === 'schedule'" class="space-y-4 animate-fadeIn">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-base font-bold text-slate-900">空間排程甘特時間軸 (Facility Timeline Grid)</h3>
            <p class="text-xs text-slate-500">10:00 ~ 24:00 每 15 分鐘空間與床位佔用橫向視圖</p>
          </div>
          <span class="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
            今日：8 張腳底椅 · 6 張包廂床
          </span>
        </div>

        <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-card overflow-x-auto">
          <div class="min-w-[650px] space-y-3 text-xs">
            <!-- Timeline Headers -->
            <div class="grid grid-cols-12 font-mono text-[11px] text-slate-400 border-b pb-2">
              <div class="col-span-3 font-sans font-bold text-slate-700">設施空間名稱</div>
              <div class="col-span-3 text-center">13:00 ~ 14:00</div>
              <div class="col-span-3 text-center text-brand-600 font-bold">14:00 ~ 15:00 (當前)</div>
              <div class="col-span-3 text-center">15:00 ~ 16:00</div>
            </div>

            <!-- Row 1: Chair #01 -->
            <div class="grid grid-cols-12 items-center py-1.5 border-b border-slate-100">
              <div class="col-span-3 font-semibold text-slate-800 flex items-center space-x-1.5">
                <span>🪑</span>
                <span>腳底沙發椅 #01</span>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-teal-100 text-teal-800 rounded p-1 text-[10px] text-center font-semibold truncate">
                  已完工 (林先生)
                </div>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-brand-600 text-white rounded p-1 text-[10px] text-center font-bold truncate shadow-xs">
                  14:00 招牌套餐 (王小姐)
                </div>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-slate-100 text-slate-500 rounded p-1 text-[10px] text-center font-mono">
                  [空檔可約]
                </div>
              </div>
            </div>

            <!-- Row 2: Room #01 Bed -->
            <div class="grid grid-cols-12 items-center py-1.5 border-b border-slate-100">
              <div class="col-span-3 font-semibold text-slate-800 flex items-center space-x-1.5">
                <span>🛏️</span>
                <span>單人指壓床 #01</span>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-slate-100 text-slate-500 rounded p-1 text-[10px] text-center font-mono">
                  [空檔可約]
                </div>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-emerald-600 text-white rounded p-1 text-[10px] text-center font-bold truncate shadow-xs">
                  14:15 指壓60分 (李先生)
                </div>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-indigo-100 text-brand-800 rounded p-1 text-[10px] text-center font-semibold truncate">
                  15:30 油推90分 (預約)
                </div>
              </div>
            </div>

            <!-- Row 3: VIP Room #02 Bed (Combo Stage 2) -->
            <div class="grid grid-cols-12 items-center py-1.5">
              <div class="col-span-3 font-semibold text-slate-800 flex items-center space-x-1.5">
                <span>👑</span>
                <span>VIP 雙人包廂床 #02</span>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-slate-100 text-slate-500 rounded p-1 text-[10px] text-center font-mono">
                  [空檔可約]
                </div>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-amber-500 text-white rounded p-1 text-[10px] text-center font-bold truncate shadow-xs">
                  14:30 套餐第2段 (王小姐)
                </div>
              </div>
              <div class="col-span-3 px-1">
                <div class="bg-emerald-600 text-white rounded p-1 text-[10px] text-center font-bold truncate shadow-xs">
                  15:30 雙人油推 (陳伉儷)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Lock,
  ExternalLink,
  LayoutDashboard,
  Users2,
  CalendarCheck,
  CalendarDays,
  Sparkles,
  Clock,
  PlusCircle,
  Activity,
  CheckCircle2
} from 'lucide-vue-next'

const activeTab = ref('dashboard')
const mockMinute = ref('15')

const tabs = [
  { id: 'dashboard', label: '營運即時看板', icon: LayoutDashboard },
  { id: 'queues', label: '師傅雙輪牌', icon: Users2 },
  { id: 'booking', label: '15分預約精靈', icon: CalendarCheck },
  { id: 'schedule', label: '空間時間軸', icon: CalendarDays }
]
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
