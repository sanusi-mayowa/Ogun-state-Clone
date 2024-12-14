<template>
  <div class="laptopnav">
    <v-app-bar class="bg-white-lighten-4 navbar px-8" flat>
      <div class="d-flex justify-space-between w-100 align-center">
        <div class="logocursor-pointer">
          <img src="/assets/logo.png" width="150" alt="" />
        </div>
        <div>
          <v-list class="d-flex align-center bg-transparent ga-3">
            <v-list-item
              v-for="link in links"
              :key="link"
              :to="link.to"
              :class="{ 'active-link': $route.path === link.to }"
              @click="scrollToSection(link.to)"
            >
              <v-list-item-content>
                <v-list-item-title class="text-black">{{
                  link.text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <v-btn class="bg-contact rounded-pill"> Contact US </v-btn>
      </div>
    </v-app-bar>
  </div>
  <div class="tabletnav">
    <v-app-bar class="bg-white navbar" flat>
      <div
        class="small-nav d-flex align-center justify-space-between w-100 px-8"
      >
        <div class="logo cursor-pointer">
          <img src="/assets/logo.png" class="mt-2" :width="150" />
        </div>
        <div>
          <v-btn
            flat
            variant="outlined"
            color="green-darken-4 pb-4"
            @click="toggleNav"
            ><i class="bi bi-list ham text-h4"></i
          ></v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      persistent
      v-model="navDrawer"
      temporary
      location="right"
    >
      <div class="d-flex align-center h-100 ml-8">
        <div>
          <v-list>
            <v-list-item
              v-for="link in links"
              :key="link"
              :to="link.to"
              :class="{ 'active-link': $route.path === link.to }"
            >
              <v-list-item-content>
                <v-list-item-title class="text-black">{{
                  link.text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-btn class="bg-contact rounded-pill"> Contact US</v-btn>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
  <v-main>
    <section id="opportunities" style="margin-top: -130px">
      <div class="invest-section position-relative">
        <div class="invest-section-main">
          <div class="rounded-pill px-5 py-3 bg-white d-flex align-center ga-5">
            <p class="text-primary invest-h1">
              Ogun state got new influx of investors to boost its economy
            </p>
            <span
              style="background: #809c8d"
              class="px-3 py-2 rounded-pill invest-icon"
              ><i class="bi bi-arrow-right-short"></i
            ></span>
          </div>
          <p
            style="font-size: 18px"
            class="text-white text-center bubb-p mt-16"
          >
            Invest in Ogun State's Bubbling Economy and unlock opportunities in
            Nigeria's emerging economic hub. Experience unmatched investment
            potential in a thriving environment where business meets prosperity,
            fostering sustainable growth and stability for entrepreneurs and
            investors alike.
          </p>
          <h1
            class="text-white text-h2 text-center bubb my-11"
            style="font-weight: bold"
          >
            Invest in Ogun State Bubbling Economy
          </h1>
          <v-btn
            flat
            class="bg-transparent text-white"
            style="border: 1px solid white !important"
            >View Investment Opportunities</v-btn
          >

          <v-row class="position-absolute invest-row" style="bottom: 5px">
            <v-col cols="12" md="6">
              <v-card class="w-100 px-10 py-2">
                <p class="text-contact text-center">
                  Workforce of over 6 million people for your business
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="w-100 px-10 py-2">
                <p class="text-contact text-center">
                  Ogun state boast a very high gdp of $12.1billion
                </p>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>
    <section class="px-15 investment-video">
      <section class="mt-16 video-section bg-white text-center pt-8 pb-8">
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/iw9LC2Hetg8"
            title="Governor's Projects in Ogun State"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </section>
    <section class="bg-investment py-10 px-13">
      <v-row>
        <v-col cols="12" md="6" class="mda-cols">
          <v-card class="bg-mda px-10 py-5 d-flex align-center">
            <div>
              <h1 class="text-primary">OUR VISION</h1>
              <p class="mt-5 text">
                A strategically developed Ogun State where businesses thrive,
                and individuals prosper. Our vision focuses on orderly growth,
                robust infrastructure, and abundant opportunities—creating a
                dynamic environment for investment, innovation, and personal
                advancement.
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="mda-cols">
          <v-card class="bg-mda2 py-5 px-5 d-flex align-center">
            <div>
              <h1>OUR VISION</h1>
              <p class="mt-5 text">
                To cultivate a well-organized, efficient, and visually appealing
                environment that enhances the quality of life by promoting
                seamless living, productive working spaces, and enriching
                recreational opportunities for all residents and businesses.
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section class="industrial-hub px-13 pt-10">
      <InvestmentSection />
    </section>
  </v-main>
</template>
<script>
import InvestmentSection from "@/components/Investmentsection.vue";
export default {
  name: "InvestmantPage",
  components: {
    InvestmentSection,
  },
  data() {
    return {
      navDrawer: false,
      isActive: false,
      links: [
        { id: 1, text: "About", to: "/about" },
        { id: 2, text: "Opportunities", to: "opportunities" },
        { id: 3, text: "Key sector", to: "sectors" },
        { id: 4, text: "Process", to: "process" },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.navDrawer = !this.navDrawer;
    },
    scrollToSection(sectionId) {
      const section = this.$refs[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
