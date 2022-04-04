<template>
  <router-link
    class="avatar"
    :to="{ name: 'user', params: { id: user.username || user.id } }"
  >
    <img src="/img/00.jpg" alt="" />
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { ISession } from "@/store/types/Session";
import { IUser } from "@/store/types/User";

@Component
export default class Comp extends Vue {
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
  width: 40px;
  height: 40px;
  border-radius: 16em;
  background-color: rgba(var(--dark), 0.07);
  cursor: pointer;
  display: block;

  > img {
    width: inherit;
    height: inherit;
    border-radius: inherit;
    object-position: center;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgba(var(--dark), 0.2) 0px 10px 50px;
  }

  &.lg {
    width: 56px;
    height: 56px;
  }

  &.sm {
    width: 24px;
    height: 24px;
  }
}
</style>
