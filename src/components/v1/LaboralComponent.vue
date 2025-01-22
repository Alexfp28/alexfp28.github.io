<script>
export default {
  name: 'LaboralComponent'
}
</script>

<template>
  <div id="laboralv1" class="card animation-duration-1000 mb-8 ml-5 mr-5">
    <h1 style="text-align:center">Experiencia Laboral...</h1>
    <Splitter layout="vertical" style=" border-color: #bf2b7b">
      <SplitterPanel :size="50">
        <Splitter style=" border-color: #bf2b7b">
          <SplitterPanel class="flex align-items-center justify-content-center" :size="50">
            <Card style="width: 25rem; overflow: hidden;" class="mt-3 mb-3">
              <template #header>
                <img alt="user header" src="https://raw.githubusercontent.com/Alexfp28/website/master/images/ayunt.jpg" width="400"/>
              </template>
              <template #title>Ayuntamiento La Vall d'Uixó</template>
              <template #subtitle>Contrato de prácticas</template>
              <template #content>
                <p class="m-0">
                  Al comenzar mis prácticas, me propusieron un
                  reto: una migración entre diferentes S.O, fue todo
                  un desafío porque nunca había realizado ninguna
                  tarea similar.
                  <br><br>
                  Ni siquiera en el ciclo habíamos recibido
                  formación al respeto.
                  <br><br>
                  Tras mi FCT me di cuenta que soy una persona
                  que destaca en ser autodidacta y que se crece
                  frente a los impedimentos.
                </p>
              </template>
            </Card>

          </SplitterPanel>
          <SplitterPanel class="flex align-items-center justify-content-center" :size="50">
            <Card style="width: 25rem; overflow: hidden;" class="mt-3 mb-3">
              <template #header>
                <img alt="user header" src="https://raw.githubusercontent.com/Alexfp28/website/master/images/campo.jpg" width="400"/>
              </template>
              <template #title>Trabajo en el campo</template>
              <template #subtitle>Voluntad y compromiso</template>
              <template #content>
                <p class="m-0">
                  Desde pequeño he tenido la suerte de vivir en
                  primera persona lo que es tener un negocio
                  familiar: constancia, sacrificio y compromiso.
                  <br><br>
                  En la familia tenemos fincas de olivos y
                  desde pequeño siempre he colaborado en la
                  recogida, procesamiento y venta del aceite
                  de oliva.
                  <br><br>
                  "Contra más morado más calidad" que no
                  significa otra cosa que hay que dejar lo
                  tiempos de maduración oportunos para
                  ofrecer lo mejor al cliente.
                  <br><br>
                  Y esto es lo que aplico siempre en mis
                  proyectos: entrega y excelencia hasta el final.
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
