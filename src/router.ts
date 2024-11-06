import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./components/specific/HomeviewComponent/NotFoundPage.vue";
import HomePage from "./views/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
