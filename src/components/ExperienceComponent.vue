<script>
export default {
  name: 'ExperienceComponent',
  data() {
    return {
      value: [
        {label: 'Java', color1: '#f9be24', color2: '#57955c', value: 50, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/java.png'},
        {label: 'Vue.js', color1: '#57945c', color2: '#60a5fa', value: 30, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/vue.png'},
        {label: 'React', color1: '#60a5fa', color2: '#fc8492', value: 10, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/react.png'},
        {label: 'Angular', color1: '#fa8391', color2: '#ff0000', value: 10, icon: 'https://raw.githubusercontent.com/Alexfp28/website/master/images/angular.png'}
      ],
    }
  }
}
</script>

<template>
  <div id="experiencia" v-animation-on-scroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="card animation-duration-1000 mb-8 ml-2 mr-2">
    <h1 style="text-align:center">Tecnologías...</h1>
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