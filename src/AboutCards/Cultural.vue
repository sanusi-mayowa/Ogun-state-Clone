<template>
  <div class="cultural bg-history pt-16 px-11">
    <v-row class="align-stretch">
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <div style="height: 100%">
          <h2 class="text-map">Cultural Evolution</h2>
          <p class="mt-5 paragraph">
            Ogun State, located in southwestern Nigeria, is a hub of cultural
            diversity and heritage. It is home to several sub-ethnic groups,
            including the Egba, Ijebu, Remo, Yewa, and Awori. Each of these
            groups contributes unique cultural traditions that collectively
            define the state’s identity.
          </p>
          <p class="mt-3 paragraph">
            The <span class="highlight">Egba</span>, centered around Abeokuta,
            are known for their historical role in commerce and the preservation
            of Yoruba traditions. The <span class="highlight">Ijebu</span>,
            based in the southeastern part of the state, are famed for their
            entrepreneurial skills and colorful festivals like the Ojude Oba.
            The <span class="highlight">Remo</span> people, predominantly in the
            Sagamu area, are custodians of cultural festivities such as the
            Agemo festival. The <span class="highlight">Yewa</span>, located in
            the western regions, are known for their agrarian lifestyle and
            deep-rooted folk traditions, while the
            <span class="highlight">Awori</span>, situated closer to Lagos,
            share a cultural blend influenced by urbanization yet steeped in
            Yoruba practices.
          </p>
          <p class="mt-3 paragraph">
            The <span class="highlight"> Awori</span> people, often regarded as
            the cradle of Lagos civilization, share linguistic and cultural ties
            with neighboring communities, symbolizing unity in diversity.
            Festivals in Ogun State, such as the Lisabi Festival in Egba and
            Ojude Oba in Ijebu, are colorful spectacles that attract global
            attention. Traditional rulers, or Obas, play a vital role in
            preserving these cultural legacies and promoting harmony among
            sub-ethnic groups.
          </p>
          <p class="mt-3 paragraph">
            Ogun State also enjoys global recognition as the birthplace of
            <span class="highlight">Adire</span>, a hand-dyed indigo fabric that
            originated in Abeokuta. Adire reflects intricate Yoruba artistry,
            with patterns that tell stories and symbolize cultural pride. Its
            international appeal underscores Ogun’s role as a beacon of cultural
            evolution, bridging traditional artistry and modern fashion trends.
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <div style="height: 100%; width: 100%">
          <img
            style="height: 100%; width: 100%; object-fit: cover"
            src="/assets/cultural.png"
            alt=""
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Cultural",
};
</script>
<style scoped>
.highlight {
  font-weight: bold;
}
.paragraph {
  font-size: 16px;
  text-align: justify;
}
</style>
