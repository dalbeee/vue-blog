import { createStore } from "vuex";

const store = createStore({
  state() {
    return { count: 0, categoryName: "all" };
  },

  mutations: {
    setCategoryName(state, categoryName) {
      state.categoryName = categoryName;
    },
  },
});

export default store;
