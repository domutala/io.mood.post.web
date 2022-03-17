<template>
  <div id="app">
    <div class="v-init">
      <div v-html="$app.logo.svg"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { Params } from "@/store/types/Params";
import { IApp } from "./store/types/App";

@Component({
  components: {},
})
export default class Comp extends Vue {
  @Getter("get", { namespace: "params" })
  params!: Params;

  @Getter("get", { namespace: "app" })
  app!: IApp;

  ready = false;

  mounted() {
    setTimeout(this.init, 2000);
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

<style lang="scss" scoped>
.myapp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss">
.v-init {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 64px;
    fill: rgba(var(--primary), 1);
  }
}
</style>
