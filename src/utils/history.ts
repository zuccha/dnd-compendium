const patchedHistoryMethods = ["pushState", "replaceState"] as const;

export function patchHistoryDispatch() {
  patchedHistoryMethods.forEach((type) => {
    const original = history[type];
    history[type] = function (...args) {
      const result = original.apply(this, args);
      window.dispatchEvent(new Event(type.toLowerCase()));
      return result;
    };
  });
}
