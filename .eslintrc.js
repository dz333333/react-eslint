module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["react-app", "airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "no-console": 0,
  },
};
