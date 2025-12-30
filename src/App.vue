<script setup lang="ts">
import { ref } from 'vue'

import Graph from "./Graph.vue";
import Input from "./Input.vue"
import KT3Utils from './KT3Utils';

import style from './style.css'


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

  let cleanWords: Array<string> = [];
  splitWords.forEach((word) => {
    if (word == "") return;
    if (word == " ") return;
    cleanWords.push(word);
  });

  const temp = dataList.value.get(index)!;
  temp.words = cleanWords;
  dataList.value.set(index, temp);
}

function onCutoffInputChanged(cutoffValue: number, index: number) {
  if (!dataList.value.has(index)) return;
  const temp = dataList.value.get(index)!;
  temp.cutoff = cutoffValue;
  dataList.value.set(index, temp);
}

dataList.value.set(1, { words: ['danmark', 'danmarks'], cutoff: 7.5 });
dataList.value.set(2, { words: ['tak'], cutoff: 4.5 });
dataList.value.set(3, { words: ['Mary'], cutoff: 3.5 });
dataList.value.set(4, { words: ['Familie', 'Familier'], cutoff: 3.5 });
dataList.value.set(5, { words: ['Europa'], cutoff: 3.5 });
dataList.value.set(6, { words: ['Verden'], cutoff: 2.5 });
dataList.value.set(7, { words: ['Nytår'], cutoff: 2.5 });
dataList.value.set(8, { words: ['Grønland'], cutoff: 1.5 });
dataList.value.set(9, { words: ['Færøerne'], cutoff: 1.5 });

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
</script>


<template>
  <div class="flex flex-col min-h-screen justify-center items-center bg-gray-300">

    <h1 class="font-bold underline">KongeTaleMaskinen3</h1>

    <!-- <div>
      <button @click="onMore">More</button>
      <button @click="onLess">Less</button>
    </div>

    <Input v-for="[key, value] in dataList" :key="key" @words-changed="onWordInputChanged($event, key)"
      @cutoff-changed="onCutoffInputChanged($event, key)" :default-value=value.words[0] /> -->

    <Graph v-for="[key, value] in dataList" :key="key" :words="value.words" :cutoff="value.cutoff" />
  </div>
</template>

<style scoped></style>
