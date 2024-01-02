module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript/base",
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },

  parser: "@typescript-eslint/parser",

  plugins: [
    "react",
    "@typescript-eslint",
    "better-styled-components",
    "sort-keys-fix",
    "import"
  ],

  rules: {
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "sort-imports": ["error", { "ignoreDeclarationSort": true }],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", ["parent", "sibling"], "index", "object"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@mui/**",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "{components,theme,shared,translations}/**",
            "group": "internal",
            "position": "after"
          },
        ],
        "pathGroupsExcludedImportTypes": ["react", "builtin"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": false
        }
      }
    ],
    "better-styled-components/sort-declarations-alphabetically": 2,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/quotes": ["error", "double"],
    quotes: ["error", "double"],
    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-boolean-value": 0,
    "react/jsx-sort-props": 1,
    "react/prop-types": 0,
    "sort-keys": 1,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
