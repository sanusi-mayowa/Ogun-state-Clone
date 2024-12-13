<template>
  <v-footer class="d-block px-0 py-0">
    <div class="footer-map position-relative">
      <h2 class="text-map">OMO OGUN - ISEYA</h2>
    </div>
    <section class="bg-footer px-11">
      <v-row class="pt-10">
        <v-col cols="12" md="7">
          <div>
            <img src="/assets/logo2.png" alt="" />
            <span class="d-block mt-2"
              >It is peopled predominantly by the Egbas, Ijebus, Yewas, Remos
              and Aworis; - who belong to the main Yoruba Ethnic group. It also
              has sub-groups, namely, Ketu, Ikale, Ilaje, Ohori, Anago and Egun.
              There are also significant numbers of Nigerians from other parts
              of the country as well as foreign nationals resident in the State.
              Ogun State welcomes you!</span
            >
            <h5 class="text-h4 mt-3">Contact Us</h5>
            <div class="contact-details">
              <p class="mt-5">
                <span class="mr-1"><i class="bi bi-geo-alt-fill"></i></span>
                Government House Complex, Oke-Mosan, Abeokuta, Ogun State
              </p>
              <p class="my-5">
                <span class="mr-1"><i class="bi bi-envelope"></i></span>
                info@ogunstate.gov.ng
              </p>
              <p>
                <span class="mr-1"><i class="bi bi-telephone"></i></span>
                (234) 7041-604-239
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-row>
            <v-col cols="12" md="6" sm="6" class="mt-16 footer-list">
              <h5 class="text-h5 ml-4">State</h5>
              <v-list class="bg-transparent">
                <v-list-item v-for="link in links" :key="link" :to="link.to">
                  <v-list-item-content class="d-flex ga-2 align-center">
                    <img width="10" src="/assets/Ellipse.png" alt="" />
                    <v-list-item-title class="text-white">{{
                      link.text
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="6" md="6" class="mt-16 footer-list">
              <h5 class="text-h5 ml-4">Quick Link</h5>
              <v-list class="bg-transparent">
                <v-list-item
                  v-for="quickLink in quickLinks"
                  :key="quickLink"
                  :to="quickLink.to"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-white">{{
                      quickLink.title
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
    <section class="bg-black pt-3">
      <div class="text-center">
        <p>&copy; OGUN STATE GOVERNMENT. All Rights Reserved</p>
        <span style="font-size: 11px">Terms of Use | Privacy Policy</span>
      </div>
    </section>
  </v-footer>
</template>
<script>
export default {
  name: "FooterView",
  data() {
    return {
      links: [
        {
          id: 1,
          text: "Home",
          to: "/",
        },
        {
          id: 2,
          text: "Services",
          to: "/services",
        },
        {
          id: 3,
          text: "News",
          to: "/news",
        },
        {
          id: 4,
          text: "About",
          to: "/about",
        },
      ],
      quickLinks: [
        {
          id: 1,
          title: "Government",
          to: "/government",
        },
        {
          id: 2,
          title: "MDA",
          to: "/mda",
        },
        {
          id: 3,
          title: "Executives",
          to: "/executives",
        },
        {
          id: 4,
          title: "Emergency No",
          to: "/emergency",
        },
      ],
    };
  },
};
</script>
<style scoped>
@media (max-width: 500px) {
  .bg-footer.px-11 {
    padding-left: 3px !important;
    padding-right: 3px !important;
  }
}
</style>
