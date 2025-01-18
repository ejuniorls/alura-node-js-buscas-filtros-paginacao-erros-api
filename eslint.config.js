import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Inclui globais do navegador
        ...globals.node,    // Inclui globais do Node.js, incluindo `process`
      },
    }
  },
  pluginJs.configs.recommended,
];