# eslint-plugin-strict-check
- Niche rules for eslint.

## Installation

```shell
# by yarn
$ yarn add -D eslint-plugin-strick-check

# by npm
$ npm i --save-dev eslint-plugin-strick-check
```

Enable plugin at `.eslintrc.js`

```js
module.exports = {
    plugins: ["strict-check"],
    rules: {
        ...
    },
}
```

## Rules

| Name                                                                     | Description                   | Configurations                                                                                              |
|--------------------------------------------------------------------------|-------------------------------|-------------------------------------------------------------------------------------------------------------|
| [avoid-risky-input-type](docs/rules/avoid-risky-input-type.md)           | Avoid risky input type        | ![react](https://img.shields.io/badge/-react-blue)                                                          |
| [forbidden-hard-coding-href](docs/rules/forbidden-hard-coding-href.md)   | Forbidden hard coding href    |                                                                                                             |
| [individual-import](docs/rules/individual-import.md)                     | Import them individual        | ![react](https://img.shields.io/badge/-react-blue)                                                          |
| [event-handler-prefix](docs/rules/event-handler-prefix.md)               | Align prefix of event handler | ![react](https://img.shields.io/badge/-react-blue)                                                          |
| [restrict-use-of-process-env](docs/rules/restrict-use-of-process-env.md) | Restrict environment usage    | ![vanilla](https://img.shields.io/badge/-vanilla-yellow) ![react](https://img.shields.io/badge/-react-blue) |

## License
- [MIT](LICENSE)
