import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import AboutPage from "@/pages/About.vue";
import GovernmentPage from "@/pages/Government.vue";
import EmergencyPage from "@/pages/Emergency.vue";
import ExecutivesPage from "@/pages/Executives.vue";

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
  {
    path: "/government",
    name: "GovernmentPage",
    component: GovernmentPage,
  },
  {
    path: "/emergency",
    name: "EmergencyPage",
    component: EmergencyPage,
  },
  {
    path: "/executives",
    name: "ExecutivesPage",
    component: ExecutivesPage,
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
