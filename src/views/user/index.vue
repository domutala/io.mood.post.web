<template>
  <div>
    <div class="view" v-if="user">
      <div class="body">
        <div class="header">
          <c-user-avatar :user="user" class="lg" />
          <div class="namer">
            <c-user-name :user="user" />
            <c-user-username :user="user" />
          </div>

          <div class="options">
            <v-link
              :user="user"
              v-if="session.user && user.id !== session.user"
            />
          </div>
        </div>
        <div style="padding: 50px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eius
          labore nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem
          eaque natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ducimus eius labore nostrum quo deserunt. Aperiam, quo accusamus esse
          qui dolorem eaque natus nesciunt suscipit modi alias temporibus
          obcaecati laborum commodi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ducimus eius labore nostrum quo deserunt. Aperiam,
          quo accusamus esse qui dolorem eaque natus nesciunt suscipit modi
          alias temporibus obcaecati laborum commodi! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ducimus eius labore nostrum quo
          deserunt. Aperiam, quo accusamus esse qui dolorem eaque natus nesciunt
          suscipit modi alias temporibus obcaecati laborum commodi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ducimus eius labore
          nostrum quo deserunt. Aperiam, quo accusamus esse qui dolorem eaque
          natus nesciunt suscipit modi alias temporibus obcaecati laborum
          commodi!
        </div>
      </div>
      <div class="foot">
        <div>
          <div style="padding: 20px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            quod. Corporis fugiat repudiandae dolorum! Praesentium, fugiat.
            Dolorem architecto eveniet maiores officiis, a doloremque non natus
            accusamus nostrum fugiat dolore eius.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { IUser } from "@/store/types/User";
import { ISession } from "@/store/types/Session";
import vLink from "./link.vue";

@Component({ components: { vLink } })
export default class Comp extends Vue {
  user: IUser | false = false;

  @Getter("get", { namespace: "session" })
  session!: ISession;

  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {
    this.get_user();
  }

  get_user() {
    this.$server
      .REQUEST({ url: "/user/get", params: { id: this.$route.params.id } })
      .then((data) => {
        this.user = data;
      });
  }
}
</script>

<style lang="scss" scoped>
.view {
  display: flex;

  .body {
    width: 100%;

    .header {
      padding: 20px 30px;
      display: flex;
      align-items: center;
      position: sticky;
      top: 0;
      background-color: rgba(var(--light), 1);
      box-shadow: rgba(var(--dark), 0.07) 0px 10px 10px -10px;
      // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      // border-bottom: 1px solid rgba(var(--dark), 0.1);

      .namer {
        font-size: 16px;
        margin-left: 10px;
        line-height: 1;
      }

      .options {
        margin-left: auto;
      }
    }
  }

  .foot {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: auto;
    max-width: 100%;

    > div {
      width: 550px;
      max-width: 100%;
    }

    @media (max-width: 1024px) {
      width: 400px;
    }

    @media (max-width: 772px) {
      display: none;
      width: 100%;
    }
  }
}
</style>
