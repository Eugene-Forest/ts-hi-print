import { createRouter, createWebHashHistory } from "vue-router";
import Designer from "../components/Designer.vue";
import Render from "../components/Render.vue";

const routes = [
  { path: "/", component: Designer },
  { path: "/designer", component: Designer },
  { path: "/render", component: Render },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
