<template>
  <div class="w_post_one">
    <div v-if="loading" class="loader">
      <div class="h">
        <div class="left">
          <div class="avatar"><div class="_e-loader"></div></div>
          <div class="texts">
            <div class="title"><div class="_e-loader"></div></div>
            <div class="subtitle"><div class="_e-loader"></div></div>
          </div>
        </div>

        <div class="center"></div>

        <div class="right">
          <div class="opts"></div>
        </div>
      </div>

      <div class="b">
        <div class="text">
          <div><div class="_e-loader"></div></div>
          <div><div class="_e-loader"></div></div>
          <div><div class="_e-loader"></div></div>
        </div>
        <div class="poster">
          <div class="_e-loader"></div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="h">
        <div class="left">
          <div class="avatar">
            <img src="/img/00.jpg" alt="" />
          </div>
          <div class="texts">
            <div class="title">Aminata Sy</div>
            <div class="subtitle">Aujourd'hui</div>
          </div>
        </div>

        <div class="center"></div>

        <div class="right">
          <div class="opts">
            <button class="btn">
              <i class="fi fi-sr-paper-plane"></i>
            </button>
            <button class="btn shine">
              <i class="fi fi-sr-thumbs-up"></i>
              <!-- <span class="spin">1k</span> -->
            </button>
          </div>
        </div>
      </div>

      <div class="b">
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore
          delectus harum ducimus aperiam distinctio minima, maiores repudiandae
          eligendi, temporibus, recusandae sunt tempore ab rem! Explicabo quae
          voluptates corporis aperiam...
        </div>
        <div class="poster">
          <img src="/img/01.jpg" alt="" />
        </div>
      </div>

      <div class="f">
        <div>
          <div class="place">Commenter</div>
        </div>
        <div>
          <!-- <div>
          <i class="fi fi-sr-comment"></i>
        </div> -->
          <div>
            <button class="btn shine shade">
              <i class="fi fi-sr-comment"></i>
              <!-- <span class="spin">15</span> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Comp extends Vue {
  loading = true;

  mounted() {
    setTimeout(this.init, 4000);
  }

  async init() {
    this.loading = false;
  }
}
</script>

<style lang="scss" scoped>
.w_post_one {
  border-radius: 0.6em;
  overflow: hidden;
  // box-shadow: rgba(var(--dark), 0.1) 0px 0px 0px 1px;
  transition: all 0.5s ease;
  cursor: pointer;

  .h {
    padding: 10px;
    display: flex;
    align-items: center;

    > * {
      display: flex;
      align-items: center;
    }

    > .center {
      margin-left: auto;
      margin-right: auto;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 16em;
      background-color: rgba(var(--dark), 0.1);

      > img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
        object-position: center;
        object-fit: cover;
      }
    }

    .texts {
      line-height: 1.1;
      margin-left: 10px;

      .subtitle {
        font-size: 70%;
        opacity: 0.7;
      }
    }

    .opts {
      display: flex;
      align-items: center;
    }
  }

  .b {
    .text {
      padding: 10px;
    }

    > .poster {
      max-height: 350px;
      overflow: hidden;

      margin: 10px;
      border-radius: 0.6em;
      overflow: hidden;

      > img {
        width: 100%;
        display: block;
      }
    }
  }

  .f {
    display: flex;
    align-items: center;
    padding: 10px;
    display: none;

    > div:first-child {
      width: 100%;
      height: 28px;
      background-color: rgba(var(--dark), 0.05);
      border-radius: 16em;
      cursor: text;
      display: flex;
      align-items: center;

      .place {
        opacity: 0.5;
        margin-left: 10px;
      }
    }

    > div:last-child {
      margin-left: 5px;
    }
  }

  &:hover {
    box-shadow: rgba(var(--dark), 0.1) 0px 10px 50px;
  }

  .loader {
    .h {
      .avatar {
        background-color: rgba(var(--dark), 0.1);
        position: relative;
      }

      .texts {
        .title {
          height: 16px;
          width: 120px;
          border-radius: 16em;
          background-color: rgba(var(--dark), 0.1);
          position: relative;
        }

        .subtitle {
          height: 10px;
          width: 60px;
          margin-top: 2px;
          border-radius: 16em;
          background-color: rgba(var(--dark), 0.1);
          position: relative;
        }
      }
    }

    .b {
      .text {
        padding: 10px;

        > div {
          height: 13px;
          width: 120px;
          border-radius: 16em;
          background-color: rgba(var(--dark), 0.1);
          position: relative;

          &:not(:last-child) {
            margin-bottom: 5px;
          }

          &:nth-child(1) {
            width: 60%;
          }
          &:nth-child(2) {
            width: 90%;
          }
          &:nth-child(3) {
            width: 70%;
          }
          &:nth-child(4) {
            width: 80%;
          }
        }
      }

      .poster {
        height: 200px;
        background-color: rgba(var(--dark), 0.1);
        position: relative;
        margin: 10px;
        border-radius: 0.6em;
        overflow: hidden;
      }
    }
  }
}
</style>
