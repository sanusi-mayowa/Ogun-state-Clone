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
export default {
  data() {
    return {
      Topcarousels: [
        {
          id: 1,
          img: "/assets/top-carousel-1.png",
          name: "Our",
          name2: "Heritage",
          description:
            "Ogun State is predominantly Yoruba, with the Yoruba language serving as the lingua franca of the state. The dominant religions in Ogun State are Islam and Christianity although a certain amount of traditional religion is still practiced. Ogun State is noted for being the almost exclusive site of Ofada rice production.",
        },
        {
          id: 2,
          img: "/assets/top-carousel-2.png",
          name: "The Gateway",
          name2: "State",
          description:
            "Ogun State was created on the 3rd of February, 1976. It was carved out of the old Western State of Nigeria and named after the Ogun River which runs across it from North to South.",
        },
        {
          id: 3,
          img: "/assets/top-carousel-3.png",
          name: "Our",
          name2: "Culture",
          description:
            "Some of the well known festivals are:Egungun, Agemo, Igunnuko, Ogun, Orisa-Oko, Gelede, Eyo, Oro, Ifa, Sango, Obatala, Osun and Akoogun",
        },
        {
          id: 4,
          img: "/assets/top-carousel-4.png",
          name: "Our",
          name2: "People",
          description:
            "It is people predominantly by the Egbas, Ijebus, Yewas, Remos and Aworis; - who belong to the main Yoruba ethnic group.  It also has sub-groups, namely, Ketu, Ikale, Ilaje, Ohori, Anago and Egun. There are also significant numbers of Nigerians from other parts of the country as well as foreign nationals resident in the State.",
        },
      ],
    };
  },
};
</script>
