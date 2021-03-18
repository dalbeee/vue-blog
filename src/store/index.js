import { createStore } from "vuex";
const URL = import.meta.env.VITE_URL;

const store = createStore({
  state() {
    return {
      defaultThumbnail: `${URL}/uploads/thumbnail_photo_1460819739742_50e4486578f5_59105b0652.jpg`,
      categoryName: "all",
    };
  },

  mutations: {
    setCategoryName(state, categoryName) {
      state.categoryName = categoryName;
    },
  },
});

export default store;
