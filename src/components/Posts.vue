<template>
  <div class="grid grid-cols-2 auto-rows-min">
    <postCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
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
      return this.$store.getters.categoryName;
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

  created() {
    this.getCategoryPosts(this.categoryName).then((res) => {
      res.posts.map((r) => {
        this.posts.push(r);
      });
    });
  },
};
</script>
