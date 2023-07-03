<template>
    <article>
        <h2 class="text-3xl font-pdisplay font-semibold w-60">Weaving <span class="text-orange-500">Words, Crafting</span> Minds</h2>
        <p class="py-4 text-justify">Welcome to WordCrafters, where words come alive, minds are crafted. Explore captivating texts by talented authors. Join our community of passionate word weavers. Be inspired, provoked, and connected. Unleash your creativity, share your craft. Together, let's weave words that shape minds and ignite imagination.</p>
        <RouterLink to="/craft" v-show="auth.state">
            <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mb-4 rounded">Start Crafting</button>
        </RouterLink>
    </article>
</template>

<script setup>

import { RouterLink } from 'vue-router';
import {authInstance} from '@/stores/auth.js';

const auth = authInstance();


</script>