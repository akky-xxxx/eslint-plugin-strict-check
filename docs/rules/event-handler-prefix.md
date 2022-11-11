# event-handler-prefix
- For align prefix of event handler

## Rule options

```js
...
"strict-check/event-handler-prefix": [<enabled>, {
    "forbiddenPrefix": <string>
}]
...
```

### `forbiddenPrefix`
- Specify forbid prefix
- Value is one of the following
    - handle
    - on

#### value: `"handle"`

Example of **invalid** :x: code when option value `"handle"`:

```tsx
// "strict-check/event-handler-prefix": ["error", { "forbiddenPrefix": "handle" }]
const Component = () => {
    const handleClickButton = () => {
        // some process
    }

    return <button onClick={handleClickButton}>button</button>
}
```

Example of **valid** :o: code when option value `"handle"`:

```tsx
// "strict-check/event-handler-prefix": ["error", { "forbiddenPrefix": "handle" }]
const Component = () => {
    const onClickButton = () => {
        // some process
    }

    return <button onClick={onClickButton}>button</button>
}
```

#### value: `"on"`

Example of **invalid** :x: code when option value `"on"`:

```tsx
// "strict-check/event-handler-prefix": ["error", { "forbiddenPrefix": "on" }]
const Component = () => {
    const onClickButton = () => {
        // some process
    }

    return <button onClick={onClickButton}>button</button>
}
```

Example of **valid** :o: code when option value `"on"`:

```tsx
// "strict-check/event-handler-prefix": ["error", { "forbiddenPrefix": "on" }]
const Component = () => {
    const handleClickButton = () => {
        // some process
    }

    return <button onClick={handleClickButton}>button</button>
}
```
