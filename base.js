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
    // Forces using all curly braces.
    curly: "error",
    // 'require' is used only in config files (e.g. rollup).
    "global-require": "off",
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
    // It's also unnecessary for TypeScript users because all props are checking via types.
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
    ]
  }
};
