import Vue, { PluginObject } from "vue";
import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { serverErrorTexts } from "@/utils/variables";

export const BASE_URL = "http://192.168.79.143:6060";

export const INSTANCE = Axios.create({
  baseURL: BASE_URL,
  // headers: { "Content-Type": "" },
});

export const REQUEST = (
  config: AxiosRequestConfig = {}
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    if (config.data && config.data.files) {
      const formData = new FormData();
      const files: File[] = config.data.files;

      if (!config.headers) {
        config.headers = {};
      }

      config.headers["Content-Type"] = "multipart/form-data";

      for (const file of files) {
        formData.append("files", file);
      }

      delete config.data.files;

      for (const key of Object.keys(config.data)) {
        formData.append(key, config.data[key]);
      }

      INSTANCE.post(config.url as string, formData, config)
        .then((response: AxiosResponse) => resolve(response))
        .catch((err) => reject(err));
    } else {
      INSTANCE.request(config)
        .then((response: AxiosResponse) => resolve(response))
        .catch((err) => reject(err));
    }
  });
};

export const INTERCEPTORS = (_this: Vue) => {
  INSTANCE.interceptors.request.use(
    (config) => {
      const app = _this.$store.getters["app/get"];

      config.headers = config.headers || {};
      config.headers.token = app.token;
      config.headers.version = "0.0.1";

      return config;
    },
    (error) => Promise.reject(error)
  );

  INSTANCE.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response) {
        _this.$store.commit("route/SET_MAIN");

        if (error.response) {
          const message = error.response.data.message;

          if (message === "notAppRegistered") {
            _this.$store.commit("route/SET_MAIN", "register");
          } else if (message === "notAppValidated") {
            _this.$store.commit("route/SET_MAIN", "validation");
          }
        }
      }

      // let message = "Veullez vérifier votre connection";
      // if (error.response) {
      //   message =
      //     serverErrorTexts[error.response.data.message] ||
      //     "Une error innattendue s'est produite. Veuillez vérifier les données que vous envoyeé";
      // }

      // _this.$store.commit("app/ADD_NOTIFICATION", message);

      return Promise.reject(error);
    }
  );
};

const plug: PluginObject<Vue> = {
  install: (vue) => {
    vue.prototype.$server = {
      REQUEST,
      BASE_URL,
      INSTANCE,
      INTERCEPTORS,
    };
  },
};

export default plug;
