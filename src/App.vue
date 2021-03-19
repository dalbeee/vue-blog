<template>
  <div class="flex justify-center h-auto min-h-screen bg-gray-100">
    <div class="w-10/12 lg:w-4/5 xl:w-3/5">
      <Header />
      <div class="flex">
        <router-view class="w-full" />
        <Categories />
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/js/all.js";

import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Categories from "./components/Categories.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Categories,
  },
  created() {
    document.title = import.meta.env.VITE_APP_TITLE;
  },
});
</script>
