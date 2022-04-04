<template>
  <div class="avatar" :class="{ center }">
    <router-link
      :to="{ name: 'user', params: { id: user.username || user.id } }"
    >
      {{ user.name }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { ISession } from "@/store/types/Session";
import { IUser } from "@/store/types/User";

@Component
export default class Comp extends Vue {
  @Prop({ default: false, type: Boolean })
  center!: boolean;

  @Prop({ required: true })
  user!: IUser;

  @Getter("get", { namespace: "session" })
  session!: ISession;

  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {}
}
</script>

<style lang="scss" scoped>
.avatar {
  line-height: 1;
  display: flex;
  width: 300px;
  max-width: 100%;

  > a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration-style: dotted;
      text-decoration-line: underline;
    }
  }

  &.center {
    justify-content: center;
    margin: auto;
  }
}
</style>
