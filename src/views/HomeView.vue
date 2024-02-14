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
        { status: 'Curso FlexyGo Low Code', date: '18 años', icon: 'pi pi-check', color: '#bf2b7b',image: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/udemy.png',
          desc: "Inicie un curso ofrecido por mi tutora, Nereida, nos recomendó realizarlo para poder gestionar una empresa si somos trabajadores" +
              " o nuestra propia empresa con un framework llamado FlexyGo, la verdad que me impactó mucho la personalización que tiene y poder " +
              "calcular y tener registro de todo lo que necesites con un poco de código (Low Code). ",
          url: "https://www.udemy.com/certificate/UC-47e0593f-c641-4182-9f01-940ccbe0119b/"
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


<template>
  <main>
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem; border-color: #bf2b7b; text-align: center">
      <template #start>
        <Avatar image="https://raw.githubusercontent.com/Alexfp28/website/master/images/logo-circular.png" style="width: 32px; height: 32px" class="zoomAvatar"/>
      </template>
      <template #center>
          <h2 style="text-align: center" class="mr-6">Alexfp28();</h2>
      </template>
    </Toolbar>


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

    <div class="h-10rem"/>

    <div id="learn" v-animation-on-scroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
         class="mt-3 align-items-center justify-content-center">
      <h1 style="text-align:center">Learning...</h1>
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
              <Button v-if="slotProps.item.url" outlined>
                <a href="https://www.udemy.com/certificate/UC-47e0593f-c641-4182-9f01-940ccbe0119b/" style="text-decoration: none;" target="_blank">Certificado</a>
              </Button>
            </template>
          </Card>
        </template>
      </Timeline>
    </div>

    <div class="h-10rem"/>

    <div id="about" v-animation-on-scroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
         class="align-items-center mb-5 mt-3 mr-2 ml-2 animation-duration-1000">
      <h1 style="text-align:center">Personal Experience...</h1>
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

    <div class="h-10rem"/>

    <div id="laboral" v-animation-on-scroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="card animation-duration-1000 mb-8 ml-2 mr-2">
      <h1 style="text-align:center">Laboral Experience...</h1>
      <Splitter layout="vertical" style=" border-color: #bf2b7b">
        <SplitterPanel :size="50">
          <Splitter style=" border-color: #bf2b7b">
            <SplitterPanel class="flex align-items-center justify-content-center" :size="50">
              <Card style="width: 25rem; overflow: hidden;" class="mt-3 mb-3">
                <template #header>
                  <img alt="user header" src="https://raw.githubusercontent.com/Alexfp28/website/master/images/ayunt.png" width="400"/>
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

    <div class="h-10rem"/>

    <div id="experiencia" v-animation-on-scroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="card animation-duration-1000 mb-8 ml-2 mr-2">
      <h1 style="text-align:center">Technologies...</h1>
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
