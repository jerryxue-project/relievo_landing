<template>
  <div class="flex items-center space-x-2.5 select-none" :class="containerClass">
    <!-- Logo Icon Mark -->
    <div :class="iconContainerClass" class="flex-shrink-0 flex items-center justify-center">
      <!-- Variant 1: Harmonic Loop R (Default) -->
      <svg
        v-if="variant === 'loop'"
        :class="iconSizeClass"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Main continuous harmonic loop -->
        <path
          d="M13 39V18C13 11.3726 18.3726 6 25 6C31.6274 6 37 11.3726 37 18C37 23.6421 33.0955 28.374 27.8472 29.6528L35.5 40H28.5L22.2 30H13"
          :stroke="iconColorPrimary"
          stroke-width="4.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <!-- Inner circulation core -->
        <circle
          cx="25"
          cy="18"
          r="5.5"
          :stroke="iconColorSecondary"
          stroke-width="3.5"
        />
      </svg>

      <!-- Variant 2: Dual-Track Chrono R -->
      <svg
        v-else-if="variant === 'chrono'"
        :class="iconSizeClass"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 40V8H26C32.6274 8 38 13.3726 38 20C38 25.4385 34.39 29.9822 29.5 31.45L38 40"
          :stroke="iconColorPrimary"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 35V14H25.5C28.8137 14 31.5 16.6863 31.5 20C31.5 23.3137 28.8137 26 25.5 26H17"
          :stroke="iconColorSecondary"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M25.5 17.5V20H28" :stroke="iconColorPrimary" stroke-width="2" stroke-linecap="round"/>
      </svg>

      <!-- Variant 3: Geometric Fold R -->
      <svg
        v-else-if="variant === 'fold'"
        :class="iconSizeClass"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="8" width="9" height="32" rx="2" :fill="iconColorDark" />
        <path d="M19 8H27C32.5228 8 37 12.4772 37 18C37 23.5228 32.5228 28 27 28H19V8Z" :fill="iconColorPrimary" />
        <path d="M19 23H27L37 40H26L19 29V23Z" :fill="iconColorDark" />
        <rect x="19" y="14" width="7" height="7" rx="1.5" fill="#FFFFFF" />
      </svg>

      <!-- Variant 4: Zen Balance R -->
      <svg
        v-else-if="variant === 'zen'"
        :class="iconSizeClass"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 18C12 12.4772 16.4772 8 22 8C27.5228 8 32 12.4772 32 18V20C32 25.5228 27.5228 30 22 30H18V36C18 39.3137 15.3137 42 12 42C8.68629 42 6 39.3137 6 36V24C6 20.6863 8.68629 18 12 18Z" :fill="iconColorPrimary"/>
        <path d="M22 26C27.5228 26 32 30.4772 32 36C32 39.3137 34.6863 42 38 42C41.3137 42 44 39.3137 44 36C44 28.268 37.732 22 30 22H24L22 26Z" :fill="iconColorSecondary"/>
      </svg>
    </div>

    <!-- Wordmark / Text -->
    <div v-if="showText" class="flex flex-col justify-center">
      <div class="flex items-center space-x-1.5 leading-none">
        <span class="font-black tracking-tight" :class="[textTitleClass, inverted ? 'text-white' : 'text-slate-900']">Relivo</span>
        <span class="font-bold" :class="[textZhClass, inverted ? 'text-slate-200' : 'text-slate-700']">睿沃</span>
        <span v-if="showBadge" class="text-[10px] px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 font-bold border border-brand-200">
          SaaS
        </span>
      </div>
      <p v-if="subtitle" class="text-[10px] text-slate-400 mt-0.5 tracking-tight">
        服務業 1 秒智慧排單系統
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'loop', // 'loop' | 'chrono' | 'fold' | 'zen'
  },
  size: {
    type: String,
    default: 'md', // 'sm' | 'md' | 'lg' | 'xl'
  },
  showText: {
    type: Boolean,
    default: true,
  },
  showBadge: {
    type: Boolean,
    default: false,
  },
  subtitle: {
    type: Boolean,
    default: false,
  },
  inverted: {
    type: Boolean,
    default: false,
  },
})

const iconColorPrimary = computed(() => props.inverted ? '#919CE0' : '#5560BD')
const iconColorSecondary = computed(() => props.inverted ? '#FFFFFF' : '#919CE0')
const iconColorDark = computed(() => props.inverted ? '#FFFFFF' : '#1F2242')

const containerClass = computed(() => {
  return props.inverted ? 'text-white' : ''
})

const iconContainerClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-7 h-7'
    case 'lg':
      return 'w-12 h-12'
    case 'xl':
      return 'w-16 h-16'
    case 'md':
    default:
      return 'w-9 h-9'
  }
})

const iconSizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-6 h-6'
    case 'lg':
      return 'w-10 h-10'
    case 'xl':
      return 'w-14 h-14'
    case 'md':
    default:
      return 'w-8 h-8'
  }
})

const textTitleClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-base'
    case 'lg':
      return 'text-2xl'
    case 'xl':
      return 'text-3xl'
    case 'md':
    default:
      return 'text-xl'
  }
})

const textZhClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xs'
    case 'lg':
      return 'text-base'
    case 'xl':
      return 'text-lg'
    case 'md':
    default:
      return 'text-sm'
  }
})
</script>
