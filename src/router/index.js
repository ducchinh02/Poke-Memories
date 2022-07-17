import { createRouter, createWebHistory } from "vue-router";
import StartScreen from "../views/StartScreen.vue";

const routes = [
  {
    path: "/",
    name: "StartScreen",
    component: StartScreen,
  },
  {
    path: "/PlayScreen",
    name: "PlayScreen",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PlayScreen.vue"),
  },
  {
    path: "/ScoreScreen",
    name: "ScoreScreen",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ScoreScreen.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
