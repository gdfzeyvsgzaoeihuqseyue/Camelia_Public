<template>
  <span
    class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
    :class="badgeClasses"
  >
    <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="dotClasses"></span>
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import type { AvailabilityStatus } from '~/types'

const props = defineProps<{
  status: AvailabilityStatus
}>()

const badgeClasses = computed(() => {
  switch (props.status) {
    case 'en-stock':
      return 'bg-green-50 text-green-700 border border-green-200'
    case 'stock-limite':
      return 'bg-orange-50 text-orange-700 border border-orange-200'
    case 'tres-limite':
      return 'bg-red-50 text-red-700 border border-red-200'
    case 'epuise':
      return 'bg-gray-50 text-gray-700 border border-gray-200'
    default:
      return 'bg-gray-50 text-gray-700 border border-gray-200'
  }
})

const dotClasses = computed(() => {
  switch (props.status) {
    case 'en-stock':
      return 'bg-green-500'
    case 'stock-limite':
      return 'bg-orange-500'
    case 'tres-limite':
      return 'bg-red-500'
    case 'epuise':
      return 'bg-gray-400'
    default:
      return 'bg-gray-400'
  }
})

const label = computed(() => {
  switch (props.status) {
    case 'en-stock':
      return 'En stock'
    case 'stock-limite':
      return 'Stock limité'
    case 'tres-limite':
      return 'Très limité'
    case 'epuise':
      return 'Épuisé'
    default:
      return 'Inconnu'
  }
})
</script>
