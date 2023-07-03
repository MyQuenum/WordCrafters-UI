import { computed, ref } from "vue";
import { defineStore } from "pinia";

export  const authInstance = defineStore('auth', () => {
    const state = computed(() => {
        const token = localStorage.getItem('WC-token');
        return (token !== null);
    });

    return {state};
});