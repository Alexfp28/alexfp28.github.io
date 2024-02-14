<script>
export default {
  name: 'FooterComponent'
}
</script>

<template>
  <div>
    <footer style="background-color: #bf2b7b" class="align-items-center mb-0 h-3rem">
      <div class="flex align-items-center justify-content-center">
        <a href="https://www.linkedin.com/in/alex-lópez-62b2222a0" style="text-decoration: none;" target="_blank"><Avatar icon="pi pi-linkedin" class="mr-2 zoomAvatar" size="large" shape="circle" style="background-color: rgba(255,234,194,0); color: white"/></a>
        <a href="mailto:alexlopezdelafuente@gmail.com" style="text-decoration: none;" target="_blank"><Avatar icon="pi pi-envelope" class="mr-2 zoomAvatar" size="large" shape="circle" style="background-color: rgba(255,234,194,0); color: white"/></a>
        <a href="https://github.com/Alexfp28" style="text-decoration: none;" target="_blank"><Avatar icon="pi pi-github" class="mr-2 zoomAvatar" size="large" shape="circle" style="background-color: rgba(255,234,194,0) ; color: white"/></a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.zoomAvatar {
  transition: transform .2s;
  margin-left: 10px
}

.zoomAvatar:hover {
  transform: scale(1.2);
}

.zoom:hover {
  transform: scale(1.2);
}
</style>
