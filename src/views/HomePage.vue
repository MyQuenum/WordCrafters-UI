<script setup>
import WelcomeArticle from '../components/WelcomeArticle.vue';
import Feed from '../components/Feed.vue'
</script>

<template>
  <main class="min-h-screen w-full md:px-20 lg:flex gap-20 bg-cover bg-[url(src/assets/img/background.png)] bg-fixed font-lora p-4 pt-8 md:pt-10 text-white">
    <div class="lg:w-4/5">
      <WelcomeArticle />
    </div>
    <Feed/>
  </main>
</template>
