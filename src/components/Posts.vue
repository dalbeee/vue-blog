<template>
  <div class="grid w-full grid-cols-2 auto-rows-min">
    <postCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import { getPosts } from "../util/axios";

export default {
  name: "Posts",
  components: { PostCard },
  methods: {
    getPosts,
  },
  data: () => ({ posts: [] }),
  created() {
    this.getPosts().then((res) => {
      res.map((r) => this.posts.push(r));
    });
  },
};
</script>
