module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended","plugin:prettier/recommended"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error",
        "no-console": "error"
    }
};