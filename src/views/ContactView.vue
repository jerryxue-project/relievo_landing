<template>
  <div class="py-12 sm:py-16 space-y-12">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
      <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
        Contact & Trial
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
        預約 1 對 1 專人演示
      </h1>
      <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
        填寫下方表單，我們的資深產品顧問將於 24 小時內與您聯繫，為您的門市安排專屬演示並開通測試帳號。
      </p>
    </div>

    <!-- Embedded Large Form -->
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
        <div v-if="!isSuccess" class="space-y-4">
          <div v-if="errorMessage" class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-semibold flex items-center space-x-2">
            <AlertCircle class="w-4 h-4 text-rose-600 flex-shrink-0" />
            <span>{{ errorMessage }}</span>
          </div>

          <form @submit.prevent="handleSubmit" novalidate class="space-y-4">
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
              <p v-if="errors.store_name" class="mt-1 text-xs text-rose-600 font-medium">{{ errors.store_name }}</p>
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
                <p v-if="errors.contact_name" class="mt-1 text-xs text-rose-600 font-medium">{{ errors.contact_name }}</p>
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
                <p v-if="errors.phone" class="mt-1 text-xs text-rose-600 font-medium">{{ errors.phone }}</p>
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
                  <option value="OTHER">其他預約型門市</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">門市規模 / 技師人數</label>
                <select
                  v-model="form.team_size"
                  class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                >
                  <option value="1-5">1 ~ 5 位技師 (單店)</option>
                  <option value="6-15">6 ~ 15 位技師 (中型旗艦)</option>
                  <option value="16-30">16 ~ 30 位技師 (大型名店)</option>
                  <option value="30+">30 位以上 / 連鎖體系</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">您的具體需求或排程痛點 (選填)</label>
              <textarea
                v-model="form.notes"
                rows="3"
                placeholder="請簡述您的需求，顧問將為您準備對應的案例演示..."
                class="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
              ></textarea>
            </div>

            <div class="pt-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-extrabold shadow-lg shadow-brand-600/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Sparkles class="w-4 h-4" />
                <span>{{ isSubmitting ? '正在安排專人諮詢...' : '免費預約專人演示' }}</span>
              </button>
            </div>
          </form>
        </div>

        <div v-else class="text-center py-8 space-y-4">
          <div class="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
            <CheckCircle2 class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-slate-900">預約申請已順利送出！</h3>
            <p class="text-xs text-slate-600 mt-1.5 max-w-sm mx-auto">
              感謝您的信任！我們的產品顧問將於 24 小時內透過電話或 Email 與您聯繫，協助開通測試環境。
            </p>
          </div>
          <div class="pt-2">
            <a
              href="http://localhost:5173"
              target="_blank"
              class="inline-block px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs"
            >
              直接體驗線上 Demo 系統 &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Sparkles, AlertCircle, CheckCircle2 } from 'lucide-vue-next'

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

  setTimeout(() => {
    isSubmitting.value = false
    isSuccess.value = true
  }, 600)
}
</script>
