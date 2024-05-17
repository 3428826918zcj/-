import type { RouteRecordRaw } from "vue-router";
import A from "@/views/a.vue";
import B from "@/views/b.vue";
import Search from "@/views/search.vue";
import Mv from "@/views/MvRank.vue";
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/Mv" },
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/search", component: Search },
  { path: "/Mv", component: Mv },
];

export default routes;
