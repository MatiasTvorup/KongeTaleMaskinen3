<script setup lang="ts">
import { ref } from 'vue'

let props = defineProps(
    {
        defaultValue: { type: String }
    }
);

const emit = defineEmits(['wordsChanged', 'cutoffChanged'])

function wordInputChanged(e) {
    emit('wordsChanged', e.target.value);
}

function cutoffInputChanged(e) {
    emit('cutoffChanged', e.target.value);
}

</script>


<template>
    <div>
        <input text="props.defaultValue" @input="wordInputChanged" placeholder="Words to count">
        <input @input="cutoffInputChanged" type="number" step="0.5" placeholder="Cutoff Value">
    </div>

</template>

<style scoped></style>
