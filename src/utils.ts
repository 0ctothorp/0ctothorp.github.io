export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function debounce<T extends Array<any>, R>(
  fn: (...args: T) => void,
  time: number
) {
  let timeoutId: number;
  return (...args: T) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn(...args), time);
  };
}

export function throttle(callback: () => void, time: number) {
  let queued = false;

  return () => {
    if (queued) {
      return;
    }

    queued = true;
    setTimeout(() => {
      callback();
      queued = false;
    }, time);
  };
}
