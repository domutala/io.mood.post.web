<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    :width="`${size}px`"
    :height="`${size}px`"
    viewBox="0 0 50 50"
    :style="{ fill: filler }"
    xml:space="preserve"
  >
    <path
      d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
    >
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MLoader extends Vue {
  @Prop({ type: String, default: "rgba(var(--primary), 1)" })
  fill!: string;

  @Prop({ default: 22 })
  size!: any;

  @Prop({ type: Boolean, default: false })
  light!: boolean;

  get filler() {
    if (this.light) return "rgba(var(--light), 1)";
    return this.fill;
  }
}
</script>
