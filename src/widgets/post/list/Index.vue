<template>
  <div class="w_post_list">
    <div class="one" v-for="i in 5" :key="i">
      <w-one />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wOne from "./One.vue";

@Component({ components: { wOne } })
export default class Comp extends Vue {
  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {}
}
</script>

<style lang="scss" scoped>
.w_post_list {
  padding: 0px;
  max-width: 500px;
  margin: 20px auto;

  .one {
    &:not(:last-child) {
      margin-bottom: 50px;
    }

    @media (max-width: 500px) {
      margin-bottom: 0 !important;

      &:not(:last-child) {
        border-bottom: 1px solid rgba(var(--dark), 0.1);
      }
    }
  }
}
</style>
