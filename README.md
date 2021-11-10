# eslint-config-aristek

ESLint config based on team guideline and experience for React projects.

- [Features](#features)
- [Usage](#usage)
  - [Basic](#basic)
  - [TypeScript](#typescript)
  - [GraphQL](#graphql)
  - [CSS Modules](#css-modules)
  - [Prettier](#prettier)
  - [create-react-app](#create-react-app)
- [Rules](#rules)

## Features

- Basic configuration upon [airbnb code style](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) for JavaScript and React using [import](https://github.com/benmosher/eslint-plugin-import), [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y), [react](https://github.com/yannickcr/eslint-plugin-react) and [react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) plugins.
- TypeScript support via [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) and [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin).
- GraphQL support via [@graphql-eslint/eslint-plugin](https://github.com/dotansimha/graphql-eslint).
- CSS Modules support via [eslint-plugin-css-modules](https://github.com/atfzl/eslint-plugin-css-modules).
- Prettier support via [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
- Absolute imports friendly for `node_modules` and `src`.

## Usage

There are several possible presets that you can setup using our config.

### Basic

Let's start from installing core dependencies with correct versions of each dependency via npm:

```bash
npm i -E -D @babel/eslint-parser@7 eslint@7 eslint-config-airbnb@18 eslint-config-aristek@6 eslint-plugin-import@2 eslint-plugin-jsx-a11y@6 eslint-plugin-react@7 eslint-plugin-react-hooks@4
```

Or via yarn:

```bash
yarn add -E -D @babel/eslint-parser@7.16.3 eslint@7.32.0 eslint-config-airbnb@18.2.1 eslint-config-aristek@6.0.0 eslint-plugin-import@2.25.3 eslint-plugin-jsx-a11y@6.4.1 eslint-plugin-react@7.26.1 eslint-plugin-react-hooks@4.3.0
```

Then add this lines in your `package.json` file:

```json
"eslintConfig": {
  "extends": "aristek"
}
```

> This preset should be used for JavaScript only projects.

### TypeScript

Install the correct versions of each dependency to add TypeScript support to your project via npm:

```bash
npm i -E -D @typescript-eslint/eslint-plugin@4 @typescript-eslint/parser@4
```

Or via yarn:

```bash
yarn add -E -D @typescript-eslint/eslint-plugin@4.33.0 @typescript-eslint/parser@4.33.0
```

Extend from `aristek/typescript` in your eslint configuration. This can be looks like:

```json
"eslintConfig": {
  "extends": [
    "aristek",
    "aristek/typescript"
  ]
}
```

> This preset can also be used for mixed codebases.

### GraphQL

Install the correct version of dependency to add GraphQL support to your project via npm:

```bash
npm i -E -D @graphql-eslint/eslint-plugin@2
```

Or via yarn:

```bash
yarn add -E -D @graphql-eslint/eslint-plugin@2.4.1
```

Extend from `aristek/graphql` in your eslint configuration. This can be looks like:

```json
"eslintConfig": {
  "extends": [
    "aristek",
    "aristek/graphql"
  ]
}
```

### CSS Modules

Install the correct version of dependency to add CSS Modules support to your project via npm:

```bash
npm i -E -D eslint-plugin-css-modules@2
```

Or via yarn:

```bash
yarn add -E -D eslint-plugin-css-modules@2.11.0
```

Extend from `aristek/css-modules` in your eslint configuration. This can be looks like:

```json
"eslintConfig": {
  "extends": [
    "aristek",
    "aristek/css-modules"
  ]
}
```

### Prettier

Install the correct version of dependency to add Prettier support to your project via npm:

```bash
npm i -E -D eslint-config-prettier@8
```

Or via yarn:

```bash
yarn add -E -D eslint-config-prettier@8.3.0
```

Extend from `aristek/prettier` in your eslint configuration. This can be looks like:

```json
"eslintConfig": {
  "extends": [
    "aristek",
    "aristek/typescript"
    "aristek/prettier" // <- Must be the last extend in config.
  ]
}
```

> Pay attention that prettier extend must be the last in your eslint configuration!

### create-react-app

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

All changes with documentation notes compared to [configs and plugins](#features) can be found in our config files.
