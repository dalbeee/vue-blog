<template>
  <div
    class="w-full gap-x-4 md:grid md:grid-cols-2 md:auto-rows-min lg:gap-x-8"
  >
    <post-card class="mb-4" v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { getPosts } from "../../util/connectGhost";
import PostCard from "../ghost/PostCard.vue";

export default {
  components: { PostCard },
  data: () => ({ posts: [] }),
  async created() {
    const result = await getPosts();
    this.posts = result;
    console.log(result);
  },
};
</script>

<style></style>
