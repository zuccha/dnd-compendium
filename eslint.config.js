import js from "@eslint/js";
import globals from "globals";
import imports from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: imports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "import/order": [
        "error",
        {
          pathGroups: [{ pattern: "@/**", group: "external" }],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: false },
          "newlines-between": "never",
          named: true,
        },
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "sort-keys": [
        "error",
        "asc",
        { allowLineSeparatedGroups: true, caseSensitive: true, natural: true },
      ],
    },
  }
);
