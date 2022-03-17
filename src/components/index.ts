import Vue, { PluginObject } from "vue";

import Inpute from "./Input.vue";

const plug: PluginObject<Vue> = {
  install(vue) {
    vue.component("nInput", Inpute);
  },
};

export default plug;
