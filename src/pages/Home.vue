<template>
  <section class="top-carousel" style="margin-top: -130px">
    <HeroSection />
  </section>
  <section class="home-tablet" style="margin-top: -130px">
    <HomeTablet />
  </section>
  <section class="executives">
    <Executives />
  </section>
  <section class="sectors">
    <Sectors />
  </section>
  <section class="events">
    <BottomCarousel />
  </section>
</template>

<script>
import HeroSection from "@/HomeCards/HeroSection.vue";
import HomeTablet from "@/HomeCards/HomeTablet.vue";
import Executives from "@/HomeCards/Executives.vue";
import Sectors from "@/HomeCards/Sectors.vue";
import BottomCarousel from "@/HomeCards/BottomCarousel.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    HomeTablet,
    Executives,
    Sectors,
    BottomCarousel,
  },
};
</script>
