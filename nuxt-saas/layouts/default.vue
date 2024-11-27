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
  <div>
    <header class="flex">
      <div>
        <NuxtLink to="/">Logo</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/features">Features</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/dashboard">Login</NuxtLink>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2025</p>
    </footer>
  </div>
</template>

<style scoped></style>
