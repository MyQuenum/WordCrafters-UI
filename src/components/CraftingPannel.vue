<template>
    <div>
        <form action="/create-new-post" method="POST" class="text-center bg-gray-950 bg-opacity-50 rounded p-2">
            <h2 class="text-2xl text-white font-bold my-2">Got some inspiration? <span class="block text-orange-500">Post it here!</span></h2>
            <input type="text" name="title" placeholder="Set a title here..." class="block  mx-auto my-4 w-10/12 bg-gray-700 bg-opacity-20 font-bold text-xl p-2 hover:border-b hover:border-b-orange-500 focus:outline-none">
            <textarea name="content" rows="5" placeholder="Write your text here..." class="block  mx-auto mb-4 w-10/12 bg-gray-700 bg-opacity-20 p-2 hover:border-b hover:border-b-orange-500 focus:outline-none"></textarea>
            <input class="block mx-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded" type="submit" value="Post">
        </form>
    </div>
</template>