<script setup lang="ts">
// Props & Emits
// State
// Computed
// Normal code
// Lifecycle
// Watchers
// Functions
</script>

<template>
  <div class="container">
    <header class="flex justify-between my-10 align-middle h-9 items-center text-gray-700">
      <div class="flex items-center">
        <NuxtLink to="/">
          <NuxtImg src="/logo.png" alt="Name" class="h-9" onerror="" :preload="{ fetchPriority: 'high' }" />
        </NuxtLink>
      </div>
      <div class="flex gap-16">
        <NuxtLink to="/features" class="hover:text-gray-900">Features</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-gray-900">Blog</NuxtLink>
        <NuxtLink to="/pricing" class="hover:text-gray-900">Pricing</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-900">Contact</NuxtLink>
      </div>
      <div class="flex items-center">
        <NuxtLink to="/dashboard" class="hover:text-gray-900">
          <Icon name="lucide:log-in" :size="20" mode="svg" />
        </NuxtLink>
      </div>
    </header>
    <main class="min-h-screen">
      <slot />
    </main>
    <footer class="border-t border-gray-200">
      <div class="container mx-auto py-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <NuxtImg src="/logo.png" alt="Name" class="h-6" />
            <span class="text-gray-600 text-sm">&copy; 2025 Webry. All rights reserved.</span>
          </div>

          <div class="flex gap-8 text-sm text-gray-600">
            <NuxtLink to="/privacy" class="hover:text-gray-900">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-gray-900">Terms</NuxtLink>
            <NuxtLink to="/sitemap" class="hover:text-gray-900">Sitemap</NuxtLink>
          </div>

          <div class="flex gap-4 text-gray-600">
            <a href="https://twitter.com/webry" target="_blank" rel="noopener noreferrer">
              <Icon name="lucide:twitter" size="20px" class="hover:text-gray-900" />
            </a>
            <a href="https://github.com/webry" target="_blank" rel="noopener noreferrer">
              <Icon name="lucide:github" size="20px" class="hover:text-gray-900" />
            </a>
            <a href="https://linkedin.com/company/webry" target="_blank" rel="noopener noreferrer">
              <Icon name="lucide:linkedin" size="20px" class="hover:text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
