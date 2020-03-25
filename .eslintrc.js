const path = require('path');
module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "extends": ["airbnb-base", "plugin:promise/recommended", "plugin:you-dont-need-lodash-underscore/compatible"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
  },
  "plugins": ["promise", "you-dont-need-lodash-underscore"]
}
