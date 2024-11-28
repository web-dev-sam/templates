<script setup lang="ts"></script>

<template>
  <div class="bg-white min-h-screen">
    <div class="container mx-auto px-4 pt-32 pb-20">
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <div class="text-center mb-8">
          <NuxtImg src="/logo.png" alt="Name" class="h-16 saturate-[9] hue-rotate-[350deg]" />
          <h1 class="text-2xl font-bold text-gray-900 mb-2">Welcome to SaaS</h1>
          <p class="text-gray-600">Sign in to your account</p>
        </div>

        <div class="space-y-4 mb-6">
          <a
            href="/api/auth/google"
            class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <Icon name="logos:google-icon" size="20px" />
            <span class="font-medium">Continue with Google</span>
          </a>

          <a
            href="/api/auth/github"
            class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <Icon name="logos:github-icon" size="20px" />
            <span class="font-medium">Continue with GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
