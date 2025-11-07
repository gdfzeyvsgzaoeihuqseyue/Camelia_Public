<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <button
      @click="$router.back()"
      class="flex items-center text-primary-600 mb-6 hover:text-primary-700 transition-colors"
    >
      <IconArrowLeft :size="20" class="mr-1" />
      <span>Retour</span>
    </button>

    <div v-if="!pharmacy" class="text-center py-12">
      <p class="text-gray-600">Pharmacie non trouvée</p>
    </div>

    <div v-else>
      <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">{{ pharmacy.name }}</h1>

        <div class="space-y-3 mb-4">
          <div class="flex items-start text-gray-700">
            <IconMapPin :size="20" class="mr-3 mt-0.5 flex-shrink-0 text-primary-600" />
            <span>{{ pharmacy.address }}</span>
          </div>

          <div class="flex items-center text-gray-700">
            <IconPhone :size="20" class="mr-3 flex-shrink-0 text-primary-600" />
            <a :href="`tel:${pharmacy.phone}`" class="hover:text-primary-600 transition-colors">
              {{ pharmacy.phone }}
            </a>
          </div>

          <div class="flex items-center text-gray-700">
            <IconClock :size="20" class="mr-3 flex-shrink-0 text-primary-600" />
            <span>{{ pharmacy.hours }}</span>
          </div>
        </div>

        <div class="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
          <div class="text-center text-gray-500">
            <IconMap :size="48" class="mx-auto mb-2 opacity-50" />
            <p class="text-sm">Carte mockup</p>
            <p class="text-xs">{{ pharmacy.lat }}, {{ pharmacy.lng }}</p>
          </div>
        </div>

        <button
          @click="showReportModal = true"
          class="w-full bg-red-50 text-red-600 border border-red-200 py-3 rounded-lg font-medium hover:bg-red-100 transition-colors flex items-center justify-center"
        >
          <IconAlertCircle :size="20" class="mr-2" />
          Signaler cette pharmacie
        </button>
      </div>

      <div class="mb-4">
        <h2 class="text-lg font-semibold text-gray-900 mb-3">Médicaments disponibles</h2>
      </div>

      <div v-if="medicationsWithStatus.length === 0" class="text-center py-8 bg-white rounded-xl">
        <p class="text-gray-600">Aucun médicament disponible</p>
      </div>

      <div v-else class="bg-white rounded-xl shadow-sm p-4">
        <MedicationListItem
          v-for="item in medicationsWithStatus"
          :key="item.medication.id"
          :medication="item.medication"
          :status="item.status"
        />
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showReportModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        @click.self="showReportModal = false"
      >
        <div class="bg-white rounded-xl p-6 max-w-md w-full">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Confirmer le signalement</h3>
          <p class="text-gray-600 mb-6">
            Voulez-vous vraiment signaler cette pharmacie ? Un administrateur examinera votre signalement.
          </p>

          <div class="flex gap-3">
            <button
              @click="showReportModal = false"
              class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              @click="confirmReport"
              class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { IconArrowLeft, IconMapPin, IconPhone, IconClock, IconMap, IconAlertCircle } from '@tabler/icons-vue'

const route = useRoute()
const router = useRouter()
const medicationsStore = useMedicationsStore()

const showReportModal = ref(false)

const pharmacy = computed(() => {
  return medicationsStore.getPharmacyById(route.params.id as string)
})

const medicationsWithStatus = computed(() => {
  if (!pharmacy.value) return []

  return pharmacy.value.medications.map(ma => {
    const medication = medicationsStore.getMedicationById(ma.medicationId)
    return {
      medication,
      status: ma.status
    }
  }).filter(item => item.medication !== undefined)
})

const confirmReport = () => {
  showReportModal.value = false
  router.push('/report')
}
</script>
