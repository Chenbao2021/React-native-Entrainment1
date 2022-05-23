module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "airbnb"
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'no-unneeded-ternary': "off",
    'no-constant-condition': "off",
    'no-nested-ternary': "off",
    'no-mixed-operators': "off",
    'no-continue': "off",
    'no-loop-func': "off",
    'react-native/no-unused-styles': 2,
    'no-lonely-if': "off",
    'max-len': ["error", { "code": 600 }],
    'lines-between-class-members': "off",
    'global-require': "off",
    'no-else-return': "off",
    'indent': ["error", 2, { "SwitchCase": 1 }],
    'curly': "off",
    'brace-style': "off",
    'nonblock-statement-body-position': "off",
    'no-param-reassign': "off",
    'no-underscore-dangle': "off",
    'no-plusplus': "off",
    'semi': "off",
    'object-curly-newline': "off",
    'prefer-destructuring': "off",
    'arrow-parens': ["off"],
    'consistent-return': "off",
    'comma-dangle': "off",
    'generator-star-spacing': "off",
    'import/no-extraneous-dependencies': "off",
    'no-console': "off",
    'no-use-before-define': "off",
    'no-multi-assign': "off",
    'promise/param-names': "error",
    'promise/always-return': "error",
    'promise/catch-or-return': "error",
    'promise/no-native': "off",
    'react/destructuring-assignment': "off",
    'react/sort-comp': ["error", {
      'order': ["type-annotations", "static-methods", "lifecycle", "everything-else", "render"]
    }],
    'react/jsx-no-bind': "off",
    'react/jsx-filename-extension': ["error", { "extensions": [".js", ".jsx"] }],
    'react/prefer-stateless-function': "off",
    'react/jsx-indent-props': ["off", 2],
    "react/no-did-update-set-state": "off",
    'react/static-property-placement': "off"
  },
  plugins: [
    "import",
    "promise",
    "react",
    "react-native"
  ]
 };
 
 