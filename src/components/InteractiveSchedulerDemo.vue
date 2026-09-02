<template>
  <div class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-slate-900 relative overflow-hidden">
    <!-- Top Solver Status Bar -->
    <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
      <div class="flex items-center space-x-2.5">
        <div class="w-8 h-8 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 font-bold">
          <Cpu class="w-4 h-4" />
        </div>
        <div>
          <span class="text-xs sm:text-sm font-bold text-slate-900 block">⚡ 現場實測：體驗 1 秒自動排單</span>
          <span class="text-[11px] text-slate-500">點選左側條件，右側立即自動排好床位與師傅！</span>
        </div>
      </div>
      <span class="text-[11px] font-mono text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 font-bold flex items-center space-x-1">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>系統即時排單中</span>
      </span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left: Interactive Controls -->
      <div class="lg:col-span-5 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
        <div>
          <h3 class="text-sm font-bold text-slate-900 flex items-center space-x-2">
            <SlidersHorizontal class="w-4 h-4 text-brand-600" />
            <span>客人來電條件模擬</span>
          </h3>
          <p class="text-[11px] text-slate-500 mt-0.5">隨便點選條件，右側 1 秒搞定最佳安排</p>
        </div>

        <!-- Guest count tabs -->
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">1. 同行客人人數</label>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="cnt in [1, 2, 3]"
              :key="cnt"
              type="button"
              @click="setGuestCount(cnt)"
              class="py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer text-center"
              :class="guestCount === cnt ? 'bg-brand-600 border-brand-600 text-white shadow-xs' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'"
            >
              {{ cnt }} 位客人
            </button>
          </div>
        </div>

        <!-- Service Item Picker -->
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">2. 想做什麼項目？</label>
          <select
            v-model="selectedServiceKey"
            @change="runSimulation"
            class="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          >
            <option value="FOOT_45">經典腳底按摩 (45分鐘) · 坐沙發椅</option>
            <option value="BODY_60">全身經絡指壓 (60分鐘) · 躺包廂床</option>
            <option value="COMBO_90">超值套餐 (腳30分+身60分) · 自動換床 🌟</option>
            <option value="OIL_90">頂級精油深層油推 (90分鐘) · VIP獨立包廂</option>
          </select>
        </div>

        <!-- Preference Picker -->
        <div class="space-y-1">
          <label class="text-xs font-bold text-slate-700">3. 師傅指派方式</label>
          <select
            v-model="selectedPreference"
            @change="runSimulation"
            class="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          >
            <option value="QUEUE">依排隊輪流（誰該上場系統自動派，最公平）</option>
            <option value="GENDER_F">指定女師傅（自動過濾會該項目的女技師）</option>
            <option value="GENDER_M">指定男師傅（自動過濾會該項目的男技師）</option>
            <option value="SPECIFIED">客人指定 08號佳玲師傅（自動查堂數與空檔）</option>
          </select>
        </div>

        <!-- Start Time Picker with 15-Minute Segments -->
        <div class="space-y-1">
          <div class="flex items-center justify-between">
            <label class="text-xs font-bold text-slate-700">4. 幾點來店？(15 分鐘精確區隔)</label>
            <span class="text-xs font-mono font-bold text-brand-700">{{ selectedTime }}</span>
          </div>
          <div class="grid grid-cols-4 gap-1.5">
            <button
              v-for="time in ['14:00', '14:15', '14:30', '14:45']"
              :key="time"
              type="button"
              @click="setTime(time)"
              class="py-2 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer text-center"
              :class="selectedTime === time ? 'bg-brand-600 border-brand-600 text-white shadow-xs' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'"
            >
              {{ time }}
            </button>
          </div>
        </div>

        <button
          @click="runSimulation"
          class="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-xs font-bold text-white shadow-md shadow-brand-600/20 flex items-center justify-center space-x-2 cursor-pointer transition-colors"
        >
          <Sparkles class="w-3.5 h-3.5" />
          <span>點我體驗 1 秒自動排單</span>
        </button>
      </div>

      <!-- Right: Live Allocation Visualizer (Style C Clean Output) -->
      <div class="lg:col-span-7 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-slate-100">
            <span class="text-xs font-bold text-emerald-700 flex items-center space-x-1.5">
              <CheckCircle2 class="w-4 h-4 text-emerald-600" />
              <span>✔ 成功排定！床位與師傅完全不衝突</span>
            </span>
            <span class="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
              預計結束：{{ simulationResult.endTime }}
            </span>
          </div>

          <!-- Party Result Cards -->
          <div class="space-y-3 mt-4">
            <div
              v-for="(res, idx) in simulationResult.guests"
              :key="idx"
              class="bg-slate-50/70 rounded-xl p-3.5 border border-slate-200 space-y-2.5"
            >
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-slate-900 flex items-center space-x-1.5">
                  <span class="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px] font-bold">{{ idx + 1 }}</span>
                  <span>第 {{ idx + 1 }} 位客人：{{ res.serviceName }}</span>
                </span>
                <span class="text-brand-700 font-mono font-bold text-sm">${{ res.price }}</span>
              </div>

              <!-- Masseur & Facility Assignment -->
              <div class="grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                <div>
                  <span class="text-slate-500 block text-[11px] font-medium">指派師傅 (排隊輪流)</span>
                  <span class="font-bold text-slate-900 flex items-center space-x-1 mt-0.5">
                    <span>{{ res.masseurName }}</span>
                    <span class="text-[10px] px-1.5 py-0.2 bg-brand-50 text-brand-700 border border-brand-200 rounded font-bold">{{ res.masseurGender }}</span>
                  </span>
                </div>
                <div>
                  <span class="text-slate-500 block text-[11px] font-medium">安排床位設施</span>
                  <span class="font-bold text-brand-700 mt-0.5 block">{{ res.facilityName }}</span>
                </div>
              </div>

              <!-- Multi-stage Tag for combo -->
              <div v-if="res.stages" class="text-[11px] text-teal-800 bg-teal-50/80 p-2.5 rounded-lg border border-teal-200 flex items-center space-x-1 font-medium">
                <span class="font-bold">🔄 自動換床：</span>
                <span class="font-mono text-teal-900">{{ res.stages }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Real-time Queue log -->
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <Users2 class="w-4 h-4 text-brand-600" />
            <span>排隊規則：按完自動排到隊伍最後面，公平公開誰都不爭單！</span>
          </div>
          <span class="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">100% 公平</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Cpu, SlidersHorizontal, Sparkles, CheckCircle2, Users2 } from 'lucide-vue-next'

