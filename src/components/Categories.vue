<template>
  <div class="hidden w-full pt-20 ml-4 sm:block">
    <div class="px-2">
      <div class="mb-4 text-xl font-semibold text-gray-400">카테고리</div>
      <div
        class="font-semibold text-gray-700"
        v-for="category in categories"
        :category="category"
        :key="category.type"
      >
        <button
          class="flex items-center justify-start px-4 py-2 transform border-gray-500 hover:scale-110 rounded-xl focus:outline-none"
          :class="
            this.$store.state.categoryName === category.name
              ? 'bg-gray-300'
              : ''
          "
          @click="setCategoryName(category.name)"
        >
          <span class="mr-4">{{ category.name }}</span>
          <i>{{ category.posts }}</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategories } from "../util/axios";

export default {
  methods: {
    getCategories,
    setCategoryName(categoryName) {
      this.$store.commit("setCategoryName", categoryName);
      this.$router.push("/");
    },
  },
  data: () => ({ categories: [], setActive: "" }),
  created() {
    this.getCategories().then((res) => {
      res.categories.map((r) => {
        this.categories.push(r);
      });
    });
  },
};
</script>

<style></style>
