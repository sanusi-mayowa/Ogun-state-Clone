<template>
  <section
    class="about-hero-section position-relative"
    style="margin-top: -130px"
  >
    <div class="position-absolute about-hero-details w-100">
      <h2
        class="text-white"
        style="font-weight: 500; font-size: 30px !important"
      >
        About
      </h2>
      <h1 class="text-white text-h2 mt-2 about-state" style="font-weight: 500">
        OGUN STATE
      </h1>
      <p class="text-white mt-2">
        Discover the Heart of Nigeria’s Growth and Development
      </p>
      <div class="explore mt-5">
        <v-btn flat class="text-primary rounded-pill">Explore More</v-btn>
      </div>
    </div>
  </section>

  <section>
    <h2 class="mb-5 text-black mt-16 text-center welcome-about">
      Welcome to Ogun State
    </h2>
    <v-row class="mx-11 welcom-about-child">
      <v-col cols="12" md="6">
        <div>
          <img
            src="/assets/welcome-about.png"
            class="welcome-img rounded-xl"
            alt=""
          />
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mt-16 gateway">
          <p style="font-size: 16px; text-align: justify; font-weight: 500">
            Ogun State, located in southwestern Nigeria, is known as the Gateway
            State due to its strategic proximity to Lagos, the country's
            commercial capital, and other neighboring states. Established in
            1976, it has become a thriving economic hub, with a strong
            industrial base housing numerous multinational companies and
            factories.
          </p>
          <p
            class="mt-4"
            style="font-size: 16px; text-align: justify; font-weight: 500"
          >
            The state is rich in cultural heritage and history, being the
            birthplace of notable figures in Nigeria's political, literary, and
            social landscape. Key attractions include Olumo Rock, a historic
            site symbolizing the resilience of the Egba people, and the Adire
            fabric markets, showcasing indigenous textile craftsmanship.
          </p>
          <p
            class="mt-3"
            style="font-size: 16px; text-align: justify; font-weight: 500"
          >
            Ogun's economy is diverse, driven by manufacturing, agriculture, and
            trade. Its educational institutions, such as Covenant University and
            Federal University of Agriculture, contribute significantly to
            Nigeria's academic landscape. With a population that reflects its
            vibrant culture and traditions, Ogun State remains an important
            player in Nigeria's growth story
          </p>
        </div>
      </v-col>
    </v-row>
    <div class="text-center">
      <p>
        A vibrant state known for its rich history, industrial strength, and
        cultural diversity
      </p>
    </div>

    <div class="our-history mt-16 pt-16 px-11 bg-history">
      <div class="our-history-title text-center">
        <h2 class="text-map text-h3" style="font-weight: 500">
          Our History and Heritage
        </h2>
        <p class="text-map mt-2">Historical Milestones</p>
      </div>
      <v-row>
        <v-col cols="12" md="6">
          <h3 class="my-3 text-h4 text-map" style="font-weight: 500">
            Creation Of Ogun State
          </h3>
          <p>
            Ogun State was carved out of the old Western State on February 3,
            1976, during Nigeria's military rule under General Murtala Mohammed.
            It was named after the Ogun River, which runs through the state
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-center">
            <img width="200" height="200" src="/assets/big-logo.png" alt="" />
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>
export default {
  name: "AboutPage",
};
</script>
