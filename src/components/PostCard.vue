<template>
  <div className="mx-4 mb-4 overflow-hidden bg-gray-200 rounded-t-2xl w-4/5">
    <router-link :to="`/post/${post.slug}`" class="no-underline">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
          <img :src="parsedImg" alt="" className="object-cover w-full h-32" />
        </div>
        <div className="px-2 text-gray-400 ">
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
const regexImg = /[^\(]+\)/g;

const URL = import.meta.env.VITE_URL;

export default {
  name: "PostCard",
  props: ["post"],
  computed: {
    parsedImg: ({ post }) => {
      const result = post.content.match(regexImg)[0].slice(0, -1);
      return `${URL}${result}`;
    },
    parsedContent: ({ post }) => {
      return post.content
        .replace(regexStr, "")
        .substr(0, 200)
        .replace(/^\n{1,}/, "");
    },
  },
};
</script>
