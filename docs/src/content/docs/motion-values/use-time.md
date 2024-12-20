---
title: useTime
---

`useTime` returns a motion value that updates once per frame with the duration, in milliseconds, since it was first created.

This is especially useful in generating perpetual animations.

```ts
const time = useTime()
const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })

<Motion :style="{ rotate }" />

```

<iframe src="https://stackblitz.com/edit/vitejs-vite-ff3czw?ctl=1&embed=1&file=src%2FApp.vue&hideExplorer=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="motion-use-spring"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock"
   ></iframe>

## Usage

```ts
import { useTime } from 'motion-v'
```

When called, useTime will create a new motion value. This value will update every frame with the time since its creation.

You can use this either directly or by composing with other motion value hooks.

```ts
const time = useTime()
const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })
```
