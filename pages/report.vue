<template>
  <div class="max-w-4xl mx-auto px-4 py-6">
    <button
      @click="$router.back()"
      class="flex items-center text-primary-600 mb-6 hover:text-primary-700 transition-colors"
    >
      <IconArrowLeft :size="20" class="mr-1" />
      <span>Retour</span>
    </button>

    <div class="bg-white rounded-xl shadow-sm p-6">
      <div class="flex items-center mb-6">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
          <IconAlertCircle :size="24" class="text-red-600" />
        </div>
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Signaler une pharmacie</h1>
          <p class="text-gray-600">Aidez-nous à améliorer nos données</p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label for="pharmacyName" class="block text-sm font-medium text-gray-700 mb-2">
            Nom de la pharmacie *
          </label>
          <input
            id="pharmacyName"
            v-model="form.pharmacyName"
            type="text"
            required
            placeholder="Ex: Pharmacie Centrale"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          />
        </div>

        <div>
          <label for="reason" class="block text-sm font-medium text-gray-700 mb-2">
            Motif du signalement *
          </label>
          <textarea
            id="reason"
            v-model="form.reason"
            rows="5"
            required
            placeholder="Décrivez le problème rencontré..."
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
        >
          <IconSend :size="20" class="mr-2" />
          Envoyer le signalement
        </button>
      </form>
    </div>

    <Teleport to="body">
      <div
        v-if="showSuccessModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        @click.self="closeSuccessModal"
      >
        <div class="bg-white rounded-xl p-6 max-w-md w-full text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <IconCheck :size="32" class="text-green-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Signalement envoyé</h3>
          <p class="text-gray-600 mb-6">
            Merci pour votre contribution. Votre signalement sera examiné par notre équipe.
          </p>
          <button
            @click="closeSuccessModal"
            class="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { IconArrowLeft, IconAlertCircle, IconSend, IconCheck } from '@tabler/icons-vue'

const router = useRouter()

const form = ref({
  pharmacyName: '',
  reason: ''
})

const showSuccessModal = ref(false)

const handleSubmit = () => {
  showSuccessModal.value = true
  form.value = {
    pharmacyName: '',
    reason: ''
  }
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
  router.push('/')
}
</script>
