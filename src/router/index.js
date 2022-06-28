import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";
import OverviewView from "../views/OverviewView";
import MasteriesView from "../views/MasteriesView";
import MatchHistoryiew from "../views/MatchHistoryView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/overview/:summonerName",
    name: "overview",
    component: OverviewView,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
