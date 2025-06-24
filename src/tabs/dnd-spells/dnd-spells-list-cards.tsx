import { Flex } from "@chakra-ui/react";
import { memo } from "react";
import type { DndSpellsOptionsView } from "../../models/dnd";
import DndSpellCard from "./dnd-spell-card";
import DndSpellsListEmpty from "./dnd-spells-list-empty";
import {
  useDndSpell,
  useDndSpellIds,
  useDndSpellSelected,
  useDndSpellToggleSelection,
  useDndSpellsOptionsView,
  useDndSpellsOptionsZoom,
} from "./dnd-spells-store";

export default memo(function DndSpellsList() {
  const [view] = useDndSpellsOptionsView();
  const [zoom] = useDndSpellsOptionsZoom();
  const spellIds = useDndSpellIds();

  if (spellIds.length === 0) return <DndSpellsListEmpty />;

  return (
    <Flex
      alignItems="start"
      fontSize={`${zoom}em`}
      gap="1em"
      justifyContent="center"
      w="100%"
      wrap="wrap"
    >
      {spellIds.map((id) => (
        <DndSpellsListItem key={id} spellId={id} view={view} />
      ))}
    </Flex>
  );
});

function DndSpellsListItem({
  spellId,
  view,
}: {
  spellId: string;
  view: DndSpellsOptionsView;
}) {
  const spell = useDndSpell(spellId);
  const toggle = useDndSpellToggleSelection(spellId);
  const selected = useDndSpellSelected(spellId);

  return (
    <DndSpellCard
      onClickSpell={toggle}
      selected={selected}
      spell={spell}
      view={view}
    />
  );
}
