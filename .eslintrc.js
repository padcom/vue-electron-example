// This defines the mode of operation for checks depending on the environment
const mode = process.env.NODE_ENV === 'production' ? 'error' : 'warn'

module.exports = {
  parserOptions: {
    'parser': 'babel-eslint',
    'sourceType': 'module'
  },

  extends: [ 'eslint:recommended', 'plugin:vue/recommended' ],

  rules: {
    'arrow-spacing': [ 'error', {
      'before': true,
      'after': true 
    } ],
    'indent': [ 'error', 2, {
      'SwitchCase': 1
    } ],
    'semi': [ 'error', 'never' ],
    'quotes': [ 'error', 'single' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'no-console': mode,
    'no-debugger': mode,
    'no-var': 'error',
    'one-var': [ 'error', 'never' ],
    'space-before-function-paren': [ 'error', {
      'anonymous': 'never',
      'named': 'always',
      'asyncArrow': 'always'
    }],
    'vue/max-attributes-per-line': [ 'error', {
      singleline: 5,
      multiline: { max: 5, 'allowFirstLine': true }
    } ],
    'vue/html-indent': [ 'none' ],
    'vue/attribute-hyphenation': [ 'error', 'never' ],
  },

  env: {
    node: true
  },
}
