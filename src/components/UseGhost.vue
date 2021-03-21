<template>
  <!-- {{ post }} -->
  <div class="" v-html="post.html"></div>
</template>

<script>
import { getPost, getPosts } from "../util/connectGhost";

export default {
  data: () => ({ posts: [], post: {} }),
  async created() {
    if (!this.$route.params.slug) {
      const result = await getPosts();
      this.posts = result;
      console.log(result);
    } else {
      const post = await getPost(this.$route.params.slug);
      this.post = post;
      console.log(post);
    }
  },
};
</script>

<style></style>
