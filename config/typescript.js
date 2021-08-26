module.exports = {
  $schema: "https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/eslintrc.json",
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      // rules that are for both .ts and .tsx files
      files: ["*.ts", "*.tsx"],
      rules: {
        /** Annoyances */
        // as much as i wanna like this rule, its annoying as fuck. in general i already prefer "unknown" where possible,
        // but sometimes "any" just makes so much more sense.
        "@typescript-eslint/no-explicit-any": "off",
        // I know why this rule exists but it's annoying to work with. if i'm doing a non-null assertion its because i already know
        // for it's safe, you don't have to make me add unnecessary code to check it is. basically im saying hold my beer
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/naming-convention": "off", // annoying because sometimes you don't have a choice.
        /** /Annoyances */
        "@typescript-eslint/array-type": [
          "error",
          {
            default: "array-simple",
          },
        ],
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "never",
          },
        ],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: {
              delimiter: "semi",
              requireLast: true,
            },
          },
        ],
        "@typescript-eslint/member-ordering": [
          "warn",
          {
            default: [
              "public-static-field",
              "protected-static-field",
              "private-static-field",
              "public-instance-field",
              "protected-instance-field",
              "private-instance-field",
              "constructor",
              "public-instance-method",
              "protected-instance-method",
              "private-instance-method",
              "public-static-method",
              "protected-static-method",
              "private-static-method",
            ],
          },
        ],
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-implicit-any-catch": "error",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": ["warn"],
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/prefer-includes": "error",
        // todo: this rule can break some codebases when it tries to auto-fix some things.
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/unified-signatures": "error",
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          {
            accessibility: "no-public",
            // accessibility: "explicit",
            // overrides: {
            //   constructors: "no-public",
            //   parameterProperties: "no-public",
            // },
          },
        ],
        // no-tsx: annoying with react components
        // todo: this is annoying in some codebases. in libraries I feel like it's necessary,
        // but in other places it gets annoying unnecessarily. i think the best approach is
        // to have it on by default then suggest turning it off for certain codebases.
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
};
