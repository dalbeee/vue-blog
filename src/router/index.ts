import { createRouter, createWebHistory } from "vue-router";
import Posts from "../components/Posts.vue";
import PostDetail from "../components/PostDetail.vue";

const routes = [
  { path: "/", component: Posts },
  { path: "/post/:slug", component: PostDetail },
];

const router = createRouter({
  history: createWebHistory(""),
  //   history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
