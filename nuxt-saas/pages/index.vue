<script lang="ts" setup></script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 pt-32 pb-20">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Main Heading -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build amazing web apps faster than ever
        </h1>

        <!-- Subheading -->
        <p class="text-xl text-gray-600 mb-10 leading-relaxed">
          The modern SaaS starter template that helps you launch your product in days, not months. Built with Nuxt and
          TypeScript.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/dashboard"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-rose-600 hover:bg-rose-700 transition-colors"
          >
            Get Started
          </NuxtLink>

          <NuxtLink
            to="/features"
            class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Learn More
          </NuxtLink>
        </div>

        <!-- Trust Badge -->
        <div class="mt-12 text-sm text-gray-500">
          <p class="mb-4">Trusted by developers worldwide</p>
          <div class="flex justify-center items-center gap-8">
            <Icon name="simple-icons:github" size="24px" />
            <Icon name="simple-icons:typescript" size="24px" />
            <Icon name="simple-icons:nuxtdotjs" size="24px" />
            <Icon name="simple-icons:tailwindcss" size="24px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
