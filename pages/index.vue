<template>
    <div class="">
        <div class="block">
            <h1 class="font-bold text-2xl p-5">DASHBOARD</h1>
            <!-- <NuxtLink to="/" class="float-rignt p-5 inline-block font-bold">Home</NuxtLink> -->
        </div>

        <div class="flex px-5 gap-5">
            <div class="flex-grow ">
                <SalesGraphUi />
            </div>
            <div>
                <InfoUI />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


onMounted(()=>{

})
</script>

<style scoped>

</style>