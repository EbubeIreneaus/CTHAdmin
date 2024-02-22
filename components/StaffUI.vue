<template>
    <div class="max-w-md bg-white dark:bg-slate-950 p-5 rounded-lg mx-3" >
        <div>
            <div class="flex justify-between items-center py-3 font-semibold mb-4">
                <h2>Staffs</h2>
                <NuxtLink to="/" class="hover:text-slate-500">new <i class="fa fa-plus-circle"></i></NuxtLink>
            </div>
            <div>
                <ul class="mb-3">
                   <li class=" py-1 rounded-xl my-3" v-for="x in 7" :key="x">
                    <nuxt-link to="/" class="flex gap-5 items-center px-3">
                        <img src="/img/cth_logo_l.png" class="size-8 object-cover ring rounded-full">
                        <span class="font-bold">Okigwe Ebube Ireneaus</span>
                        <span class="font-thin italic text-sm">CEO</span>
                    </nuxt-link> 
                   </li>
                </ul>
                <nuxt-link to="/" class="block text-center  ">load more</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped>

</style>