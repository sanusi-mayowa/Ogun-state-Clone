import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import InvestMentLayout from "@/Layouts/InvestMentLayout.vue";
import HomePage from "@/pages/Home.vue";
import InvestmentPage from "@/pages/Investment.vue";
import NewsPage from "@/pages/News.vue";
import NewsDetail from "@/pages/NewsDetail";
import AboutPage from "@/pages/About.vue";
import GovernmentPage from "@/pages/Government.vue";
import MdaPage from "@/pages/Mda.vue";
import MdaEducationPage from "@/pages/MdaEducation.vue";
import ExecutivesPage from "@/pages/Executives.vue";
import EmergencyPage from "@/pages/Emergency.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "HomePage",
        component: HomePage,
      },
    ],
  },
  {
    path: "/investment",
    component: InvestMentLayout,
    children: [
      {
        path: "",
        name: "InvestmentPage",
        component: InvestmentPage,
      },
    ],
  },
  // {
  //   path: "/services",
  //   component: DefaultLayout,
  //   children: [
  //     {
  //       path: "",
  //       name: "ServicesPage",
  //       component: ServicesPage,
  //     },
  //   ],
  // },
  {
    path: "/news",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "NewsPage",
        component: NewsPage,
      },
    ],
  },
  {
    path: "/news/:url",
    component: DefaultLayout,
    children: [
      {
        path: "/news/:url",
        name: "NewsDetail",
        component: NewsDetail,
        props: true,
      },
    ],
  },
  {
    path: "/about",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "AboutPage",
        component: AboutPage,
      },
    ],
  },
  {
    path: "/government",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "GovernmentPage",
        component: GovernmentPage,
      },
    ],
  },
  {
    path: "/mda",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "MdaPage",
        component: MdaPage,
      },
    ],
  },
  {
    path: "/mdaeducation",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "MdaEducationPage",
        component: MdaEducationPage,
      },
    ],
  },
  {
    path: "/executives",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "ExecutivesPage",
        component: ExecutivesPage,
      },
    ],
  },
  {
    path: "/emergency",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "EmergencyPage",
        component: EmergencyPage,
      },
    ],
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
