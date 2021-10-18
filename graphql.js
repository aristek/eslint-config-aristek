module.exports = {
  overrides: [
    {
      files: ["**/*.{gql,graphql}"],
      extends: "plugin:@graphql-eslint/recommended",
      parserOptions: {
        operations: "**/*.{gql,graphql}",
        schema: "schema.{gql,graphql}",
      },
      rules: {
        // Avoid querying same field multiple times within same operation.
        "@graphql-eslint/avoid-duplicate-fields": "error",
        // Do not use deprecated fields.
        "@graphql-eslint/no-deprecated": "error",
        // Force unique operation names usage. Duplicate names will cause @graphql-codegen tool to crash.
        "@graphql-eslint/unique-operation-name": "error",
      },
    },
  ],
};
