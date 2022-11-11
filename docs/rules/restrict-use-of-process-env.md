# restrict-use-of-process-env
- for the centralized manage the env

## Rule options

```js
...
"strict-check/restrict-use-of-process-env": <enabled>
...
```

example of **invalid** :x: code

```tsx
// "strict-check/restrict-use-of-process-env": "error"
const env = process.env
const { env: variableName } = process
```

example of **valid** :o: code

```tsx
// "strict-check/restrict-use-of-process-env": "error"

// const file
/* eslint-disable strict-check/restrict-use-of-process-env */
export const Environment = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 3000,
}

// side to use
import { Environment } from "../const"

const env = Environment
```
