import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/Home.vue";
import NewsPage from "@/pages/News.vue";
import AboutPage from "@/pages/About.vue";
import GovernmentPage from "@/pages/Government.vue";
import EmergencyPage from "@/pages/Emergency.vue";
import ExecutivesPage from "@/pages/Executives.vue";
import MdaPage from "@/pages/Mda.vue";
import NewsDetail from "@/pages/NewsDetail.vue";
import MdaEducation from "@/pages/MdaEducation.vue";

// import ReadMore from "@/pages/Readmore.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/news",
    name: "NewsPage",
    component: NewsPage,
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
  {
    path: "/mda",
    name: "MdaPage",
    component: MdaPage,
  },
  {
    path: "/mdaeducation",
    name: "MdaEducation",
    component: MdaEducation,
  },
  {
    path: "/news/:url",
    name: "NewsDetail",
    component: NewsDetail,
    props: true,
  },
  // {
  //   path: "/read-more/:id",
  //   name: "ReadMore",
  //   component: ReadMore,
  //   props: true, // This allows passing the route params as props to the component
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
