import Vue, { PluginObject } from "vue";
import datetime from "./datetime";
import number_ from "./number";
import phone from "./phone";
import regex from "./regex";

const plug: PluginObject<Vue> = {
  install: (vue) => {
    vue.prototype.$utils = {
      datetime,
      number: number_,
      phone,
      regex,
    };
  },
};

export default plug;
