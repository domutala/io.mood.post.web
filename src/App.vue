<template>
  <div id="app">
    <div class="head"></div>
    <div class="body">
      <div style="padding: 20px">
        <w-post-list />
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { Params } from "@/store/types/Params";
import { IApp } from "./store/types/App";

import wPostList from "@/widgets/post/list/Index.vue";

@Component({
  components: { wPostList },
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
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 69px;
  height: 100%;
  border-right: 1px solid rgba(var(--dark), 0.1);
  background-color: rgba(var(--light), 1);

  @media (max-width: 992px) {
    width: 100%;
    height: 69px;
    border: 0;
    border-top: 1px solid rgba(var(--dark), 0.1);
    top: unset;
    bottom: 0;
    z-index: 500;
  }
}
.body {
  position: absolute;
  top: 0;
  left: 70px;
  width: calc(100% - 420px);

  @media (max-width: 992px) {
    top: 0;
    left: 0;
    width: calc(100% - 350px);
  }

  @media (max-width: 772px) {
    width: 100%;
  }
}
.foot {
  position: fixed;
  top: 0;
  right: 0;
  width: 349px;
  height: 100%;

  @media (max-width: 772px) {
    display: none;
  }
}
</style>
