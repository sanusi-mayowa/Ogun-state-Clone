<template>
  <div class="laptopnav">
    <v-app-bar class="bg-white-lighten-4 navbar px-8" flat>
      <div class="d-flex justify-space-between w-100 align-center">
        <div class="logocursor-pointer" @click="navigateToHome">
          <img src="/assets/logo.png" width="150" alt="Logo" />
        </div>
        <div>
          <v-list class="d-flex align-center bg-transparent ga-3">
            <v-list-item
              v-for="link in links"
              :key="link"
              :to="link.to"
              :class="{ 'active-link links': $route.path === link.to }"
            >
              <v-list-item-content>
                <v-list-item-title class="text-black">{{
                  link.text
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <div class="d-flex align-center justify-space-between ga-10">
          <div>
            <!-- <Search /> -->
          </div>
          <v-menu transition="slide-x-transition" flat>
            <template v-slot:activator="{ props }">
              <v-btn class="bg-primary rounded-pill" v-bind="props">
                Quick Links
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                class="text-black"
                v-for="quickLink in quickLinks"
                :key="quickLinks"
                :to="quickLink.to"
                :class="{ 'active-link links': $route.path === quickLink.to }"
              >
                <v-list-item-title class="text-black">{{
                  quickLink.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-app-bar>
  </div>
  <div class="tabletnav">
    <v-app-bar class="bg-white navbar" flat>
      <div
        class="small-nav d-flex align-center justify-space-between w-100 px-8"
      >
        <div class="logocursor-pointer" @click="navigateToHome">
          <img src="/assets/logo.png" width="150" alt="Logo" />
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
          <v-menu transition="slide-x-transition" flat>
            <template v-slot:activator="{ props }">
              <v-btn class="bg-primary rounded-pill" v-bind="props">
                Quick Links</v-btn
              >
            </template>
            <v-list>
              <v-list-item
                v-for="quickLink in quickLinks"
                :key="quickLink"
                :to="quickLink.to"
                :class="{ 'active-link links': $route.path === quickLink.to }"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-black">{{
                    quickLink.title
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import Search from "@/HomeCards/Search.vue";
export default {
  name: "Navbar",
  components: {
    Search,
  },
  data() {
    return {
      navDrawer: false,
      isActive: false,
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
  methods: {
    toggleNav() {
      this.navDrawer = !this.navDrawer;
    },
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>
