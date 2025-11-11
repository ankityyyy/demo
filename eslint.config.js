import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,      // Node globals: console, process, etc.
        ...globals.jest       // ✅ Jest globals: test, expect, describe
      }
    },
    plugins: {
      import: importPlugin,
      jest: jestPlugin
    },
    rules: {
      "import/no-unresolved": "error",
      "import/named": "error",
      "no-unused-vars": "warn",
      "no-undef": "error",
      ...jestPlugin.configs.recommended.rules
    }
  },

  prettierConfig
];
