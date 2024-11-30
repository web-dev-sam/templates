<script setup lang="ts">
import type { NuxtError } from "#app"

const _ = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center px-4">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-gray-200 mb-4">
        {{ error?.statusCode || "404" }}
      </h1>

      <p class="text-xl text-gray-600 mb-1">
        {{ error?.statusMessage || "Page not found" }}
      </p>

      <p class="text-gray-500 mb-8">
        {{ error?.message || "Sorry, we couldn't find the page you're looking for." }}
      </p>

      <button
        class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition-colors"
        @click="() => {}"
      >
        <Icon name="heroicons:home" class="w-5 h-5 mr-2" />
        Go Home
      </button>
    </div>
  </div>
</template>
