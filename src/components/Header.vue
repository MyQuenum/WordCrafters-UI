<template>
    <header class="w-full bg-black text-white p-3 md:p-6 flex items-center  sticky top-0 left-0 z-50" :class="headerClass">
        <h1 class="font-bela text-4xl md:text-5xl relative flex-initial">
            <span class="absolute left-0">W</span>
            <span class="text-orange-500 ml-[23px] md:ml-[29px]">C</span>
        </h1>
        <nav v-show="auth.state" class="flex flex-grow justify-between px-8">
            <RouterLink to="/" class="mx-auto flex flex-col-reverse items-center">
                <span class="hidden md:block">Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 hover:text-orange-500">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
            </RouterLink>
            <RouterLink to="/posts" class="mx-auto flex flex-col-reverse items-center">
                <span class="hidden md:block">Posts</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 hover:text-orange-500">
                    <path d="M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 000-5.25H5.625zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3 15.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3.75 18.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
                </svg>
            </RouterLink>
            <RouterLink to="/craft" class="mx-auto flex flex-col-reverse items-center">
                <span class="hidden md:block">New post</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-orange-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </RouterLink>
            <RouterLink to="" class="mx-auto flex flex-col-reverse items-center">
                <span class="hidden md:block">Notifications</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:text-orange-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            </RouterLink>
        </nav >
        <div v-show="auth.state" class="flex-initial px-3 py-1 rounded bg-orange-500">
            <RouterLink to="/login">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
            </RouterLink>
        </div>
    </header>
</template>

<script setup>

import  {authInstance} from '@/stores/auth.js';
import { onBeforeUpdate, ref, watchEffect } from 'vue';

const auth = ref(authInstance());
const headerClass = ref('');

watchEffect(()=>{
    headerClass.value = auth.value.state ? 'justify-between' : 'justify-center';
    console.log(headerClass.value);
});
</script>

    