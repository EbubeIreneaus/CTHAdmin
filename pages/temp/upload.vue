<template>
    <div class="min-h-[300px]">
        <div class="mt-16 py-5 bg-white dark:bg-slate-950 max-w-lg mx-auto">
            <form class="px-4">
                <div>
                    <div class="mb-5">
                        <label class="font-semibold mb-1 mx-1">Project Title: <span class="text-red-500">*</span></label>
                        <input type="text" class="block w-full py-2 outline-none border ps-2 rounded-md text-black" />
                    </div>
                    <div>
                        <label class="font-semibold mb-1 mx-1">Project URL: <span class="text-red-500">*</span></label>
                        <input type="url" class="block w-full py-2 outline-none border ps-2 rounded-md text-black " />
                    </div>
                   
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>