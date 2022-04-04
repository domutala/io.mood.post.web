import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import user from "./_user";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/file/index.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: () => import("@/views/post/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register/index.vue"),
    redirect: { name: "register_login" },

    children: [
      {
        path: "login",
        name: "register_login",
        component: () => import("@/views/register/login.vue"),
      },
      {
        path: "register",
        name: "register_register",
        component: () => import("@/views/register/register.vue"),
      },
    ],
  },
  user,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.body.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export default router;
