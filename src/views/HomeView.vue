<script>

export default {
  data() {
    return {
      value: [
        {label: 'Java', color1: '#f9be24', color2: '#57955c', value: 50, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/java.png'},
        {label: 'Vue.js', color1: '#57945c', color2: '#60a5fa', value: 30, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/vue.png'},
        {label: 'React', color1: '#60a5fa', color2: '#fc8492', value: 10, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/react.png'},
        {label: 'Angular', color1: '#fa8391', color2: '#ff0000', value: 10, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/angular.png'}
      ],
      events: [
        { status: '2FCGM', date: '16 años', icon: 'pi pi-check', color: '#bf2b7b', image: "https://raw.githubusercontent.com/Alexfp28/website/master/images/partsofpc.jpg",
          desc: "Este inicio de curso fue un el comienzo del camino, donde empecé a interesarme más sobre el mundo de la informática, " +
              "tengo que decir que no toqué nada de lenguajes de programación, pero empezaba a mirar documentación relacionada con Java " +
              "y Python por recomendación de un profesor."
        },
        { status: 'Curso', date: '18 años', icon: 'pi pi-check', color: '#bf2b7b',image: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/programming.jpeg',
          desc: "El inicio de este curso fue un tanto diferente, empecé tocando lenguajes como Java y MySQL, pero a medida que iba avanzando " +
              "me interesaba más la programción web, cuando llegué al año actual me decidí por dar lo mejor de mi (dándolo anteriormente), " +
              "para poder destacar en lo mío y poder aspirar lejos, fue ahí donde inicie cursos de programación web sobre Angula, React y Vue.js..."
        },
        { status: '2CFGS', date: '18 años', icon: 'pi pi-spin pi-cog', color: '#bf2b7b',image: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/programming.jpeg',
          desc: "El inicio de este curso fue un tanto diferente, empecé tocando lenguajes como Java y MySQL, pero a medida que iba avanzando " +
              "me interesaba más la programción web, cuando llegué al año actual me decidí por dar lo mejor de mi (dándolo anteriormente), " +
              "para poder destacar en lo mío y poder aspirar lejos, fue ahí donde inicie cursos de programación web sobre Angula, React y Vue.js..."
        }
      ]

    };
  }
};


</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}
</style>


<template>
  <main>
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem; border-color: #bf2b7b">
      <template #start>
        <Avatar image="https://raw.githubusercontent.com/Alexfp28/website/master/images/logo-circular.png" style="width: 32px; height: 32px"/>
        <div class="flex align-items-center gap-2 ml-3">
          <a href="#home"> <Button label="Home" text plain /></a>
          <a href="#personal"><Button label="About me" text plain /></a>
          <a href="#experiencia"> <Button label="Frameworks" text plain /> </a>
        </div>
      </template>
    </Toolbar>


    <div id="home" class="mt-3 align-items-center justify-content-center">
      <h1 style="text-align:center">Aprendiendo...</h1>
      <Timeline :value="events" align="alternate" class="customized-timeline">
        <template #marker="slotProps">
                <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
        </template>
        <template #content="slotProps">
          <Card class="mt-3">
            <template #title>
              {{ slotProps.item.status }}
            </template>
            <template #subtitle>
              {{ slotProps.item.date }}
            </template>
            <template #content>
              <img v-if="slotProps.item.image" :src="`${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-1" />
              <p v-text="slotProps.item.desc"/>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>



    <div class="h-30rem"/>

    <div id="personal" v-animation-on-scroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
         class="align-items-center mb-5 mt-3 mr-2 ml-2 animation-duration-1000">
      <Splitter layout="vertical" style=" border-color: #bf2b7b">
        <SplitterPanel :size="50">
          <Splitter style=" border-color: #bf2b7b">
            <SplitterPanel class="flex align-items-center justify-content-center" :size="50">
              <Card style="width: 25rem; overflow: hidden;" class="mt-3 mb-3">
                <template #header>
                  <img alt="user header" src="../../images/background.jpg" width="400"/>
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
                  <img alt="user header" src="../../images/gimnasio.jpg" width="400"/>
                </template>
                <template #title>Ejercicio</template>
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

    <div class="h-30rem"/>


    <div id="experiencia" v-animation-on-scroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="card animation-duration-1000 mb-8 ml-2 mr-2">
      <h1>Frameworks...</h1>
      <MeterGroup :value="value" labelPosition="start">
        <template #label="{ value }">
          <div class="flex flex-wrap gap-3">
            <template v-for="val of value" :key="val.label">
              <Card class="flex-1">
                <template #content>
                  <div class="flex justify-content-between gap-5">
                    <div class="flex flex-column gap-1">
                      <span class="text-secondary text-sm">{{ val.label }}</span>
                      <span class="font-bold text-lg">{{ val.value }}%</span>
                    </div>
                    <span
                        class="w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center">
                      <Avatar :image="val.icon" style="width: 28px; height: 25px"></Avatar>
                    </span>
                  </div>
                </template>
              </Card>
            </template>
          </div>
        </template>
        <template #meter="slotProps">
          <span :class="slotProps.class"
                :style="{ background: `linear-gradient(to right, ${slotProps.value.color1}, ${slotProps.value.color2})`, width: slotProps.size }"/>
        </template>
        <template #start="{ totalPercent }">
          <div class="flex justify-content-between mt-3 mb-2 relative">
            <span>Experience</span>
            <span :style="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
          </div>
        </template>
      </MeterGroup>
    </div>




  </main>
</template>
