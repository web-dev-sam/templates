<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

interface Technology {
  icon: string
  name: string
}

const features: Feature[] = [
  {
    icon: "heroicons:rocket-launch",
    title: "Authentication Ready",
    description: "Complete authentication system with social logins, email verification, and password reset",
  },
  {
    icon: "heroicons:credit-card",
    title: "Stripe Integration",
    description: "Built-in subscription management and payment processing with Stripe",
  },
  {
    icon: "heroicons:chart-bar",
    title: "Analytics Dashboard",
    description: "Beautiful analytics dashboard with charts and key metrics visualization",
  },
  {
    icon: "heroicons:device-phone-mobile",
    title: "Responsive Design",
    description: "Fully responsive layouts that work perfectly on any device",
  },
  {
    icon: "heroicons:shield-check",
    title: "Security First",
    description: "Built with security best practices including CSRF protection and XSS prevention",
  },
  {
    icon: "heroicons:paper-airplane",
    title: "Email System",
    description: "Integrated email notification system with beautiful templates",
  },
]

const technologies: Technology[] = [
  { icon: "simple-icons:nuxtdotjs", name: "Nuxt 3" },
  { icon: "simple-icons:typescript", name: "TypeScript" },
  { icon: "simple-icons:tailwindcss", name: "Tailwind CSS" },
  { icon: "simple-icons:prisma", name: "Prisma" },
  { icon: "simple-icons:eslint", name: "ESLint" },
  { icon: "simple-icons:vitest", name: "Vitest" },
  { icon: "simple-icons:stripe", name: "Stripe" },
  { icon: "simple-icons:docker", name: "Docker" },
]
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Header Section -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Everything you need to build faster</h1>
        <p class="text-xl text-gray-600">
          A complete solution packed with all the features you need to launch your SaaS product quickly and efficiently.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <div class="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
            <Icon :name="feature.icon" class="w-6 h-6 text-rose-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>

      <!-- Technologies Section -->
      <div class="mt-24 max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Built with modern technologies</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="tech in technologies" :key="tech.name" class="text-center">
            <Icon :name="tech.icon" class="w-12 h-12 mx-auto mb-3 text-gray-700" />
            <p class="font-medium">{{ tech.name }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-24 text-center mb-8">
        <NuxtLink
          to="/auth/signin"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition-colors"
        >
          Start Building Today
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
