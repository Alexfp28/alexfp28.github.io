<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      items: [
        { name: 'Historial', image: 'pi pi-spin pi-cog', url: "#learn"},
        { name: 'Experiencia Personal', image: 'pi pi-id-card', url: "#about"},
        { name: 'Experiencia Laboral', image: 'pi pi-wrench', url:"#laboral" },
        { name: 'Tecnologias', image: 'pi pi-bolt', url: "#experiencia"},
      ]
    }
  }
}
</script>

<template>
  <div id="iniciov1"
       class="align-items-center mb-5 mt-4 mr-5 ml-5">
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

        <div class="flex align-items-center justify-content-center">
          <TabMenu :model="items">
            <template #item="{ item, props }">
              <a v-ripple v-bind="props.action" class="flex align-items-center gap-2">
                <i :class="item.image" style="color: #da639b"/>
                <a :href="item.url" style="text-decoration: none; color: #da639b"> <span class="font-bold">{{ item.name }}</span> </a>
              </a>
            </template>
          </TabMenu>
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
  transform: scale(1.2);
}
</style>
