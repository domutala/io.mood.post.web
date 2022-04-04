import Vue, { PluginObject } from "vue";
import datetime from "./datetime";
import number_ from "./number";
import phone from "./phone";
import regex from "./regex";
import rsa from "./rsa";

const plug: PluginObject<Vue> = {
  install: (vue) => {
    vue.prototype.$utils = {
      datetime,
      number: number_,
      phone,
      regex,
      rsa,
    };
  },
};

export default plug;
