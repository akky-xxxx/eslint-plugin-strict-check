# forbidden-hard-coding-href
- for forbidden hard coding href

## Rule options

```js
...
"strict-check/forbidden-hard-coding-href": [<enabled>, {
    "forbiddenValues": <string>[]
}]
...
```

### `forbiddenValues`
- specify the forbid href values

#### value: `["/", "/search"]`

example of **invalid** code:

```tsx
// "strict-check/avoid-risky-input-type": ["error", { "forbiddenValues": ["/", "/search"] }]
const Component = () => <a href="/">top</a>
const searchHref = "/search"
```
