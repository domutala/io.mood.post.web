<template>
  <div>
    <div v-if="session.user">
      <button
        class="btn"
        :class="[!link || !is_1 ? 'opac' : 'shine']"
        @click="modalOpener"
      >
        <div v-if="!loading">
          <div v-if="!link">Ajouter à vos amis</div>
          <div v-else-if="!link.confirm">
            <div v-if="is_1">Demande envoyer</div>
            <div v-else>Repondre</div>
          </div>
          <div v-else>Ami(e)</div>
        </div>
        <i class="fi fi-sr-paper-plane"></i>
        <n-loader :light="!link || !is_1" size="25" v-if="loading" />
      </button>
    </div>

    <n-modal v-if="openModal" @close="openModal = ''">
      <div style="max-width: 442px">
        <div style="min-width: 300px">
          <div style="margin-bottom: 20px; padding: 20px">
            <c-user-avatar :user="user" class="lg" style="margin: auto" />
            <c-user-name :user="user" center style="margin-top: 5px" />
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              border-top: 1px solid rgba(var(--dark), 0.07);
              padding: 20px;
              margin: 0 20px;
            "
          >
            <div style="display: flex" v-if="openModal === 'answer'">
              <button class="btn opac danger" @click="remove">
                <div>Annuler</div>
                <i class="fi fi-sr-paper-plane"></i>
              </button>
              <button class="btn opac" style="margin-left: 5px">
                <div>Accepter la demande</div>
                <i class="fi fi-sr-paper-plane"></i>
              </button>
            </div>
            <div style="display: flex" v-if="openModal === 'cancel'">
              <button class="btn opac" style="margin-left: 5px" @click="remove">
                <div>Annuler la demande</div>
                <i class="fi fi-sr-paper-plane"></i>
              </button>
            </div>
            <div style="display: flex" v-if="openModal === 'remove'">
              <button class="btn opac danger" style="margin-left: 5px">
                <div>Supprimer de vos amis</div>
                <i class="fi fi-sr-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

import { IUser } from "@/store/types/User";
import { ISession } from "@/store/types/Session";

@Component
export default class Comp extends Vue {
  link: any = false;

  @Prop({ required: true })
  user!: IUser;

  @Getter("get", { namespace: "session" })
  session!: ISession;

  openModal = "";
  loading = false;

  get is_1() {
    if (
      this.session.user &&
      this.link &&
      this.link.link.split(";")[0] === this.session.user
    ) {
      return true;
    }
    return false;
  }

  mounted() {
    setTimeout(this.init, 0);
  }

  async init() {
    this.is_link();
  }

  modalOpener() {
    if (!this.link) this.add();
    else if (this.link.confirm) this.openModal = "remove";
    else this.openModal = this.is_1 ? "cancel" : "answer";
  }

  is_link() {
    this.openModal = "";
    this.link = false;

    if (this.session.user && this.user) {
      if (this.user.id !== this.session.user) {
        this.loading = true;

        this.$server
          .REQUEST({ url: "/link/is_link", params: { id: this.user.id } })
          .then((data) => {
            if (data.is_link) {
              this.link = data.link;
            }
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  }

  add() {
    if (this.loading) return;

    this.openModal = "";
    this.loading = true;

    this.$server
      .REQUEST({
        url: "/link/add",
        method: "post",
        params: { id: this.user.id },
      })
      .then(() => {
        this.is_link();
      })
      .finally(() => {
        this.loading = false;
      });
  }

  remove() {
    if (this.loading) return;

    this.openModal = "";
    this.loading = true;

    this.$server
      .REQUEST({
        url: "/link/remove",
        method: "post",
        params: { link: this.link.link },
      })
      .then(() => {
        this.is_link();
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>

<style lang="scss" scoped></style>
