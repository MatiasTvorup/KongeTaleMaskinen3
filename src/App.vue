<script setup lang="ts">
import { ref } from 'vue'

import Graph from "./Graph.vue";
import Input from "./Input.vue"
import KT3Utils from './KT3Utils';

import style from './style.css'

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

let id: number = 0;

dataList.value.set(++id, { words: ['danmark', 'danmarks'], cutoff: 7.5 });
dataList.value.set(++id, { words: ['danmark', 'danmarks'], cutoff: 6.5 });
dataList.value.set(++id, { words: ['tak'], cutoff: 4.5 });
dataList.value.set(++id, { words: ['Mary'], cutoff: 3.5 });
dataList.value.set(++id, { words: ['Familie', 'Familier'], cutoff: 3.5 });
dataList.value.set(++id, { words: ['Europa'], cutoff: 3.5 });
dataList.value.set(++id, { words: ['Verden'], cutoff: 2.5 });
dataList.value.set(++id, { words: ['Nytår'], cutoff: 2.5 });
dataList.value.set(++id, { words: ['Grønland'], cutoff: 1.5 });
dataList.value.set(++id, { words: ['Færøerne'], cutoff: 1.5 });

/* 
Mary - 3,5 - 96%
Europa - 3,5 - 92%
Nytår - 2,5 - 74%
Grønland - 1,5 - 70%
Tak - 4,5 - 66%
Verden - 2,5 - 66%
Familie(r) - 3,5 - 59%
Færøerne - 1,5 - 59%
Danmark(s) - 7,5 - 51%

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
