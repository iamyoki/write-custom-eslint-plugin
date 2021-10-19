const { RuleTester } = require('eslint')
const noChineseIdentifer = require('../../../lib/rules/no-chinese-identifier')

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } })

ruleTester.run('no-chinese-identifier', noChineseIdentifer, {
  valid: [{ code: `const color = 'red'` }],
  invalid: [
    {
      code: `const 颜色 = 'red'`,
      errors: [{ message: 'Do not use chinese character as Indentifier' }],
      output: `const yan_se = 'red'`
    }
  ]
})
