# forbidden-hard-coding-href
- For forbidden hard coding href

## Rule options

```js
...
"strict-check/forbidden-hard-coding-href": [<enabled>, {
    "forbiddenValues": <string>[]
}]
...
```

### `forbiddenValues`
- Specify the forbid href values

#### value: `["/", "/search"]`

Example of **invalid** :x: code when option value `["/", "/search"]`:

```tsx
// "strict-check/avoid-risky-input-type": ["error", { "forbiddenValues": ["/", "/search"] }]
const Component = () => <a href="/">top</a>
const searchHref = "/search"
```
