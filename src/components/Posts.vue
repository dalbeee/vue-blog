<template>
  <div class="grid w-full h-screen grid-cols-2 auto-rows-min">
    <postCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
// import { dataSet as posts } from "../data/data";
import PostCard from "./PostCard.vue";
import axios from "axios";

const getPosts = async () => {
  const { data } = await axios.get(
    "http://localhost:1337/posts?_sort=created_at:desc"
  );
  return data;
};

const posts = await getPosts();

export default {
  name: "Posts",
  components: { PostCard },
  data: () => ({ posts }),
};
</script>
