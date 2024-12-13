<template>
  <section class="mda-section">
    <div class="position-relative" style="margin-top: -130px">
      <div class="mda-description-main position-relative" style="height: 100vh">
        <div class="mda-description">
          <h1 class="text-white text-h1" style="font-weight: 500">MDA’s</h1>
          <p class="mt-3 text-white">
            Ministries, Department, Agencies and public bodies.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mda-explore mt-16">
    <h2 class="text-center text-h4" style="font-weight: 500 !important">
      Explore Our Government Departments
    </h2>
    <v-row class="mt-10 px-15 mda-row position-relative">
      <v-col
        cols="12"
        md="4"
        sm="6"
        class="mt-10"
        v-for="mdaRow in paginatedCommissioners"
        :key="mdaRow.id"
      >
        <v-card>
          <img
            :src="mdaRow.img"
            width="100%"
            alt=""
            style="height: 300px; object-fit: cover"
            class="d-block"
          />
          <div class="px-5 py-7">
            <h2 class="text-center mda-title">{{ mdaRow.title }}</h2>
            <p class="mda-descriptiontwo mt-4" style="text-align: justify">
              {{ mdaRow.description }}
            </p>
            <div class="text-center mt-8">
              <v-btn
                flat
                class="text-primary"
                style="border: 2px solid #2c9960"
                to="/mdaeducation"
              >
                View Ministry
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      v-model="mdaPage"
      :length="mdaTotalPages"
      :total-visible="5"
      class="mt-8"
    ></v-pagination>
  </section>
</template>

<script>
export default {
  name: "MdaPage",
  data() {
    return {
      mdaPage: 1,
      mdaPagePerPage: 9,
      mdaRows: [
        {
          id: 1,
          img: "/assets/mda.png",
          title: "Ministry of Physical Planning and Urban Development",
          description:
            "The Ministry of Physical Planning and Urban Development came into existence on the 5th of November, 2012. It came into being upon the upgrading of the Bureau of Urban and Physical Planning into a full-fledged Ministry by the Senator Ibikunle Amosun led Administration.",
        },
        {
          id: 2,
          img: "/assets/mda.png",
          title: "Ministry of Forestry",
          description:
            "The Ogun State Ministry of Forestry plays a crucial role in managing and preserving the state's rich forest resources. It oversees afforestation programs, promotes sustainable logging practices, and works to combat deforestation",
        },
        {
          id: 3,
          img: "/assets/mda.png",
          title: "Ministry of Environment",
          description:
            "The Ogun State Ministry of Environment is responsible for safeguarding the environment and promoting sustainable development. It oversees waste management, pollution control, and environmental protection initiative",
        },
        {
          id: 4,
          img: "/assets/mda.png",
          title: "Ministry of Physical Planning and Urban Development",
          description:
            "The Ministry of Physical Planning and Urban Development came into existence on the 5th of November, 2012. It came into being upon the upgrading of the Bureau of Urban and Physical Planning into a full-fledged Ministry by the Senator Ibikunle Amosun led Administration.",
        },
        {
          id: 5,
          img: "/assets/mda.png",
          title: "Ministry of Works & Infrastructure",
          description:
            "The Ministry had been in existence since the creation of Ogun State in 1976. However, it has gone through various changes in term of structure and mandate overtime. At a period, it was known and addressed as Ministry of Works and Housing while the past Civilian",
        },
        {
          id: 6,
          img: "/assets/mda.png",
          title: "Ministry of Housing",
          description:
            "The Ogun State Ministry of Environment is responsible for safeguarding the environment and promoting sustainable development. It oversees waste management, pollution control, and environmental protection initiative",
        },
        {
          id: 7,
          img: "/assets/mda.png",
          title: "Ministry of Physical Planning and Urban Development",
          description:
            "The Ministry of Physical Planning and Urban Development came into existence on the 5th of November, 2012. It came into being upon the upgrading of the Bureau of Urban and Physical Planning into a full-fledged Ministry by the Senator Ibikunle Amosun led Administration.",
        },
        {
          id: 8,
          img: "/assets/mda.png",
          title: "Ministry of Forestry",
          description:
            "The Ogun State Ministry of Forestry plays a crucial role in managing and preserving the state's rich forest resources. It oversees afforestation programs, promotes sustainable logging practices, and works to combat deforestation",
        },
        {
          id: 9,
          img: "/assets/mda.png",
          title: "Ministry of Forestry",
          description:
            "The Ogun State Ministry of Environment is responsible for safeguarding the environment and promoting sustainable development. It oversees waste management, pollution control, and environmental protection initiative",
        },
      ],
    };
  },
  computed: {
    mdaTotalPages() {
      return Math.ceil(this.mdaRows.length / this.mdaPagePerPage);
    },
    paginatedCommissioners() {
      const start = (this.mdaPage - 1) * this.mdaPagePerPage;
      const end = start + this.mdaPagePerPage;
      return this.mdaRows.slice(start, end);
    },
  },
};
</script>

<style scoped>
.mda-title {
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}

.mda-descriptiontwo {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}
</style>
