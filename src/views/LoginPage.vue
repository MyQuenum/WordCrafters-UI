<script setup>
import WelcomeArticle from '../components/WelcomeArticle.vue';
import LoginSection from '../components/LoginSection.vue';
import { useRouter } from 'vue-router';

function redirect(){
  const router = useRouter;
  router.push('/');
}

</script>

<template>
  <main class="w-full min-h-screen md:px-20 lg:flex gap-10 bg-cover bg-[url(src/assets/img/background.png)] bg-fixed font-lora p-8 pt-20 md:pt-32 text-white">
    <button @click="redirect" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mb-4 rounded">Redirect</button>
    <WelcomeArticle class="lg:w-7/12"/>
    <LoginSection class="h-fit"/>
  </main>
</template>
