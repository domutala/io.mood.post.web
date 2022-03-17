import * as libphonenumber from "libphonenumber-js";

const isValid = (phoneNumebr: string) => {
  try {
    const e = libphonenumber.parsePhoneNumber(phoneNumebr);
    return e.isValid();
  } catch (error) {
    return false;
  }
};

const countryCode = (phoneNumebr: string) => {
  try {
    const e = libphonenumber.parsePhoneNumber(phoneNumebr);
    return e.isValid() ? e.countryCallingCode.toString() : undefined;
  } catch (error) {
    return undefined;
  }
};

const format = (phoneNumebr: string, international = false) => {
  try {
    const e = libphonenumber.parsePhoneNumber(phoneNumebr);

    if (!e.isValid()) {
      return "";
    }

    if (international) {
      return e.formatInternational();
    }

    return e.formatNational();
  } catch (error) {
    return "";
  }
};

export default { isValid, countryCode, format };
