<script>
export default {
  name: 'PostComponent'
}
</script>

<template>
  <div class="parent">
    <div class="div1">
      <h3>Historial</h3>
    </div>
    <div class="div2">
      2
    </div>
  </div>
</template>

<style scoped lang="scss">

.parent {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
}

.div1 {
  border-bottom: 2px solid #be2b7a;
  border-radius: 10px;
}

.div2 {
  grid-row: span 4 / span 4;
}

</style>
