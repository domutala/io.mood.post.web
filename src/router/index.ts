import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    // component: () => import("@/views/home/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const app = document.querySelector("#app") as HTMLDivElement;
  app.scrollTo({ top: 0, behavior: "smooth" });

  next();
});

export default router;
