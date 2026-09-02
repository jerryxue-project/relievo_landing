<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Frosted Backdrop -->
    <div
      class="fixed inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      @click="close"
    ></div>

    <div class="flex min-h-full items-center justify-center p-3 sm:p-6">
      <div
        class="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-indigo-950/20 text-slate-900 transform transition-all overflow-hidden animate-in zoom-in-95 duration-200"
      >
        <!-- Top Gradient Accent Line -->
        <div class="h-1.5 w-full bg-gradient-to-r from-brand-600 via-indigo-500 to-teal-400"></div>

        <!-- Close Button -->
        <button
          type="button"
          @click="close"
          class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
          title="關閉視窗 (ESC)"
        >
          <X class="w-4 h-4" />
        </button>

        <div v-if="!isSuccess">
          <!-- Modal Header -->
          <div class="px-6 pt-5 pb-4 border-b border-slate-100 flex items-center space-x-3.5 bg-slate-50/50">
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-brand-500/25 flex-shrink-0">
              <CalendarCheck class="w-5 h-5" />
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <h3 class="text-lg font-black text-slate-900">預約 1 對 1 專人線上演示</h3>
                <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                  免費諮詢
                </span>
              </div>
              <p class="text-xs text-slate-500 mt-0.5">專屬顧問將為您的店家規模客製展示智慧排程系統</p>
            </div>
          </div>

          <!-- Form Body -->
          <div class="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <!-- Top Error Banner -->
            <div
              v-if="errorMessage"
              class="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-semibold flex items-center space-x-2 shadow-xs animate-in fade-in"
            >
              <AlertCircle class="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{{ errorMessage }}</span>
            </div>

            <form @submit.prevent="handleSubmit" novalidate class="space-y-4">
              <!-- Store Name -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  店家/品牌名稱 <span class="text-rose-500">*</span>
                </label>
                <div class="relative">
                  <input
                    v-model="form.store_name"
                    type="text"
                    placeholder="例: 澄悅足體養生會館"
                    @input="errors.store_name = ''"
                    class="w-full bg-slate-50 border rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                    :class="errors.store_name ? 'border-rose-400 bg-rose-50/20 focus:border-rose-500' : 'border-slate-300 focus:border-brand-500'"
                  />
                  <Building2 class="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
                <p v-if="errors.store_name" class="mt-1 text-xs text-rose-600 flex items-center space-x-1 font-medium">
                  <AlertCircle class="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{{ errors.store_name }}</span>
                </p>
              </div>

              <!-- Contact Name & Phone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">
                    聯絡人姓名 <span class="text-rose-500">*</span>
                  </label>
                  <div class="relative">
                    <input
                      v-model="form.contact_name"
                      type="text"
                      placeholder="例: 林經理"
                      @input="errors.contact_name = ''"
                      class="w-full bg-slate-50 border rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      :class="errors.contact_name ? 'border-rose-400 bg-rose-50/20 focus:border-rose-500' : 'border-slate-300 focus:border-brand-500'"
                    />
                    <User class="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                  <p v-if="errors.contact_name" class="mt-1 text-xs text-rose-600 flex items-center space-x-1 font-medium">
                    <AlertCircle class="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{{ errors.contact_name }}</span>
                  </p>
                </div>

                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">
                    聯絡手機/電話 <span class="text-rose-500">*</span>
                  </label>
                  <div class="relative">
                    <input
                      v-model="form.phone"
                      type="tel"
                      placeholder="例: 0912345678"
                      @input="errors.phone = ''"
                      class="w-full bg-slate-50 border rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                      :class="errors.phone ? 'border-rose-400 bg-rose-50/20 focus:border-rose-500' : 'border-slate-300 focus:border-brand-500'"
                    />
                    <Phone class="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                  <p v-if="errors.phone" class="mt-1 text-xs text-rose-600 flex items-center space-x-1 font-medium">
                    <AlertCircle class="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{{ errors.phone }}</span>
                  </p>
                </div>
              </div>

              <!-- Industry Type Segmented Cards -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1.5">店家產業類型</label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    v-for="item in [
                      { id: 'SPA', name: '足體養生 / 按摩SPA', icon: '💆‍♂️' },
                      { id: 'BEAUTY', name: '美容美甲 / 美睫沙龍', icon: '💅' },
                      { id: 'FITNESS', name: '運動放鬆 / 瑜珈體態', icon: '🧘' },
                      { id: 'OTHER', name: '其他預約型服務門市', icon: '🏬' }
                    ]"
                    :key="item.id"
                    type="button"
                    @click="form.industry = item.id"
                    class="p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center space-x-2 text-left"
                    :class="form.industry === item.id
                      ? 'bg-brand-50/90 border-brand-500 text-brand-950 ring-2 ring-brand-500/20 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'"
                  >
                    <span class="text-base">{{ item.icon }}</span>
                    <span class="truncate">{{ item.name }}</span>
                  </button>
                </div>
              </div>

              <!-- Store Scale Segmented Buttons -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1.5">門市規模 / 師傅技師人數</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    v-for="size in [
                      { id: '1-5', name: '1~5 位', desc: '小型初創' },
                      { id: '6-15', name: '6~15 位', desc: '中型名店' },
                      { id: '16-30', name: '16~30 位', desc: '旗艦大店' },
                      { id: '30+', name: '30位以上', desc: '多店連鎖' }
                    ]"
                    :key="size.id"
                    type="button"
                    @click="form.team_size = size.id"
                    class="p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center"
                    :class="form.team_size === size.id
                      ? 'bg-brand-50/90 border-brand-500 text-brand-950 ring-2 ring-brand-500/20 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'"
                  >
                    <span class="text-xs font-black">{{ size.name }}</span>
                    <span class="text-[10px] text-slate-400 font-normal mt-0.5">{{ size.desc }}</span>
                  </button>
                </div>
              </div>

              <!-- Pain Points -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">您目前最想解決的排班/預約問題 (選填)</label>
                <textarea
                  v-model="form.notes"
                  rows="2"
                  placeholder="例如：紙本預約容易撞單、師傅輪牌常常吵架不公、套餐換床位手動算太慢..."
                  class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 transition-all"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="pt-2">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 hover:from-brand-500 hover:to-indigo-500 text-white text-sm font-black shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all flex items-center justify-center space-x-2 cursor-pointer transform active:scale-98"
                >
                  <Sparkles class="w-4 h-4" />
                  <span>{{ isSubmitting ? '正在安排專屬顧問...' : '立即免費取得專人演示 & 14天試用帳號' }}</span>
                </button>
                <p class="text-[11px] text-center text-slate-400 mt-2.5 flex items-center justify-center space-x-1">
                  <span>🔒</span>
                  <span>我們重視您的隱私，資料僅用於 Relievo 產品演示與專人聯繫。</span>
                </p>
              </div>
            </form>
          </div>
        </div>

        <!-- Success State -->
        <div v-else class="p-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
          <div class="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
            <CheckCircle2 class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-xl font-black text-slate-900">預約申請已順利送出！</h3>
            <p class="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
              感謝您對 Relievo 睿舒智慧的關注！我們的產品專員將於 24 小時內與您聯繫，協助開通測試環境並安排線上即時演示。
            </p>
          </div>

          <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <div class="font-bold text-slate-800">您也可以立即直接體驗真實線上後台：</div>
            <div class="text-[11px] text-slate-500">免安裝、免註冊，可即時操作智慧排班與甘特圖</div>
          </div>

          <div class="flex flex-col sm:flex-row justify-center gap-2.5 pt-2">
            <a
              href="http://localhost:5173"
              target="_blank"
              class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-brand-500/25 flex items-center justify-center space-x-1.5"
            >
              <span>立即體驗真實後台 Demo</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </a>
            <button
              @click="close"
              class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
            >
              關閉視窗
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
  X,
  CalendarCheck,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Building2,
  User,
  Phone,
  ArrowRight
} from 'lucide-vue-next'

