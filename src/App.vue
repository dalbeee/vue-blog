<template>
  <div class="flex justify-center h-auto min-h-screen bg-gray-100">
    <div class="w-11/12 2xl:w-3/5">
      <Header />
      <div class="flex">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/js/all.js";

import { defineComponent } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  created() {
    document.title = import.meta.env.VITE_APP_TITLE;
  },
});
</script>
