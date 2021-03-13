<template>
  <div class="flex justify-center w-full h-20">
    <router-link to="/" class="w-20 h-20 text-xl font-bold no-underline"
      >Home</router-link
    >
    <!-- TODO 라우팅 출력을 v-for 로 변경  -->
    <!-- <div
      v-for="(item, index) in headerRoutes"
      :key="index"
      class="w-20 h-20 text-xl font-bold no-underline"
    >
      <router-link to="/">Home </router-link>
    </div> -->
  </div>
</template>

<script>
// const headerRoutes = [
//   { path: "/", component: Posts },
//   { path: "/posts", component: Header },
// ];

import { useRouter } from "vue-router";

export default {
  setup: () => {
    const router = useRouter();
    console.log(router);
  },
};
</script>
