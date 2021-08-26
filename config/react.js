module.exports = {
  $schema: "https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/eslintrc.json",
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react", "react-hooks"],
  settings: {
    react: { version: "detect" },
    linkComponents: ["Hyperlink", { name: "Link", linkAttribute: "to" }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
        /** Annoyances */
        "react/prop-types": "off", // typescript handles this kind of validation
        "@typescript-eslint/explicit-function-return-type": "off", // annoying with component export
        "@typescript-eslint/explicit-module-boundary-types": "off", // annoying with component exports
        /** /Annoyances */
        "react/button-has-type": "error",
        "react/no-did-update-set-state": "error",
        "react/no-unknown-property": "error",
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "react/no-array-index-key": "warn",
      },
    },
  ],
};
