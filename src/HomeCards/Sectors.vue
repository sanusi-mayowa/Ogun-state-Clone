<template>
  <div class="sectors-main bg-white mt-9 px-12 w-100">
    <p class="text-primary meet" style="font-weight: 600">
      Meet Our Executives
    </p>
    <div>
      <v-row class="mt-5">
        <v-col cols="12" sm="6" md="4" v-for="sector in sectors" :key="sector">
          <div class="position-relative h-100">
            <img :src="sector.img" alt="" width="100%" height="100%" />
            <div class="position-absolute sector-overlay top-0 h-100 w-100">
              <div class="d-flex align-center justify-center w-100 h-100">
                <span class="d-block text-white">{{ sector.name }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <section class="invest position-relative mt-10">
    <div class="invest-details">
      <div class="d-flex align-center justify-center ga-3 pt-8 invest-ogun">
        <div>
          <img src="/assets/Rectangle.png" :height="100" alt="" />
        </div>
        <div>
          <h1 class="text-white text-h2" style="font-weight: 500">
            Invest in Ogun-State
          </h1>
        </div>
      </div>
      <span class="text-white text-center d-block mt-5" style="font-weight: 400"
        >.....Agriculture, Manufacturing, Innovation and more</span
      >
      <p class="text-white text-center mt-16 largest" style="font-weight: 500">
        Ogun State is Nigeria’s largest industrial hub, strategically located
        near Lagos, making it ideal for investments in manufacturing,
        agriculture, and logistics. With robust infrastructure and industrial
        parks, the state offers a dynamic environment for business growth and
        innovation
      </p>
      <div class="position-absolute invest-button text-center">
        <v-btn class="rounded-pill text-primary" flat to="investment"
          >invest in ogun-state</v-btn
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Sectors",
  data() {
    return {
      sectors: [
        {
          id: 1,
          img: "assets/sectors1.jpg",
          name: "Agriculture",
        },
        {
          id: 2,
          img: "assets/sectors2.jpg",
          name: "Agriculture",
        },
        {
          id: 3,
          img: "assets/sectors3.jpg",
          name: "Real Estate",
        },
        {
          id: 4,
          img: "assets/sectors4.jpg",
          name: "Education",
        },
        {
          id: 5,
          img: "assets/sectors5.jpg",
          name: "Logistics",
        },
        {
          id: 6,
          img: "assets/sectors6.jpg",
          name: "Solid Minerals",
        },
      ],
    };
  },
};
</script>
