<script>

import ToolBarComponent from "@/components/ToolBarComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import LearnComponent from '@/components/LearnComponent.vue'
import LaboralComponent from '@/components/LaboralComponent.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PersonalComponent from '@/components/PersonalComponent.vue'

export default {
  components: { FooterComponent, ExperienceComponent, LaboralComponent, PersonalComponent, LearnComponent, HomeComponent, ToolBarComponent},
  data() {
    return {
      "ToolBarComponent": ToolBarComponent,
      "HomeComponent": HomeComponent,
      "LearnComponent": LearnComponent,
      "PersonalComponent": PersonalComponent,
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

    <div class="h-5rem"/>

   <LearnComponent/>

    <div class="h-5rem"/>

    <PersonalComponent/>

    <div class="h-5rem"/>

    <LaboralComponent/>

    <div class="h-5rem"/>

    <ExperienceComponent/>

    <FooterComponent/>

  </main>
</template>