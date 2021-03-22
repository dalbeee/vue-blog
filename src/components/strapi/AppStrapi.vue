<template>
  <router-view class="w-full markdown" />
  <categories />
</template>

<script>
import Categories from "./Categories.vue";

export default {
  components: { Categories },
};
</script>

<style></style>
