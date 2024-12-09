<template>
  <div class="bottom-carousel mt-10" style="position: relative">
    <v-carousel
      cycle
      height="100%"
      show-arrows="hover"
      hide-delimiters
      v-model="carouselIndex"
    >
      <v-carousel-item
        v-for="bottomcarousel in bottomcarousels"
        :key="bottomcarousel.id"
        class="position-relative"
      >
        <div class="bottomcarousel-details position-absolute">
          <h2 class="text-white text-h3 events">
            Events and Projects In Pictures
          </h2>
        </div>
        <div class="bottomcarousel-btn position-absolute">
          <v-btn flat class="bg-white text-primary rounded-pill mt-2"
            >View Gallery</v-btn
          >
        </div>
        <img
          :src="bottomcarousel.img"
          alt=""
          class="d-block"
          style="width: 100%; height: auto; object-fit: cover"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "BottomCarousel",
  data() {
    return {
      bottomcarousels: [
        {
          id: 1,
          img: "/assets/bottom-carousel1.png",
        },
        {
          id: 2,
          img: "/assets/bottom-carousel2.png",
        },
        {
          id: 3,
          img: "/assets/bottom-carousel3.png",
        },
        {
          id: 4,
          img: "/assets/bottom-carousel4.png",
        },
        {
          id: 5,
          img: "/assets/bottom-carousel5.png",
        },
        {
          id: 6,
          img: "/assets/bottom-carousel6.png",
        },
      ],
      carouselIndex: 0,
    };
  },
};
</script>

<style scoped>
.bottom-carousel {
  position: relative;
}
</style>
