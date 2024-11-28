<script setup lang="ts">
// TODO: Add SEO meta tags (that arent globally already there)
useSeoMeta({
  title: "SaaS Name",
  ogTitle: "SaaS Name",
  ogUrl: "https://saas-name.com/",
  ogType: "website",
  description:
    "SaaS Name is a whatever you do, we make it easy to do it online. Join our community and grow your business with us.",
  ogDescription:
    "SaaS Name is a whatever you do, we make it easy to do it online. Join our community and grow your business with us.",
  ogImage: "https://saas-name.com/_nuxt/mesmerizing-image.png",
})
</script>

<template>
  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
