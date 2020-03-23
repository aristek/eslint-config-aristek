const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const projectRoot = resolveApp(".");
const tsConfig = resolveApp("tsconfig.json");

const useTypeScript = fs.existsSync(tsConfig);

module.exports = {
  // Make this config default globally.
  root: true,
  // Default eslint parser for JavaScript.
  parser: "babel-eslint",
  // Our eslint config based mainly on `airbnb` code style.
  // https://github.com/airbnb/javascript
  extends: ["airbnb", "prettier", "prettier/react"],
  // Set of eslint plugins for better development experience.
  plugins: ["import", "jsx-a11y", "react", "react-hooks", "only-warn"],
  // Support `browser` and `jest` in addition to `airbnb` envs.
  env: { browser: true, jest: true },
  // Resolve absolute imports from node_modules and src.
  settings: {
    "import/resolver": { node: { moduleDirectory: ["node_modules", "src"] } }
  },
  // Default rules for all project files.
  rules: {
    // Disallows providing the 10 radix by default.
    radix: ["error", "as-needed"],
    // Disable linebreak style to prevent conflicts different environments.
    "linebreak-style": "off",
    // Keep line between class members except of simple class properties
    // e.g. class variables or component state.
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }
    ],
    // There is no difference except `allowTernary` option.
    // We prefer to use `if shorthands` for logic operations.
    // @example condition ? method1() : method2()
    "no-unused-expressions": ["error", { allowTernary: true }],
    // Allow both `.js` and `.jsx` extensions.
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    // There is no need to use alternatives everywhere like `shape`.
    // Sometimes we just need to know that this is an array in container for example.
    // We do not do any manipulations with array props and just pass it into the component.
    "react/forbid-prop-types": "off",
    // Disable for our own risk without any grounding for a while.
    // It's also unnesessary for TypeScript users because all props are checking via types.
    "react/jsx-props-no-spreading": "off",
    // Disable this rule because it causes an error with special html chars
    // on some environments (e.g. Windows).
    "react/jsx-one-expression-per-line": "off",
    // We use both variants depending on each case.
    "react/state-in-constructor": "off",
    // Use destructing only in render for `props` and `state`.
    // For handlers we use destruction only if needed.
    "react/destructuring-assignment": "off",
    // Enforces the Rules of Hooks.
    "react-hooks/rules-of-hooks": "error",
    // Prevent missing `inputs` for hooks.
    "react-hooks/exhaustive-deps": "off",
    // Stylistic preference.
    "import/prefer-default-export": "off",
    // Allow dev dependencies import for config, test, storybook files.
    // Also ignore `src/setupTests` file for jest setup.
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.config.*",
          "**/*.test.*",
          "**/*.stories.*",
          "src/setupTests.*"
        ]
      }
    ],
    // No need to specify extensions if files are named correctly.
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never", mjs: "never" }
    ],
    // This rule was deprecated in v6.1.0. It will no longer be maintained.
    // Use label-has-associated-control instead.
    "jsx-a11y/label-has-for": "off",
    // We must provide this rule with `htmlFor` attribute (by default)
    // because this one was broken in airbnb config by `labelAttributes: []`.
    "jsx-a11y/label-has-associated-control": [
      "error",
      { labelAttributes: ["htmlFor"] }
    ],
    // Disable for 'js' files in case of mixed configs as described in docs.
    // https://github.com/typescript-eslint/typescript-eslint/issues/851
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  // Config overrides based on file globs.
  overrides: [
    {
      // Extend config for js(x) files.
      files: ["**/*.js?(x)"],
      // Resolve imports from ts(x) files into js(x).
      settings: {
        "import/resolver": useTypeScript
          ? { node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"] } }
          : {}
      }
    },
    useTypeScript && {
      // Extend config for ts(x) files.
      files: ["**/*.ts?(x)"],
      // Default eslint parser for TypeScript.
      // https://github.com/palantir/tslint/issues/4534
      parser: "@typescript-eslint/parser",
      // Find project's root and project's `tsconfig.json` for parser.
      parserOptions: { project: tsConfig, tsconfigRootDir: projectRoot },
      // Extend default config with typescript and prettier in right order.
      extends: [
        "plugin:@typescript-eslint/all",
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
        // Disable because of edge cases.
        "@typescript-eslint/no-explicit-any": "off",
        // We prefer to use type aliases for better code reading and development experience.
        "@typescript-eslint/no-type-alias": "off",
        // Stylistic preference.
        "@typescript-eslint/promise-function-async": "off",
        // Fails with array/string methods and index manipulations.
        "@typescript-eslint/no-magic-numbers": "off",
        // We prefer not to use classes so this rule is useless.
        "@typescript-eslint/unbound-method": "off",
        // Stylistic preference.
        "@typescript-eslint/no-floating-promises": "off",
        // Makes code too verbose without any impact.
        "@typescript-eslint/strict-boolean-expressions": "off",
        // Disable because in edge cases TypeScript is fooled.
        "@typescript-eslint/no-unnecessary-condition": "off",
        // TypeScript already has a good type inferring.
        "@typescript-eslint/typedef": "off",
        // Makes code too verbose without any impact.
        "@typescript-eslint/restrict-template-expressions": "off",
        // Same as for base `no-unused-expressions`.
        "@typescript-eslint/no-unused-expressions": [
          "error",
          { allowTernary: true }
        ],
        // Unused vars should be commented or deleted.
        "@typescript-eslint/no-unused-vars-experimental": "off",
        // Confuses and might cause bugs with 'falsey' values.
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        // Confuses and might cause bugs with 'falsey' values.
        "@typescript-eslint/prefer-optional-chain": "off",
        // Stylistic preference.
        "@typescript-eslint/space-before-function-paren": [
          "error",
          { anonymous: "always", named: "never", asyncArrow: "always" }
        ],
        // Nothing bad in empty function.
        "@typescript-eslint/no-empty-function": [
          "error",
          { allow: ["arrowFunctions", "functions", "methods"] }
        ]
      }
    }
  ].filter(Boolean)
};
