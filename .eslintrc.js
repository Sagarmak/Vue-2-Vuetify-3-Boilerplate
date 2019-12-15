module.exports = {
  root: true,

  env: {
    node: true
  },

  "extends": [ "plugin:vue/strongly-recommended", "@vue/prettier"],

  rules: {
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn'
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
};
