# match-names-of-file-and-export
- Match name of filename and export target
- Filename is specified by capture of regular expression

## Rule options

```js
...
"strict-check/match-names-of-file-and-export": [<enabled>, {
    "captures": <RegExp>[]
}]
...
```

### `captures`
- Specify the regular expression array for allows path

#### value: `[/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index.tsx/]`

Example of **invalid** :x: code when option value `[/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index.tsx/]`:

```tsx
// "strict-check/match-names-of-file-and-export": ["error", { "captures": [/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index.tsx/] }]
// /components/atoms/Button/index.tsx
export const button = () => {}
```

Example of **valid** :o: code when option value `[/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index.tsx/]`:

```tsx
// "strict-check/match-names-of-file-and-export": ["error", { "captures": [/\/components\/(?:atoms|molecules|organsims|templates)\/([^/]+)\/index.tsx/]] }]
// /components/atoms/Button/index.tsx
export const Button = () => {}
```
