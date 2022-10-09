# individual-import
- import them individual

## Rule options

```js
...
"strict-check/individual-import": [<enabled>, {
    "targets": <string>[]
}]
...
```

### `targets`
- specify check target modules

#### value: `[react]`

example of **invalid** code when option value `[react]`:

```tsx
// "strict-check/individual-import": ["warn", { "targets": ["react"] }]
const [state, setState] = React.useState(1)
const changeHandler: React.ChangeEventHandler = () => {}
const Component = () => <React.Fragment>Component</React.Fragment>
```

example of **valid** code when option value `[react]`:

```tsx
// "strict-check/individual-import": ["warn", { "targets": ["react"] }]
const [state, setState] = useState(1)
const changeHandler: ChangeEventHandler = () => {}
const Component = () => <Fragment>Component</Fragment>
```
