# throttle-ts

Correctly typed generic typescript throttle function

### Usage

```javascript
const fn = () => "executed";

const [throttledFn, cancel] = throttle(fn, 200);

throttledFn(); // "executed"
throttledFn(); // undefined
throttledFn(); // undefined

// clears the throttle timeout and prevents future calls to 
// throttledFn, useful when unmounting react/view components
cancel();
```
