<template>
  <section class="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
    <!-- Subtle Background Glows -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-100/40 via-indigo-50/20 to-transparent blur-3xl -z-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto space-y-5">
        <!-- Badges -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <div class="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 shadow-xs text-xs sm:text-sm font-bold text-brand-700">
            <span class="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
            <span>按摩養生・美業沙龍專用</span>
          </div>
          <div class="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-xs text-xs sm:text-sm font-bold text-emerald-800">
            <GraduationCap class="w-4 h-4 text-emerald-600" />
            <span>前台 10 分鐘極速上手</span>
          </div>
        </div>

        <!-- Main Headline -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-snug sm:leading-tight my-5 sm:my-8">
          <span class="block">新進前台 <span class="text-brand-600 underline decoration-brand-300 decoration-wavy underline-offset-6">10 分鐘上手</span>！</span>
          <span class="block mt-2 sm:mt-4 text-brand-600">1 秒排好床位與師傅，從此不撞單</span>
        </h1>

        <!-- Subheadline (Crisp & Pain-point focused) -->
        <p class="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-normal">
          不用翻白板、免心算排單！<strong class="text-slate-900 font-bold">點餐機般直覺操作</strong>，自動排床、公平輪牌、套餐換床一指搞定，新人第 1 天就能從容接單。
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            @click="$emit('open-demo-modal')"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-brand-600/30 hover:shadow-brand-600/40 transition-all transform active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Sparkles class="w-5 h-5" />
            <span>免費預約專人演示</span>
          </button>
        </div>

        <!-- Front Desk Low Learning Curve Value Props -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs sm:text-sm font-bold text-slate-700">
          <span class="inline-flex items-center space-x-1.5 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-xl border border-slate-200/80">
            <CheckCircle2 class="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>免背複雜規則</span>
          </span>
          <span class="inline-flex items-center space-x-1.5 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-xl border border-slate-200/80">
            <CheckCircle2 class="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>防呆零失誤</span>
          </span>
          <span class="inline-flex items-center space-x-1.5 bg-slate-100 text-slate-800 px-3.5 py-1.5 rounded-xl border border-slate-200/80">
            <CheckCircle2 class="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>離職無痛交接</span>
          </span>
        </div>

        <!-- Trust Metrics -->
        <div class="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto border-t border-slate-200/80">
          <div class="text-center p-3.5 bg-white/80 rounded-2xl border border-slate-100 shadow-xs">
            <div class="text-3xl sm:text-4xl font-black text-brand-600 font-mono">10 分鐘</div>
            <div class="text-sm font-bold text-slate-800 mt-1">前台極速上手</div>
            <div class="text-xs text-slate-500 mt-0.5">培訓 2 週 ➔ 10 分</div>
          </div>
          <div class="text-center p-3.5 bg-white/80 rounded-2xl border border-slate-100 shadow-xs">
            <div class="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">1 秒</div>
            <div class="text-sm font-bold text-slate-800 mt-1">自動排單</div>
            <div class="text-xs text-slate-500 mt-0.5">免看白板心算</div>
          </div>
          <div class="text-center p-3.5 bg-white/80 rounded-2xl border border-slate-100 shadow-xs">
            <div class="text-3xl sm:text-4xl font-black text-brand-600 font-mono">0 撞單</div>
            <div class="text-sm font-bold text-slate-800 mt-1">防呆零衝突</div>
            <div class="text-xs text-slate-500 mt-0.5">床位師傅完美銜接</div>
          </div>
          <div class="text-center p-3.5 bg-white/80 rounded-2xl border border-slate-100 shadow-xs">
            <div class="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">100%</div>
            <div class="text-sm font-bold text-slate-800 mt-1">公平輪流</div>
            <div class="text-xs text-slate-500 mt-0.5">師傅向心力高</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Sparkles, GraduationCap, CheckCircle2 } from 'lucide-vue-next'

defineEmits(['open-demo-modal'])
</script>
