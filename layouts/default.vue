<template>
    <div class="min-h-screen w-screen bg-[#DADEE1] dark:bg-slate-950">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'dark'
watch(()=>colorMode.preference, ()=>{
    if (colorMode.preference == 'dark') {
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
})

onMounted(()=>{
    if (colorMode.preference == 'dark') {
        document.documentElement.classList.add('dark')
    }
})
</script>

<style scoped>

</style>