import { createRouter, createWebHistory } from "vue-router";
import AppDashboard from "../components/AppDashboard.vue";
import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";
import InvestigationInner from "../components/InvestigationInner.vue";
import NewBoard from "../components/NewBoard.vue";
import OfficialCharts from "../components/OfficialCharts.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: AppDashboard,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterForm,
  },
  {
    path: "/investigationInner",
    name: "investigationInner",
    component: InvestigationInner,
  },
  {
    path: "/newBoard",
    name: "newBoard",
    component: NewBoard,
  },
  {
    path: "/officialCharts",
    name: "officialCharts",
    component: OfficialCharts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
