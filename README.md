[ESLint](https://eslint.org/) config based on team guideline and experience.

## Features

- Based on [airbnb code style](https://github.com/airbnb/javascript) and their [config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
- Uses [react](https://github.com/yannickcr/eslint-plugin-react), [react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks), [import](https://github.com/benmosher/eslint-plugin-import), [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) and [only-warn](https://github.com/bfanger/eslint-plugin-only-warn) plugins.
- Absolute imports friendly for `node_modules` and `src`.
- If `tsconfig.json` is found [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) additional rules are added.
- Compatible with prettier using it's [config](https://github.com/prettier/eslint-config-prettier).

## Installation

Then to add package to you project dependencies run:

```bash
npm i -E -D @aristek/eslint-config @typescript-eslint/eslint-plugin@2.10.x @typescript-eslint/parser@2.10.0 eslint@6.6.x eslint-config-airbnb@18.0.x eslint-config-prettier@6.6.x eslint-plugin-import@2.20.x eslint-plugin-jsx-a11y@6.2.x eslint-plugin-only-warn@1.0.x eslint-plugin-react@7.18.x eslint-plugin-react-hooks@1.7.x
```

or

```bash
yarn add -E -D @aristek/eslint-config @typescript-eslint/eslint-plugin@2.10.x @typescript-eslint/parser@2.10.0 eslint@6.6.x eslint-config-airbnb@18.0.x eslint-config-prettier@6.6.x eslint-plugin-import@2.20.x eslint-plugin-jsx-a11y@6.2.x eslint-plugin-only-warn@1.0.x eslint-plugin-react@7.18.x eslint-plugin-react-hooks@1.7.x
```

In case you are using TypeScript run this:

```bash
npm i -E -D @typescript-eslint/eslint-plugin@2.10.x @typescript-eslint/parser@2.10.x typescript@3.7.x
```

or

```bash
yarn add -E -D @typescript-eslint/eslint-plugin@2.10.x @typescript-eslint/parser@2.10.x typescript@3.7.x
```

## Usage

Add this lines to your `package.json` file:

```json
"eslintConfig": {
  "extends": "@aristek/eslint-config"
}
```

## JavaSript Rules

Here we document only rules that were changed compared to our [configs and plugins](configs-eslint.md#features).

### linebreak-style

Disable linebreak style to prevent conflicts different environments.

```
"linebreak-style": "off"
```

### lines-between-class-members

Keep line between class members except of simple class properties e.g. class variables or component state.

```
"lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }]
```

### no-unused-expressions

There is no differences except `allowTernary` option. We prefer to use `if shorthands` for logic operations.
Example: condition ? method1() : method2().

```
"no-unused-expressions": ["error", { allowTernary: true }]
```

### radix

Disallows providing the 10 radix by default.

```
radix: ["error", "as-needed"]
```

### react/jsx-one-expression-per-line

Disable this rule because it causes an error with special html chars on some environments (e.g. Windows).

```
"react/jsx-one-expression-per-line": "off"
```

### react/state-in-constructor

We use both variants depending on each case.

```
"react/state-in-constructor": "off",
```

### react/destructuring-assignment

Use destructing only in render for `props` and `state`. For handlers we use destruction only if needed.

```
"react/destructuring-assignment": "off"
```

### react/jsx-filename-extension

Allow both `.js` and `.jsx` extensions.

```
"react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }]
```

### react/forbid-prop-types

There is no need to use alternatives everywhere like `shape`.
Sometimes we just need to know that this is an array in container for example.
We do not do any manipulations with array props and just pass it into the component.

```
"react/forbid-prop-types": "off"
```

### react/jsx-props-no-spreading

Disable for our own risk without any grounding for a while.
It's also unnesessary for TypeScript users because all props are checking via types.

```
"react/jsx-props-no-spreading": "off"
```

### react-hooks/rules-of-hooks

Enforces the Rules of Hooks.

```
"react-hooks/rules-of-hooks": "error"
```

### react-hooks/exhaustive-deps

Prevent missing `inputs` for hooks.

```
"react-hooks/exhaustive-deps": "off"
```

### import/prefer-default-export

Stylistic preference.

```
"import/prefer-default-export": "off"
```

### import/no-extraneous-dependencies

Allow dev dependencies import for config, test, storybook files.
Also ignore `src/setupTests` file for jest setup.

```
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
]
```

### import/extensions

No need to specify extensions if files are named correctly.

```
"import/extensions": [
  "error",
  "ignorePackages",
  {
    js: "never",
    jsx: "never",
    ts: "never",
    tsx: "never",
    mjs: "never"
  }
]
```

### jsx-a11y/label-has-for

This rule was deprecated in v6.1.0. It will no longer be maintained. Use label-has-associated-control instead.

```
"jsx-a11y/label-has-for": "off"
```

### jsx-a11y/label-has-associated-control

We must provide this rule with `htmlFor` attribute (by default) because this one was broken in airbnb config by `labelAttributes: []`.

```
"jsx-a11y/label-has-associated-control": ["error", { labelAttributes: ["htmlFor"] }]
```

### @typescript-eslint/explicit-function-return-type

Disable for 'js' files in case of mixed configs as described in docs.
https://github.com/typescript-eslint/typescript-eslint/issues/851

```
"@typescript-eslint/explicit-function-return-type": "off"
```

## TypeScript rules

If `tsconfig.json` is found, this rules are added on top of JavaScript rules.

### spaced-comment

Do not warn on`d.ts` references.

```
"spaced-comment": ["error", "always", { markers: ["/"] }],

```

### consistent-return

Typescript is used for type checking.

```
"consistent-return": "off"
```

### react/jsx-filename-extension

Allow ts(x) extensions for files with JSX.

```
"react/jsx-filename-extension": [
  "error",
  { extensions: [".js", ".jsx", ".tsx"] }
]
```

### react/prop-types

TypeScript is used for type checking.

```
"react/prop-types": "off"
```

### react/forbid-prop-types

TypeScript is used for type checking.

```
"react/forbid-prop-types": "off"
```

### @typescript-eslint/explicit-function-return-type

Do not throw error for function expressions and just use inner function typings.
Also do not throw for const typed functions.

```
"@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true, allowTypedFunctionExpressions: true }]
```

### @typescript-eslint/no-unused-vars

Ignore unused vars for edge case (rest props) e.g. `{ className, ...rest }`.

```
"@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }]
```

### @typescript-eslint/no-explicit-any

Disable because of edge cases.

```
"@typescript-eslint/no-explicit-any": "off"
```

### @typescript-eslint/no-type-alias

We prefer to use type aliases for better code reading and development experience.

```
"@typescript-eslint/no-type-alias": "off"
```

### @typescript-eslint/promise-function-async

Stylistic preference.

```
"@typescript-eslint/promise-function-async": "off"
```

### @typescript-eslint/no-magic-numbers

Fails with array/string methods and index manipulations.

```
"@typescript-eslint/no-magic-numbers": "off"
```

### @typescript-eslint/unbound-method

We prefer not to use classes so this rule is useless.

```
"@typescript-eslint/unbound-method": "off"
```

### @typescript-eslint/no-floating-promises

Stylistic preference.

```
"@typescript-eslint/no-floating-promises": "off"
```

### @typescript-eslint/strict-boolean-expressions

Makes code too verbose without any impact.

```
"@typescript-eslint/strict-boolean-expressions": "off"
```

### @typescript-eslint/no-unnecessary-condition

Disable because in edge cases TypeScript is fooled.

```
"@typescript-eslint/no-unnecessary-condition": "off",
```

### @typescript-eslint/typedef

TypeScript already has a good type inferring.

```
"@typescript-eslint/typedef": "off",
```

### @typescript-eslint/restrict-template-expressions

Makes code too verbose without any impact.

```
"@typescript-eslint/restrict-template-expressions": "off"
```

### @typescript-eslint/no-unused-expressions

Same as for base `no-unused-expressions`.

```
"@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true }]
```

### @typescript-eslint/no-unused-vars-experimental

Unused vars should be commented or deleted.

```
"@typescript-eslint/no-unused-vars-experimental": "off"
```

### @typescript-eslint/prefer-nullish-coalescing

Confuses and might cause bugs with 'falsey' values.

```
"@typescript-eslint/prefer-nullish-coalescing": "off"
```

### @typescript-eslint/prefer-optional-chain

Confuses and might cause bugs with 'falsey' values.

```
"@typescript-eslint/prefer-optional-chain": "off"
```

### @typescript-eslint/space-before-function-paren

Stylistic preference.

```
"@typescript-eslint/space-before-function-paren": [
   "error",
  { anonymous: "always", named: "never", asyncArrow: "always" }
]
```

### @typescript-eslint/no-empty-function

Nothing bad in empty function.

```
"@typescript-eslint/no-empty-function": [
  "error",
  { allow: ["arrowFunctions", "functions", "methods"] }
]
```