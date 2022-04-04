<template>
  <div>
    <w-menu />
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wMenu from "@/widgets/menu/index.vue";

@Component({ components: { wMenu } })
export default class Comp extends Vue {
  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {}
}
</script>

<style lang="scss" scoped>
.body {
  margin-left: 70px;

  @media (max-width: 772px) {
    margin-left: 0;
    margin-bottom: 70px;
  }
}
</style>
