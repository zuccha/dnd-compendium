import { BlobWriter, Data64URIReader, ZipWriter } from "@zip.js/zip.js";
import { createRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import type { I18nLanguage } from "../../i18n/i18n-language";
import { localizeI18nString } from "../../i18n/i18n-string";
import { ThemeProvider } from "../../theme/theme-provider";
import { wait } from "../../utils/promise";
import DndSpellCardPreview, {
  type DndSpellCardPreviewHandle,
} from "./dnd-spell-card-preview";
import dndSpells from "./dnd-spells";

export default function useDndSpellsExport({
  bleed,
  dpi,
  height,
  lang,
  onProgress,
  spellIds,
  width,
}: {
  bleed: number;
  dpi: number;
  height: number;
  lang: I18nLanguage;
  onProgress: (count: number) => void;
  spellIds: string[];
  width: number;
}) {
  return useCallback(async () => {
    const blobWriter = new BlobWriter("application/zip");
    const writer = new ZipWriter(blobWriter);

    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = "-10000px";
    document.body.appendChild(container);

    const root = createRoot(container);

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

      await wait(1);

      if (!ref.current)
        return Promise.reject(`useDndSpellsExport(${spellId}): no ref`);

      const spellName = localizeI18nString(dndSpells.byId[spellId].name, lang);
      const dataUrl = await ref.current.downloadPng();
      const reader = new Data64URIReader(dataUrl);
      await writer.add(`cards/${spellName}.png`, reader);
    };

    // for (const spellId of spellIds) await exportSpell(spellId);
    for (let i = 0; i < spellIds.length; ++i) {
      const spellId = spellIds[i];
      await exportSpell(spellId);
      onProgress(i);
    }

    await writer.close();
    const blob = await blobWriter.getData();

    const link = document.createElement("a");
    link.download = `cards.zip`;
    link.href = URL.createObjectURL(blob);
    link.click();

    root.unmount();
    container.remove();
  }, [bleed, dpi, height, lang, onProgress, spellIds, width]);
}
