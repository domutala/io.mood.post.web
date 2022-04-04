import Vue, { PluginObject } from "vue";

import Avatar from "./Avatar.vue";
import Name from "./Name.vue";
import Username from "./Username.vue";

const plug: PluginObject<Vue> = {
  install(vue) {
    vue.component("cUserAvatar", Avatar);
    vue.component("cUserName", Name);
    vue.component("cUserUsername", Username);
  },
};

export default plug;
