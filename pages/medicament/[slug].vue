<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <button
      @click="$router.back()"
      class="flex items-center text-primary-600 mb-6 hover:text-primary-700 transition-colors"
    >
      <IconArrowLeft :size="20" class="mr-1" />
      <span>Retour</span>
    </button>

    <div v-if="!medication" class="text-center py-12">
      <p class="text-gray-600">Médicament non trouvé</p>
    </div>

    <div v-else>
      <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h1 class="text-2xl font-bold text-gray-900 mb-2">{{ medication.name }}</h1>
            <p class="text-gray-600">{{ medication.description }}</p>
          </div>
          <StatusBadge :status="medication.status" class="ml-4" />
        </div>

        <div class="flex items-center text-sm text-gray-500">
          <IconBuildingStore :size="18" class="mr-2" />
          <span>Disponible dans {{ medication.pharmaciesCount }} pharmacie{{ medication.pharmaciesCount > 1 ? 's' : '' }}</span>
        </div>
      </div>

      <div class="mb-4">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">Pharmacies</h2>
      </div>

      <div v-if="pharmaciesWithStatus.length === 0" class="text-center py-8 bg-white rounded-xl">
        <p class="text-gray-600">Aucune pharmacie trouvée</p>
      </div>

      <div v-else class="space-y-3">
        <PharmacyItem
          v-for="item in pharmaciesWithStatus"
          :key="item.pharmacy.id"
          :pharmacy="item.pharmacy"
          :status="item.status"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowLeft, IconBuildingStore } from '@tabler/icons-vue'
import type { AvailabilityStatus } from '~/types'

const route = useRoute()
const medicationsStore = useMedicationsStore()

const medication = computed(() => {
  return medicationsStore.getMedicationBySlug(route.params.slug as string)
})

const pharmaciesWithStatus = computed(() => {
  if (!medication.value) return []

  return medication.value.pharmacies.map(pa => {
    const pharmacy = medicationsStore.getPharmacyById(pa.pharmacyId)
    return {
      pharmacy,
      status: pa.status
    }
  }).filter(item => item.pharmacy !== undefined)
})
</script>
