# eslint-config-aristek

- [Features](#features)
- [Usage](#usage)
  - [TypeScript](#typescript)
  - [JavaScript](#javascript)
  - [create-react-app](#create-react-app)
- [Rules](#rules)

## Features

- Based on [airbnb code style](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
- Uses [react](https://github.com/yannickcr/eslint-plugin-react), [react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks), [import](https://github.com/benmosher/eslint-plugin-import), [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) and [only-warn](https://github.com/bfanger/eslint-plugin-only-warn) plugins.
- TypeScript is supported basing on [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) and [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin).
- Absolute imports friendly for node_modules and src.
- Compatible with prettier.

## Usage

There are two possible configurations: TypeScript and JavaScript.

### TypeScript

Install the correct versions of each dependency via npm:

```bash
npm i -E -D eslint@7 eslint-config-aristek@5 eslint-config-airbnb@18 eslint-config-prettier@7 eslint-plugin-import@2 eslint-plugin-jsx-a11y@6 eslint-plugin-only-warn@1 eslint-plugin-react@7 eslint-plugin-react-hooks@4 @babel/eslint-parser@7 @typescript-eslint/eslint-plugin@4 @typescript-eslint/parser@4
```

Or via yarn:

```bash
yarn add -E -D eslint@7.20.0 eslint-config-aristek@5.2.0 eslint-config-airbnb@18.2.0 eslint-config-prettier@7.2.0 eslint-plugin-import@2.22.0 eslint-plugin-jsx-a11y@6.4.0 eslint-plugin-only-warn@1.0.2 eslint-plugin-react@7.20.0 eslint-plugin-react-hooks@4.2.0 @babel/eslint-parser@7.12.0 @typescript-eslint/eslint-plugin@4.15.0 @typescript-eslint/parser@4.15.0
```

Add this lines in your `package.json` file:

```json
"eslintConfig": {
  "extends": "aristek"
}
```

> This preset can also be used for mixed codebases.

### JavaScript

Install the correct versions of each dependency via npm:

```bash
npm i -E -D eslint@7 eslint-config-aristek@5 eslint-config-airbnb@18 eslint-config-prettier@7 eslint-plugin-import@2 eslint-plugin-jsx-a11y@6 eslint-plugin-only-warn@1 eslint-plugin-react@7 eslint-plugin-react-hooks@4 @babel/eslint-parser@7
```

Or via yarn:

```bash
yarn add -E -D eslint@7.20.0 eslint-config-aristek@5.2.0 eslint-config-airbnb@18.2.0 eslint-config-prettier@7.2.0 eslint-plugin-import@2.22.0 eslint-plugin-jsx-a11y@6.4.0 eslint-plugin-only-warn@1.0.2 eslint-plugin-react@7.20.0 eslint-plugin-react-hooks@4.2.0 @babel/eslint-parser@7.12.0
```

Add this lines in your `package.json` file:

```json
"eslintConfig": {
  "extends": "aristek/base"
}
```

> This preset should be used for JavaScript only projects.

## create-react-app

In case you are trying to use our config with create-react-app, we recommend you to use [@craco/craco](https://www.npmjs.com/package/@craco/craco) to override default config.
To do this you should add the following lines in your `craco.config.js` file:

```js
module.exports = {
  eslint: {
    mode: ESLINT_MODES.file, // Remove default config.
    loaderOptions: { resolvePluginsRelativeTo: process.cwd() }, // Use eslint plugins from your node_modules, not from react-script's ones.
  },
};
```

> There might be issues connected with dependencies versions, installing versions required by `create-react-app` will resolve them.

## Rules

Here we document only rules that were changed compared to our [configs and plugins](#features).

### TypeScript

#### spaced-comment

Do not warn on`d.ts` references.

```
"spaced-comment": ["error", "always", { markers: ["/"] }],

```

#### consistent-return

Typescript is used for type checking.

```
"consistent-return": "off"
```

#### react/jsx-filename-extension

Allow ts(x) extensions for files with JSX.

```
"react/jsx-filename-extension": [
  "error",
  { extensions: [".js", ".jsx", ".tsx"] }
]
```

#### react/prop-types

TypeScript is used for type checking.

```
"react/prop-types": "off"
```

#### react/forbid-prop-types

TypeScript is used for type checking.

```
"react/forbid-prop-types": "off"
```

#### @typescript-eslint/explicit-function-return-type

Do not throw error because we prefer to use type inheritance.

```
"@typescript-eslint/explicit-function-return-type": "off"
```

#### @typescript-eslint/no-unused-vars

Ignore unused vars for edge case (rest props), e.g. { className, ...rest }

```
"@typescript-eslint/no-unused-vars": [
  "error",
  { ignoreRestSiblings: true }
]
```

#### @typescript-eslint/unbound-method

We prefer not to use classes so this rule is useless.

```
"@typescript-eslint/unbound-method": "off"
```

Any is the only option in some cases.

#### @typescript-eslint/no-explicit-any

```
"@typescript-eslint/no-explicit-any": "off"
```

#### @typescript-eslint/no-empty-function

Nothing bad in empty function.

```
"@typescript-eslint/no-empty-function": [
  "error",
  { allow: ["arrowFunctions", "functions", "methods"] }
]
```

#### no-use-before-define

Disable for compatibility with `@typescript-eslint/no-use-before-define`.

```
"no-use-before-define": "off"
```

#### @typescript-eslint/no-use-before-define

Extend `no-use-before-define` to support TypeScript.

```
"@typescript-eslint/no-use-before-define": "error"
```

#### @typescript-eslint/explicit-module-boundary-types

There is no need to enforce double typing because of type inheritance.

```
"@typescript-eslint/explicit-module-boundary-types": "off"
```

#### no-shadow

Disable for compatibility with `@typescript-eslint/no-shadow`.

```
"no-shadow": "off"
```

#### @typescript-eslint/no-shadow

Nothing bad in type parameter shadow.

```
"@typescript-eslint/no-shadow": [
  "error",
  { ignoreFunctionTypeParameterNameValueShadow: true },
],
```

### JavaScript

#### linebreak-style

Disable linebreak style to prevent conflicts different environments.

```
"linebreak-style": "off"
```

#### lines-between-class-members

Keep line between class members except of simple class properties e.g. class variables or component state.

```
"lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }]
```

#### no-unused-expressions

There is no difference except `allowTernary` option. We prefer to use `if shorthands` for logic operations.
Example: condition ? method1() : method2().

```
"no-unused-expressions": ["error", { allowTernary: true }]
```

#### no-empty

Forbid empty if-else blocks, but allow empty `try {...} catch(e) {}`.

```
"no-empty": ["error", { allowEmptyCatch: true }]
```

#### radix

Disallows providing the 10 radix by default.

```
radix: ["error", "as-needed"]
```

#### curly

Forces using all curly braces.

```
curly: "error"
```

#### global-require

'require' is used only in config files (e.g. rollup).

```
"global-require": "off"
```

#### react/require-default-props

'defaultProps' on function components is deprecated by React (https://github.com/facebook/react/pull/16210).

```
"react/require-default-props": [
  "error",
  { ignoreFunctionalComponents: true }
]
```

#### react/jsx-one-expression-per-line

Disable this rule because it causes an error with special html chars on some environments (e.g. Windows).

```
"react/jsx-one-expression-per-line": "off"
```

#### react/state-in-constructor

We use both variants depending on each case.

```
"react/state-in-constructor": "off",
```

#### react/destructuring-assignment

Use destructing only in render for `props` and `state`. For handlers we use destruction only if needed.

```
"react/destructuring-assignment": "off"
```

#### react/jsx-filename-extension

Allow both `.js` and `.jsx` extensions.

```
"react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }]
```

#### react/forbid-prop-types

There is no need to use alternatives everywhere like `shape`.
Sometimes we just need to know that this is an array in container for example.
We do not do any manipulations with array props and just pass it into the component.

```
"react/forbid-prop-types": "off"
```

#### react/jsx-props-no-spreading

Disable for our own risk without any grounding for a while.
It's also unnecessary for TypeScript users because all props are checking via types.

```
"react/jsx-props-no-spreading": "off"
```

#### import/prefer-default-export

Stylistic preference.

```
"import/prefer-default-export": "off"
```

#### import/no-extraneous-dependencies

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

#### import/extensions

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

#### jsx-a11y/label-has-for

This rule was deprecated in v6.1.0. It will no longer be maintained. Use label-has-associated-control instead.

```
"jsx-a11y/label-has-for": "off"
```

#### jsx-a11y/img-redundant-alt

Disable because of false positive cases with dynamic alt text.

```
"jsx-a11y/img-redundant-alt": "off"
```

#### jsx-a11y/label-has-associated-control

We must provide this rule with `htmlFor` attribute (by default) because this one was broken in airbnb config by `labelAttributes: []`.

```
"jsx-a11y/label-has-associated-control": ["error", { labelAttributes: ["htmlFor"] }]
```

#### @typescript-eslint/explicit-function-return-type

Disable for 'js' files in case of mixed configs as described in docs.
https://github.com/typescript-eslint/typescript-eslint/issues/851

```
"@typescript-eslint/explicit-function-return-type": "off"
```
