<template>
  <div>
    <h2 class="text-primary text-center mb-5">Why Invest in Ogun State</h2>
    <v-row>
      <v-col cols="12" md="4">
        <ul>
          <li v-for="(item, index) in listItems" :key="index">
            <span class="d-block mt-16" style="font-weight: 500">{{
              item
            }}</span>
          </li>
        </ul>
      </v-col>

      <v-col cols="12" md="8" class="position-relative">
        <v-row>
          <v-col cols="6">
            <img
              class="img"
              src="/assets/investment1.png"
              alt="Strategic Location"
            />
          </v-col>
          <v-col cols="6">
            <img
              class="img"
              src="/assets/investment2.png"
              alt="Robust Infrastructure"
            />
          </v-col>
          <v-col cols="6">
            <img
              class="img"
              src="/assets/investment3.png"
              alt="Industrial Hub"
            />
          </v-col>
          <v-col cols="6">
            <img
              class="img"
              src="/assets/investment4.png"
              alt="Investment Incentives"
            />
          </v-col>
        </v-row>
        <div class="position-absolute middle-img">
          <img
            width="200"
            height="200"
            src="/assets/big-logo.png"
            alt="Ogun State Logo"
            class="big-logo"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItems: [
        "Robust Infrastructure",
        "Industrial Hub",
        "Investment Incentives",
        "Economic Growth Potential",
        "Agricultural Opportunities",
        "Supportive Government Policies",
      ],
    };
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.middle-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
@media (max-width: 768px) {
  .img {
    height: 100%;
  }
}
@media (max-width: 425px) {
  .big-logo {
    width: 150px;
    height: 150px;
  }
}
</style>
