<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import FooterView from "./components/FooterView.vue";
export default {
  name: "App",
  components: {
    Navbar,
    FooterView,
  },
  data() {
    return {};
  },
};
</script>
