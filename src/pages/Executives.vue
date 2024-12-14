<template>
  <section class="executives-hero-section px-13">
    <Governor />

    <div class="executive-councils mt-16">
      <div class="text-center">
        <h2 class="council">The Executives Council Members</h2>
        <p class="mt-3">The Executive council -- Governor’s Cabinet</p>
      </div>
      <v-row class="mt-10">
        <v-col
          cols="12"
          md="4"
          sm="6"
          v-for="executiveCouncil in executiveCouncils"
          :key="executiveCouncil.id"
        >
          <v-card>
            <img width="100%" :src="executiveCouncil.img" alt="" />
            <div class="executive-council description px-5 pb-16">
              <h2 class="mt-2">{{ executiveCouncil.name }}</h2>
              <p class="text-primary mt-2">
                {{ executiveCouncil.description }}
              </p>
              <div class="mt-2 text-map">---------</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="commissioners mt-16">
      <div class="text-center">
        <h2 class="council">Commissioners</h2>
      </div>
      <v-row class="mt-5">
        <v-col
          cols="12"
          md="4"
          sm="6"
          v-for="Commissioner in paginatedCommissioners"
          :key="Commissioner.id"
          class="mt-8"
        >
          <v-card>
            <img width="100%" :src="Commissioner.img" alt="" />
            <div class="executive-council description px-5 pb-16">
              <h2 class="mt-2">{{ Commissioner.name }}</h2>
              <p class="text-primary mt-2">
                {{ Commissioner.description }}
              </p>
              <div class="mt-2 text-map">---------</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-model="commissionerPage"
        :length="commissionerTotalPages"
        :total-visible="5"
        class="mt-8"
      ></v-pagination>
    </div>
  </section>
</template>
<script>
import Governor from "@/components/Governor.vue";
export default {
  name: "ExecutivesPage",
  components: {
    Governor,
  },
  data() {
    return {
      commissionerPage: 1,
      commissionersPerPage: 6,
      executiveCouncils: [
        {
          id: 1,
          img: "/assets/council1.png",
          name: "Noimot Salako-Oyedele",
          description: "Deputy Governor of Ogun-State",
        },
        {
          id: 2,
          img: "/assets/council2.png",
          name: "Tokunbo Talabi",
          description: "Secretary to the State Government",
        },
        {
          id: 3,
          img: "/assets/council3.png",
          name: "Shuaib Salisu",
          description: "Chief of Staff of Ogun-State",
        },
      ],
      Commissioners: [
        {
          id: 1,
          img: "/assets/commissoner1.png",
          name: "Dapo Okubadejo",
          description: "COMMISSIONER, Ministry of Finance",
        },
        {
          id: 2,
          img: "/assets/commissoner2.png",
          name: "Dr. Tomi Coker",
          description: "COMMISSIONER, Ministry of Health",
        },
        {
          id: 3,
          img: "/assets/commissoner3.png",
          name: "Prof. Abayomi Arigbabu",
          description: "COMMISSIONER, Ministry of Education",
        },
        {
          id: 4,
          img: "/assets/commissoner4.png",
          name: "Engr. Taiwo Oludotun",
          description: "COMMISSIONER, Ministry of Forestry",
        },
        {
          id: 5,
          img: "/assets/commissoner5.png",
          name: "Mr. Ola Oresanya",
          description: "COMMISSIONER, Ministry of Environment",
        },
        {
          id: 6,
          img: "/assets/commissoner6.png",
          name: "Mr. Olaolu Olabimtan",
          description: "COMMISSIONER, Ministry of Budget and Planning",
        },
        {
          id: 7,
          img: "/assets/commissoner6.png",
          name: "Mr. Olaolu Olabimtan",
          description: "COMMISSIONER, Ministry of Budget and Planning",
        },
        {
          id: 8,
          img: "/assets/commissoner5.png",
          name: "Mr. Ola Oresanya",
          description: "COMMISSIONER, Ministry of Environment",
        },
        {
          id: 9,
          img: "/assets/commissoner4.png",
          name: "Engr. Taiwo Oludotun",
          description: "COMMISSIONER, Ministry of Forestry",
        },
      ],
    };
  },
  computed: {
    commissionerTotalPages() {
      return Math.ceil(this.Commissioners.length / this.commissionersPerPage);
    },
    paginatedCommissioners() {
      const start = (this.commissionerPage - 1) * this.commissionersPerPage;
      const end = start + this.commissionersPerPage;
      return this.Commissioners.slice(start, end);
    },
  },
};
</script>
