<template>
  <div id="app">
    <div class="v-init" v-if="!ready">
      <div>
        <div v-html="$app.logo.svg" class="brand"></div>
        <n-loader />
      </div>
    </div>
    <w-frame v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { Params } from "@/store/types/Params";
import { ISession } from "./store/types/Session";
import wFrame from "@/widgets/Frame.vue";

@Component({ components: { wFrame } })
export default class Comp extends Vue {
  @Getter("get", { namespace: "params" })
  params!: Params;

  @Getter("get", { namespace: "session" })
  session!: ISession;

  ready = false;

  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {
    this.ready = false;
    this.setTheme();
    setTimeout(this.next, 0);
  }

  async next() {
    window.addEventListener("logged", () => {
      this.is_logged();
    });
    await this.$server.INTERCEPTORS(this);
    this.reload();
  }

  reload() {
    this.$server
      .REQUEST({
        url: "/session/init",
        method: "post",
      })
      .then((data) => {
        this.$store.commit("session/SET_TOKEN", data.token);
        this.$store.commit("session/SET_SERVER_KEYS", {
          public: data.publickey,
        });
      })
      .finally(() => {
        this.ready = true;
      });
  }

  is_logged() {
    this.$store.commit("session/SET_USER");
    this.$server.REQUEST({ url: "/session/is_logged" }).then((data) => {
      if (data.is_logged) {
        this.$store.commit("session/SET_USER", data.user_id);
      }
    });
  }

  @Watch("params.darkMode")
  setTheme() {
    let param: "dark" | "light" = "light";
    param = this.params.darkMode ? "dark" : "light";
    this.$theme.set(param);
  }
}
</script>

<style lang="scss">
.v-init {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    text-align: center;

    .brand {
      margin-bottom: 20px;
      svg {
        width: 64px;
        fill: rgba(var(--primary), 1);
      }
    }
  }
}
</style>
