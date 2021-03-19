import { createStore } from "vuex";
import { AppData } from "./app_data";

const appData: AppData = {
  sources: [],
  categories: [],
  showSide: true,
};

const store = createStore({
  state: {
    appData,
    aCid: "", // 当前选中的 collection
    aSid: "", // 当前选中的媒体资源（待播放）
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
