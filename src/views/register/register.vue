<template>
  <div class="v-register">
    <form @submit.prevent="submit" class="">
      <n-input placeholder="email" v-model="data.email" :error="error.email">
        <i class="fi fi-sr-paper-plane" slot="left"></i>
        <input
          type="email"
          v-model="data.email"
          name="email"
          @blur="verifyEmail"
          @input="onEmail"
        />
      </n-input>
      <n-input placeholder="Votre nom" v-model="data.name" :error="error.name">
        <i class="fi fi-sr-paper-plane" slot="left"></i>
        <input
          type="text"
          v-model="data.name"
          name="name"
          @blur="verifyName"
          @input="onName"
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
      <n-input
        placeholder="Confirmer mot de passe"
        v-model="data.passwordConfirmation"
        :error="error.passwordConfirmation"
      >
        <i class="fi fi-sr-paper-plane" slot="left"></i>
        <input
          type="password"
          v-model="data.passwordConfirmation"
          name="password-confirmation"
          @blur="verifyPasswordConfirmation"
          @input="onPasswordConfirmation"
        />
      </n-input>

      <button class="btn opac" style="margin-top: 15px">
        <i class="fi fi-sr-paper-plane"></i>
        <span>Envoyer</span>
      </button>

      <div style="margin-top: 50px; text-align: center">
        <small>
          Vous avez un compte ?
          <router-link
            :to="{ name: 'register_login' }"
            style="
              text-decoration-style: dotted;
              text-decoration-line: underline;
            "
          >
            <strong>S'identifier</strong>
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
    name: "",
    password: "",
    passwordConfirmation: "",
  };

  error = {
    email: "",
    name: "",
    password: "",
    passwordConfirmation: "",
  };
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
        this.error.email = "Adresse email incorrecte";
        return false;
      }
    }

    const test = this.$utils.regex.mail(this.data.email);
    if (!test) {
      this.error.email = "Adresse email incorrecte";
      return false;
    }

    this.error.email = "";

    if (next) return this.verifyName(notEmpty, next);
    return true;
  }

  onName() {
    if (this.error.name) this.verifyName();
  }
  verifyName(notEmpty = false, next = false) {
    if (!this.data.name) {
      if (notEmpty) {
        this.error.name = "Ce champs n'est pas valide";
        return false;
      }
    }

    const test = this.$utils.regex.name(this.data.name);
    if (!test) {
      this.error.name = "Ce champs n'est pas valide";
      return false;
    }

    this.error.name = "";

    if (next) return this.verifyPassword(notEmpty);
    return true;
  }

  onPassword() {
    if (this.error.password) this.verifyPassword();
  }
  verifyPassword(notEmpty = false) {
    if (!this.data.password) {
      if (notEmpty) {
        this.error.password = "Vous devez indiquer un mot de pass";
        return false;
      }
    }

    const test = this.$utils.regex.password(this.data.password);
    if (!test) {
      this.error.password = "minimum 06 caractères";
      return false;
    }

    this.error.password = "";
    return this.verifyPasswordConfirmation(notEmpty);
  }

  onPasswordConfirmation() {
    if (this.error.passwordConfirmation) this.verifyPasswordConfirmation();
  }
  verifyPasswordConfirmation(notEmpty = false) {
    if (!this.data.passwordConfirmation) {
      if (notEmpty) {
        this.error.passwordConfirmation = "Vous devez indiquer un mot de pass";
        return false;
      }
    }

    const test = this.data.password === this.data.passwordConfirmation;
    if (!test) {
      this.error.passwordConfirmation =
        "Les deux mots de passe ne correcpondent pas";
      return false;
    }

    this.error.passwordConfirmation = "";
    return true;
  }

  submit() {
    const test = this.verifyEmail(true, true);
    if (!test) return;

    this.$server
      .REQUEST({
        url: "/session/register_with_email_and_password",
        method: "post",
        data: this.data,
      })
      .then(() => {
        const event = new CustomEvent("logged");
        window.dispatchEvent(event);
        this.$router.push({ name: "home" });
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
    position: relative;
  }
}
</style>