const guestCount = ref(2)
const selectedServiceKey = ref('COMBO_90')
const selectedPreference = ref('QUEUE')
const selectedTime = ref('14:00')

const simulationResult = reactive({
  endTime: '15:30',
  guests: []
})

const servicesDb = {
  FOOT_45: {
    name: '經典腳底按摩 (45分)',
    price: 800,
    duration: 45,
    getFacility: (i) => `腳底沙發椅 #0${i + 1}`,
    getStages: () => null
  },
  BODY_60: {
    name: '全身經絡指壓 (60分)',
    price: 1200,
    duration: 60,
    getFacility: (i) => `單人包廂指壓床 #0${i + 1}`,
    getStages: () => null
  },
  COMBO_90: {
    name: '招牌超值套餐 (90分)',
    price: 1700,
    duration: 90,
    getFacility: (i) => `沙發椅 #0${i + 1} → 指壓床 #0${i + 1}`,
    getStages: (i) => `前段30分 腳底椅#0${i + 1} → 後段60分 指壓床#0${i + 1} (同一技師無縫轉移)`
  },
  OIL_90: {
    name: '頂級精油油推 (90分)',
    price: 2100,
    duration: 90,
    getFacility: (i) => `VIP 獨立精油包廂 #0${i + 1}`,
    getStages: () => null
  }
}

const masseursPool = [
  { name: '08號 佳玲師傅', gender: '女師' },
  { name: '05號 阿豪師傅', gender: '男師' },
  { name: '02號 淑芬師傅', gender: '女師' },
  { name: '11號 文傑師傅', gender: '男師' }
]

const femaleMasseursPool = [
  { name: '08號 佳玲師傅', gender: '女師' },
  { name: '02號 淑芬師傅', gender: '女師' },
  { name: '06號 雅婷師傅', gender: '女師' }
]

const maleMasseursPool = [
  { name: '05號 阿豪師傅', gender: '男師' },
  { name: '11號 文傑師傅', gender: '男師' },
  { name: '03號 志明師傅', gender: '男師' }
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
      mObj = femaleMasseursPool[i % femaleMasseursPool.length]
    } else if (selectedPreference.value === 'GENDER_M') {
      mObj = maleMasseursPool[i % maleMasseursPool.length]
    } else if (selectedPreference.value === 'SPECIFIED') {
      if (i === 0) {
        mObj = { name: '08號 佳玲師傅 (指定勞點)', gender: '女師' }
      } else {
        mObj = masseursPool[(i + 1) % masseursPool.length]
      }
    }

    list.push({
      serviceName: srv.name,
      price: srv.price,
      masseurName: mObj.name,
      masseurGender: mObj.gender,
      facilityName: srv.getFacility(i),
      stages: srv.getStages(i)
    })
  }

  simulationResult.guests = list
}

onMounted(() => {
  runSimulation()
})
</script>
