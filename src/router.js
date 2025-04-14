import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/homepage.vue";
import CheckDocument from "@/pages/checkdocument.vue";
import Addregl from "@/pages/addreglament.vue";
import Aiconsult from "./components/aiconsult.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/check", component: CheckDocument },
  { path: "/addregl", component: Addregl },
  { path: "/aiconsult", component: Aiconsult },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
