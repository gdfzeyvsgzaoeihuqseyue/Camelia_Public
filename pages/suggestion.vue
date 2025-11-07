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
        <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
          <IconBulb :size="24" class="text-yellow-600" />
        </div>
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Suggérer une correction</h1>
          <p class="text-gray-600">Proposez un meilleur nom pour un médicament</p>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label for="currentName" class="block text-sm font-medium text-gray-700 mb-2">
            Nom actuel du médicament *
          </label>
          <input
            id="currentName"
            v-model="form.currentName"
            type="text"
            required
            placeholder="Ex: Paracétamol 1000mg"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          />
        </div>

        <div>
          <label for="suggestedName" class="block text-sm font-medium text-gray-700 mb-2">
            Nom suggéré *
          </label>
          <input
            id="suggestedName"
            v-model="form.suggestedName"
            type="text"
            required
            placeholder="Ex: Paracétamol 1g"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          />
        </div>

        <div>
          <label for="comment" class="block text-sm font-medium text-gray-700 mb-2">
            Commentaire (facultatif)
          </label>
          <textarea
            id="comment"
            v-model="form.comment"
            rows="4"
            placeholder="Ajoutez des détails supplémentaires si nécessaire..."
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
        >
          <IconSend :size="20" class="mr-2" />
          Envoyer la suggestion
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
          <h3 class="text-xl font-bold text-gray-900 mb-2">Suggestion envoyée</h3>
          <p class="text-gray-600 mb-6">
            Merci pour votre suggestion. Notre équipe l'examinera prochainement.
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
import { IconArrowLeft, IconBulb, IconSend, IconCheck } from '@tabler/icons-vue'

const router = useRouter()

const form = ref({
  currentName: '',
  suggestedName: '',
  comment: ''
})

const showSuccessModal = ref(false)

const handleSubmit = () => {
  showSuccessModal.value = true
  form.value = {
    currentName: '',
    suggestedName: '',
    comment: ''
  }
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
  router.push('/')
}
</script>
