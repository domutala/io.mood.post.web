import Vue, { PluginObject } from "vue";

import Inpute from "./Input.vue";
import Loader from "./Loader.vue";
import Modal from "./Modal.vue";

import user from "./user";

const plug: PluginObject<Vue> = {
  install(vue) {
    vue.component("nInput", Inpute);
    vue.component("nLoader", Loader);
    vue.component("nModal", Modal);

    vue.use(user);
  },
};

export default plug;
