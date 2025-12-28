<script setup lang="ts">
  import t2023 from './taler/2023.ts';

  import KT3Utils from './KT3Utils.ts';

const count2023 = KT3Utils.count(KT3Utils.cleanString(t2023));
</script>


<template>
  <h1>KongeTaleMaskinen3</h1>
  <p>
    {{count2023}}
  </p>
</template>

<style scoped></style>
