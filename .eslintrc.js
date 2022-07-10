module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "default-case": "error",
    "default-case-last": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    "no-var": "error",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: ["const", "let", "if", "for", "function"],
        next: "*",
      },
      { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
      { blankLine: "always", prev: "*", next: ["return"] },
    ],
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["can", "has", "is", "should"],
      },
    ],
    "import/extensions": [
      "error",
      "never",
      {
        css: "always",
        json: "always",
        scss: "always",
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "sibling",
          "index",
          "parent",
        ],
        "newlines-between": "always",
      },
    ],
  },
};
