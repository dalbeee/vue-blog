import { createStore } from "vuex";

const store = createStore({
  state() {
    return { count: 0, categoryName: "" };
  },

  mutations: {
    setCategoryName(state, categoryName) {
      state.categoryName = categoryName;
    },
  },

  getters: {
    categoryName: (state) => state.categoryName,
  },
});

export default store;
