<template>
  <div id="app">
    <div class="head"></div>
    <div class="body">
      <w-post-list />
    </div>
    <div class="foot">
      <div style="padding: 20px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quod.
        Corporis fugiat repudiandae dolorum! Praesentium, fugiat. Dolorem
        architecto eveniet maiores officiis, a doloremque non natus accusamus
        nostrum fugiat dolore eius.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { IApp } from "@/store/types/App";
import wPostList from "@/widgets/post/list/Index.vue";

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
    padding-bottom: 60px;
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
