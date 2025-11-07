<template>
  <div class="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
    <div class="flex-1">
      <p class="font-medium text-gray-900">{{ medication.name }}</p>
      <p class="text-sm text-gray-600">{{ medication.description }}</p>
    </div>
    <StatusBadge :status="status" class="ml-3" />
  </div>
</template>

<script setup lang="ts">
import type { Medication, AvailabilityStatus } from '~/types'

defineProps<{
  medication: Medication
  status: AvailabilityStatus
}>()
</script>
