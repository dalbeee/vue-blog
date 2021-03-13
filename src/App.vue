<template>
  <div class="flex justify-center bg-gray-100">
    <div class="w-4/5 min-h-screen">
      <Header />
      <router-view />
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
});
</script>
