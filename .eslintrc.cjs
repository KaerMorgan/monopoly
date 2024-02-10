module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-refresh",
    "prettier",
    "import",
  ],
  rules: {
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    restrictDefaultExports: off,
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react/self-closing-comp": ["error", { component: true, html: true }],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["warn", "as-needed"],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["../", "./", "."],
      },
    ],
  },
};
