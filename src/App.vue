<script setup lang="ts">
import { ref } from 'vue'

import Graph from "./Graph.vue";

import KT3Utils from './KT3Utils.ts';
import { Bar } from 'vue-chartjs';
import Chart, { CategoryScale } from 'chart.js/auto';
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
Chart.register(CategoryScale);

// const count2023 = KT3Utils.countOccurences(KT3Utils.cleanString(t2023));

const chartOptions = {
  responsive: true,
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
  datasets: [{ label: 'Ratings', data: [1, 2, 3, 4, 5], backgroundColor: ['#ff0000', '#ffff00'] }]
});

function changeData() {
  chartData.value = {
    labels: KT3Utils.timeline(),
    datasets: [{ label: 'danmark', data: KT3Utils.wordTimeLine(['danmark', 'danmarks']), backgroundColor: ['#ff0000', '#ffff00'] }]
  }
}

/* 
Danmark(s) - 7,5
Tak - 4,5
Mary - 3,5
Familie(r) - 3,5
Europa - 3,5
Verden - 2,5
Nytår - 2,5
Grønland - 1,5
Færøerne - 1,5

*/

const msg = "data";

</script>


<template>
  <h1>KongeTaleMaskinen3</h1>
  <Graph :linked-data="msg" />
  <button @click="changeData">Change</button>
  <Bar :data=chartData :options=chartOptions></Bar>
</template>

<style scoped></style>
