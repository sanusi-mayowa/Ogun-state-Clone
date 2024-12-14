<template>
  <section>
    <AboutHero />
  </section>
  <section>
    <WelcomeAbout />
  </section>
  <section>
    <History />
  </section>
  <section>
    <AwolowoCard />
  </section>
  <section>
    <Cultural />
  </section>
  <section>
    <Speech />
  </section>
  <section>
    <Ratings />
  </section>
</template>
<script>
import WelcomeAbout from "@/AboutCards/Welcome.vue";
import AboutHero from "@/AboutCards/AboutHero.vue";
import History from "@/AboutCards/History.vue";
import AwolowoCard from "@/AboutCards/AwolowoCard.vue";
import Cultural from "@/AboutCards/Cultural.vue";
import Speech from "@/AboutCards/Speech.vue";
import Ratings from "@/AboutCards/Ratings.vue";

export default {
  name: "AboutPage",
  components: {
    WelcomeAbout,
    AboutHero,
    History,
    AwolowoCard,
    Cultural,
    Speech,
    Ratings,
  },
};
</script>
<style scoped>
.highlight {
  font-weight: bold;
}
</style>
