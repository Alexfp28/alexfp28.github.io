<script>
import CardComponent from '@/components/v2/generic/CardComponent.vue';

export default {
  name: "HomeComponent",
  components: {
    CardComponent,
  },
  data() {
    return {
      items: [
        { name: 'Angular.js',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png',
          description: "Empecé a programar en Angular durante mis primeras prácticas como programador.\n" +
            "        <br>" +
            "        Tuve mi formación de más de 100 horas de cursos para poder aprender sobre este framework e inclusive a día de hoy sigo aprendiendo de él.\n" +
            "        <br>" +
            "        <br>" +
            "        No me considero un maestro de Angular, ya que, es un framework que he aprendido hace \"poco tiempo\" y además no estoy desarrollando solo front,\n" +
            "        entonces tengo que combinar mis conocimientos de Java y Spring Boot con Angular para poder sacar el máximos provecho de ambos.\n" +
            "        <br>" +
            "        <br>" +
            "        Actualmente me encuentro desarrollando varios proyectos, tantos de la empresa como personales.",
          url: 'https://angular.dev/',
          borderColor: "#f32898"
        },
        { name: 'Java',
          image: 'https://cdn.freebiesupply.com/logos/large/2x/java-logo-svg-vector.svg',
          description: "Empecé a programar en Java desde que empecé a estudiar el Ciclo Formativo de DAM." +
            "<br>Aquí tampoco me considero un maestro, pero tengo el doble de experiencia que Angular." +
            "<br>" +
            "<br>" +
            "\nEn la empresa que estoy actualmente desarrollando como Full Stack como calcular el coste computacional de cada función, distribuir el código de manera" +
            "limpia y comentada. También aprender el uso de Patrones de Diseño como el singleton, API Rest, gestionar usos en el código..." +
            "<br>" +
            "<br>" +
            "Actualmente me encuentro desarrollando varios proyectos, tantos de la empresa como personales.",
          url: 'https://www.java.com/es/',
          borderColor: "#c93132"
        },
        { name: 'Python',
          url: 'https://es.python.org/',
          description: "Empecé a programar en Python desde que empecé a estudiar el Ciclo Formativo de Especialización de IA y Big Data." +
            "<br>" +
            "Este lenguaje he empezado a programar con él desde el Septiembre de 2024." +
            "<br>" +
            "<br>" +
            "\nÚltimamente lo estoy utilizando para realizar algoritmos, Machine Learning, etc..." +
            "También estoy consultando nuevas librerías para la extracción, edición," +
            "exploración y explotación de datos." +
            "<br>" +
            "\nAl ser un nuevo lenguaje para mí intento aprender siempre por mi cuenta a parte de los proyectos que me ofrecen" +
            "en las clases para poder desenvolverme mejor en el mundo laboral." +
            "<br>" +
            "<br>" +
            "\nActualmente me encuentro desarrollando varios proyectos, solamente de clase.",
          image: 'https://www.svgrepo.com/show/376344/python.svg',
          borderColor: "#3778ae"
        },
        {},
        { name: 'Vue.js',
          image: 'https://static-00.iconduck.com/assets.00/vue-icon-512x439-f6q4zral.png',
          description: "Empecé a programar en Java desde que empecé a estudiar el Ciclo Formativo de DAM." +
            "<br>" +
            "Este tipo de framework lo tengo más como un hobbie para no perder la costumbre." +
            "<br>" +
            "\nComo he dicho antes, este framework lo uso para proyectos personales dependiendo claramente de los requisitos de los mismos." +
            "Como puede ser esta página, la realizo desde cero con Vue.js" +
            "<br>" +
            "<br>" +
            "Actualmente me encuentro desarrollando varios proyectos, solo personales.",
          url: 'https://vuejs.org/',
          borderColor: "#46b882"
        },
        {},
      ]
    }
  }
}
</script>

<template>
  <div class="parent">
    <div v-for="(item, index) in items" :key="index" class="card-container">
      <CardComponent
        :title="item.name"
        :description="item.description"
        :icon="item.image"
        :link="item.url"
        :borderColor="item.borderColor"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.parent {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}
.card-container {
  display: flex;
  justify-content: center;
}

.div3 {
  border: solid #f32898 2px;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1.5rem;
  text-align: center;
  grid-row: span 6 / span 6;
}

.div4 {
  border: solid #c93132 2px;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1.5rem;
  text-align: center;
  grid-row: span 6 / span 6;
}

.div5 {
  border: solid #3778ae 2px;

  border-radius: 15px;
  padding: 1rem 1rem 1rem 1.5rem;
  text-align: center;
  grid-row: span 6 / span 6;
}

.div8 {
  border: solid #46b882 2px;
  border-radius: 15px;
  padding: 1rem 1rem 1rem 1.5rem;
  text-align: center;
  grid-row: span 6 / span 6;
  grid-column-start: 2;
  grid-row-start: 7;
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
  transform: scale(1.2);
}
</style>
