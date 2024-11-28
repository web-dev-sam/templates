<script setup lang="ts">
const { loggedIn, user, clear: clearSession } = useUserSession()
const userSettingsOpen = ref(false)

if (!loggedIn.value) {
  navigateTo("/")
}

function logOut() {
  clearSession()
  navigateTo("/")
}
</script>

<template>
  <div v-if="user" class="container">
    <header class="flex justify-between my-10 align-middle h-9 items-center text-gray-700 container">
      <div class="flex items-center">
        <NuxtLink to="/dashboard">
          <NuxtImg
            src="/logo.png"
            alt="Name"
            class="h-9 saturate-[9] hue-rotate-[350deg]"
            :preload="{ fetchPriority: 'high' }"
          />
        </NuxtLink>
      </div>
      <div class="flex gap-16">
        <NuxtLink to="/getting-started" class="hover:text-gray-900">Getting Started</NuxtLink>
        <NuxtLink to="/features" class="hover:text-gray-900">Features</NuxtLink>
      </div>
      <div class="flex items-center relative">
        <NuxtImg
          :src="user.picture"
          :alt="user.name"
          class="h-9 w-9 rounded-full"
          role="button"
          @click="userSettingsOpen = !userSettingsOpen"
        ></NuxtImg>
        <UiCommand v-model:open="userSettingsOpen" class="rounded-lg shadow-md w-[16ch] absolute top-12 right-0">
          <UiCommandList class="my-2 mx-1">
            <UiCommandItem value="Settings" class="py-2 cursor-pointer">
              <Icon name="tabler:settings-2" class="mr-2 h-4 w-4" />
              <span>Settings</span>
            </UiCommandItem>
            <UiCommandItem value="Logout" class="py-2 cursor-pointer" role="button" @click="logOut">
              <Icon name="tabler:logout-2" class="mr-2 h-4 w-4" />
              <span>Logout</span>
            </UiCommandItem>
          </UiCommandList>
        </UiCommand>
      </div>
    </header>
    <main class="min-h-[calc(100vh-207px)] container">
      <!-- TODO: Remove nonesense min-h when more content -->
      <slot />
    </main>
    <footer class="border-t border-gray-200">
      <div class="container mx-auto py-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <NuxtImg src="/logo.png" alt="Name" class="h-6 saturate-[9] hue-rotate-[350deg]" />
            <span class="text-gray-600 text-sm">&copy; 2025 Webry</span>
          </div>

          <div class="flex gap-8 text-sm text-gray-600">
            <NuxtLink to="/privacy" class="hover:text-gray-900">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-gray-900">Terms</NuxtLink>
          </div>

          <div class="flex gap-4 text-gray-600">
            <NuxtLink to="https://twitter.com/webry" target="_blank">
              <Icon name="simple-icons:twitter" size="20px" class="hover:text-gray-800" />
            </NuxtLink>
            <NuxtLink to="https://github.com/webry" target="_blank">
              <Icon name="simple-icons:github" size="20px" class="hover:text-gray-800" />
            </NuxtLink>
            <NuxtLink to="https://linkedin.com/company/webry" target="_blank">
              <Icon name="simple-icons:linkedin" size="20px" class="hover:text-gray-800" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
