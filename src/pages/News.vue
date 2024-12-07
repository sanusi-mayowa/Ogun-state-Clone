<template>
  <section class="new-hero">
    <div class="text-center news">
      <h2 class="text-primary">News</h2>
      <p>Explore recent developments, News, in Ogun State</p>
      <div class="border-black border mt-3 w-100"></div>
    </div>
    <div class="news-hero-section px-15">
      <div class="update d-flex align-center justify-space-between w-100 mt-5">
        <div>
          <h2>Updates</h2>
        </div>
        <div>
          <v-menu transition="slide-y-transition" flat>
            <template v-slot:activator="{ props }">
              <v-btn class="bg-primary select rounded-pill" v-bind="props">
                Categories
              </v-btn>
            </template>
            <v-list flat>
              <v-list-item
                class="text-black"
                v-for="option in options"
                :key="option"
              >
                <v-list-item-title class="text-black text-center">{{
                  option.text
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <!-- Loading state -->
      <div
        v-if="loading"
        class="d-flex justify-center ga-10 align-center"
        style="height: 300px"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
        <div class="font-weight-bold">Fetching News</div>
      </div>

      <!-- Content after data is loaded -->
      <div v-else class="news-hero-section-inner position-relative mt-5">
        <img
          src="/assets/newssection.png"
          width="100%"
          class="rounded-xl"
          alt=""
        />
        <div class="news-hero-section-description position-absolute text-white">
          <span class="text-grey">March 29, 2023</span>
          <h1 class="w-75 mt-2">
            Replacing Stomach Infrastructure with Project Infrastructure,
            Sujimoto Congratulates Prince Dapo Abiodun, Ogun State Governor
            Re-elect
          </h1>
          <p class="mt-3">
            The journey to Prince Dapo Abiodun’s re-election as Governor of Ogun
            State was a tumultuous one, marked by internal and external
            political strife. ‘However, despite the challenges, I was eager to
            make the trip down to Ogun State to congratulate my egbon and mentor
            in person.’
          </p>
        </div>
      </div>

      <!-- Latest News Section -->
      <div class="news-main mt-16">
        <div class="border-black border my-3 w-100"></div>
        <h2 class="mt-5 mb-5">Latest News</h2>
      </div>
      <v-row>
        <v-col
          v-for="(item, index) in newsItems"
          :key="index"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card class="news-items position-relative pb-4">
            <img
              :src="item.urlToImage || '/assets/news.png'"
              width="100%"
              height="100%"
              alt=""
            />
            <div class="news-details px-5">
              <span class="date text-grey my-2 d-block">{{
                new Date(item.publishedAt).toLocaleDateString()
              }}</span>
              <h1 class="news-title mb-2">{{ item.title }}</h1>
              <p class="news-description">{{ item.description }}</p>
              <div class="route mt-2">
                <router-link
                  :to="{ name: 'NewsDetail', params: { url: item.url } }"
                  class="text-primary"
                >
                  Read More
                </router-link>
              </div>
            </div>
            <div class="latest position-absolute text-center">
              <h3 class="bg-red px-5 py-2 rounded-pill">Latest News</h3>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Vuetify Pagination Component -->
      <v-pagination
        v-model="currentPage"
        :length="Math.ceil(totalResults / pageSize)"
        :total-visible="5"
        @input="fetchNews"
        class="d-flex justify-center mt-5"
      />
    </div>
  </section>
</template>
<script>
import axios from "axios";
import data from "@/data.json";

export default {
  name: "NewsPage",
  data() {
    return {
      options: data.options,
      newsItems: [],
      loading: true,
      currentPage: 1,
      totalResults: 0,
      pageSize: 6,
    };
  },
  created() {
    this.fetchNews();
  },
  watch: {
    currentPage(newPage) {
      this.fetchNews();
    },
  },
  methods: {
    async fetchNews() {
      this.loading = true;
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "Ogun State",
            apiKey: "e7b34c559b2e4fb78810c513ef067c5d",
            language: "en",
            page: this.currentPage,
            pageSize: this.pageSize,
          },
        });
        this.newsItems = response.data.articles;
        this.totalResults = response.data.totalResults;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching news:", error);
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped>
.news-items img {
  object-fit: cover;
  height: 300px !important;
}

.news-title {
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
