/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    es6: true
  },
  plugins: ['custom'],
  rules: {
    'custom/no-chinese-identifier': 2
  }
}
module.exports = config
