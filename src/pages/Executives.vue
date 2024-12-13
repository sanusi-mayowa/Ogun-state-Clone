<template>
  <section class="executives-hero-section px-13">
    <div class="text-center dapo-executives">
      <h2>The Executives</h2>
    </div>
    <div class="w-100 py-1 bg-primary rounded-xl"></div>
    <div class="dapo-speech mt-16">
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <div>
            <img src="/assets/dapo.png" width="100%" height="100%" alt="" />
            <h2>Governor of Ogun State</h2>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="dapo-speech-description">
            <h2>GOVERNOR DAPO ABIODUN</h2>
            <p class="mt-3" style="text-align: justify">
              Prince Adedapo Oluseun Abiodun, MFR, currently serves as the
              Governor of Ogun State, Nigeria. Born on May 29, 1960, in
              Iperu-Remo, Ogun State, he hails from a distinguished family of
              educators. This early exposure to a disciplined and
              knowledge-driven environment greatly influenced his commitment to
              education, hard work, and service to society.
            </p>
            <h3 class="mt-3">Early Life and Education</h3>
            <p class="mt-3" style="text-align: justify">
              Dapo Abiodun began his academic journey in Nigeria, attending
              primary and secondary schools in Ogun State. He furthered his
              education at the prestigious University of Ife, now Obafemi
              Awolowo University, where he laid the foundation for his career in
              business and governance. Recognizing the need for international
              exposure and advanced education, he relocated to the United
              States, where he earned a Bachelor of Business Administration
              (BBA) degree in Accounting from Kennesaw State University,
              Georgia, in 1986. His international education equipped him with
              modern business and financial management principles, which he
              later applied to his professional and entrepreneurial pursuits.
            </p>
            <div class="cultural">
              <h3 class="mt-3">Early Career</h3>
              <p class="mt-3">
                Abiodun began his professional career as a Cost Accountant at
                Glock Inc., a prominent firearms manufacturer, based in the
                United States. Between 1989 and 1991, he honed his skills in
                cost management and financial planning, demonstrating his
                aptitude for business analytics and operations. This experience
                solidified his expertise in accounting and business management,
                laying the groundwork for his future endeavors.
              </p>
              <h3 class="mt-3">Entrepreneurial Ventures</h3>
              <p class="mt-3">
                In 1991, Prince Dapo Abiodun returned to Nigeria, determined to
                make a meaningful impact on the economy. He ventured into
                entrepreneurship, founding and chairing several successful
                businesses that contributed significantly to Nigeria's economic
                growth. Notable among his achievements is his leadership at
                Crestar Hydrocarbons Limited, an integrated energy solutions
                company specializing in oil and gas exploration and production.
                His visionary leadership has driven the company’s expansion,
                contributing to energy security in Nigeria.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
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
export default {
  name: "ExecutivesPage",
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
