<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" @click="close"></div>

    <div class="flex min-h-full items-center justify-center p-4">
      <div class="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-900 transform transition-all">
        <!-- Close Button -->
        <button @click="close" class="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 transition-colors">
          <X class="w-5 h-5" />
        </button>

        <div v-if="!isSuccess" class="space-y-5">
          <!-- Header -->
          <div class="flex items-center space-x-3">
            <div class="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 shadow-xs">
              <CalendarCheck class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-lg font-extrabold text-slate-900">預約 1 對 1 專人線上演示</h3>
              <p class="text-xs text-slate-500">專屬顧問將為您的店家規模客製展示智慧排程流程</p>
            </div>
          </div>

          <!-- Top Error Banner -->
          <div v-if="errorMessage" class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-semibold flex items-center space-x-2">
            <AlertCircle class="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" novalidate class="space-y-3.5">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">
                店家/品牌名稱 <span class="text-rose-500">*</span>
              </label>
              <input
                v-model="form.store_name"
                type="text"
                placeholder="例: 澄悅養生會館"
                @input="errors.store_name = ''"
                class="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                :class="errors.store_name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-brand-500'"
              />
              <p v-if="errors.store_name" class="mt-1 text-xs text-rose-600 flex items-center space-x-1 font-medium">
                <AlertCircle class="w-3.5 h-3.5" />
                <span>{{ errors.store_name }}</span>
              </p>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  聯絡人姓名 <span class="text-rose-500">*</span>
                </label>
                <input
                  v-model="form.contact_name"
                  type="text"
                  placeholder="例: 林經理"
                  @input="errors.contact_name = ''"
                  class="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                  :class="errors.contact_name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-brand-500'"
                />
                <p v-if="errors.contact_name" class="mt-1 text-xs text-rose-600 flex items-center space-x-1 font-medium">
                  <AlertCircle class="w-3.5 h-3.5" />
                  <span>{{ errors.contact_name }}</span>
                </p>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">
                  聯絡手機/電話 <span class="text-rose-500">*</span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="例: 0912345678"
                  @input="errors.phone = ''"
                  class="w-full bg-slate-50 border rounded-xl px-3.5 py-2.5 text-sm text-slate-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                  :class="errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-brand-500'"
                />
                <p v-if="errors.phone" class="mt-1 text-xs text-rose-600 flex items-center space-x-1 font-medium">
                  <AlertCircle class="w-3.5 h-3.5" />
                  <span>{{ errors.phone }}</span>
                </p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">產業類別</label>
                <select
                  v-model="form.industry"
                  class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                >
                  <option value="SPA">按摩養生 / 足體舒壓</option>
                  <option value="BEAUTY">美容美甲 / 美睫沙龍</option>
                  <option value="FITNESS">瑜珈健身 / 運動工作室</option>
                  <option value="CLINIC">物理治療 / 復健診所</option>
                  <option value="OTHER">其他預約型門市</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">門市規模 / 師傅人數</label>
                <select
                  v-model="form.team_size"
                  class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                >
                  <option value="1-5">1 ~ 5 位師傅 (單店初創)</option>
                  <option value="6-15">6 ~ 15 位師傅 (中型旗艦)</option>
                  <option value="16-30">16 ~ 30 位師傅 (大型名店)</option>
                  <option value="30+">30 位以上 / 多分店連鎖</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">您目前面臨最大的排程痛點 (選填)</label>
              <textarea
                v-model="form.notes"
                rows="2"
                placeholder="例如：紙本容易漏單、師傅輪牌有爭議、客人要求指定師傅常排不開..."
                class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
              ></textarea>
            </div>

            <div class="pt-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-extrabold shadow-lg shadow-brand-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Sparkles class="w-4 h-4" />
                <span>{{ isSubmitting ? '正在安排專人諮詢...' : '免費取得專人演示 & 14天試用帳號' }}</span>
              </button>
              <p class="text-[11px] text-center text-slate-400 mt-2">
                🔒 我們重視您的隱私，您的資料僅用於 Relievo 產品演示與專人聯繫。
              </p>
            </div>
          </form>
        </div>

        <!-- Success State -->
        <div v-else class="text-center py-6 space-y-4">
          <div class="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
            <CheckCircle2 class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900">預約申請已順利送出！</h3>
            <p class="text-xs text-slate-600 mt-1.5 max-w-sm mx-auto">
              感謝您對 Relievo 睿舒智慧的關注！我們的產品顧問將於 24 小時內與您聯繫，協助開通測試環境並安排線上演示。
            </p>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
            您也可以立即開啟我們現成運行的線上 Demo 進行試用。
          </div>
          <div class="flex justify-center space-x-3 pt-2">
            <a
              href="http://localhost:5173"
              target="_blank"
              class="px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs"
            >
              直接體驗線上 Demo
            </a>
            <button
              @click="close"
              class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
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
import { X, CalendarCheck, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-vue-next'

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
