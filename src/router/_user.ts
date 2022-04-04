import { RouteConfig } from "vue-router";

const route: RouteConfig = {
  path: "/user/:id",
  name: "user",
  component: () => import("@/views/user/index.vue"),

  // redirect: { name: "user_me" },

  // children: [
  //   {
  //     path: "me",
  //     name: "user_me",
  //     component: () => import("@/views/user/me.vue"),
  //   },
  // ],
};

export default route;
