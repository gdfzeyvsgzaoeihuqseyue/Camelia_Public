<template>
  <NuxtLink
    :to="`/medicament/${medication.slug}`"
    class="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-gray-100"
  >
    <div class="flex items-start justify-between mb-2">
      <h3 class="font-semibold text-gray-900 text-lg">{{ medication.name }}</h3>
      <StatusBadge :status="medication.status" />
    </div>

    <p class="text-sm text-gray-600 mb-3">{{ medication.description }}</p>

    <div class="flex items-center text-sm text-gray-500">
      <IconBuildingStore :size="16" class="mr-1" />
      <span>{{ medication.pharmaciesCount }} pharmacie{{ medication.pharmaciesCount > 1 ? 's' : '' }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { IconBuildingStore } from '@tabler/icons-vue'
import type { Medication } from '~/types'

defineProps<{
  medication: Medication
}>()
</script>
