import Vue from "vue";
import App from "./App.vue";
import moment from "moment";

import store from "./store";
import router from "./router";

import style from "./style";
import component from "./components";
import server from "./server";
import utils from "./utils";

window.contacts = {
  list: [],
  init: (onInit?: () => void) => {
    window.addEventListener("contacts:init", () => {
      if (onInit) onInit();
    });

    console.log(`contacts:init`);
  },
  refresh: () => console.log("contacts:refresh"),
};

moment.locale("fr");

Vue.config.productionTip = false;

Vue.prototype.$app = {
  name: "posticle",
  logo: {
    svg: `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 229.000000 224.000000" preserveAspectRatio="xMidYMid meet">

  <g transform="translate(0.000000,224.000000) scale(0.100000,-0.100000)" stroke="none">
    <path d="M950 2150 c-216 -47 -416 -164 -590 -346 -223 -233 -333 -511 -317 -803 7 -129 27 -211 77 -316 68 -140 183 -256 325 -325 111 -54 180 -70 325 -77 237 -11 448 55 657 203 67 48 233 201 233 215 0 5 -12 4 -27 -2 -213 -82 -392 60 -503 400 -15 47 -31 111 -34 143 l-7 56 32 7 c24 6 34 4 38 -6 2 -8 19 -29 37 -46 28 -29 39 -33 82 -33 62 0 106 32 123 91 7 21 17 39 22 39 6 0 4 6 -5 13 -33 26 -29 46 15 74 60 37 131 96 214 176 l72 70 57 -37 c131 -87 170 -158 161 -294 l-5 -87 18 35 c29 55 63 82 100 78 94 -9 103 -181 14 -272 -63 -65 -126 -44 -141 48 -6 38 -6 38 -30 -45 -13 -46 -42 -119 -63 -164 -63 -131 -75 -182 -75 -335 0 -107 4 -145 18 -182 10 -27 21 -48 24 -48 14 0 126 96 183 156 155 165 245 365 257 574 15 257 -105 488 -308 595 -61 32 -72 42 -100 96 -63 118 -206 248 -336 305 -146 65 -366 82 -543 44z m126 -1005 c55 -59 83 -194 49 -239 -38 -50 -116 5 -148 105 -21 64 -21 102 -2 139 22 42 58 40 101 -5z"/>
    <path d="M1665 1486 c-38 -17 -64 -46 -74 -82 -7 -28 -9 -29 -74 -29 -36 0 -69 -4 -74 -9 -4 -4 12 -5 37 -2 61 9 104 -4 108 -33 5 -33 67 -89 107 -97 80 -15 155 48 155 130 0 99 -95 162 -185 122z"/>
    <path d="M1477 1270 c-4 -25 -21 -73 -37 -107 -24 -49 -28 -67 -21 -87 11 -27 41 -41 71 -31 29 9 25 34 -10 64 l-30 26 20 70 c11 39 19 79 17 90 -1 11 -6 0 -10 -25z"/>
    <path d="M1433 949 c-18 -5 -37 -18 -43 -29 -9 -17 -6 -19 35 -25 55 -9 159 9 194 32 l26 17 -40 8 c-54 9 -133 8 -172 -3z"/>
  </g>
</svg>`,
    img: "",
  },
};

Vue.use(style);
Vue.use(component);
Vue.use(server);
Vue.use(utils);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
