<script>
export default {
  name: "HomeComponent"
}
</script>

<template>
  <div id="home"
       class="align-items-center mb-5 mt-4 mr-2 ml-2 animation-duration-1000">
    <Splitter layout="vertical" style=" border-color: #bf2b7b">
      <SplitterPanel :size="50">
        <div class="flex justify-content-center mt-4">
          <Avatar image="https://raw.githubusercontent.com/Alexfp28/website/master/images/Avatar.png" class="w-10rem h-10rem zoom"/>
        </div>
        <div class="flex justify-content-center">
          <h1>Alex López</h1>
        </div>
        <div class="flex justify-content-center mr-8 ml-8 mb-3">
          <p>
            Soy una persona con ganas de aprender y poder seguir hacia delante con mis proyectos, como por ejemplo puede ser esta página web, está hecha desde 0 con Vue.js,
            <br>
            para poder demostrar mi nivel en Vue.js, también he usado una librería de componentes como es PrimeVue, me ha ayudado bastante con el diseño de la página y poder
            <br>
            gestionar mis atributos / variables con gusto.
          </p>
        </div>
        <div class="flex justify-content-center mr-8 ml-8 mb-3">
          <a href="https://www.linkedin.com/in/alex-lópez-62b2222a0" style="text-decoration: none;"><Avatar icon="pi pi-linkedin" class="mr-2 zoomAvatar" size="large" shape="circle" style="background-color: #bf2b7b; color: white"/></a>
          <a href="mailto:alexlopezdelafuente@gmail.com" style="text-decoration: none;"><Avatar icon="pi pi-envelope" class="mr-2 zoomAvatar" size="large" shape="circle" style="background-color: #bf2b7b; color: white"/></a>
          <a href="https://github.com/Alexfp28" style="text-decoration: none;"><Avatar icon="pi pi-github" class="mr-2 zoomAvatar" size="large" shape="circle" style="background-color: #bf2b7b; color: white"/></a>
        </div>
      </SplitterPanel>
    </Splitter>
  </div>

  <div class="card flex flex-column align-items-center">
    <div class="flex flex-column align-items-center gap-2">
      <span class="text-xl font-medium">Desliza hacia abajo...</span>
      <span class="slidedown-icon h-2rem w-2rem bg-primary border-circle inline-flex align-items-center justify-content-center">
                <i class="pi pi-arrow-down" />
            </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.slidedown-icon {
  animation: slidedown-icon;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

.zoom {
  transition: transform .2s;
  width: 100px;
  height: 100px;

}

.zoomAvatar {
  transition: transform .2s;
  margin-left: 10px
}

.zoomAvatar:hover {
  transform: scale(1.2);
}

.zoom:hover {
  transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>