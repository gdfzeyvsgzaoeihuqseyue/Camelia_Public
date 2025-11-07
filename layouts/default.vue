<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <slot />

    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
      <div class="flex justify-around items-center h-16">
        <NuxtLink
          to="/"
          class="flex flex-col items-center justify-center flex-1 h-full transition-colors"
          :class="route.path === '/' ? 'text-primary-600' : 'text-gray-600'"
        >
          <IconHome :size="24" />
          <span class="text-xs mt-1">Accueil</span>
        </NuxtLink>

        <NuxtLink
          to="/"
          class="flex flex-col items-center justify-center flex-1 h-full transition-colors"
          :class="route.path === '/search' ? 'text-primary-600' : 'text-gray-600'"
        >
          <IconSearch :size="24" />
          <span class="text-xs mt-1">Recherche</span>
        </NuxtLink>

        <NuxtLink
          to="/report"
          class="flex flex-col items-center justify-center flex-1 h-full transition-colors"
          :class="route.path === '/report' ? 'text-primary-600' : 'text-gray-600'"
        >
          <IconAlertCircle :size="24" />
          <span class="text-xs mt-1">Signaler</span>
        </NuxtLink>

        <NuxtLink
          to="/suggestion"
          class="flex flex-col items-center justify-center flex-1 h-full transition-colors"
          :class="route.path === '/suggestion' ? 'text-primary-600' : 'text-gray-600'"
        >
          <IconBulb :size="24" />
          <span class="text-xs mt-1">Suggérer</span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { IconHome, IconSearch, IconAlertCircle, IconBulb } from '@tabler/icons-vue'

const route = useRoute()
</script>
