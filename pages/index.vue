<template>
    <div class="">
        <div class="block">
            <h1 class="font-bold text-2xl p-5">DASHBOARD</h1>
            <!-- <NuxtLink to="/" class="float-rignt p-5 inline-block font-bold">Home</NuxtLink> -->
        </div>

        <div class="flex flex-col lg:flex-row justify-center px-5 gap-5 mb-7">
            <div class=" ">
                <SalesGraphUi />
            </div>
            <div class="">
                <InfoUI />
            </div>
        </div>

        <div class="mb-5 flex gap-5 px-5">
            <div class="max-w-md w-full">
                <StaffUI />
            </div>
            <div class="flex-grow ">
                <WorldClient />
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