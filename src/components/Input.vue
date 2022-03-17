<template>
  <div class="m-input" :class="{ error, success, labeled: value }">
    <div class="__the_content">
      <div class="__left_icon">
        <slot name="left" />
      </div>

      <div class="__include">
        <slot />
        <div v-if="placeholder" class="__placeholder">
          <span>{{ placeholder }}</span>
        </div>
      </div>

      <div class="__right_icon">
        <slot name="right" />
      </div>
    </div>

    <div class="__error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Comp extends Vue {
  @Prop()
  value!: any;

  @Prop({ type: String })
  placeholder!: string;

  @Prop({ type: String })
  error!: string;

  @Prop({ type: Boolean, default: false })
  success!: boolean;

  mounted() {
    this.init();
  }

  init() {}
}
</script>

<style lang="scss">
.m-input {
  width: 100%;

  .__the_content {
    height: 45px;
    border-radius: 0.6em;
    border: 3px solid rgba(var(--surface), 0.5);
    position: relative;

    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;

    .__left_icon {
      margin-right: 10px;
    }

    .__right_icon {
      margin-left: 10px;
    }

    .__include {
      width: 100%;
      height: 100%;
      position: relative;

      select,
      input {
        border: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: transparent;
        outline: none;
        font: inherit;
        color: inherit;
        position: absolute;
        top: 0;
        left: 0;
        line-height: 1;
      }

      .__placeholder {
        user-select: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: rgba(var(--dark), 0.3);
        transition: all 0.25s ease;
        line-height: 1;

        span {
          transition: all 0.25s ease;

          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
      }
    }
  }

  .__error {
    font-size: 80%;
    color: rgba(var(--danger), 1);
    padding-left: 7px;
    padding-right: 7px;
    margin-top: 2px;
  }

  &:focus-within,
  &.labeled {
    .__the_content {
      .__include {
        position: unset;

        select,
        input {
          position: relative;
        }

        .__placeholder {
          position: absolute;
          bottom: calc(100% + 5px);
          left: 3px;
          right: 3px;
          font-size: 80%;
          height: unset;
          width: unset;

          span {
            margin: 0;
          }
        }
      }
    }
  }

  &:focus-within {
    .__the_content {
      border-color: rgba(var(--dark), 1);
    }
  }

  &.error {
    .__the_content {
      border-color: rgba(var(--danger), 1);
    }
  }

  &.success {
    .__the_content {
      border-color: rgba(var(--success), 1);
    }
  }
}
</style>
