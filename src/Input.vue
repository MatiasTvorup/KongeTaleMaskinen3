<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['wordsChanged', 'cutoffChanged'])

function wordInputChanged(e) {
    emit('wordsChanged', e.target.value);
}

function cutoffInputChanged(e) {
    emit('wordsChanged', e.target.value);
}

</script>


<template>
    <div>
        <input @input="wordInputChanged" placeholder="Words to count">
        <input @input="cutoffInputChanged" type="number" step="0.5" placeholder="Cutoff Value">
    </div>

</template>

<style scoped></style>
