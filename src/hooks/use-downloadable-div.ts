import { toPng } from "html-to-image";
import { useCallback, useMemo, useRef } from "react";

export default function useDownloadableDiv(
  width: number, // in inches
  height: number, // in inches
  dpi: number,
) {
  const ref = useRef<HTMLDivElement>(null);

  const downloadPng = useCallback(() => {
    if (!ref.current) return Promise.reject();

    const node = ref.current;

    const divHeight = node.offsetHeight;
    const divWidth = node.offsetWidth;

    const outputHeight = height * dpi;
    const outputWidth = width * dpi;

    const scale = outputWidth / divWidth;

    return toPng(node, {
      height: outputHeight,
      width: outputWidth,

      pixelRatio: window.devicePixelRatio,
      style: {
        height: `${divHeight}px`,
        width: `${divWidth}px`,

        transform: `scale(${scale})`,
        transformOrigin: "top left",
      },
    });
  }, [dpi, height, width]);

  return useMemo(() => ({ downloadPng, ref }), [ref, downloadPng]);
}
