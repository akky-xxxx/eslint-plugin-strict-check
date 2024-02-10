# forbidden-use-react-hooks
- Forbidden the use react hooks at specify path

## Rule options

```js
"strict-check/forbidden-use-react-hooks": [<enabled>, {
    "allowPatterns": <RegExp>[],
    "disallowPatterns": <RegExp>[]
}]
```

:warning: Define the only one property, from allowPatterns or disallowPatterns.

### `allowPatterns`
- Specify the regular expression array for allows path

#### value: `[/View.tsx/]`

Example of **invalid** :x: code when option value `[/View.tsx/]`:

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "allowPatterns": [/View.tsx/] }]
// index.tsx
import { useState } from "react"
```

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "allowPatterns": [/View.tsx/] }]
// index.tsx
import { useCustomHook } from "./modules/useCustomHook"
```

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "allowPatterns": [/View.tsx/] }]
// index.tsx
const [state, setState] = useState("")
```

Example of **valid** :o: code when option value `[/View.tsx/]`:

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "allowPatterns": [/View.tsx/]] }]
// Button/View.tsx
import { useState } from "react"
```

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "allowPatterns": [/View.tsx/]] }]
// Button/View.tsx
import { useCustomHook } from "./modules/useCustomHook"
```

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "allowPatterns": [/View.tsx/]] }]
// Button/View.tsx
const [state, setState] = useState("")
```

### `disallowPatterns`
- Specify the regular expression array for disallows path

#### value: `[/View.tsx/]`

Example of **invalid** :x: code when option value `[/View.tsx/]`:

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "disallowPatterns": [/View.tsx/] }]
// View.tsx
import { useState } from "react"
```

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "disallowPatterns": [/View.tsx/] }]
// View.tsx
import { useCustomHook } from "./modules/useCustomHook"
```

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "disallowPatterns": [/View.tsx/] }]
// View.tsx
const [state, setState] = useState("")
```

Example of **valid** :o: code when option value `[/View.tsx/]`:

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "disallowPatterns": [/View.tsx/]] }]
// Button/index.tsx
import { useState } from "react"
```

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "disallowPatterns": [/View.tsx/]] }]
// Button/index.tsx
import { useCustomHook } from "./modules/useCustomHook"
```

```tsx
// "strict-check/forbidden-use-react-hooks": ["error", { "disallowPatterns": [/View.tsx/]] }]
// Button/index.tsx
const [state, setState] = useState("")
```
