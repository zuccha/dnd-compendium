import { Flex } from "@chakra-ui/react";
import DndSpellCard from "./dnd-spell-card";
import DndSpellsListEmpty from "./dnd-spells-list-empty";
import dndSpellsStore from "./dnd-spells-store";

export default function DndSpellsListCards() {
  const [view] = dndSpellsStore.useView();
  const spellIds = dndSpellsStore.useVisibleDataIds();

  if (spellIds.length === 0) return <DndSpellsListEmpty />;

  return (
    <Flex
      alignItems="start"
      fontSize={`${view.zoom}em`}
      gap="1em"
      justifyContent="center"
      w="100%"
      wrap="wrap"
    >
      {spellIds.map((id) => (
        <DndSpellsListCardsItem key={id} spellId={id} />
      ))}
    </Flex>
  );
}

function DndSpellsListCardsItem({ spellId }: { spellId: string }) {
  const spell = dndSpellsStore.useData(spellId);
  const selected = dndSpellsStore.useIsDataSelected(spellId);

  return (
    <DndSpellCard
      onClickSpell={() => dndSpellsStore.toggleDataSelection(spellId)}
      selected={selected}
      spell={spell}
    />
  );
}
