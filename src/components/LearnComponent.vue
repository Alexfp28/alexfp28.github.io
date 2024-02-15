<script>
export default  {
  name : "LearnComponent",
  data() {
    return {
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
    }
  }
}
</script>

<template>
  <div id="learn"
       class="mt-3 align-items-center justify-content-center">
    <h1 style="text-align:center">Mi historial...</h1>
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
</template>