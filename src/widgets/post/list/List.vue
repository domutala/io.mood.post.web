<template>
  <div class="w_post_list">
    <div class="one" v-for="i in 5" :key="i">
      <w-article />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import wArticle from "@/widgets/Article.vue";

@Component({ components: { wArticle } })
export default class Comp extends Vue {
  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {}
}
</script>

<style lang="scss" scoped>
.w_post_list {
  padding: 30px;
  max-width: 500px;
  margin: auto;

  .one {
    margin-bottom: 20px;
  }
}
</style>
