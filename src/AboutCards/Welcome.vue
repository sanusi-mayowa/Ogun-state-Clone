<template>
  <h2 class="mb-5 text-black mt-16 text-center welcome-about">
    Welcome to Ogun State
  </h2>
  <v-row class="mx-11 welcom-about-child align-stretch">
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <div style="height: 100%; width: 100%">
        <img
          src="/assets/welcome-about.png"
          class="welcome-img"
          alt=""
          style="height: 100%; width: 100%; object-fit: cover"
        />
      </div>
    </v-col>
    <v-col cols="12" md="6" class="d-flex flex-column justify-center">
      <div class="gateway" style="height: 100%">
        <p class="paragraph">
          Ogun State, often referred to as the
          <span class="highlight"> Gateway State</span>, is a pivotal region in
          southwestern Nigeria, connecting the country's commercial capital,
          Lagos, to other parts of the nation. It was created on February 3,
          1976, from the former Western State, with Abeokuta as its capital. The
          state has grown into an economic and cultural powerhouse, balancing
          its industrial, agricultural, and educational contributions to
          Nigeria.
        </p>
        <h1 class="mt-3">Geography and Location</h1>
        <p class="mt-2 paragraph">
          Ogun State covers an area of
          <span class="highlight">16,762 square kilometers</span> and is
          bordered by Lagos State to the south, Oyo and Osun States to the
          north, Ondo State to the east, and the Republic of Benin to the west.
          This strategic location makes it a major transit point for trade and
          commerce, earning it the nickname "Gateway State."
        </p>

        <h1 class="mt-3">Cultural Heritage and Tourism</h1>
        <p class="mt-2 paragraph">
          Ogun State is rich in history and culture, with a diverse population
          that includes the Egba, Yewa, Egbado, Awori, and Remo subgroups of the
          Yoruba people. Key cultural and historical landmarks include:
        </p>
        <ul class="mt-3 pl-5">
          <li class="paragraph">
            <span class="highlight">Olumo Rock:</span> Located in Abeokuta,
            Olumo Rock served as a refuge for the Egba people during intertribal
            wars in the 19th century. Today, it is a popular tourist destination
            featuring caves, carvings, and a panoramic view of the city.
          </li>
          <li class="paragraph mt-2">
            <span class="highlight"> Adire Markets: </span>
            The state is renowned for its Adire fabric, a traditional
            tie-and-dye textile. Major markets in Abeokuta, such as Itoku
            Market, are famous for showcasing this indigenous craftsmanship.
          </li>
          <li class="paragraph mt-2">
            <span class="highlight">Ake Palace: </span> The residence of the
            Alake of Egbaland, a prominent traditional ruler, is a symbol of the
            state's royal heritage.
          </li>
        </ul>
      </div>
    </v-col>
  </v-row>
  <div class="text-center mt-5">
    <p>
      A vibrant state known for its rich history, industrial strength, and
      cultural diversity
    </p>
  </div>
</template>
<script>
export default {
  name: "WelcomeAbout",
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
