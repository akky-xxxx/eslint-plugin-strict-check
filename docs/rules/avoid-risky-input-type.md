# avoid-risky-input-type
- For avoid risky input type
    - ex) `type="number"`

## Rule options

```js
...
"strict-check/avoid-risky-input-type": [<enabled>, {
    "riskyValues": <string>[]
}]
...
```

### `riskyValues`
- Specify risky input type values
- Value is one of the input type

#### value: `["number", "tel"]`

Example of **invalid** :x: code when option value `["number", "tel"]`:

```tsx
// "strict-check/avoid-risky-input-type": ["error", { "riskyValues": ["number", "tel"] }]
const Input1 = () => <input type="number" />
const Input2 = () => <input type="tel" />
```

Example of **valid** :o: code when option value `["number", "tel"]`:

```tsx
// "strict-check/avoid-risky-input-type": ["error", { "riskyValues": ["number", "tel"] }]
const Input = () => <input type="text" />
```
