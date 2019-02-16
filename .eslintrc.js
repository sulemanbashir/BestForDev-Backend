module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaVersion": 2016
    },
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
                "trailingComma": "es5",
                "tabWidth": 4,
                "semi": false,
                "bracketSpacing": true,
                "arrowParens": "avoid"
            }
        ]
    },
    "plugins": ["prettier"]
};