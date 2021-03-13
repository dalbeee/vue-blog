<template>
  <div class="flex justify-center">
    <div class="relative">
      <div class="py-4 text-4xl font-semibold text-gray-700">
        {{ post.title }}
      </div>
      <div class="py-4 break-words" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { getPost } from "../util/axios";
import marked from "marked";

marked.setOptions({
  baseUrl: "http://localhost:1337",
});

export default {
  data: () => ({
    post: {},
    content: "",
  }),
  methods: {
    getPost,
  },
  created() {
    this.getPost(this.$route.params.slug).then((res) => {
      console.log(res);
      this.post = res;
      this.content = marked(res.content);
    });
  },
};
</script>
