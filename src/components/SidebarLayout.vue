<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside
      :class="[
        'bg-blue-900 flex flex-col transition-all duration-200',
        collapsed ? 'w-14' : 'w-64'
      ]"
    >
      <!-- Header with bigger logo -->
      <div
        class="h-28 flex flex-col items-center justify-center border-b border-blue-800 text-white font-semibold select-none pt-6"
      >
        <!-- Logo -->
        <img
          v-if="!collapsed"
          :src="logoimg"
          alt="Logo"
          class="h-22 w-auto mb-4"
        />

        <!-- Sidebar title -->
        <span v-if="!collapsed">ប្រព័ន្ធគ្រប់គ្រង</span>
        <span v-else>≡</span>
      </div>

      <!-- Menu -->
      <nav class="flex-1 py-4">
        <button
          v-for="item in menuOptions"
          :key="item.key"
          @click="handleSelect(item.key)"
          class="w-full flex items-center px-4 py-2 text-sm transition relative overflow-hidden group"
          :class="buttonClass(item.key)"
        >
          <!-- Icon -->
          <span class="text-lg flex-shrink-0">{{ item.icon }}</span>

          <!-- Text with pop/shift animation -->
          <span
            v-if="!collapsed"
            class="truncate ml-2 transform transition-transform duration-150 ease-in-out group-hover:translate-x-1"
          >
            {{ item.label }}
          </span>
        </button>
      </nav>
    </aside>

    <!-- Content -->
    <main class="flex-1 p-6 overflow-auto">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Import your logo
import logoimg from '../assets/logo.png'

const router = useRouter()
const collapsed = ref(false)
const active = ref('dashboard')

// Menu options
const menuOptions = [
  { label: 'ទំព័រដើម', key: 'dashboard', icon: '🏠', path: '/' },
  { label: 'វត្តមាន', key: 'attendance', icon: '📅', path: '/attendance' },
  { label: 'លេខទីស្តីការគណៈរដ្ឋមន្ត្រី', key: 'cabinet', icon: '💼', path: '/cabinet' },
  { label: 'មន្ត្រីរាជការមុខងារសាធារណៈ', key: 'officials', icon: '👥', path: '/officials' },
  { label: 'ឯកសារច្បាប់និងលិខិតបទដ្ឋាន', key: 'documents', icon: '📄', path: '/documents' },
  { label: 'កិច្ចប្រជុំគណៈរដ្ឋមន្ត្រី', key: 'meetings', icon: '🗓️', path: '/meetings' },
  { label: 'បិទបើកម៉ឺនុយ', key: 'toggle', icon: '☰', path: null }
]

// Handle menu clicks
function handleSelect(key) {
  if (key === 'toggle') {
    collapsed.value = !collapsed.value
    return
  }

  const item = menuOptions.find(i => i.key === key)
  if (!item) return

  active.value = key
  if (item.path) router.push(item.path)
}

// Button classes
function buttonClass(key) {
  if (key === 'toggle') {
    return `
      text-white
      hover:bg-white/10
    `
  }

  if (active.value === key) {
    return `
      text-white
      font-medium
    `
  }

  return `
    text-white
    hover:bg-[#FFCD00]
    hover:text-black
  `
}
</script>
