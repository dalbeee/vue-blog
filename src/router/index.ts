import { createRouter, createWebHistory } from "vue-router";
import Posts from "../components/Posts.vue";
import PostDetail from "../components/strapi/PostDetail.vue";
import AppStrapi from "../components/strapi/AppStrapi.vue";

import AppGhost from "../components/ghost/AppGhost.vue";
import GhostPosts from "../components/ghost/Posts.vue";
import GhostPostDetail from "../components/ghost/PostDetail.vue";

const routes = [
  {
    path: "/",
    component: AppStrapi,
    children: [
      { path: "/", component: Posts },
      { path: "/post/:slug", component: PostDetail },
    ],
  },
  {
    path: "/ghost",
    component: AppGhost,
    children: [
      { path: "/ghost", component: GhostPosts },
      { path: "/ghost/post/:slug", component: GhostPostDetail },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(""),
  //   history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
