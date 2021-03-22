<template>
  <router-view class="w-full" />
  <categories />
</template>

<script>
import Categories from "./Categories.vue";

export default {
  components: { Categories },
};
</script>

<style></style>
