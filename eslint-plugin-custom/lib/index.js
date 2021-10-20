/**
 * @fileoverview Custom eslint plugin practice
 * @author custom
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + '/rules')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: requireIndex(__dirname + '/rules'),
  /* 
    所有在config名下的配置这样使用：
    在/some-project/.eslintrc.js中
    module.exports = {
      ...
      extends: [plugin:custom/yourRonfigName]
    }
  */
  configs: {
    recommended: {
      plugins: ['custom'],
      rules: {
        'custom/no-chinese-identifier': 2
      }
    }
  }
}

