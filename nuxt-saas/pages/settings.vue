<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  layout: "internal",
})

const { user } = useUserSession()

const showDeleteModal = ref(false)
const deleteConfirmation = ref("")
const isDeleting = ref(false)

async function handleDeleteAccount() {
  if (deleteConfirmation.value !== user.value.email) {
    return
  }

  isDeleting.value = true
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Handle successful deletion
    navigateTo("/auth/login")
  } catch (error) {
    console.error("Error deleting account:", error)
  } finally {
    isDeleting.value = false
    showDeleteModal.value = false
  }
}
</script>

<template>
  <div>
    <!-- Top Navigation -->
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Settings</h1>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Profile Section -->
      <div class="bg-white rounded-lg mb-8">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-900">Profile Information</h2>
        </div>
        <div class="p-6">
          <!-- Avatar -->
          <div class="flex items-center mb-8">
            <img :src="user.picture" :alt="`${user.givenName}'s avatar`" class="w-20 h-20 rounded-full bg-gray-200" />
            <div class="ml-6">
              <p class="text-sm text-gray-500">Profile Picture</p>
            </div>
          </div>

          <!-- Personal Information -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">First Name</label>
              <p class="mt-1 p-3 bg-gray-50 rounded-md text-gray-900">
                {{ user.given_name }}
              </p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Last Name</label>
              <p class="mt-1 p-3 bg-gray-50 rounded-md text-gray-900">
                {{ user.family_name }}
              </p>
            </div>

            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <p class="mt-1 p-3 bg-gray-50 rounded-md text-gray-900">
                {{ user.email }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Danger Zone -->
      <div class="bg-white rounded-lg">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-red-600">Danger Zone</h2>
        </div>
        <div class="p-6">
          <p class="text-sm text-gray-500 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            @click="showDeleteModal = true"
          >
            Delete Account
          </button>
        </div>
      </div>
    </main>

    <!-- Delete Account Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Delete Account</h3>
        <p class="text-sm text-gray-500 mb-4">
          This action cannot be undone. To confirm, please type your email address:
          <span class="font-medium text-gray-900">{{ user.email }}</span>
        </p>

        <input
          v-model="deleteConfirmation"
          type="text"
          class="w-full px-3 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          placeholder="Enter your email"
        />

        <div class="flex justify-end gap-4">
          <button
            class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            @click="showDeleteModal = false"
          >
            Cancel
          </button>
          <button
            :disabled="deleteConfirmation !== user.email || isDeleting"
            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
            @click="handleDeleteAccount"
          >
            <Icon v-if="isDeleting" name="heroicons:arrow-path" class="animate-spin -ml-1 mr-2 h-4 w-4" />
            {{ isDeleting ? "Deleting..." : "Delete Account" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
