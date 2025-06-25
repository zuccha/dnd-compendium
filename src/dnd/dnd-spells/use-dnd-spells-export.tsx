import { BlobWriter, Data64URIReader, ZipWriter } from "@zip.js/zip.js";
import { createRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "../../theme/theme-provider";
import DndSpellCardPreview, {
  type DndSpellCardPreviewHandle,
} from "./dnd-spell-card-preview";

export default function useDndSpellsExport({
  bleed,
  dpi,
  height,
  spellIds,
  width,
}: {
  bleed: number;
  dpi: number;
  height: number;
  spellIds: string[];
  width: number;
}) {
  return useCallback(async () => {
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = "-10000px";
    document.body.appendChild(container);

    const root = createRoot(container);

    const blobWriter = new BlobWriter("application/zip");
    const writer = new ZipWriter(blobWriter);

    const exportSpell = async (spellId: string) => {
      const ref = createRef<DndSpellCardPreviewHandle>();

      root.render(
        <ThemeProvider>
          <DndSpellCardPreview
            bleed={bleed}
            dpi={dpi}
            height={height}
            ref={ref}
            spellId={spellId}
            width={width}
          />
        </ThemeProvider>,
      );

      await new Promise((resolve) => setTimeout(resolve, 1));

      if (!ref.current) return Promise.reject();

      const dataUrl = await ref.current.downloadPng();
      const reader = new Data64URIReader(dataUrl);
      await writer.add(`${spellId}.png`, reader);
    };

    for (const spellId of spellIds) await exportSpell(spellId);

    root.unmount();
    container.remove();

    await writer.close();
    const blob = await blobWriter.getData();

    const link = document.createElement("a");
    link.download = `cards.zip`;
    link.href = URL.createObjectURL(blob);
    link.click();
  }, [bleed, dpi, height, spellIds, width]);
}
