import { Center } from "@chakra-ui/react";
import { forwardRef, useImperativeHandle } from "react";
import useDownloadableDiv from "../../hooks/use-downloadable-div";
import { inToEm } from "../../utils/units";
import DndSpellCard, { dndCardBorderColor } from "./dnd-spell-card";
import { useDndSpell } from "./dnd-spells-store";
import { dndSpellsOptionsView } from "./dnd-spells-types";

export type DndSpellCardPreviewHandle = {
  downloadPng: () => Promise<string>;
};

export type DndSpellCardPreviewProps = {
  bleed: number;
  dpi: number;
  height: number;
  spellId: string;
  width: number;
};

export default forwardRef<DndSpellCardPreviewHandle, DndSpellCardPreviewProps>(
  function DndSpellCardPreview({ bleed, dpi, height, spellId, width }, ref) {
    const spell = useDndSpell(spellId);

    const downloadableDiv = useDownloadableDiv(
      width + 2 * bleed,
      height + 2 * bleed,
      dpi,
    );

    useImperativeHandle(ref, () => ({
      downloadPng: downloadableDiv.downloadPng,
    }));

    return (
      <Center
        bgColor={bleed ? dndCardBorderColor : undefined}
        p={inToEm(bleed)}
        ref={downloadableDiv.ref}
      >
        <DndSpellCard spell={spell} view={dndSpellsOptionsView.full} />
      </Center>
    );
  },
);
