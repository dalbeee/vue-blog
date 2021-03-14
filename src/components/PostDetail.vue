<template>
  <div class="flex justify-center">
    <div class="">
      <div class="py-4 text-4xl font-semibold text-gray-700">
        {{ post.title }}
      </div>
      <div class="py-4 break-words" h-auto v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { getPost } from "../util/axios";
import marked from "marked";

import env from "../config";
const host = env.host;

marked.setOptions({
  baseUrl: host,
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
      this.post = res;
      this.content = marked(res.content);
    });
  },
};
</script>
