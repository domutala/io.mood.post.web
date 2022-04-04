<template>
  <div>
    <div class="body">
      <w-post-list />
    </div>
    <div class="foot"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { IApp } from "@/store/types/App";
import wPostList from "@/widgets/post/one/index.vue";

@Component({ components: { wPostList } })
export default class Comp extends Vue {
  @Getter("get", { namespace: "app" })
  app!: IApp;

  ready = false;

  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {}
}
</script>

<style lang="scss" scoped>
.body {
  background-color: red;
  @media (max-width: 772px) {
    width: calc(100% - 350px);
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
