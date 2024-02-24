<template>
    <div class="w-full bg-white dark:bg-slate-950 py-7 px-5 rounded-lg">
        <h2 class="font-bold">Page Visit</h2>
        <div>
            <ClientOnly>
                <nuxt-plotly :data="Chartdata" :layout="layout" :config="config">

                </nuxt-plotly>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
let data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    y: [1000, 500, 200, 300, 700, 800, 200, 160, 900, 900, 1000, 500, 900],
    type: 'pie'
}

let Chartdata = [data]

let layout = {
    title: 'Page Visits',
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent'
}

let config = {
    displayModeBar: false,
    displayLogo: false
}
</script>

<style scoped>

</style>