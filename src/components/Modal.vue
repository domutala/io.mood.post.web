<template>
  <div class="m-modal" :class="{ blur }">
    <div class="m-modal-back" @click="close"></div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyModal extends Vue {
  @Prop({ type: Boolean, default: false })
  blur!: boolean;

  @Prop({ type: Boolean, default: true })
  closeOnBack!: boolean;

  @Prop({ type: Boolean, default: true })
  closeOnEsc!: boolean;

  mounted() {
    window.addEventListener("keydown", this.onEscPress);
    this.init();
  }
  beforeDestroy() {
    this.destroy();
  }

  init() {
    const body = document.querySelector("body") as HTMLElement;

    if (body) {
      body.setAttribute("style", "overflow: hidden");
      body.appendChild(this.$el);
      this.$emit("open");
    }
  }

  destroy() {
    const body = document.querySelector("body");
    window.removeEventListener("keydown", this.onEscPress);

    const modals = document.querySelectorAll(".m-modal");

    if (body && modals.length <= 1) {
      body.setAttribute("style", "overflow: auto");
    }

    if (body && this.$el.parentNode === body) {
      body.removeChild(this.$el);
    }
  }

  close() {
    this.$emit("close");
  }

  onBackClick() {
    if (this.closeOnBack) {
      this.close();
    }
  }

  onEscPress(e: any) {
    if (e.keyCode === 27 && this.closeOnEsc) {
      this.close();
    }
  }
}
</script>

<style lang="scss">
.m-modal {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;

  .m-modal-back {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(var(--black), 0.1);
    // backdrop-filter: saturate(180%) blur(15px);
  }

  > * {
    &:not(.m-modal-back) {
      max-width: 90%;
      max-height: 90%;
      background-color: rgba(var(--light), 1);
      position: relative;
      z-index: 2;
      overflow: auto;
      border-radius: 0.6em;

      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 36px 0px,
        rgba(var(--surface), 0.5) 0px 0px 0px 2.5px;

      &::-webkit-scrollbar {
        width: 7px;
        margin-top: 50px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: rgba(var(--dark), 0.2);
        border-radius: inherit;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: rgba(var(--dark), 0.5);
        border-radius: inherit;

        &:hover {
          background: rgba(var(--dark), 1);
        }
      }

      @media (max-width: 450px) {
        max-width: 100% !important;
        max-height: 90% !important;
        width: 100% !important;
        // height: 100% !important;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        margin-top: auto;
        // box-shadow: none;
      }
    }
  }
}
</style>
