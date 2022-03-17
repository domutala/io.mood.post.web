<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { Params } from "@/store/types/Params";
import { IApp } from "./store/types/App";

@Component
export default class Comp extends Vue {
  @Getter("get", { namespace: "params" })
  params!: Params;

  @Getter("get", { namespace: "app" })
  app!: IApp;

  ready = false;

  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {
    this.setTheme();
    // await this.$server.INTERCEPTORS(this);
  }

  @Watch("params.darkMode")
  setTheme() {
    let param: "dark" | "light" = "light";
    param = this.params.darkMode ? "dark" : "light";
    this.$theme.set(param);
  }
}
</script>
