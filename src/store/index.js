import { createStore } from "vuex";
const URL = import.meta.env.VITE_URL;

const store = createStore({
  state() {
    return {
      defaultThumbnail: `${URL}/uploads/thumbnail_default.jpg`,
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
