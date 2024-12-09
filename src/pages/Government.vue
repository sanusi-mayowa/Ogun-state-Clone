<template>
  <section class="government-hero-section">
    <div class="px-12">
      <div class="text-center open-government">
        <h2 class="text-primary">Open Government</h2>
        <p class="mt-2">
          Ogun State Government actively supports the Open Government
          Partnership, uniting leaders, civil society, and citizens to foster
          accountable and inclusive governance. Aligned with Nigeria's 2019-2021
          action plan, the state is dedicated to implementing the following
          initiative:
        </p>
      </div>
      <div class="open-government-row mt-10">
        <v-row>
          <v-col
            cols="12"
            md="3"
            sm="6"
            v-for="(openGovernment, index) in openGovernments"
            :key="openGovernment"
            class="d-flex align-center justify-center position-relative"
            :class="{ 'third-column': index === 2 }"
          >
            <div class="position-relative w-100">
              <img
                width="100%"
                height="100%"
                :src="openGovernment.img"
                alt=""
              />
            </div>
            <div
              class="open-goverment-description position-absolute d-flex flex-column align-center justify-center"
            >
              <img
                width="50"
                class="rounded-lg"
                :src="openGovernment.icon"
                alt=""
              />
              <span
                style="font-size: 19px; text-transform: capitalize"
                class="d-block mt-2 text-white px-10 text-center des`"
                >{{ openGovernment.title }}</span
              >
            </div>
          </v-col>
        </v-row>
        <p class="px-10 text-center mt-10 the-push">
          The push by the Ogun State Government to actively participate in the
          above commitments will ensure that the State Government is more
          collaborative with the citizens, and the citizenry are also adequately
          informed.
        </p>
      </div>
    </div>
    <div class="billsandlaw">
      <h2 class="text-center pt-10 text-white bills">Bills & Laws</h2>
      <div class="bills-row px-12 mt-5">
        <v-row>
          <v-col
            cols="12"
            md="4"
            sm="6"
            v-for="billsandGate in billsandGates"
            :key="billsandGate"
          >
            <div class="bills-wrapper px-6 py-6 h-100">
              <div class="bills-icon mt-10">
                <img width="50" :src="billsandGate.icon" alt="" />
              </div>
              <h2 class="text-primary mt-8 text-capitalize">
                {{ billsandGate.title }}
              </h2>
              <p class="text-capitalize pb-10 mt-5">
                {{ billsandGate.description }}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="state-budget py-10">
      <div
        class="state-budget-inner text-center h-100 d-flex align-center justify-center flex-column"
      >
        <h2 class="text-primary text-capitalize pt-16 mb-16">state budget</h2>
        <div class="budget-img">
          <img width="40" src="/assets/state.png" alt="" />
        </div>
        <h2 class="text-primary mt-16 text-capitalize">
          ministry of budget and planning documents
        </h2>
        <p class="pb-10 mt-5 text-map text-capitalize" style="font-size: 20px">
          MTEF report, budget assessments, Etc.
        </p>
      </div>
    </div>

    <div class="financial bg-financial mt-16">
      <div class="inner-finacial px-15 py-10">
        <div class="text-center d-flex align-center justify-center">
          <h2
            class="text-capitalize finance rounded-lg text-primary bg-white px-3 py-3"
          >
            financial statements
          </h2>
        </div>

        <div
          class="financial-col mt-8"
          v-for="financial in financials"
          :key="financial"
        >
          <div class="d-flex align-center ga-6 financial-inner py-5 px-8">
            <div class="financial-img d-flex align-center justify-center">
              <img width="40" :src="financial.img" alt="" />
            </div>
            <div class="">
              <h2 class="text-capitalize">{{ financial.title }}</h2>
              <p class="text-capitalize text-light">
                {{ financial.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="public-section bg-white px-15 pb-10">
      <div class="public-inner d-flex justify-center align-center">
        <h2 class="public text-capitalize px-6 py-1 text-primary mt-16">
          public data-bureau of statictics
        </h2>
      </div>
      <div
        class="public-col mt-8"
        v-for="publicItem in publicItems"
        :key="publicItem"
      >
        <div class="d-flex align-center ga-6 financial-inner py-5 px-8">
          <div
            class="financial-img bg-primary d-flex align-center justify-center"
          >
            <img width="40" :src="publicItem.img" alt="" />
          </div>
          <div class="">
            <h2 class="text-capitalize text-primary">{{ publicItem.title }}</h2>
            <p class="text-capitalize text-primary">
              {{ publicItem.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="state-budget procurement py-10">
      <div
        class="state-budget-inner text-center d-flex align-center justify-center flex-column h-100"
        style="width: 94vw; margin: 0 auto"
      >
        <h2 class="text-primary text-capitalize pt-16 mb-16">procurement</h2>
        <div class="budget-img">
          <img width="40" src="/assets/billsandlaw1.png" alt="" />
        </div>
        <h2 class="text-primary mt-16 text-capitalize">
          bureau of public procurement
        </h2>
        <p class="pb-10 mt-5 text-map text-capitalize" style="font-size: 20px">
          contracts, tender, public procurement, and etc.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Government",
  data() {
    return {
      openGovernments: [
        {
          id: 1,
          img: "/assets/opengovernment1.png",
          icon: "/assets/icon1.png",
          title: "Citizen Participation in The Budget Cycle",
        },
        {
          id: 2,
          img: "/assets/opengovernment2.png",
          icon: "/assets/icon2.png",
          title: "open contracting executive sector transparency",
        },
        {
          id: 3,
          img: "/assets/opengovernment3.png",
          icon: "/assets/icon3.png",
          title: "tax reporting standards",
        },
        {
          id: 4,
          img: "/assets/opengovernment4.png",
          icon: "/assets/icon4.png",
          title: "world bank ease of doing business index",
        },
      ],
      billsandGates: [
        {
          id: 1,
          icon: "/assets/billsandlaw1.png",
          title: "Search Legislation",
          description: "read up on current laws and proposed bills.",
        },
        {
          id: 2,
          icon: "/assets/billsandlaw2.png",
          title: "Ogun Constitution",
          description:
            "the ogun state constitution consists of laws that are codified",
        },
        {
          id: 3,
          icon: "/assets/billsandlaw3.png",
          title: "approved treaties",
          description:
            "here are up to date enquiries on agreements, pacts, major treaties,between tribes and ethnic groups within the state",
        },
      ],
      financials: [
        {
          id: 1,
          img: "/assets/financial1.png",
          title: "state financial report",
          description:
            "get access to ogun state comprehensive annual reports, receipts reporting and other financial reports",
        },
        {
          id: 2,
          img: "/assets/financial2.png",
          title: "state auditors report",
          description: "an evaluation of the state’s financial entity",
        },
        {
          id: 3,
          img: "/assets/financial3.png",
          title: "local government financial reports",
          description: "an open repository ogun’s expenditures",
        },
      ],
      publicItems: [
        {
          id: 1,
          img: "/assets/billsandlaw1.png",
          title: "search state online publications",
          description:
            "search the state database for written publications, case studies, keynote speeches, etc on area of interest within ogun state",
        },
        {
          id: 2,
          img: "/assets/billsandlaw2.png",
          title: "state statistics annual report",
          description: "lookup ogun’s annual reports",
        },
        {
          id: 3,
          img: "/assets/billsandlaw3.png",
          title: "statistical releases",
          description:
            "ogun provide open access to a publicly available dataset, maps and statistics",
        },
      ],
    };
  },
};
</script>
