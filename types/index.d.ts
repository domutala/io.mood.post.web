import { AxiosRequestConfig, AxiosInstance } from "axios";
import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";
import { Auth } from "firebase/auth";

declare module "vue/types/vue" {
  export interface Vue {
    $app: {
      name: string;
      shortNam: string;
      logo: {
        // eslint-disable-next-line @typescript-eslint/ban-types
        svg: {};
        img: string;
      };
    };

    $theme: {
      colors: {
        [key: string]: string;
      };
      set: (t?: "dark" | "light") => void;
    };

    $server: {
      REQUEST: (
        config?: AxiosRequestConfig,
        files?: { [key: string]: File[] }
      ) => Promise<any>;
      BASE_URL: string;
      INSTANCE: AxiosInstance;
      INTERCEPTORS: (_this: Vue) => Promise<void>;
    };

    $utils: {
      datetime: {
        formater: (date: string | Date, format?: string) => string;
      };

      number: {
        formater: (
          amount: number,
          unit?: string,
          unitPosition?: string
        ) => string;
      };

      firebase: {
        app: FirebaseApp;
        analytics: Analytics;
        auth: Auth;
        login: {
          google: (
            _this: Vue,
            cb: (error: boolean, dynamic?: any) => void
          ) => Promise<void>;
          facebook: (
            _this: Vue,
            cb: (error: boolean, dynamic?: any) => void
          ) => Promise<void>;
        };
      };

      phone: {
        isValid: (phoneNumebr: string) => boolean;
        countryCode: (phoneNumebr: string) => string | undefined;
        format: (phoneNumebr: string, international: boolean = false) => string;
      };

      regex: {
        mail: (mail: string) => boolean;
        url: (url: string) => boolean;
        name: (name: string) => boolean;
        password: (password: string) => boolean;
      };

      rsa: {
        generate: () => { public: string; private: string };
        encrypt: ({
          key,
          data,
        }: {
          key: string;
          data: string | number[];
        }) => string;
        decrypt: ({
          key,
          data,
        }: {
          key: string;
          data: string | number[];
        }) => string;
      };
    };
  }
}
