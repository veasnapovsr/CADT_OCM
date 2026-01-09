<template>
  <div class="w-full">
    <!-- Main button -->
    <button
      class="w-full flex items-center justify-between gap-3 px-4 py-2 text-sm transition hover:bg-[#FFCD00]/20"
      :class="active ? 'text-black font-medium' : 'text-white'"
      @click="toggleExpand"
    >
      <div class="flex items-center gap-3">
        <span class="text-lg">{{ item.icon }}</span>
        <span v-if="!collapsed" class="truncate group-hover:translate-x-1 transition-transform duration-150 ease-in-out">{{ item.label }}</span>
      </div>
      <span v-if="item.children && !collapsed" class="text-sm transition-transform" :class="expanded ? 'rotate-90' : ''">▶</span>
    </button>

    <!-- Expanded submenu -->
    <div v-if="expanded && item.children && !collapsed" class="ml-8 flex flex-col">
      <button
        v-for="child in item.children"
        :key="child.key"
        class="w-full flex items-center gap-2 px-4 py-1 text-sm text-gray-700 hover:bg-gray-100"
      >
        <span class="text-sm">{{ child.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  item: Object,
  collapsed: Boolean,
  active: Boolean
})

const expanded = ref(false)

function toggleExpand() {
  if (item.children) {
    expanded.value = !expanded.value
  }
}
</script>
