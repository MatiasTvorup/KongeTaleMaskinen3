<script setup lang="ts">
import { ref } from 'vue'

import Graph from "./Graph.vue";
import Input from "./Input.vue"
import KT3Utils from './KT3Utils';

// import KT3Utils from './KT3Utils.ts';


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

let words = ref([""]);
let count = ref(1);

let dataList = ref(new Map<number, {
  words: Array<string>,
  cutoff: number
}>)


function onMore() {
  count.value++;
  dataList.value.set(count.value, { words: [], cutoff: 0 });
}

function onLess() {
  if (count.value <= 1) return;
  dataList.value.delete(count.value);
  count.value--;
}

function onWordInputChanged(inputWords: string, index: number) {
  if (!dataList.value.has(index)) return;

  inputWords = KT3Utils.cleanString(inputWords);
  let splitWords: Array<string> = inputWords.split(" ");

  const temp = dataList.value.get(index)!;
  temp.words = splitWords;
  dataList.value.set(index, temp);
}

function onCutoffInputChanged(cutoffValue: number, index: number) {
  if (!dataList.value.has(index)) return;
  const temp = dataList.value.get(index)!;
  temp.cutoff = cutoffValue;
  dataList.value.set(index, temp);
}

dataList.value.set(1, { words: ['danmark', 'danmarks'], cutoff: 7.5 });

</script>


<template>
  <div>
    <h1>KongeTaleMaskinen3</h1>

    <Button @click="onMore">More</Button>
    <Button @click="onLess">Less</Button>
  </div>

  <Input v-for="[key, value] in dataList" :key="key" @words-changed="onWordInputChanged($event, key)"
    @cutoff-changed="onCutoffInputChanged($event, key)" :default-value=value.words[0] />

  <Graph v-for="[key, value] in dataList" :key="key" :words="value.words" :cutoff="value.cutoff" />
</template>

<style scoped></style>
