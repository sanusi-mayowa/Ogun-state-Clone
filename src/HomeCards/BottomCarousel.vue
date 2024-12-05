<template>
  <div class="bottom-carousel mt-10">
    <v-carousel cycle height="100%" show-arrows="hover" hide-delimiters>
      <v-carousel-item
        v-for="bottomcarousel in bottomcarousels"
        :key="topcarousel"
        class="position-relative"
      >
        <div class="bottomcarousel-details position-absolute">
          <h2 class="text-white text-h3 events">Events and Projects In Pictures</h2>
        </div>
        <div class="bottomcarousel-btn position-absolute">
          <v-btn flat class="bg-white text-primary rounded-pill mt-2"
            >View Gallery</v-btn
          >
        </div>
        <img
          :src="bottomcarousel.img"
          width="100%"
          height="100%"
          alt=""
          class="d-block"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import data from "@/data.json";
export default {
  name: "BottomCarousel",
  data() {
    return {
      bottomcarousels: data.bottomcarousels,
    };
  },
};
</script>
