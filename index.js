const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const projectRoot = resolveApp(".");
const tsConfig = resolveApp("tsconfig.json");

const baseConfig = require.resolve("./base");

module.exports = {
  overrides: [
    {
      // Extend config for js(x) files.
      files: ["**/*.js?(x)"],
      // Default eslint parser for JavaScript.
      parser: "babel-eslint",
      // Additionally, resolve imports from ts(x) files into js(x).
      extends: [baseConfig, "plugin:import/typescript"],
      rules: {
        // Disable for 'js' files in case of mixed configs as described in docs.
        // https://github.com/typescript-eslint/typescript-eslint/issues/851
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    },
    {
      // Extend config for ts(x) files.
      files: ["**/*.ts?(x)"],
      // Default eslint parser for TypeScript.
      // https://github.com/palantir/tslint/issues/4534
      parser: "@typescript-eslint/parser",
      // Find project's root and project's `tsconfig.json` for parser.
      parserOptions: { project: tsConfig, tsconfigRootDir: projectRoot },
      // Extend default config with typescript and prettier in right order.
      extends: [
        baseConfig,
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "prettier",
        "prettier/react",
        "prettier/@typescript-eslint"
      ],
      // TypeScript specific rules.
      rules: {
        // Do not warn on `d.ts` references.
        "spaced-comment": ["error", "always", { markers: ["/"] }],
        // Typescript is used for type checking.
        "consistent-return": "off",
        // Allow ts(x) extensions for files with JSX.
        "react/jsx-filename-extension": [
          "error",
          { extensions: [".js", ".jsx", ".tsx"] }
        ],
        // TypeScript is used for type checking.
        "react/prop-types": "off",
        // TypeScript is used for type checking.
        "react/forbid-prop-types": "off",
        // Do not throw error for function expressions and just use inner function typings.
        // Also do not throw for const typed functions.
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          { allowExpressions: true, allowTypedFunctionExpressions: true }
        ],
        // Ignore unused vars for edge case (rest props)
        // e.g. { className, ...rest }
        "@typescript-eslint/no-unused-vars": [
          "error",
          { ignoreRestSiblings: true }
        ],
        // We prefer not to use classes so this rule is useless.
        "@typescript-eslint/unbound-method": "off",
        // Nothing bad in empty function.
        "@typescript-eslint/no-empty-function": [
          "error",
          { allow: ["arrowFunctions", "functions", "methods"] }
        ]
      }
    }
  ]
};
