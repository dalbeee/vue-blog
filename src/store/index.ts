import { createStore } from "vuex";
import defaultThumbnail from "../assets/thumbnail_default.jpg";

const store = createStore({
  state() {
    return {
      defaultThumbnail: defaultThumbnail,
      categoryName: "all",
    };
  },

  mutations: {
    setCategoryName(state: any, categoryName) {
      state.categoryName = categoryName;
    },
  },
});

export default store;
