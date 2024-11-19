# throttle-ts

Correctly typed, generic, tiny ([419B](https://bundlephobia.com/package/throttle-ts@1.4.0)), typescript throttle function.

```typescript
const fn = (str: string, num: number) => `hello ${str} ${num}`;

const [throttled, cancel, reset] = throttle(fn, 500);

throttled("world", 1);
```

Yields the return value of the throttled function, or undefined when throttled/cancelled.

The throttled function keeps the type signature of the original function, plus `void`.

![image](https://github.com/user-attachments/assets/d806ab04-1a7b-42a7-907e-44168a3b0988)

Returns a `cancel` function which enables cleanup of the timeout, and blocks future calls to the throttled function. Useful when unmounting (react) ui components.

Returns a `reset` function which enables clearing the timeout, letting you call the method again before the delay has expired.

### Usage

```javascript
import { throttle } from "throttle-ts";
```

```javascript
const fn = () => "executed";

const [throttledFn] = throttle(fn, 200);

throttledFn(); // "executed"
throttledFn(); // undefined
throttledFn(); // undefined
setTimeout(throttledFn, 500); // "executed"
```

### Using Cancel

```javascript
const fn = () => "executed";

const [throttledFn, cancel] = throttle(fn, 200);

throttledFn(); // "executed"
setTimeout(throttledFn, 500); // undefined
cancel(); // blocks all future calls to the throttled function
```

### Using Reset

```javascript
const fn = () => "executed";

const [throttledFn, _, reset] = throttle(fn, 200);

throttledFn(); // "executed"
throttledFn(); // undefined
reset(); // reset delay timeout
throttledFn(); // "executed"
throttledFn(); // undefined
```
