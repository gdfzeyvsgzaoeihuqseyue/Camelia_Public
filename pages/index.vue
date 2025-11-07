<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">MedStock</h1>
      <p class="text-gray-600">Trouvez vos médicaments disponibles</p>
    </div>

    <div class="space-y-4 mb-6">
      <SearchBar v-model="searchQuery" />
      <FilterChips v-model:selected-filter="selectedFilter" />
    </div>

    <div v-if="filteredMeds.length === 0" class="text-center py-12">
      <IconMoodSad :size="48" class="mx-auto text-gray-400 mb-3" />
      <p class="text-gray-600">Aucun médicament trouvé</p>
    </div>

    <div v-else class="space-y-3">
      <MedicationCard
        v-for="medication in filteredMeds"
        :key="medication.id"
        :medication="medication"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconMoodSad } from '@tabler/icons-vue'
import type { AvailabilityStatus } from '~/types'

const medicationsStore = useMedicationsStore()

const searchQuery = ref('')
const selectedFilter = ref<AvailabilityStatus | null>(null)

const filteredMeds = computed(() => {
  return medicationsStore.filteredMedications(searchQuery.value, selectedFilter.value)
})
</script>
