# eslint-plugin-strict-check
- Niche rules for eslint.

## Installation

```shell
# by yarn
$ yarn add -D eslint-plugin-strict-check

# by npm
$ npm i --save-dev eslint-plugin-strict-check
```

## Usage

### for `eslint.config.mjs`
```js
import eslintPluginStrictCheck from "eslint-plugin-strict-check"

export default [
    {
        plugins: {
            "strict-check": eslintPluginStrictCheck, // It is not necessary when use the recommended config
        },
    },
    eslintPluginStrictCheck.configs.react, // Specify when use recommended config for react
    eslintPluginStrictCheck.configs.vanilla, // Specify when use recommended config for vanilla
]
```

### for `.eslintrc.js`

```js
module.exports = {
    plugins: ["strict-check"], // It is not necessary when use the recommended config
    extends: [
        "strict-check/legacy/react", // Specify when use recommended config for react
        "strict-check/legacy/vanilla", // Specify when use recommended config for vanilla
    ],
    rules: {
        ...
    },
}
```

## Rules

| Name                                                                               | Description                                      | Configurations                                                                                              |
|------------------------------------------------------------------------------------|--------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [avoid-risky-input-type](docs/rules/avoid-risky-input-type.md)                     | Avoid risky input type                           | ![react](https://img.shields.io/badge/-react-blue)                                                          |
| [file-path-patterns](docs/rules/file-path-patterns.md)                             | Check if file path follows regular expression    |                                                                                                             |
| [forbidden-hard-coding-href](docs/rules/forbidden-hard-coding-href.md)             | Forbidden hard coding href                       |                                                                                                             |
| [forbidden-multiple-named-exports](docs/rules/forbidden-multiple-named-exports.md) | Forbidden the multiple named exports at one file |                                                                                                             |
| [forbidden-use-react-hooks](docs/rules/forbidden-use-react-hooks.md)               | Forbidden the use react hooks at specify path    |                                                                                                             |
| [individual-import](docs/rules/individual-import.md)                               | Import them individual                           | ![react](https://img.shields.io/badge/-react-blue)                                                          |
| [event-handler-prefix](docs/rules/event-handler-prefix.md)                         | Align prefix of event handler                    | ![react](https://img.shields.io/badge/-react-blue)                                                          |
| [match-names-of-file-and-export](docs/rules/match-names-of-file-and-export.md)     | Match name of filename and export target         |                                                                                                             |
| [restrict-use-of-process-env](docs/rules/restrict-use-of-process-env.md)           | Restrict environment usage                       | ![vanilla](https://img.shields.io/badge/-vanilla-yellow) ![react](https://img.shields.io/badge/-react-blue) |

## License
- [MIT](LICENSE)
