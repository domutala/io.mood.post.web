<template>
  <div class="menu">
    <div class="body">
      <div class="body">1</div>
      <div class="body">2</div>
      <button class="body" @click="logout">out</button>
    </div>
    <div class="foot">
      <div>
        <n-loader v-if="loading" />
        <c-user-avatar :user="user" v-else-if="user" />
        <router-link
          :to="{ name: 'register' }"
          v-else
          class="avatar"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { ISession } from "@/store/types/Session";
import { IUser } from "@/store/types/User";

@Component
export default class Comp extends Vue {
  @Getter("get", { namespace: "session" })
  session!: ISession;

  user: IUser | false = false;
  loading = false;

  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {
    this.get_my();
  }

  @Watch("session.user")
  get_my() {
    this.user = false;

    if (this.session.user) {
      this.loading = false;

      this.$server
        .REQUEST({ url: "/user/get_my" })
        .then((data) => {
          this.user = data;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  logout() {
    if (this.session.user) {
      this.loading = true;
      this.$server
        .REQUEST({ url: "/session/logout", method: "post" })
        .then(() => {
          const event = new CustomEvent("logged");
          window.dispatchEvent(event);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 69px;
  height: 100%;
  background-color: rgba(var(--light), 1);
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-right: 1px solid rgba(var(--dark), 0.07);
  // box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 12px;

  > .body {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  > .foot {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 1px;
      border-top: 1px solid rgba(var(--dark), 0.1);
    }

    > div {
      width: 69px;
      height: 69px;
      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 16em;
        background-color: rgba(var(--dark), 0.07);
        cursor: pointer;

        > img {
          width: 100%;
          height: 100%;
          border-radius: inherit;
          object-position: center;
          object-fit: cover;
        }

        &:hover {
          box-shadow: rgba(var(--dark), 0.2) 0px 10px 50px;
        }
      }
    }
  }

  @media (max-width: 772px) {
    width: 100%;
    height: 69px;
    border: 0;
    border-top: 1px solid rgba(var(--dark), 0.07);
    top: unset;
    bottom: 0;
    z-index: 500;
    flex-direction: row;

    > .body {
      flex-direction: row;
      order: 2;
    }

    > .foot {
      order: 1;

      &::before {
        top: 50%;
        right: 0;
        left: unset;
        transform: translateY(-50%);
        width: 1px;
        height: 30px;
        border-top: 0;
        border-right: 1px solid rgba(var(--dark), 0.1);
      }
    }
  }
}
</style>
