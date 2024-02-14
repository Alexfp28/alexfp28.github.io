<script>
export default {
  name: "ToolBarComponent"
}
</script>

<template>
  <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem; border-color: #bf2b7b; text-align: center">
    <template #start>
      <Avatar image="https://raw.githubusercontent.com/Alexfp28/website/master/images/logo-circular.png" style="width: 32px; height: 32px" class="zoomAvatar"/>
    </template>
    <template #center>
      <h2 style="text-align: center" class="mr-6">Alexfp28();</h2>
    </template>
  </Toolbar>
</template>

<style lang="scss" scoped>
.zoomAvatar {
  transition: transform .2s;
  width: 100px;
  height: 100px;

}

.zoomAvatar:hover {
  transform: scale(1.2);
}
</style>