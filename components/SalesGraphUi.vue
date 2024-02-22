<template>
    <div>
        <div class="max-h-[400px] bg-white dark:bg-slate-950 rounded-2xl p-1 ">
            <ClientOnly>
                <nuxt-plotly :data="data" :layout="layout" :config="config" style="width:100%; max-height:370px;">

                </nuxt-plotly>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
const data: any = [{
    x: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    y: [1000, 500, 200, 300, 700, 800, 200, 160, 900, 900, 1000, 500, 900],
    mode: 'lines',
}]

let layout = {
    xaxis: {
        showgrid: false,
        showline: true,
    },

    yaxis:{
        showgrid: false,
        showline: true,
    },

    title: 'Sales Statictics',
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