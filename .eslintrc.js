module.exports = {
  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],

  plugins: ["@typescript-eslint"],

  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};