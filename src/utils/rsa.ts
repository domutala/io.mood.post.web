import nodersa from "node-rsa";

const generate = () => {
  const crypto = new nodersa({ b: 512 });
  const keys = crypto.generateKeyPair();

  const publicKey = keys.exportKey("pkcs8-public-pem");
  const privateKey = keys.exportKey("pkcs8-private-pem");

  return { public: publicKey, private: privateKey };
};

const encrypt = ({ key, data }: { key: string; data: string | number[] }) => {
  const max_length = 86;

  if (typeof data === "string" && data.length > max_length) {
    const datas: string[] = [];

    for (let i = 0; i < data.length; i += max_length) {
      const dt = data.slice(i, i + max_length);
      const enc = encrypt({ key, data: dt });
      datas.push(enc as string);
    }

    return datas;
  }

  const _key = new nodersa({ b: 512 });
  _key.importKey(key, "pkcs8-public-pem");
  const enc = _key.encrypt(Buffer.from(data), "base64");

  return enc;
};

const decrypt = ({ key, data }: { key: string; data: string | string[] }) => {
  if (Array.isArray(data)) {
    let datas = "";

    for (const dt of data) datas += decrypt({ key, data: dt });

    return datas;
  }

  const _key = new nodersa({ b: 512 });
  _key.importKey(key, "pkcs8-private-pem");

  const dec = _key.decrypt(data, "utf8");
  return dec;
};

export default { generate, encrypt, decrypt };
