<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import KT3Utils from './KT3Utils.ts';
import { Bar } from 'vue-chartjs';
import Chart, { CategoryScale, Legend } from 'chart.js/auto';
// // import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
Chart.register(CategoryScale);

let props = defineProps(
    {
        words: { type: Array<string>, required: true },
        cutoff: { type: Number, required: true }
    }
);

const chartOptions = {
    responsive: true,
    plugins: {
        legend: { display: false, },
    },
    annotation: {
        annotations: [
            {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '2',
                borderColor: '#tomato',
                borderWidth: 1
            }],
        drawTime: "afterDraw"
    }
};

const chartData = ref({
    labels: KT3Utils.timeline(),
    datasets: [{ data: KT3Utils.wordTimeLine(props.words), backgroundColor: ['#ff0000', '#ffff00'] }]
});

watchEffect(() => {
    chartData.value = {
        labels: KT3Utils.timeline(),
        datasets: [{ data: KT3Utils.wordTimeLine(props.words), backgroundColor: ['#ff0000', '#ffff00'] }]
    }
});

</script>


<template>
    <h2>{{ props.words }} : {{ props.cutoff }}</h2>
    <Bar :data=chartData :options=chartOptions></Bar>
</template>

<style scoped></style>
