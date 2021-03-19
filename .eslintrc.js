module.exports = {
  env: {
    browser: true,
    node: true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  plugins: ["@typescript-eslint"],

  rules: {
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 3,
        multiline: {
          max: 2,
          allowFirstLine: false,
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": 0
  },
};