const files = require.context(".", false, /\.ts$/);
const modules: any = {};

files.keys().forEach((key) => {
  if (key !== "./index.ts") {
    const a = key.replace(/(\.\/|\.ts)/g, "");
    modules[a] = files(key).default;
  }
});

export default modules;
