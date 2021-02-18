export const throttle = <T extends (...args: any) => any>(
  fn: T,
  delay: number
): [T | ((...args: any) => void), () => void] => {
  let wait = false;
  let timeout: undefined | number;
  let cancelled = false;

  return [
    (...args) => {
      if (cancelled) return undefined;
      if (wait) return undefined;

      const val = fn(...args);

      wait = true;

      timeout = window.setTimeout(() => {
        wait = false;
      }, delay);

      return val;
    },
    () => {
      wait = false;
      cancelled = true;
      clearTimeout(timeout);
    },
  ];
};