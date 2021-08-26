module.exports = {
  $schema: "https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/eslintrc.json",
  extends: [
    "eslint:recommended",
    require.resolve("./typescript.js"),
    require.resolve("./react.js"),
    "plugin:unicorn/recommended",
    "eslint-config-prettier",
  ],
  plugins: ["unicorn"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    node: true,
  },
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  rules: {
    /** Annoyances */
    "unicorn/no-null": "off", // null is useful https://twitter.com/ddprrt/status/1074955395528040448/photo/1
    "unicorn/prefer-module": "off", // every time i've tried to use ESM i've had to give up because something didn't support it.
    "unicorn/prefer-node-protocol": "off", // requires ESM IIRC
    /** /Annoyances */
    "no-var": "warn",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          // these are extremely common and replacing them isn't worth it
          props: false,
          ref: false,
          args: false,
        },
      },
    ],
    "unicorn/no-unsafe-regex": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/string-content": [
      "error",
      {
        patterns: {
          "\\.\\.\\.": "…",
        },
      },
    ],
  },
};
