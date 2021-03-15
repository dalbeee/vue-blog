<template>
  <div class="flex items-center justify-center w-full h-16">
    <router-link to="/" class="flex items-center text-xl font-bold no-underline"
      ><i class="mx-2 text-2xl fas fa-home"></i>Home</router-link
    >
  </div>
  <button
    @click="visible = !visible"
    class="absolute top-0 right-0 z-50 w-12 h-12 text-gray-200 bg-gray-700 md:hidden"
  >
    X
  </button>
  <div
    :class="visible ? 'block' : 'hidden'"
    class="absolute top-0 left-0 z-10 w-full min-h-screen bg-gray-300"
  ></div>
</template>

<script>
export default {
  data: () => ({ visible: false }),
};
</script>
