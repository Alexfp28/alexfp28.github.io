<script>
export default {
  name: 'ExperienceComponent',
  data() {
    return {
      value: [
        { label: 'Java', color1: '#f9be24', color2: '#57955c', value: 50, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/java.png',
        desc: 'Empecé con este lenguaje de programación en el inicio del curso de DAM, prácticamente es mi primer lenguaje, ' +
              'le tengo cariño por su tipo de enseñanza, me aportó mucho porque al gustarme Java empecé a investigar sobre ' +
              'otro tipo de lenguajes.'
        },
        { label: 'Vue.js', color1: '#57945c', color2: '#60a5fa', value: 30, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/vue.png',
        desc: 'Este framework es el que estoy intentando dominar ahora mismo, demostrándolo con esta página web, gracias a este' +
              ' me interesó del todo el mundo de la programación web, un lenguaje que tiene muchísima documentación y con tenedencia ' +
              'de empleo bastante alta con JavaScript.'
        },
        {label: 'React', color1: '#60a5fa', color2: '#fc8492', value: 10, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/react.png',
        desc: 'React es un mundo nuevo para mi, realizando un curso de Udemy, quiero poder demostrar lo autodidacta que soy, para' +
              'poder formarme lo mejor posible sobre este mundo de lenguajes, frameworks... (En progreso...)'
        },
        {label: 'Angular', color1: '#fa8391', color2: '#ff0000', value: 10, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/angular.png',
        desc: 'Angular es un mundo nuevo para mi, realizando un curso de Udemy, quiero poder demostrar lo autodidacta que soy, para' +
          'poder formarme lo mejor posible sobre este mundo de lenguajes, frameworks... (En progreso...)'
        }
      ],
    }
  }
}
</script>

<template>
  <div id="experienciav1" class="card mb-1 ml-5 mr-5" style="height: 350px">
    <h1 style="text-align:center">Tecnologías...</h1>
    <MeterGroup :value="value" labelPosition="start">
      <template #label="{ value }">
        <div class="flex flex-wrap gap-3">
          <template v-for="val of value" :key="val.label">
            <Card class="flex-1">
              <template #content>
                <div class="flex justify-content-between gap-5">
                  <div class="flex flex-column gap-1">
                    <span class="font-bold text-lg">{{ val.label }}</span>
                    <span class="p-text-secondary text-sm">{{ val.desc }}</span>
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
    </MeterGroup>
  </div>
</template>

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
