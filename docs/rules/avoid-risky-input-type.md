# avoid-risky-input-type
- for avoid risky input type
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
- specify risky input type values
- value is one of the input type

#### value: `["number", "tel"]`

example of **invalid** :x: code when option value `["number", "tel"]`:

```tsx
// "strict-check/avoid-risky-input-type": ["error", { "riskyValues": ["number", "tel"] }]
const Input1 = () => <input type="number" />
const Input2 = () => <input type="tel" />
```

example of **valid** :o: code when option value `["number", "tel"]`:

```tsx
// "strict-check/avoid-risky-input-type": ["error", { "riskyValues": ["number", "tel"] }]
const Input = () => <input type="text" />
```
