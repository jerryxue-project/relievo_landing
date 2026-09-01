<template>
  <section class="py-20 bg-slate-50 border-t border-slate-200/80">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center space-y-3">
        <span class="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          FAQ
        </span>
        <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">常見問題解答</h2>
        <p class="text-slate-600 text-sm">若有其他疑問，歡迎隨時透過專人諮詢與我們聯繫。</p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="rounded-2xl bg-white border border-slate-200 p-5 cursor-pointer shadow-xs"
          @click="toggle(idx)"
        >
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900 text-sm sm:text-base">{{ faq.q }}</span>
            <ChevronDown class="w-5 h-5 text-slate-400 transition-transform duration-200" :class="{ 'rotate-180 text-brand-600': openIdx === idx }" />
          </div>
          <p v-if="openIdx === idx" class="text-xs sm:text-sm text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
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
    q: 'Q1: 我們店裡既有腳底沙發，又有包廂指壓床，系統如何處理套餐分段？',
    a: 'Relievo 獨家具備「多階段空間自動轉移排程」。例如 90 分鐘套餐（前 30 分腳底 + 後 60 分指壓），演算法會同時計算前段足浴沙發椅與後段包廂床位的空檔，並指定同一位技師全程負責，無須櫃檯手動切單！'
  },
  {
    q: 'Q2: 師傅輪牌排班是完全自動的嗎？技師請假或外出休息怎麼處理？',
    a: '系統提供直覺的技師打卡考勤與外出狀態切換。技師上班自動進入輪牌，外出休息暫停派單，歸隊依店規回原位或排隊尾；完工結帳後系統依 FIFO 機制自動輪轉至隊尾，所有師傅皆可在公用螢幕查看即時順位，公平透明。'
  },
  {
    q: 'Q3: 是否需要額外購買專用硬體？手機或 iPad 可以使用嗎？',
    a: '完全不需要額外硬體！Relievo 採用純雲端 SaaS 架構，櫃檯現有的 iPad、Android 平板、Windows 或 Mac 電腦皆可透過瀏覽器順暢操作，技師亦可使用個人手機查看派工通知。'
  },
  {
    q: 'Q4: 導入系統會很複雜嗎？資料如何搬遷？',
    a: 'Relievo 提供極致簡單的 5 分鐘快速開通精靈，內建台灣養生館標準價目表與師傅設定範本。我們的顧問亦會協助批次匯入您店內的師傅名冊與空間規格，當天即可正式上線使用！'
  }
]
</script>
