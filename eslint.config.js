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
  globalIgnores(["**/dist", "app/src/routeTree.gen.ts"]),
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
      // allow idiomatic React/TS names, see: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            Props: true,
            props: true,
            Env: true,
            env: true,
            Utils: true,
            utils: true,
            Ref: true,
            ref: true
          }
        }
      ],
      // cannot resolve Vite aliases/virtual modules, and TypeScript already errors on unresolved imports, see: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md#when-not-to-use-it
      "import/no-unresolved": "off",
      // disable default exporting, see: https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
      "import/no-default-export": "error"
    }
  },
  {
    files: ["**/*.config.ts"],
    rules: {
      "import/no-default-export": "off" // vite and friends require a default-exported config
    }
  },
  {
    files: ["app/src/routes/**/*.tsx"],
    rules: {
      // TanStack route files must export their Route registration, whose HMR is handled by the router plugin, see: https://github.com/ArnaudBarre/eslint-plugin-react-refresh/releases/tag/v0.5.0
      "react-refresh/only-export-components": ["error", { extraHOCs: ["createFileRoute", "createRootRoute"] }]
    }
  }
]);
