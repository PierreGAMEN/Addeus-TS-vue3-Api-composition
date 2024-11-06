<script setup lang="ts">

import HeroSection from "@/components/specific/HomeviewComponent/Hero/HeroSection.vue";
import Conclusion from "../components/specific/HomeviewComponent/ConclusionSection.vue";
import CTA from "../components/specific/HomeviewComponent/CTASection.vue";
import Missions from "../components/specific/HomeviewComponent/MissionsSection.vue";
import Robot from "../components/specific/HomeviewComponent/RobotComponent.vue";
import Skills from "../components/specific/HomeviewComponent/SkillsSection.vue";
import WhyMe from "../components/specific/HomeviewComponent/WhyMeSection.vue";
import StacksSection from "@/components/specific/HomeviewComponent/Hero/StacksSection.vue";

</script>

<template>
  <HeroSection />
  <StacksSection />
  <WhyMe />
  <Skills />
  <CTA />
  <Missions />
  <Robot />
  <Conclusion />
</template>

<style lang="scss"></style>
