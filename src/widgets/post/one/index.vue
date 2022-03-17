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
          <div class="opts">
            <div><div class="_e-loader"></div></div>
          </div>
        </div>
      </div>

      <div class="b">
        <div class="poster">
          <div class="_e-loader"></div>
        </div>

        <div class="text">
          <div><div class="_e-loader"></div></div>
          <div><div class="_e-loader"></div></div>
          <div><div class="_e-loader"></div></div>
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
              <div style="font-size: 60%">partager</div>
              <i class="fi fi-sr-paper-plane"></i>
            </button>
            <button class="btn">
              <div style="font-size: 60%">15</div>
              <i class="fi fi-sr-comment"></i>
            </button>
            <button class="btn shine">
              <div style="font-size: 60%">14</div>
              <i class="fi fi-sr-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="b">
        <div class="poster">
          <img src="/img/01.jpg" alt="" />
        </div>

        <div class="text">
          <div class="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            labore delectus harum ducimus
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            labore delectus harum ducimus aperiam distinctio minima, maiores
            repudiandae eligendi, temporibus, recusandae sunt tempore ab rem!
            Explicabo quae voluptates corporis aperiam... Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Possimus cupiditate eveniet culpa
            ratione, in facere repudiandae quas voluptas necessitatibus eius
            numquam ut tenetur error temporibus doloribus soluta ipsum, impedit
            dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus cupiditate eveniet culpa ratione, in facere repudiandae
            quas voluptas necessitatibus eius numquam ut tenetur error
            temporibus doloribus soluta ipsum, impedit dolores. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Possimus cupiditate
            eveniet culpa ratione, in facere repudiandae quas voluptas
            necessitatibus eius numquam ut tenetur error temporibus doloribus
            soluta ipsum, impedit dolores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus cupiditate eveniet culpa
            ratione, in facere repudiandae quas voluptas necessitatibus eius
            numquam ut tenetur error temporibus doloribus soluta ipsum, impedit
            dolores.
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
  overflow: hidden;
  transition: all 0.5s ease;
  max-width: 600px;
  margin: auto;

  .h {
    padding: 20px;
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
      padding: 20px;

      .title {
        font-weight: bold;
        font-size: 130%;
      }

      div {
        &:not(:first-child) {
          margin-top: 7px;
        }
      }
    }

    > .poster {
      max-height: 350px;
      margin: 20px;
      overflow: hidden;
      border-radius: 0.6em;

      > img {
        width: 100%;
        display: block;
      }
    }
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

      .opts {
        display: flex;
        align-items: center;

        > div {
          width: 28px;
          height: 28px;
          border-radius: 16em;
          background-color: rgba(var(--dark), 0.1);
          position: relative;
          margin-left: 5px;
        }
      }
    }

    .b {
      .text {
        padding: 20px;

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
