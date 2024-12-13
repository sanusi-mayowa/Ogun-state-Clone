<template>
  <section class="news-detail">
    <div class="container">
      <!-- Loading State -->
      <div
        v-if="loading"
        class="d-flex justify-center align-center"
        style="height: 300px"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
        <div class="font-weight-bold">Loading Article...</div>
      </div>

      <!-- Article Content -->
      <div v-else v-if="article" class="article-content">
        <!-- Large Image of the Article -->
        <img
          :src="article.urlToImage || '/assets/news.png'"
          class="article-image-large"
          alt="Article Image"
        />

        <!-- Title -->
        <h1 class="article-title">{{ article.title }}</h1>

        <!-- Description -->
        <p class="article-description">{{ article.description }}</p>

        <!-- Content Body -->
        <div class="article-body mt-3">
          <p v-html="article.content"></p>
        </div>
      </div>

      <!-- Error State (if article not found) -->
      <div v-else class="error-message">
        <p>Sorry, we couldn't find the article you're looking for.</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsDetailPage",
  data() {
    return {
      article: null,
      loading: true,
    };
  },
  created() {
    this.fetchArticleDetails();
  },
  methods: {
    async fetchArticleDetails() {
      const articleUrl = this.$route.params.url; // Get article URL from URL params

      if (!articleUrl) {
        console.error("No article URL provided.");
        this.loading = false;
        return;
      }

      try {
        // Now that we have the article URL, fetch the article from the API
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            apiKey: "e7b34c559b2e4fb78810c513ef067c5d", // Replace with your NewsAPI key
            q: articleUrl, // Use the URL or part of it to search for the article
            language: "en",
            pageSize: 1, // Limit to 1 result
          },
        });

        if (response.data.articles.length > 0) {
          this.article = response.data.articles[0]; // Assuming the first article is the one we want
        } else {
          this.article = null; // Handle case if no article is found
        }
      } catch (error) {
        console.error("Error fetching article details:", error);
        this.article = null; // Set article to null in case of error
      } finally {
        this.loading = false; // Stop loading after the request completes
      }
    },
  },
};
</script>

<style scoped>
/* Large Image Style */
.article-image-large {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
}

/* Title Style */
.article-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Description Style */
.article-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

/* Content Body Style */
.article-body {
  font-size: 1rem;
  line-height: 1.6;
}

/* Error Message Style */
.error-message {
  text-align: center;
  font-size: 1.2rem;
  color: #d9534f;
}
</style>
