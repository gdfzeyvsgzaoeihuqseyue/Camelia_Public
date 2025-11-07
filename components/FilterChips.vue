<template>
  <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
    <button
      @click="$emit('update:selectedFilter', null)"
      class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
      :class="selectedFilter === null
        ? 'bg-primary-600 text-white'
        : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'"
    >
      Tous
    </button>

    <button
      @click="$emit('update:selectedFilter', 'en-stock')"
      class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
      :class="selectedFilter === 'en-stock'
        ? 'bg-green-600 text-white'
        : 'bg-white text-gray-700 border border-gray-200 hover:border-green-300'"
    >
      En stock
    </button>

    <button
      @click="$emit('update:selectedFilter', 'stock-limite')"
      class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
      :class="selectedFilter === 'stock-limite'
        ? 'bg-orange-600 text-white'
        : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300'"
    >
      Stock limité
    </button>

    <button
      @click="$emit('update:selectedFilter', 'tres-limite')"
      class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
      :class="selectedFilter === 'tres-limite'
        ? 'bg-red-600 text-white'
        : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300'"
    >
      Très limité
    </button>

    <button
      @click="$emit('update:selectedFilter', 'epuise')"
      class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
      :class="selectedFilter === 'epuise'
        ? 'bg-gray-600 text-white'
        : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'"
    >
      Épuisé
    </button>
  </div>
</template>

<script setup lang="ts">
import type { AvailabilityStatus } from '~/types'

defineProps<{
  selectedFilter: AvailabilityStatus | null
}>()

defineEmits<{
  'update:selectedFilter': [value: AvailabilityStatus | null]
}>()
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
