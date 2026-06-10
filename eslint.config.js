import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ts.configs.recommended,
      eslintPluginReactHooks.configs.flat.recommended,
      eslintPluginReactRefresh.configs.vite,
      eslintConfigPrettier // must be last
    ],
    languageOptions: {
      globals: globals.browser
    }
  }
]);
