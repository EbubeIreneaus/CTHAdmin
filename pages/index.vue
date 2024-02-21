<template>
    <div class="w-screen h-screen dark:bg-slate-900">
        <h2>{{ $colorMode.preference }}</h2>
        <button @click="$colorMode.preference = 'light'">change mode</button>
    </div>
</template>

<script setup lang="ts">


onMounted(()=>{

})
</script>

<style scoped>

</style>