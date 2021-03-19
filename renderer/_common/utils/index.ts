type Callback = (...args: unknown[]) => void;

export function throttle(cb: Callback, milliseconds: number): Callback {
  let timer: number | undefined;
  return function (...args: unknown[]) {
    const context = self;
    if (timer) return;
    timer = window.setTimeout(() => {
      cb.call(context, ...args);
      clearTimeout(timer);
      timer = undefined;
    }, milliseconds);
  };
}

export function debounce(cb: Callback, milliseconds: number): Callback {
  let timer: number | undefined;
  return function (...args: unknown[]) {
    const context = self;
    if (timer) clearTimeout(timer);
    timer = window.setTimeout(() => {
      cb.call(context, ...args);
      clearTimeout(timer);
      timer = undefined;
    }, milliseconds);
  };
}

export function numberEqual(a: number, b: number): boolean {
  return Math.trunc(a - b) === 0;
}
