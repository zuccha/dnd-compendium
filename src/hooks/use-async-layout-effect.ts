import { useLayoutEffect } from "react";

export default function useAsyncLayoutEffect(
  callback: () => Promise<unknown>,
  deps: React.DependencyList,
) {
  useLayoutEffect(() => {
    callback();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
