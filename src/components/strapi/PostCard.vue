<template>
  <div className="w-full overflow-hidden bg-gray-200 rounded-t-2xl mb-4">
    <router-link :to="`/post/${post.slug}`" class="no-underline">
      <div className="flex flex-col items-center justify-center ">
        <div className="mb-2">
          <img
            v-if="thumbnail"
            :src="thumbnail"
            alt=""
            className="object-cover overflow-hidden w-full h-32"
          />
          <img
            v-else
            :src="this.$store.state.defaultThumbnail"
            className="object-cover overflow-hidden w-full h-32"
          />
        </div>
        <div className="px-2 text-gray-400 w-full ">
          <div className="font-semibold text-gray-700 truncate">
            {{ post.title }}
          </div>
          <div
            className="h-16 overflow-hidden leading-tight text-gray-400 break-words whitespace-pre-wrap "
          >
            {{ parsedContent }}
          </div>
          <div className="pb-2 text-sm text-right text-gray-500">
            {{ post.createdAt }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
const regexStr = /(!\[.*\)\s)|(#\s)/g;

export default {
  name: "PostCard",
  props: ["post"],
  computed: {
    parsedContent: ({ post }) => {
      return post.content
        .replace(regexStr, "")
        .substr(0, 200)
        .replace(/^\n{1,}/, "");
    },
  },
};
</script>
