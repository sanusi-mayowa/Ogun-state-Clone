<template>
  <section class="bg-white mt-9 px-12 w-100 ex-main">
    <div class="executives-main">
      <div class="d-flex align-center px-6 justify-space-between">
        <div>
          <p class="text-primary meet" style="font-weight: 600">
            Meet Our Executives
          </p>
        </div>
        <div>
          <v-btn
            flat
            class="text-capitalize"
            variant="outlined"
            color="green-darken-1"
          >
            View More
            <span>
              <i
                class="bi bi-arrow-right text-red mt-1 ml-1 d-block btn-icon"
              ></i>
            </span>
          </v-btn>
        </div>
      </div>

      <div class="executives bg-white mt-3">
        <v-row class="executives-row">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="executive in executives"
            :key="executive"
          >
            <div class="position-relative px-5 py-5">
              <img
                :src="executive.img"
                alt=""
                class="rouded-xl"
                style="width: 100%; height: 100%"
              />
              <div
                class="excutives-details position-absolute pl-5 py-3 w-50"
                style="bottom: 26px; background: rgba(255, 255, 255, 0.8)"
              >
                <h3 class="text-title">{{ executive.name }}</h3>
                <h4 class="text-primary">{{ executive.title }}</h4>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Executives",
  data() {
    return {
      executives: [
        {
          id: 1,
          img: "/assets/executives1.png",
          name: "Dapo Abiodun",
          title: "State Governor",
        },
        {
          id: 2,
          img: "/assets/executives2.png",
          name: "Noimot Salako",
          title: "Deputy Governor",
        },
        {
          id: 3,
          img: "/assets/executives3.png",
          name: "Prof. Arigbabu",
          title: "Com.of Education",
        },
      ],
    };
  },
};
</script>
<style scoped>
.btn-icon {
  transition: transform 0.3s ease;
}
.v-btn:hover .btn-icon {
  transform: translateX(5px);
}
</style>
