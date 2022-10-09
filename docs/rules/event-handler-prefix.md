# event-handler-prefix
- for align prefix of event handler

## Rule options

```js
...
"strict-check/event-handler-prefix": [<enabled>, {
    "forbiddenPrefix": <string>
}]
...
```

### `forbiddenPrefix`
- specify forbid prefix
- value is one of the following
    - handle
    - on

#### value: `handle`

example of **invalid** code when option value `handle`:

```tsx
// "strict-check/event-handler-prefix": ["error", { "forbiddenPrefix": "handle" }]
const Component = () => {
    const handleClickButton = () => {
        // some process
    }

    return <button onClick={handleClickButton}>button</button>
}
```

example of **valid** code when option value `handle`:

```tsx
// "strict-check/event-handler-prefix": ["error", { "forbiddenPrefix": "handle" }]
const Component = () => {
    const onClickButton = () => {
        // some process
    }

    return <button onClick={onClickButton}>button</button>
}
```

#### value: `on`

example of **invalid** code when option value `on`:

```tsx
// "strict-check/event-handler-prefix": ["error", { "forbiddenPrefix": "on" }]
const Component = () => {
    const onClickButton = () => {
        // some process
    }

    return <button onClick={onClickButton}>button</button>
}
```

example of **valid** code when option value `on`:

```tsx
// "strict-check/event-handler-prefix": ["error", { "forbiddenPrefix": "on" }]
const Component = () => {
    const handleClickButton = () => {
        // some process
    }

    return <button onClick={handleClickButton}>button</button>
}
```
