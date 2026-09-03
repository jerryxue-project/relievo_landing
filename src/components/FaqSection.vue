<template>
  <section class="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div class="text-center space-y-3">
        <span class="text-xs sm:text-sm font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
          FAQ
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">常見問題解答</h2>
        <p class="text-sm sm:text-base text-slate-600">若有其他疑問，歡迎隨時透過專人諮詢與我們聯繫。</p>
      </div>

      <div class="space-y-3.5">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="rounded-2xl bg-white border border-slate-200 p-5 cursor-pointer shadow-xs transition-all hover:border-brand-300"
          @click="toggle(idx)"
        >
          <div class="flex items-center justify-between gap-3">
            <span class="font-extrabold text-slate-900 text-sm sm:text-base">{{ faq.q }}</span>
            <ChevronDown class="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200" :class="{ 'rotate-180 text-brand-600': openIdx === idx }" />
          </div>
          <p v-if="openIdx === idx" class="text-sm sm:text-base text-slate-700 mt-3 pt-3 border-t border-slate-100 leading-relaxed font-normal">
            {{ faq.a }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const openIdx = ref(0)

const toggle = (idx) => {
  openIdx.value = openIdx.value === idx ? -1 : idx
}

const faqs = [
  {
    q: 'Q1: 店裡有腳底沙發與指壓包廂，系統如何處理套餐換床？',
    a: '系統自動進行多階段排程。例如 90 分鐘套餐（前 30 分腳底 + 後 60 分指壓），演算法會同時鎖定前段沙發與後段包廂，並指派同一位師傅全程負責，免手動切單！'
  },
  {
    q: 'Q2: 師傅輪牌是完全自動的嗎？請假或外出如何處理？',
    a: '打卡上班自動排隊，外出休息暫停派工，完工結帳後自動輪轉到排尾。大螢幕即時顯示順位，師傅心服口服。'
  },
  {
    q: 'Q3: 需要額外買專用主機或收銀機嗎？iPad 能用嗎？',
    a: '完全不需要！Relivo 是純雲端架構，店裡現有的 iPad、平板、電腦透過瀏覽器即可隨開即用。'
  },
  {
    q: 'Q4: 導入系統需要多久？資料如何建檔？',
    a: '內建台灣養生館標準價目表範本，專人協助匯入師傅與床位資料，當天即可正式上線！'
  }
]
</script>
