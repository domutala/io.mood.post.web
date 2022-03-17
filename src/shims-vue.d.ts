declare interface Contact {
  displayName?: string;
  givenName?: string;
  middleName?: string;
  familyName?: null;
  prefix?: string;
  suffix?: string;
  company?: string;
  jobTitle?: string;
  phones?: Array<{ label?: string; value?: string }>;
  avatar?: [];
}

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare var contacts: {
  list: Contact[];
  refresh: () => void;
  init: (onInit?: () => void) => void;
};
