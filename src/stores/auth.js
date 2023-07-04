import { computed, ref} from "vue";
import { defineStore } from "pinia";

export const authInstance = defineStore('auth', () => {
    const token = ref(localStorage.getItem('WC-token'));

    // Ajoutez une dépendance réactive explicite sur la variable token
    const state = computed(() => {
        return token.value !== null;
    });
    
    return { state };
});

    // const token = ref(localStorage.getItem('WC-token'));

    // // Ajoutez une dépendance réactive explicite sur la variable token
    // const state = computed(() => {
    //     return token.value !== null;
    // });

    // // Surveillez les modifications de la valeur dans le localStorage
    // watch(() => localStorage.getItem('WC-token'), (newValue) => {
    //     token.value = newValue;
    // });

    // return { state };