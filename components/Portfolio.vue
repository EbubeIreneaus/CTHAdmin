<template>
    <div class="bg-white dark:bg-slate-950 p-5 rounded-xl min-h-[500px] h-full">
        <div class="flex justify-between items-center py-3 font-semibold mb-4">
                <h2>Portfolio</h2>
                <NuxtLink to="/" class="hover:text-slate-500">new <i class="fa fa-plus-circle"></i></NuxtLink>
            </div>
        <div  class="w-full h-[85%]  flex flex-col gap-5 justify-center items-center" v-if="portfolio.length < 1">
            <p class="italic font-semibold">No Portfolio Project Found</p>
            <NuxtLink to="" class="ring p-5 rounded-lg"><i class="fa fa-plus"></i></NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const portfolio: any = []
</script>

<style scoped>

</style>