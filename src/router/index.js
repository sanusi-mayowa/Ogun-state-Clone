import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import AboutPage from "@/pages/About.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
