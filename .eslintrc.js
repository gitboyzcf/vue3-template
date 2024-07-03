module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    __dirname: true,
    process: true,
    require: true,
    module: true,
    AMap: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    './.eslintrc-auto-import.js'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 代码风格
    'block-spacing': [2, 'always'],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error']
      }
    ],
    'no-debugger': ['warn'],
    'no-empty': ['warn'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    indent: [
      0,
      2,
      {
        SwitchCase: 1
      }
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'linebreak-style': 0,
    'multiline-ternary': [2, 'always-multiline'],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': 'off',
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    'switch-colon-spacing': [
      2,
      {
        after: true,
        before: false
      }
    ],
    'object-curly-spacing': [2, 'always'],
    // ES6
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // Vue - https://github.com/vuejs/eslint-plugin-vue
    'vue/attributes-order': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-indent': [0, 2],
    'vue/no-v-html': 0,
    'vue/require-explicit-emits': [
      2,
      {
        allowProps: true
      }
    ],
    'vue/script-indent': [
      0,
      2,
      {
        switchCase: 1
      }
    ]
  }
}
