module.exports = {
  "env": {
    "es6": true,
    "amd": true,
    "node": true,
    "browser": false
  },
  "extends": [
    "eslint:recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  }
}
