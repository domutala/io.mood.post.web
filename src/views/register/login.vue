<template>
  <div class="v-register">
    <form @submit.prevent="submit" class="">
      <n-input
        placeholder="email, numéro téléphone, nom dutilisateur"
        v-model="data.email"
        :error="error.email"
      >
        <i class="fi fi-sr-paper-plane" slot="left"></i>
        <input
          type="text"
          v-model="data.email"
          @blur="verifyEmail"
          @input="onEmail"
        />
      </n-input>

      <!-- password -->
      <n-input
        placeholder="Mot de passe"
        v-model="data.password"
        :error="error.password"
      >
        <i class="fi fi-sr-paper-plane" slot="left"></i>
        <input
          type="password"
          v-model="data.password"
          name="password"
          @blur="verifyPassword"
          @input="onPassword"
        />
      </n-input>

      <div style="display: flex; align-items: center; margin-top: 15px">
        <button class="btn opac" style="">
          <i class="fi fi-sr-paper-plane"></i>
          <span>Se connecter</span>
        </button>

        <n-loader v-if="loading" size="20" />
      </div>

      <div style="margin-top: 50px; text-align: center">
        <small>
          Vous n'avez pas de compte ?
          <router-link
            :to="{ name: 'register_register' }"
            style="
              text-decoration-style: dotted;
              text-decoration-line: underline;
            "
          >
            <strong>S'inscrire</strong>
          </router-link>
        </small>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Comp extends Vue {
  data = {
    email: "",
    password: "",
  };

  error = {
    email: "",
    password: "",
  };

  loading = false;

  mounted() {
    setTimeout(this.init, 0);
  }
  async init() {}

  onEmail() {
    if (this.error.email) this.verifyEmail();
  }
  verifyEmail(notEmpty = false, next = false) {
    if (!this.data.email) {
      if (notEmpty) {
        this.error.email = "Ce champ est obligatoire";
        return false;
      }
    }

    this.error.email = "";

    if (next) return this.verifyPassword(notEmpty);
    return true;
  }

  onPassword() {
    if (this.error.password) this.verifyPassword();
  }
  verifyPassword(notEmpty = false) {
    if (!this.data.password) {
      if (notEmpty) {
        this.error.password = "Ce champ est obligatoire";
        return false;
      }
    }

    this.error.password = "";
    return true;
  }

  submit() {
    if (this.loading) return;

    const test = this.verifyEmail(true, true);
    if (!test) return;

    this.loading = true;

    this.$server
      .REQUEST({
        url: "/session/login_with_email_and_password",
        method: "post",
        data: this.data,
      })
      .then(() => {
        const event = new CustomEvent("logged");
        window.dispatchEvent(event);
        this.$router.push({ name: "home" });
      })
      .finally(() => {
        this.loading = false;
      });

    //
  }
}
</script>

<style scoped lang="scss">
.v-register {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    max-width: 400px;
    width: 80%;
    margin: 50px auto;
    padding: 20px;
    border-radius: 0.6em;
    position: relative;
  }
}
</style>
