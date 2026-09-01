<template>
  <div class="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white relative overflow-hidden">
    <!-- Top Terminal bar -->
    <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
      <div class="flex items-center space-x-2">
        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
        <span class="text-xs font-mono text-slate-400 ml-2">Relievo Auto-Scheduling Engine · 智慧排程演算法沙盒模擬</span>
      </div>
      <span class="text-[11px] font-mono text-brand-400 bg-brand-950/80 px-2.5 py-1 rounded-full border border-brand-800">
        即時演算中 (Live Solver)
      </span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Left: Interactive Controls -->
      <div class="lg:col-span-5 space-y-4">
        <div>
          <h3 class="text-base font-bold text-white flex items-center space-x-2">
            <SlidersHorizontal class="w-4 h-4 text-brand-400" />
            <span>模擬門市進單條件</span>
          </h3>
          <p class="text-xs text-slate-400 mt-0.5">點選下方條件，右側演算法將毫秒級運算多資源配置</p>
        </div>

        <!-- Guest count tabs -->
        <div class="space-y-1.5">
          <label class="text-xs font-semibold text-slate-300">同行顧客人數</label>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="cnt in [1, 2, 3]"
              :key="cnt"
              type="button"
              @click="setGuestCount(cnt)"
              class="py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer"
              :class="guestCount === cnt ? 'bg-brand-600 border-brand-500 text-white shadow-md shadow-brand-600/30' : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-800'"
            >
              {{ cnt }} 位顧客
            </button>
          </div>
        </div>

        <!-- Service Item Picker -->
        <div class="space-y-1.5">
          <label class="text-xs font-semibold text-slate-300">選擇按摩項目</label>
          <select
            v-model="selectedServiceKey"
            @change="runSimulation"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-500"
          >
            <option value="FOOT_45">經典腳底按摩 (45分鐘) · 單一設施需求</option>
            <option value="BODY_60">全身經絡指壓 (60分鐘) · 包廂指壓床</option>
            <option value="COMBO_90">招牌超值套餐 (腳30分+身60分) · 複合跨空間轉移 🌟</option>
            <option value="OIL_90">頂級精油深層油推 (90分鐘) · 專屬精油包廂</option>
          </select>
        </div>

        <!-- Preference Picker -->
        <div class="space-y-1.5">
          <label class="text-xs font-semibold text-slate-300">師傅指派偏好</label>
          <select
            v-model="selectedPreference"
            @change="runSimulation"
            class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-500"
          >
            <option value="QUEUE">公平輪牌派工 (依當前隊列第一順位排班)</option>
            <option value="GENDER_F">指定女師傅 (自動過濾技能與性別)</option>
            <option value="GENDER_M">指定男師傅</option>
            <option value="SPECIFIED">勞點指定 08號師傅 (檢測特定技師時段)</option>
          </select>
        </div>

        <!-- Start Time Picker -->
        <div class="space-y-1.5">
          <label class="text-xs font-semibold text-slate-300">預約開始時間 (15分鐘間隔)</label>
          <div class="grid grid-cols-4 gap-1.5">
            <button
              v-for="time in ['14:00', '14:15', '14:30', '14:45']"
              :key="time"
              type="button"
              @click="setTime(time)"
              class="py-2 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer"
              :class="selectedTime === time ? 'bg-brand-600 border-brand-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'"
            >
              {{ time }}
            </button>
          </div>
        </div>

        <button
          @click="runSimulation"
          class="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-xs font-bold text-white shadow-md shadow-brand-600/30 flex items-center justify-center space-x-2 cursor-pointer hover:opacity-95"
        >
          <Sparkles class="w-3.5 h-3.5" />
          <span>觸發演算法重新計算</span>
        </button>
      </div>

      <!-- Right: Live Allocation Visualizer -->
      <div class="lg:col-span-7 bg-slate-950/70 rounded-2xl p-5 border border-slate-800 flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-slate-800">
            <span class="text-xs font-bold text-emerald-400 flex items-center space-x-1.5">
              <CheckCircle2 class="w-4 h-4 text-emerald-400" />
              <span>多約束滿足求解成功 (演算耗時 12ms)</span>
            </span>
            <span class="text-[11px] font-mono text-slate-400">
              預計結束：{{ simulationResult.endTime }}
            </span>
          </div>

          <!-- Party Result Cards -->
          <div class="space-y-3 mt-4">
            <div
              v-for="(res, idx) in simulationResult.guests"
              :key="idx"
              class="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-2.5"
            >
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-white flex items-center space-x-1.5">
                  <span class="w-4 h-4 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px] font-bold">{{ idx + 1 }}</span>
                  <span>顧客 {{ idx + 1 }}：{{ res.serviceName }}</span>
                </span>
                <span class="text-brand-400 font-mono font-bold">${{ res.price }}</span>
              </div>

              <!-- Masseur & Facility Assignment -->
              <div class="grid grid-cols-2 gap-2 text-xs bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80">
                <div>
                  <span class="text-slate-500 block text-[11px]">匹配師傅 (輪牌派工)</span>
                  <span class="font-bold text-white flex items-center space-x-1 mt-0.5">
                    <span>{{ res.masseurName }}</span>
                    <span class="text-[10px] px-1 bg-brand-900/80 text-brand-300 rounded font-normal">{{ res.masseurGender }}</span>
                  </span>
                </div>
                <div>
                  <span class="text-slate-500 block text-[11px]">排定空間與設施</span>
                  <span class="font-bold text-amber-300 mt-0.5 block">{{ res.facilityName }}</span>
                </div>
              </div>

              <!-- Multi-stage Tag for combo -->
              <div v-if="res.stages" class="text-[11px] text-teal-300 bg-teal-950/60 p-2 rounded-lg border border-teal-800/50 flex items-center space-x-1">
                <span>🔄 複合分段轉移：</span>
                <span class="font-mono">{{ res.stages }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Real-time Queue log -->
        <div class="bg-slate-900 p-3 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <Users2 class="w-3.5 h-3.5 text-brand-400" />
            <span>輪牌狀態：服務完畢自動歸入隊尾 (FIFO 公平演算法)</span>
          </div>
          <span class="text-emerald-400 font-bold">100% 透明無爭議</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { SlidersHorizontal, Sparkles, CheckCircle2, Users2 } from 'lucide-vue-next'

const guestCount = ref(2)
const selectedServiceKey = ref('COMBO_90')
const selectedPreference = ref('QUEUE')
const selectedTime = ref('14:00')

const simulationResult = reactive({
  endTime: '15:30',
  guests: []
})

const servicesDb = {
  FOOT_45: { name: '經典腳底按摩 (45分)', price: 800, duration: 45, facility: '腳底沙發椅 #03' },
  BODY_60: { name: '全身經絡指壓 (60分)', price: 1200, duration: 60, facility: '包廂指壓床 #02 (單人)' },
  COMBO_90: {
    name: '招牌超值套餐 (90分)',
    price: 1700,
    duration: 90,
    facility: '椅 #01 → 床 #03',
    stages: '前段30分 腳底椅#01 → 後段60分 指壓床#03 (同一技師無縫轉移)'
  },
  OIL_90: { name: '頂級精油油推 (90分)', price: 2100, duration: 90, facility: 'VIP 獨立精油包廂 #01' }
}

const masseursPool = [
  { name: '08號 佳玲師傅', gender: '女師' },
  { name: '05號 阿豪師傅', gender: '男師' },
  { name: '02號 淑芬師傅', gender: '女師' },
  { name: '11號 文傑師傅', gender: '男師' }
]

const setGuestCount = (cnt) => {
  guestCount.value = cnt
  runSimulation()
}

const setTime = (t) => {
  selectedTime.value = t
  runSimulation()
}

const runSimulation = () => {
  const srv = servicesDb[selectedServiceKey.value]
  const [h, m] = selectedTime.value.split(':').map(Number)
  const totalMins = h * 60 + m + srv.duration
  const endH = Math.floor(totalMins / 60)
  const endM = totalMins % 60
  simulationResult.endTime = `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`

  const list = []
  for (let i = 0; i < guestCount.value; i++) {
    let mObj = masseursPool[i % masseursPool.length]
    if (selectedPreference.value === 'GENDER_F') {
      mObj = { name: `0${i * 2 + 2}號 雅婷師傅`, gender: '女師' }
    } else if (selectedPreference.value === 'GENDER_M') {
      mObj = { name: `0${i * 2 + 1}號 志明師傅`, gender: '男師' }
    } else if (selectedPreference.value === 'SPECIFIED') {
      mObj = { name: '08號 佳玲師傅 (勞點指定)', gender: '女師' }
    }

    list.push({
      serviceName: srv.name,
      price: srv.price,
      masseurName: mObj.name,
      masseurGender: mObj.gender,
      facilityName: srv.facility.replace('#03', `#0${i + 2}`).replace('#01', `#0${i + 1}`).replace('#02', `#0${i + 2}`),
      stages: srv.stages
    })
  }

  simulationResult.guests = list
}

onMounted(() => {
  runSimulation()
})
</script>
