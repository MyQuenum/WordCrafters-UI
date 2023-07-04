<template>
<div class="bg-gray-950 bg-opacity-40 text-center p-4 rounded lg:flex-grow mx-auto">
        <form @submit.prevent="signin()">
            <h2 class="bg-white m-4 py-1 rounded text-2xl font-semibold text-orange-500">Login Here</h2>
            <input v-model="user.name" type="text" name="name" placeholder="Enter your username" required class="block  mx-auto my-4 w-10/12 bg-gray-700 bg-opacity-20 p-2 hover:border-b hover:border-b-orange-500 focus:outline-none">
            <input v-model="user.password" type="password" name="password" placeholder="Enter your password" required class="block  mx-auto mb-4 w-10/12 bg-gray-700 bg-opacity-20 p-2 hover:border-b hover:border-b-orange-500 focus:outline-none">
            <input class="block mx-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded" type="submit" value="Sign in">
        </form>
        <form @submit.prevent="signup()">
            <p class="text-orange-500 font-semibold pt-8">Don't have an account?</p>
            <input v-model="newUser.name" type="text" name="name" placeholder="Set a username" required class="block  mx-auto my-4 w-10/12 p-2 bg-gray-700 bg-opacity-20 hover:border-b hover:border-b-orange-500 focus:outline-none">
            <input v-model="newUser.email" type="email" name="email" placeholder="Enter your Email here" required class="block  mx-auto mb-4 w-10/12 bg-gray-700 bg-opacity-20 p-2 hover:border-b hover:border-b-orange-500 focus:outline-none">
            <input v-model="newUser.password" type="password" name="password" placeholder="Set your password" required class="block  mx-auto mb-4 w-10/12 bg-gray-700 bg-opacity-20 p-2 hover:border-b hover:border-b-orange-500 focus:outline-none">
            <input class="block mx-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded" type="submit" value="Signup">
        </form>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

import axios from 'axios';
import { reactive } from 'vue';
const user = reactive({
    name : "",
    password: ""
});

const newUser = reactive({
    name : "",
    email: "",
    password: ""
});


function signin() {
    axios.post('/signin', {
        name: user.name,
        password: user.password
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem('WC-token', JSON.stringify(response.data.token));
            
            router.push('/');
        }
    }).catch(error => {
            console.error(error);
    });
}

function signup() {
    axios.post('/signup', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    }).then(response => {
        if (response.data.token) {
            localStorage.setItem('WC-token', JSON.stringify(response.data.token));

            router.push('/');
        }
    }).catch(error => {
            console.error(error);
    });
}
</script>