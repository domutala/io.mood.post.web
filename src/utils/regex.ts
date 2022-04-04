const mail = (mail: string) => {
  const r =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

  return r.test(mail);
};

const url = (url: string) => {
  const r =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g; // eslint-disable-line

  return r.test(url);
};

const name = (name: string) => {
  const r0 = /(^ )/gm;
  const test0 = r0.test(name);
  if (test0) return false;

  const r1 = /[a-zA-Z]+/gim;
  const test1 = r1.test(name);
  if (!test1) return false;

  const r2 = /\n/gim;
  const test2 = r2.test(name);
  if (test2) return false;

  return true;
};

const password = (password: string) => {
  const r0 = /\S/gm;
  const test0 = r0.test(password);
  if (!test0) return false;

  const r1 = /.{6,}/gim;
  const test1 = r1.test(password);
  if (!test1) return false;

  const r2 = /\n/gim;
  const test2 = r2.test(password);
  if (test2) return false;

  return true;
};

export default { mail, url, name, password };
