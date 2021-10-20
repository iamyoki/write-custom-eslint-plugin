/** @type {import('eslint').Linter.Config} */
const config = {
  plugins: ['custom'],
  rules: {
    'custom/no-chinese-identifier': 2
  }
}

module.exports = config
