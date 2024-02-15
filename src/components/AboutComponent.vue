<script>
export default {
  name: "AboutComponent"
}
</script>

<template>
  <div id="about"
       class="align-items-center mb-5 mt-3 mr-2 ml-2 animation-duration-1000">
    <h1 style="text-align:center">Experiencia Personal...</h1>
    <Splitter layout="vertical" style=" border-color: #bf2b7b">
      <SplitterPanel :size="50">
        <Splitter style=" border-color: #bf2b7b">
          <SplitterPanel class="flex align-items-center justify-content-center" :size="50">
            <Card style="width: 25rem; overflow: hidden;" class="mt-3 mb-3">
              <template #header>
                <img alt="user header" src="https://raw.githubusercontent.com/Alexfp28/website/master/images/background.jpg" width="400"/>
              </template>
              <template #title>Alex López</template>
              <template #subtitle>¿Cómo me describen?</template>
              <template #content>
                <p class="m-0">
                  Mis compañeros me suelen describir como
                  una persona curiosa ya que siempre me
                  gusta estar al día de las últimas novedades
                  tecnológicas; lenguajes de programación,
                  frameworks... Como ahora pueden ser Vue y
                  Angular.
                </p>
              </template>
            </Card>

          </SplitterPanel>
          <SplitterPanel class="flex align-items-center justify-content-center" :size="50">
            <Card style="width: 25rem; overflow: hidden;" class="mt-3 mb-3">
              <template #header>
                <img alt="user header" src="https://raw.githubusercontent.com/Alexfp28/website/master/images/gimnasio.jpg" width="400"/>
              </template>
              <template #title>Vida Saludable (GYM)</template>
              <template #subtitle>Mi día a día...</template>
              <template #content>
                <p class="m-0">
                  Hace un año y medio me propuse mejorar
                  físicamente y ser una persona más
                  saludable, de ahí que empezara mi actividad
                  en el gimnasio. A día de hoy me mantengo
                  constante en mi objetivo, siendo el cuidarme
                  una rutina diaria.
                </p>
              </template>
            </Card>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style scoped>

</style>