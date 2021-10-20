module.exports = {
  plugins: ['custom'],
  rules: {
    'custom/no-chinese-identifier': 2,
    'no-alert': 2,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
}
