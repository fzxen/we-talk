import { createRouter, createWebHashHistory } from "vue-router";

const history = createWebHashHistory();

const router = createRouter({
  routes: [
    {
      path: "/",
      component: () => import("./views/friends.vue"),
    },
  ],
  history,
});

export default router;
