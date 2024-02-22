<template>
    <div class="bg-white dark:bg-slate-950 p-5 rounded-xl">
        <h2 class="font-bold text-lg mb-1">Visitors</h2>
        <div>
            <img src="~/assets/img/world-map.png" class="max-h-[350px]  object-cover mx-auto">
        </div>
        <div class="mt-7 grid grid-cols-3 gap-5">
            <div>
                <p class="text-sm italic mb-1">Nigeria 60%</p>
                <div class="w-full h-1 rounded-full bg-slate-400">
                    <div class="w-[60%] bg-red-500 h-1">

                    </div>
                </div>
            </div>
            <div>
                <p class="text-sm italic mb-1">Ghana 15%</p>
                <div class="w-full h-1 rounded-full bg-slate-400">
                    <div class="w-[15%] bg-green-500 h-1">

                    </div>
                </div>
            </div>
            <div>
                <p class="text-sm italic mb-1">India 20%</p>
                <div class="w-full h-1 rounded-full bg-slate-400">
                    <div class="w-[20%] bg-purple-500 h-1">

                    </div>
                </div>
            </div>
            <div>
                <p class="text-sm italic mb-1">South Africa 5%</p>
                <div class="w-full h-1 rounded-full bg-slate-400">
                    <div class="w-[5%] bg-blue-500 h-1">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>