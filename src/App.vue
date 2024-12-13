<template>
  <v-app>
    <router-view />
    <FooterView />
  </v-app>
</template>

<script>
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    FooterView,
  },
  data() {
    return {};
  },
};
</script>
