import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import MasteriesView from "../views/MasteriesView";
import MatchHistoryiew from "../views/MatchHistoryView";
import AboutView from "../views/AboutView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/history",
    name: "history",
    component: MatchHistoryiew,
  },
  {
    path: "/masteries",
    name: "masteries",
    component: MasteriesView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
