<script setup>

import ToolBarComponent from '@/components/v1/ToolBarComponent.vue'
import TechnologiesComponentV2 from '@/components/v2/TechnologiesComponentV2.vue'
import ContentComponent from '@/components/v2/ContentComponent.vue'
</script>

<template>
  <div class="parent">
    <div class="div1">
      <ToolBarComponent/>
      <ContentComponent/>
    </div>
    <div class="div2">
      <TechnologiesComponentV2/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
}

.div1 {
  grid-column: span 3 / span 3;
}

.div2 {
  grid-column: span 3 / span 3;
  grid-row: span 4 / span 4;
  grid-row-start: 2;
}

</style>
