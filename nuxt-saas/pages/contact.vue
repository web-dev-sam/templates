<script setup lang="ts">
interface ContactMethod {
  icon: string
  title: string
  description: string
  link?: string
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const contactMethods: ContactMethod[] = [
  {
    icon: "heroicons:chat-bubble-left-right",
    title: "Discord Community",
    description: "Join our community for quick support",
    link: "https://discord.gg/yourserver",
  },
  {
    icon: "heroicons:envelope",
    title: "Email Support",
    description: "support@yourdomain.com",
    link: "mailto:support@yourdomain.com",
  },
  {
    icon: "heroicons:document-text",
    title: "Documentation",
    description: "Read our detailed documentation",
    link: "/docs",
  },
]

const formData = ref<FormData>({
  name: "",
  email: "",
  subject: "",
  message: "",
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

async function handleSubmit() {
  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    showSuccess.value = true
    formData.value = { name: "", email: "", subject: "", message: "" }
  } catch (error) {
    console.error("Error submitting form:", error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in touch</h1>
        <p class="text-xl text-gray-600">Have questions? We're here to help you get started.</p>
      </div>

      <!-- Contact Methods -->
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="method in contactMethods"
          :key="method.title"
          class="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center"
        >
          <div class="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon :name="method.icon" class="w-6 h-6 text-rose-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ method.title }}</h3>
          <p class="text-gray-600 mb-4">{{ method.description }}</p>
          <NuxtLink v-if="method.link" :to="method.link" class="text-rose-600 hover:text-rose-700 font-medium">
            Get Support →
          </NuxtLink>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-xl border border-gray-200 p-8">
          <form @submit.prevent="handleSubmit">
            <div class="space-y-6">
              <!-- Success Message -->
              <div v-if="showSuccess" class="bg-green-50 text-green-800 rounded-lg p-4 mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>

              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1"> Name </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1"> Email </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1"> Subject </label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1"> Message </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                />
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon v-if="isSubmitting" name="heroicons:arrow-path" class="animate-spin mr-2 w-5 h-5" />
                {{ isSubmitting ? "Sending..." : "Send Message" }}
              </button>
            </div>
          </form>
        </div>

        <!-- Additional Info -->
        <div class="mt-8 text-center text-gray-600">
          <p>Business Hours: Monday - Friday, 9AM - 5PM EST</p>
        </div>
      </div>
    </div>
  </div>
</template>
