import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { RootState } from "./types";
import modules from "./modules";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  plugins: [
    (store) => {
      const old = localStorage.getItem("cookies");
      if (old) store.replaceState(JSON.parse(old));

      store.subscribe((mutation, state) => {
        localStorage.setItem("cookies", JSON.stringify(state));
        // console.log(`savestore:${JSON.stringify(state)}`);
      });
    },
  ],
  strict: process.env.NODE_ENV !== "production",
  modules,
};

export default new Vuex.Store(store);
