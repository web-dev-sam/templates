<script setup lang="ts">
interface PricingFeature {
  name: string
  included: boolean
}

interface PricingTier {
  name: string
  price: number
  description: string
  features: PricingFeature[]
  recommended?: boolean
  license: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for side projects and small applications",
    license: "Single project license",
    features: [
      { name: "Full source code access", included: true },
      { name: "Authentication system", included: true },
      { name: "Basic email templates", included: true },
      { name: "Community support", included: true },
      { name: "Future updates", included: false },
      { name: "Premium support", included: false },
      { name: "Multiple projects license", included: false },
      { name: "Custom branding", included: false },
    ],
  },
  {
    name: "Pro",
    price: 149,
    description: "Best for professional developers and teams",
    license: "Unlimited projects license",
    recommended: true,
    features: [
      { name: "Full source code access", included: true },
      { name: "Authentication system", included: true },
      { name: "Basic email templates", included: true },
      { name: "Community support", included: true },
      { name: "Future updates", included: true },
      { name: "Premium support", included: true },
      { name: "Multiple projects license", included: true },
      { name: "Custom branding", included: true },
    ],
  },
]
</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-20">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple, transparent pricing</h1>
        <p class="text-xl text-gray-600">One-time payment, lifetime access. No hidden fees or subscriptions.</p>
      </div>

      <!-- Pricing Cards -->
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div
          v-for="tier in pricingTiers"
          :key="tier.name"
          class="relative rounded-2xl border-2"
          :class="[tier.recommended ? 'border-rose-600 shadow-lg' : 'border-gray-200']"
        >
          <!-- Recommended Badge -->
          <div
            v-if="tier.recommended"
            class="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-rose-600 px-3 py-2 text-sm font-medium text-white text-center"
          >
            Recommended
          </div>

          <div class="p-8">
            <!-- Tier Header -->
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900">{{ tier.name }}</h2>
              <p class="mt-2 text-gray-600">{{ tier.description }}</p>
              <p class="mt-6">
                <span class="text-4xl font-bold text-gray-900">${{ tier.price }}</span>
                <span class="text-gray-600 ml-2">one-time</span>
              </p>
              <p class="mt-2 text-sm text-gray-500">{{ tier.license }}</p>
            </div>

            <!-- Features List -->
            <ul class="space-y-4 mb-8">
              <li
                v-for="feature in tier.features"
                :key="feature.name"
                class="flex items-center gap-3"
                :class="feature.included ? 'text-gray-900' : 'text-gray-400'"
              >
                <Icon
                  :name="feature.included ? 'heroicons:check-circle' : 'heroicons:x-circle'"
                  class="w-5 h-5"
                  :class="feature.included ? 'text-green-500' : 'text-gray-300'"
                />
                {{ feature.name }}
              </li>
            </ul>

            <!-- CTA Button -->
            <NuxtLink
              :to="`/checkout/${tier.name.toLowerCase()}`"
              class="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium transition-colors"
              :class="[
                tier.recommended
                  ? 'bg-rose-600 text-white hover:bg-rose-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
              ]"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-3xl mx-auto mt-20">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Frequently asked questions</h2>
        <div class="space-y-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">What's included in the source code?</h3>
            <p class="text-gray-600">
              You'll get the complete source code, including all components, pages, and functionality shown in the demo.
              Everything is fully customizable and well-documented.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Can I use this for client projects?</h3>
            <p class="text-gray-600">
              The Pro license allows you to use the template for unlimited personal and client projects. The Starter
              license is limited to a single project.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
            <p class="text-gray-600">
              Yes, we offer a 14-day money-back guarantee. If you're not satisfied with the template, we'll provide a
              full refund.
            </p>
          </div>
        </div>
      </div>

      <!-- Money Back Guarantee -->
      <div class="mt-16 text-center">
        <div class="flex items-center justify-center gap-2 text-gray-600">
          <Icon name="heroicons:shield-check" class="w-5 h-5 text-green-500" />
          <span>14-day money-back guarantee</span>
        </div>
      </div>
    </div>
  </div>
</template>
