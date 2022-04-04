<template>
  <div class="view">
    <div class="body">
      <w-post-list />
    </div>
    <div class="foot">
      <div style="padding: 20px">
        <router-link :to="{ name: 'register' }"> fhfghfgh </router-link>

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
.view {
  display: flex;
  justify-content: center;

  .body {
    margin: auto;

    @media (max-width: 772px) {
      width: calc(100% - 350px);
    }
  }
  .foot {
    position: sticky;
    top: 0;
    width: 349px;
    height: 100vh;
    overflow: auto;

    @media (max-width: 772px) {
      display: none;
    }
  }
}
</style>
