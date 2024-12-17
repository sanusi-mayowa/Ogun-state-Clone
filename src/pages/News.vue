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
                @click="setCategory(option)"
              >
                <v-list-item-title class="text-black text-center">
                  {{ option.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <!-- Loading State -->
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

      <!-- Hero Section -->
      <div
        v-else-if="newsItems.length > 0"
        class="news-hero-section-inner position-relative mt-5"
      >
        <img
          :src="newsItems[0].urlToImage || '/assets/newssection.png'"
          width="100%"
          class="rounded-xl"
          alt="News Hero"
        />
        <div class="news-hero-section-description position-absolute text-white">
          <span class="text-grey">
            {{
              newsItems[0].publishedAt
                ? new Date(newsItems[0].publishedAt).toLocaleDateString()
                : "Unknown Date"
            }}
          </span>
          <h1 class="w-75 mt-2">
            {{ newsItems[0].title || "No Title Available" }}
          </h1>
          <p class="mt-3">
            {{ newsItems[0].description || "No description available." }}
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
              alt="News Image"
            />
            <div class="news-details px-5">
              <span class="date text-grey my-2 d-block">
                {{
                  item.publishedAt
                    ? new Date(item.publishedAt).toLocaleDateString()
                    : "Unknown Date"
                }}
              </span>
              <h1 class="news-title mb-2">
                {{ item.title || "Untitled News" }}
              </h1>
              <p class="news-description">
                {{ item.description || "No description available." }}
              </p>
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

      <!-- Pagination -->
      <v-pagination
        v-if="totalResults > 0"
        v-model="currentPage"
        :length="Math.ceil(totalResults / 6)"
        :total-visible="5"
        @input="fetchNews"
        class="d-flex justify-center mt-5"
      />
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "NewsPage",
  data() {
    return {
      options: [
        {
          id: 1,
          text: "Sport",
        },
        {
          id: 2,
          text: "Politics",
        },
        {
          id: 3,
          text: "Health",
        },
      ],
      newsItems: [], // Fetched news articles
      loading: true, // Loading state
      currentPage: 1, // Current page
      totalResults: 0, // Total results from API
      pageSize: 6, // Number of articles per page
    };
  },
  created() {
    this.fetchNews(); // Fetch news on page load
  },
  watch: {
    currentPage(newPage) {
      this.fetchNews(); // Refetch news when page changes
    },
  },
  methods: {
    async fetchNews(category = null) {
      this.loading = true;
      try {
        const params = {
          category: category || "Ogun State", // Default category
          apiKey: "e7b34c559b2e4fb78810c513ef067c5d", // Replace with your actual API key
          page: this.currentPage,
          pageSize: this.pageSize, // Set the page size to 6
        };

        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params,
          }
        );

        if (response.data && response.data.articles) {
          this.newsItems = response.data.articles;
          this.totalResults = response.data.totalResults || 0;
        } else {
          this.newsItems = [];
          this.totalResults = 0;
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        this.newsItems = [];
        this.totalResults = 0;
      } finally {
        this.loading = false;
      }
    },
    setCategory(option) {
      this.currentPage = 1; // Reset to the first page
      this.fetchNews(option.text); // Fetch news by category
    },
  },
};
</script>
