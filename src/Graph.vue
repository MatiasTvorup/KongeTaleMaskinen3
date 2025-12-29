<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({ words: { type: Array<String>, required: true }, cutoff: { type: Number, required: true } });

// import KT3Utils from './KT3Utils.ts';
// import { Bar } from 'vue-chartjs';
// import Chart, { CategoryScale } from 'chart.js/auto';
// // import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
// Chart.register(CategoryScale);

// const chartOptions = {
//     responsive: true,
//     annotation: {
//         annotations: [
//             {
//                 type: 'line',
//                 mode: 'horizontal',
//                 scaleID: 'y-axis-0',
//                 value: '2',
//                 borderColor: '#tomato',
//                 borderWidth: 1
//             }],
//         drawTime: "afterDraw"
//     }
// };

// const chartData = ref({
//     labels: KT3Utils.timeline(),
//     datasets: [{ label: 'Ratings', data: KT3Utils.wordTimeLine(['danmark', 'danmarks']), backgroundColor: ['#ff0000', '#ffff00'] }]
// });

</script>


<template>
    <h2>{{ linkedData }}</h2>
    <!-- <Bar :data=chartData :options=chartOptions></Bar> -->
</template>

<style scoped></style>
