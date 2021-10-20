/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    es6: true
  },
  extends: ['plugin:custom/recommended']
  // rules: {
  //   'custom/no-chinese-identifier': 2
  // }
}
module.exports = config
