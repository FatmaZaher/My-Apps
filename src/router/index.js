import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Aboutapps from "../views/Aboutapps.vue";
import MainCardShow from "../views/MainCardShow.vue";
import SubCardShow from "../views/SubCardShow.vue";
import ShowInfoApp from "../views/ShowInfoApp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/Aboutapps",
    name: "Aboutapps",
    component: Aboutapps
  },
  {
    path: "/MainCardShow/:id",
    name: "MainCardShow",
    component: MainCardShow
  },
  {
    path: "/SubCardShow/:id",
    name: "SubCardShow",
    component: SubCardShow
  },
  {
    path: "/ShowInfoApp/:id",
    name: "ShowInfoApp",
    component: ShowInfoApp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
