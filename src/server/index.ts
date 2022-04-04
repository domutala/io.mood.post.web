import Vue, { PluginObject } from "vue";
import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { ISession } from "@/store/types/Session";

export const BASE_URL = "http://localhost:6070";
// export const BASE_URL = "http://192.168.11.58:6070";

export const INSTANCE = Axios.create({
  baseURL: BASE_URL,
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
      config.headers = config.headers || {};
      const session = _this.$store.getters["session/get"] as ISession;

      const body = config.data;
      config.data = {};

      const params = config.params;
      config.params = {};

      if (!session.keys) {
        session.keys = _this.$utils.rsa.generate();
        _this.$store.commit("session/SET_KEYS", session.keys);
      }

      if (session.server_keys) {
        if (session.token) {
          const token = _this.$utils.rsa.encrypt({
            key: session.server_keys.public,
            data: session.token,
          });
          config.headers.token = token;
        }

        if (body) {
          config.data.data = _this.$utils.rsa.encrypt({
            key: session.server_keys.public,
            data: JSON.stringify(body),
          });
        }

        config.headers.version = _this.$utils.rsa.encrypt({
          key: session.server_keys.public,
          data: "0.0.0",
        });

        if (params) {
          for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
              const k = _this.$utils.rsa.encrypt({
                key: session.server_keys.public,
                data: key,
              });

              if (params[key]) {
                const v = _this.$utils.rsa.encrypt({
                  key: session.server_keys.public,
                  data: JSON.stringify(params[key]),
                });
                config.params[k] = v;
              }
            }
          }
        }
      }

      const publickey = session.keys.public.replace(/\n/gm, "--n--");
      config.headers.publickey = publickey;

      return config;
    },
    (error) => Promise.reject(error)
  );

  INSTANCE.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        const session = _this.$store.getters["session/get"] as ISession;

        if (session.keys) {
          const body = _this.$utils.rsa.decrypt({
            key: session.keys.private,
            data: response.data,
          });

          if (body) return JSON.parse(body);
        }
      }
      return;
    },
    (error) => {
      if (error.response) {
        if (error.response) {
          // const message = error.response.data.message;
        }
      }

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
