module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
