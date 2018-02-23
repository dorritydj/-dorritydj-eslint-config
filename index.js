module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "amd": true,
        "es6": true
    },
    "extends": ["eslint:recommended","plugin:prettier/recommended"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "tabWidth": 4
        }],
        "no-console": "error"
    }
};