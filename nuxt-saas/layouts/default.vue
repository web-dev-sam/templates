<script setup lang="ts">
// Imports
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
    <header class="flex justify-between my-10 align-middle leading-9">
      <div>
        <NuxtImg src="/logo.png" alt="Logo" height="36" />
      </div>
      <div class="flex gap-8 text-gray-700">
        <NuxtLink to="/features">Features</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/dashboard" class="text-gray-700">Login</NuxtLink>
      </div>
    </header>
    <main class="min-h-screen">
      <slot />
    </main>
    <footer>
      <p>&copy; 2025</p>
    </footer>
  </div>
</template>

<style scoped></style>
