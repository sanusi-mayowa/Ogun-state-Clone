<template>
  <div class="laptopnav">
    <v-app-bar class="bg-white-lighten-4 navbar px-8" flat>
      <div class="d-flex justify-space-between w-100 align-center">
        <div class="logo cursor-pointer" @click="navigateToHome">
          <img src="/assets/logo.png" width="150" alt="Logo" />
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
              class="px-3 py-2 cursor-pointer rounded-pill invest-icon"
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
    <section class="industrial-hub px-13 pt-10" id="opportunities">
      <InvestmentSection />
    </section>
    <section class="industrial-hub px-13 mt-10" id="sector">
      <h2 class="text-primary mb-5 ml-3">The State Key Sectors</h2>
      <v-row>
        <v-col
          cols="12"
          md="4"
          sm="6"
          v-for="keysector in keysectors"
          :key="keysector"
        >
          <div class="position-relative">
            <img width="100%" :src="keysector.img" alt="" />
            <v-card
              class="bg-white px-5 py-3 position-absolute w-75 keysector-description"
              flat
            >
              <p
                class="text-primary text-center"
                style="font-weight: 500; font-size: 18px"
              >
                {{ keysector.text }}
              </p>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <div class="investment-process" id="process">
        <div class="text-center mt-16">
          <h2>INVESTMENT PROCESS</h2>
          <p class="mt-5 mb-16">
            Do business with Ogun State at the comfort of your homes and offices
            with peace of mind
          </p>
        </div>
        <div class="open-government-row mt-10">
          <v-row>
            <v-col
              cols="12"
              md="3"
              sm="6"
              v-for="(investmentProcess, index) in investmentProcessS"
              :key="investmentProcess"
              class="d-flex align-center justify-center position-relative"
              :class="{ 'third-column-2': index === 2 }"
            >
              <div class="position-relative w-100">
                <img
                  width="100%"
                  height="100%"
                  src="/assets/investment-process.png"
                  alt=""
                  class="rounded-xl"
                />
              </div>
              <div
                class="open-goverment-description position-absolute d-flex flex-column align-center justify-center"
              >
                <img
                  width="50"
                  class="rounded-lg"
                  :src="investmentProcess.icon"
                  alt=""
                />
                <span
                  style="font-size: 19px; text-transform: capitalize"
                  class="d-block mt-2 text-white px-10 text-center des`"
                  >{{ investmentProcess.title }}</span
                >
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>
    <section class="mt-16" id="contact">
      <Contact />
    </section>
  </v-main>
</template>
<script>
import InvestmentSection from "@/components/Investmentsection.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "InvestmantPage",
  components: {
    InvestmentSection,
    Contact,
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
      keysectors: [
        { id: 1, img: "/assets/keysector1.png", text: "Agriculture" },
        {
          id: 2,
          img: "/assets/keysector2.png",
          text: "Manufacturing and Industry",
        },
        { id: 3, img: "/assets/keysector3.png", text: "Transportation" },
        { id: 4, img: "/assets/keysector4.png", text: "Education" },
        { id: 5, img: "/assets/keysector5.png", text: "Infrastructure" },
        { id: 6, img: "/assets/keysector6.png", text: "Health care  " },
      ],
      investmentProcessS: [
        {
          id: 1,
          icon: "/assets/icon1.png",
          title: "Process with Bureau of Land and Survey",
        },
        {
          id: 2,
          icon: "/assets/icon2.png",
          title: "Process with the Ministry of Agriculture",
        },
        {
          id: 3,
          icon: "/assets/icon3.png",
          title:
            "Process with the Ministry of Physical Planning and Urban development",
        },
        {
          id: 4,
          icon: "/assets/icon4.png",
          title: "Process with the Ministry of Environment",
        },
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
    navigateToHome() {
      this.$router.push("/");
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
.keysector-description.v-card {
  border-radius: 0 !important;
  bottom: 30px;
}
.third-column-2 .open-goverment-description {
  margin-top: 30px;
}
</style>
