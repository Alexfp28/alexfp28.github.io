<script>
import PostComponent from '@/components/v2/PostComponent.vue'

export default {
  name: 'ContentComponent',
  components: { PostComponent }
}
</script>

<template>
  <div class="parent">
    <div class="div1">
      <Avatar image="https://raw.githubusercontent.com/Alexfp28/website/master/images/Avatar.png" style="width: 64px; height: 64px" class="zoomAvatar"/>
      <h3>Alex López</h3>
      <h3>Junior Full Stack Developer</h3>
    </div>
    <div class="div2">
      <PostComponent/>
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
  padding: 1rem 1rem 1rem 1.5rem;
  text-align: center;
  grid-row: span 5 / span 5;
}

.div2 {
  border-left: 2px solid #be2b7a; /* Línea divisoria */
  padding: 1rem 1rem 1rem 1.5rem;
  text-align: center;
  grid-column: span 2 / span 2;
  grid-row: span 5 / span 5;
}

.zoomAvatar {
  transition: transform .2s;
  width: 100px;
  height: 100px;

}

.zoomAvatar:hover {
  transform: scale(1.2);
}

</style>
