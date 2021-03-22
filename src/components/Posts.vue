<template>
  <div
    class="w-full gap-x-4 md:grid md:grid-cols-2 md:auto-rows-min lg:gap-x-8"
  >
    <postCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostCard from "./strapi/PostCard.vue";
import { getPosts, getCategoryPosts } from "../util/axios";

export default {
  name: "Posts",
  components: { PostCard },
  methods: {
    getPosts,
    getCategoryPosts,
  },
  data: () => ({ posts: [] }),

  computed: {
    categoryName() {
      const result = this.$store.state.categoryName;
      return result;
    },
  },

  watch: {
    categoryName() {
      this.posts = [];
      this.getCategoryPosts(this.categoryName).then((res) => {
        res.posts.map((r) => {
          this.posts.push(r);
        });
      });
    },
  },

  mounted() {
    this.getCategoryPosts(this.categoryName).then((res) => {
      res.posts.map((r) => {
        this.posts.push(r);
      });
    });
  },
};
</script>
