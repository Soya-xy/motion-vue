---
title: useInView
---

`useInView` is a hook that detects if a DOM element is in the viewport.

```vue
<script setup>
import { useInView } from 'motion-v'

const scope = ref(null)
const isInView = useInView(scope)
</script>
```

## Usage

`useInView` track the visibility of a DOM element. Pass a ref of the DOM element to the hook.

```vue
<script setup>
import { useInView } from 'motion-v'

const scope = ref(null)
const isInView = useInView(scope)
</script>

<template>
  <div
    ref="scope"
    class="bg-primary p-4 rounded w-20 h-20"
  />
</template>
```

while the element is in the viewport, `isInView` will be `true`. when the element is out of the viewport, `isInView` will be `false`.

## Options

`useInView` accepts an options object as the second argument.

it has the following properties:

- `once`: boolean. if `true`, `isInView` will be `false` when the element is out of the viewport.

Default: `false`.
```ts
const isInView = useInView(scope, {
  once: true,
})
```

- `root`: HTMLElement. the root element to check the visibility.

Default: `Window`.
```ts
const isInView = useInView(scope, {
  root: document.getElementById('app'),
})
```
- `margin`: string. the margin around the root element.

Default: `0px`.

```ts
const isInView = useInView(scope, {
  margin: '100px',
})
```
- `amount`: 'some' | 'all' | 0-1. The amount of an element that should enter the viewport to be considered in view.

Default: `some`.
```ts
const isInView = useInView(scope, {
  amount: 'all',
})
```

<iframe src="https://stackblitz.com/edit/qvapj3?ctl=1&embed=1&file=src%2FApp.vue&hideExplorer=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="motion-use-spring"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock"
   ></iframe>
