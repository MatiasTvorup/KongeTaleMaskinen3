<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import KT3Utils from './KT3Utils.ts';
import { Bar, Doughnut } from 'vue-chartjs';
// import Chart, { CategoryScale } from 'chart.js/auto';

import { Chart, CategoryScale, ArcElement, Tooltip, Legend } from 'chart.js/auto'
// import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale, ArcElement, Tooltip, Legend);

let props = defineProps(
    {
        words: { type: Array<string>, required: true },
        cutoff: { type: Number, required: true }
    }
);

let titles = ref(props.words);
let percentageOver = ref(0);
let percentageUnder = ref(0);

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



const doughnutData = ref({
    labels: ['Over', 'Under'],
    datasets: [
        {
            backgroundColor: ['#0000AA', '#000055'],
            data: [0, 0]
        }
    ]
});

const doughnutOptions = {
    responsive: true
}

watchEffect(() => {
    let wordCount: Array<number> = KT3Utils.wordTimeLine(props.words);

    let over: number = 0;
    let under: number = 0;

    wordCount.forEach((count) => {
        if (count > props.cutoff) {
            over++;
        }
        if (count < props.cutoff) {
            under++;
        }
    });

    doughnutData.value = {
        labels: ['Over', 'Under'],
        datasets: [
            {
                backgroundColor: ['#0000AA', '#000055'],
                data: [over, under]
            }
        ]
    };

    let total = over + under;
    percentageOver.value = over / total * 100;
    percentageUnder.value = under / total * 100;
})

const chartData = ref({
    labels: KT3Utils.timeline(),
    datasets: [{ data: KT3Utils.wordTimeLine(props.words), backgroundColor: ['#0000AA'] }]
});

watchEffect(() => {
    chartData.value = {
        labels: KT3Utils.timeline(),
        datasets: [{ data: KT3Utils.wordTimeLine(props.words), backgroundColor: ['#0000AA'] }]
    }

    titles.value = [];
    props.words.forEach((word) => {
        titles.value.push(word.toUpperCase());
    });
});

</script>


<template>
    <h2>{{ titles }}</h2>
    <ul>
        <li>Over {{ props.cutoff }}: {{ percentageOver.toFixed(2) }}%</li>
        <li>Under {{ props.cutoff }}: {{ percentageUnder.toFixed(2) }}%</li>
    </ul>

    <div>
        <Bar :data=chartData :options=chartOptions></Bar>
        <Doughnut :data="doughnutData" :options="doughnutOptions" />
    </div>
</template>

<style scoped></style>
