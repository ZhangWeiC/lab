"use strict"

// const OFF = 0
// const ERROR = 2

module.exports = {
  // Stop ESLint from looking for a configuration file in parent folders
  'root': true,

  plugins: ["vue", "prettier"],

  rules: {
    "prettier/prettier": "error",
    /*
     * console.log在开发完后记得去掉
     * console.warn/console.error可以留着
     *
     */
    "arrow-parens": 0,
    'no-empty': [2, {
      'allowEmptyCatch': true
    }],
    "no-console": "off",
    "no-undef": "off",
    "vue/no-parsing-error": [2, {
      "x-invalid-end-tag": false
    }],
    "no-unused-vars": "off",
    "semi": "error",
    "object-property-newline": 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 0,
    'vue/custom-event-name-casing': 0,
    'vue/attribute-hyphenation': 0,
    "object-curly-spacing": [ // 大括号前后应该加空格
      "error",
      "always"
    ]
  },

  // parserOptions: {
  //   // 支持动态import需要添加这一行
  //   parser: "babel-eslint",
  //   ecmaVersion: 2018,
  //   sourceType: "module",
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },

  env: {
    node: true,
    es6: true,
  },
}
