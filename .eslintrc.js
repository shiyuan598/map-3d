module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    minemap: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "prettier/prettier": "error",
    "indent": [2, 2],//缩进风格
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
