<script>

import ToolBarComponent from "@/components/ToolBarComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import LearnComponent from '@/components/LearnComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'
import LaboralComponent from '@/components/LaboralComponent.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { FooterComponent, ExperienceComponent, LaboralComponent, AboutComponent, LearnComponent, HomeComponent, ToolBarComponent},
  data() {
    return {
      "ToolBarComponent": ToolBarComponent,
      "HomeComponent": HomeComponent,
      "LearnComponent": LearnComponent,
      "AboutComponent": AboutComponent,
      "LaboralComponent": LaboralComponent,
      "ExperienceComponent": ExperienceComponent,
      "FooterComponent": FooterComponent
    };
  }
};


</script>

<template>
  <main>
    <ToolBarComponent/>
    <HomeComponent/>

    <div class="h-10rem"/>

   <LearnComponent/>

    <div class="h-10rem"/>

    <AboutComponent/>

    <div class="h-10rem"/>

    <LaboralComponent/>

    <div class="h-10rem"/>

    <ExperienceComponent/>

    <FooterComponent/>

  </main>
</template>