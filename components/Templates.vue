<template>
    <div class="bg-white dark:bg-slate-950 p-5 rounded-xl min-h-[500px] h-full">
        <div class="flex justify-between items-center py-3 font-semibold mb-4">
                <h2>Templates</h2>
                <NuxtLink to="/temp/upload" class="hover:text-slate-500">new <i class="fa fa-plus-circle"></i></NuxtLink>
            </div>
        <div  class="w-full h-[85%]  flex flex-col gap-5 justify-center items-center" v-if="templates.length < 1">
            <p class="italic font-semibold">No Templates Found</p>
            <NuxtLink to="/temp/upload" class="ring p-5 rounded-lg"><i class="fa fa-plus"></i></NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const templates: any = []
</script>

<style scoped>

</style>