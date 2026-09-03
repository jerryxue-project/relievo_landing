<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
    <!-- Top Announcement Bar (Responsive: Sleek on Mobile, Full on Desktop) -->
    <div class="bg-brand-600 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 transition-all">
      <router-link
        to="/solutions/spa"
        class="max-w-7xl mx-auto flex items-center justify-center text-center group cursor-pointer"
      >
        <!-- Mobile Version (Clean & Compact) -->
        <div class="flex sm:hidden items-center justify-center space-x-1.5 font-medium leading-none">
          <span class="bg-white/20 text-white px-1.5 py-0.5 rounded text-[9px] font-bold flex-shrink-0">新上線</span>
          <span>🎉 Relivo Spa 按摩版上線</span>
          <span class="font-bold underline underline-offset-2 text-brand-100 flex-shrink-0 ml-0.5">體驗 &rarr;</span>
        </div>

        <!-- Desktop Version (Full Feature Pitch) -->
        <div class="hidden sm:flex items-center justify-center space-x-2 font-medium">
          <span class="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">新上線</span>
          <span>🎉 Relivo Spa 按摩旗艦版全新上線！立即體驗 1 秒自動排單與師傅公平輪牌</span>
          <span class="font-bold underline underline-offset-2 hover:text-brand-100 ml-1">了解更多 &rarr;</span>
        </div>
      </router-link>
    </div>

    <!-- Main Navigation -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-15 sm:h-18">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2.5 sm:space-x-3 group">
          <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
            <Sparkles class="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div class="flex items-center space-x-1.5 sm:space-x-2">
              <span class="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Relivo</span>
              <span class="text-xs sm:text-sm font-bold text-slate-700">睿沃</span>
              <span class="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 font-bold border border-brand-200">SaaS</span>
            </div>
            <p class="text-[10px] text-slate-400 hidden sm:block">服務業 1 秒智慧排單系統</p>
          </div>
        </router-link>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-1">
          <router-link
            to="/"
            class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors"
            :class="$route.path === '/' ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'"
          >
            產品首頁
          </router-link>

          <!-- Solutions Dropdown -->
          <div class="relative group" @mouseenter="isSolutionsOpen = true" @mouseleave="isSolutionsOpen = false">
            <button
              class="flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              :class="{ 'text-brand-600 font-bold': $route.path.startsWith('/solutions') }"
            >
              <span>產業解決方案</span>
              <ChevronDown class="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
            </button>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-if="isSolutionsOpen"
                class="absolute left-0 top-full pt-2 w-80 shadow-2xl rounded-2xl bg-white border border-slate-200 p-3 space-y-1 z-50"
              >
                <router-link
                  to="/solutions/spa"
                  class="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-brand-50/60 transition-colors group/item"
                >
                  <div class="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 font-bold">
                    💆
                  </div>
                  <div>
                    <div class="flex items-center space-x-1.5">
                      <span class="text-xs font-bold text-slate-900 group-hover/item:text-brand-600">按摩養生旗艦系統</span>
                      <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-bold">已上線</span>
                    </div>
                    <p class="text-[11px] text-slate-500 mt-0.5">腳底/指壓雙輪牌、複合分段空間轉移</p>
                  </div>
                </router-link>

                <router-link
                  to="/solutions/beauty"
                  class="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-brand-50/60 transition-colors group/item"
                >
                  <div class="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center flex-shrink-0 font-bold">
                    ✂️
                  </div>
                  <div>
                    <div class="flex items-center space-x-1.5">
                      <span class="text-xs font-bold text-slate-900 group-hover/item:text-brand-600">美髮沙龍</span>
                      <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800 font-bold">即將推出</span>
                    </div>
                    <p class="text-[11px] text-slate-500 mt-0.5">剪染燙等待插單、AI 初診與座位排班</p>
                  </div>
                </router-link>

                <router-link
                  to="/solutions/fitness"
                  class="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-brand-50/60 transition-colors group/item"
                >
                  <div class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">
                    🧘
                  </div>
                  <div>
                    <div class="flex items-center space-x-1.5">
                      <span class="text-xs font-bold text-slate-900 group-hover/item:text-brand-600">瑜珈健身與團體課</span>
                      <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-600 font-medium">規劃中</span>
                    </div>
                    <p class="text-[11px] text-slate-500 mt-0.5">團課名額上限、教練私教與教室管理</p>
                  </div>
                </router-link>

                <div class="pt-2 border-t border-slate-100">
                  <router-link
                    to="/solutions"
                    class="block text-center text-xs font-bold text-brand-600 hover:text-brand-700 py-1"
                  >
                    查看完整解決方案矩陣 &rarr;
                  </router-link>
                </div>
              </div>
            </transition>
          </div>


          <a href="#features" class="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
            特色優勢
          </a>

          <a href="#testimonials" class="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
            客戶評價
          </a>
        </nav>

        <!-- Right CTA Buttons -->
        <div class="flex items-center space-x-3">
          <!-- Open Lead Form Button (Desktop Only) -->
          <button
            @click="$emit('open-demo-modal')"
            class="hidden sm:inline-flex items-center justify-center space-x-2.5 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold tracking-wide shadow-md shadow-brand-600/25 transition-all transform active:scale-95 cursor-pointer flex-shrink-0"
          >
            <CalendarCheck class="w-4 h-4 flex-shrink-0" />
            <span class="tracking-wide">預約專人演示</span>
          </button>

          <!-- Mobile Hamburger Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
        <router-link
          to="/"
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-50"
        >
          產品首頁
        </router-link>


        <div class="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
          多產業解決方案
        </div>
        <div class="grid grid-cols-1 gap-1 pl-2">
          <router-link
            to="/solutions/spa"
            @click="isMobileMenuOpen = false"
            class="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-brand-50"
          >
            <span>💆 按摩養生館旗艦版</span>
            <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-bold">上線中</span>
          </router-link>
          <router-link
            to="/solutions/beauty"
            @click="isMobileMenuOpen = false"
            class="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-brand-50"
          >
            <span>✂️ 美髮沙龍</span>
            <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-800 font-bold">預告</span>
          </router-link>
          <router-link
            to="/solutions/fitness"
            @click="isMobileMenuOpen = false"
            class="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-brand-50"
          >
            <span>🧘 瑜珈健身團課私教</span>
          </router-link>
        </div>

        <div class="pt-3 border-t border-slate-100 space-y-2">
          <button
            @click="() => { isMobileMenuOpen = false; $emit('open-demo-modal'); }"
            class="w-full py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-center text-sm font-extrabold text-white tracking-wide shadow-md shadow-brand-600/25 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <CalendarCheck class="w-4 h-4 flex-shrink-0" />
            <span class="tracking-wide">預約專人演示</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Sparkles, ChevronDown, CalendarCheck, Menu, X } from 'lucide-vue-next'

defineEmits(['open-demo-modal'])

const isSolutionsOpen = ref(false)
const isMobileMenuOpen = ref(false)
</script>
