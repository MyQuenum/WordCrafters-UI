<template>
    <div class="lg:w-10/12 mt-8 bg-gray-950 bg-opacity-50 rounded p-2 md:p-6 ">
        <h2 class="text-2xl text-center text-white font-bold my-2">Here is <span class="text-orange-500">Your Feed</span></h2>
        <div class="h-fit lg:max-h-[75vh] overflow-y-auto">
            <div v-for="post in posts.data" :key="post.id">
                <div class="my-6" >
                    <h3 class="text-white font-bold my-2 text-xl">{{post.title+" " }}<span class="text-orange-500">by {{ post.post_user.name }} </span></h3>
                    <p  class="text-justify font-pdisplay"><span class="text-orange-500 text-3xl">"</span>{{ post.content }}<span class="text-orange-500 text-3xl">"</span></p>
                    <!-- <div class="flex gap-5 items-center my-4">
                        <span class="text-orange-500 font-semibold"><a href="">Edit</a></span>
                        <form action="" method="POST" class=" bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                            <input type="submit" value="Delete">
                        </form>
                    </div> -->
                </div>
                <!-- <h3 class="text-2xl font-bold">Nothing to show for the moment. Why don't you make the first step? <span class="font-normal text-orange-500">Start crafting!!</span></h3> -->
            </div>
        </div>
    </div>
</template>

<script setup>

    import { ref, onMounted, onBeforeMount } from 'vue';
    import axios from 'axios';


    const posts = ref([]);

    onBeforeMount(
        () =>{
            axios.get('/feed').then(
                response => {
                    posts.value = response.data;
                }
            ).catch(error => {
                console.error(error);
            });
        }
    );
</script>