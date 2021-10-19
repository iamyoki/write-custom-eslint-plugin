'use strict'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: { ecmaVersion: 2020 },
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended'
  ],
  env: {
    node: true
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true }
    }
  ]
}
