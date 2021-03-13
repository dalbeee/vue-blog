<template>
  <div class="flex items-center justify-center w-full h-16">
    <router-link to="/" class="flex items-center text-xl font-bold no-underline"
      ><i class="mx-2 text-2xl fas fa-home"></i>Home</router-link
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
import { useRouter } from "vue-router";

export default {
  // INFO setup 메서드에서 router this 에 접근한다
  setup: () => {
    const router = useRouter();
    console.log(router);
  },
};
</script>
