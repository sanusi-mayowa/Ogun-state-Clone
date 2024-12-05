<template>
  <v-carousel
    cycle
    interval="7000"
    show-arrows="hover"
    hide-delimiters
    style="height: 600px !important"
    class="home"
  >
    <v-carousel-item
      v-for="topcarousel in Topcarousels"
      :key="topcarousel"
      class="position-relative"
    >
      <img :src="topcarousel.img" alt="" style="width: 100%" />
      <div class="carousel-details position-absolute w-50">
        <h1 class="text-white description text-h1 font-weight-bold">
          <span class="d-block">{{ topcarousel.name }} </span>
          <span> {{ topcarousel.name2 }}</span>
        </h1>
        <p class="text-white mt-3">{{ topcarousel.description }}</p>
        <v-btn
          class="text-primary d-block mt-5 text-capitalize font-weight-bold"
          flat
          >Ogun State MDAs</v-btn
        >
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
import data from "@/data.json";
export default {
  data() {
    return {
      Topcarousels: data.Topcarousels,
    };
  },
};
</script>
