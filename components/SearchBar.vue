<template>
  <div class="relative">
    <div class="relative">
      <IconSearch
        :size="20"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        placeholder="Rechercher un médicament…"
        class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconSearch } from '@tabler/icons-vue'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
