import Vue, { PluginObject } from "vue";

import "boxicons/css/boxicons.min.css";
import "animate.css/animate.min.css";
import "./index.scss";

const plug: PluginObject<Vue> = {
  install(vue) {
    const setTheme = (t: "dark" | "light" = "light") => {
      const theme = {
        light: {
          light: "255, 255, 255",
          dark: "32, 32, 32",
          surface: "242, 242, 242",
        },
        dark: {
          dark: "255, 255, 255",
          light: "32, 32, 32",
          surface: "28, 28, 28",
        },
      };

      const colors: { [key: string]: string } = {
        primary: ["218, 42, 42", "255, 215, 0", "0, 0, 0"][2],
        danger: "230, 60, 60",
        success: ["23, 201, 100", "44, 135, 44"][1],

        white: "255, 255, 255",
        black: "0, 0, 0",
        ...theme[t],
      };

      for (const key of Object.keys(colors)) {
        document.documentElement.style.setProperty(`--${key}`, colors[key]);
      }

      vue.prototype.$theme = {
        colors,
        set: setTheme,
      };
    };

    let param: "dark" | "light" = "light";
    let cookies: any = localStorage.getItem("cookies");
    if (cookies) {
      cookies = JSON.parse(cookies);
      param = cookies.params.params.darkMode ? "dark" : "light";
    }

    setTheme(param);
  },
};

export default plug;