const props = defineProps({
  isOpen: { type: Boolean, default: false }
})

const emit = defineEmits(['close'])

const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const form = reactive({
  store_name: '',
  contact_name: '',
  phone: '',
  industry: 'SPA',
  team_size: '6-15',
  notes: ''
})

const errors = reactive({
  store_name: '',
  contact_name: '',
  phone: ''
})

const validate = () => {
  let valid = true
  errors.store_name = ''
  errors.contact_name = ''
  errors.phone = ''
  errorMessage.value = ''

  if (!form.store_name.trim()) {
    errors.store_name = '請填寫店家/品牌名稱'
    valid = false
  }

  if (!form.contact_name.trim()) {
    errors.contact_name = '請填寫聯絡人姓名'
    valid = false
  }

  if (!form.phone.trim()) {
    errors.phone = '請填寫聯絡手機或電話'
    valid = false
  } else {
    const clean = form.phone.replace(/[\s-]/g, '')
    if (!/^(09\d{8}|0\d{1,2}\d{6,8}|\d{8,10})$/.test(clean)) {
      errors.phone = '請輸入正確的電話號碼格式（例：0912345678）'
      valid = false
    }
  }

  if (!valid) {
    errorMessage.value = '請依下方紅色提示填妥必填欄位後再送出'
  }

  return valid
}

const handleSubmit = async () => {
  if (!validate()) return
  isSubmitting.value = true

  // Simulate server lead capture
  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
  }, 600)
}

const close = () => {
  isSuccess.value = false
  errorMessage.value = ''
  emit('close')
}
</script>
