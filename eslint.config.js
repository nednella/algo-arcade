import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", "src/routeTree.gen.ts"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ts.configs.recommended,
      eslintPluginReactHooks.configs.flat.recommended,
      eslintPluginReactRefresh.configs.vite,
      eslintPluginUnicorn.configs.recommended,
      eslintConfigPrettier // must be last
    ],
    plugins: {
      import: eslintPluginImportX
    },
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            Props: true,
            props: true,
            Env: true,
            env: true,
            Utils: true,
            utils: true
          }
        }
      ],
      "import/no-unresolved": "off", // cannot resolve Vite aliases/virtual modules, and TypeScript already errors on unresolved imports, see: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md#when-not-to-use-it
      "import/no-default-export": "error" // disable default exporting
    }
  },
  {
    files: ["**/*.config.ts"],
    rules: {
      "import/no-default-export": "off" // vite and friends require a default-exported config
    }
  },
  {
    files: ["src/routes/**/*.tsx"],
    rules: {
      "react-refresh/only-export-components": ["error", { extraHOCs: ["createFileRoute", "createRootRoute"] }] // TanStack route files must export their Route registration, whose HMR is handled by the router plugin
    }
  }
]);
