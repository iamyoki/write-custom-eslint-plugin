const pinyin = require('tiny-pinyin')

function convertToPinYin(chinese) {
  if (pinyin.isSupported()) {
    return pinyin.convertToPinyin(chinese, '_', true)
  }
  return chinese
}

/** @type {import('eslint').Rule.RuleModule} */
const options = {
  meta: {
    fixable: true
  },
  create(context) {
    return {
      Identifier(node) {
        if (/\p{Unified_Ideograph}/u.test(node.name)) {
          context.report({
            node,
            message: 'Do not use chinese character as Indentifier',
            fix(fixer) {
              return fixer.replaceTextRange(
                node.range,
                convertToPinYin(node.name)
              )
            }
          })
        }
      }
    }
  }
}

module.exports = options
