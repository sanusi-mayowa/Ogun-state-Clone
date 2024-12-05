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
                <v-list-item-title>{{ quickLink.title }}</v-list-item-title>
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
          <v-menu transition="slide-x-transition" flat>
            <template v-slot:activator="{ props }">
              <v-btn class="bg-primary rounded-pill" v-bind="props">
                https://www.figma.com/design/zimDNknHxW7sP0Ulrugy4P/OGUN-STATE-WEBSITE-REDESIGN?node-id=1-3&node-type=canvas&t=BsNMQFOqE4fGV1aD-0
                Quick Links
              </v-btn>
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
import data from "@/data.json";
export default {
  name: "Navbar",
  components: {
    Search,
  },
  data() {
    return {
      links: data.links,
      quickLinks: data.quickLinks,
      navDrawer: false,
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.navDrawer = !this.navDrawer;
    },
  },
};
</script>
