<template>
  <NuxtLink
    :to="`/pharmacie/${pharmacy.id}`"
    class="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-gray-100"
  >
    <div class="flex items-start justify-between mb-2">
      <div class="flex-1">
        <h3 class="font-semibold text-gray-900 mb-1">{{ pharmacy.name }}</h3>
        <div class="flex items-start text-sm text-gray-600 mb-2">
          <IconMapPin :size="16" class="mr-1 mt-0.5 flex-shrink-0" />
          <span>{{ pharmacy.address }}</span>
        </div>
      </div>
      <StatusBadge :status="status" />
    </div>

    <div class="flex items-center text-sm text-gray-500">
      <IconPhone :size="16" class="mr-1" />
      <span>{{ pharmacy.phone }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { IconMapPin, IconPhone } from '@tabler/icons-vue'
import type { Pharmacy, AvailabilityStatus } from '~/types'

defineProps<{
  pharmacy: Pharmacy
  status: AvailabilityStatus
}>()
</script>
