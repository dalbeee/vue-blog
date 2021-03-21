<template>
  <div class="" v-html="post.html"></div>
</template>

<script>
import { getPost } from "../../util/connectGhost";

export default {
  data: () => ({ post: {} }),
  async created() {
    const post = await getPost(this.$route.params.slug);
    console.log(this.$route.params.slug);
    this.post = post;
    console.log(post);
  },
};
</script>

<style></style>
