<template>
  <div class="flex justify-center h-auto min-h-screen bg-gray-100">
    <div class="w-4/5">
      <Header />
      <div class="flex">
        <router-view class="w-full mr-4" />
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

import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Categories,
  },
  setup() {
    const store = useStore();

    return { store };
  },
});
</script>
