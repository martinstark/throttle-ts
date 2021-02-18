# throttle-ts

Correctly typed, generic, typescript throttle function

Yields the return value of the throttled function.

Returns a cancel function which enables cleanup of the timeout, and blocks future calls to the throttled function. Useful when unmounting react/view components.

### Usage
```javascript
import { throttle } from "@martinstark/throttle-ts";
```

```javascript
const fn = () => "executed";

const [throttledFn] = throttle(fn, 200);

throttledFn(); // "executed"
throttledFn(); // undefined
throttledFn(); // undefined
setTimeout(throttledFn, 500) // "executed"
```

### Using Cancel

```javascript
const fn = () => "executed";

const [throttledFn, cancel] = throttle(fn, 200);

throttledFn(); // "executed"
setTimeout(throttledFn, 500); // undefined
cancel();
```
