import { Flex } from "@chakra-ui/react";
import DndSpellCard from "./dnd-spell-card";
import DndSpellsListEmpty from "./dnd-spells-list-empty";
import {
  toggleDndSpellSelection,
  useDndSpell,
  useDndSpellsView,
  useIsDndSpellSelected,
  useVisibleDndSpellIds,
} from "./dnd-spells-store";

export default function DndSpellsListCards() {
  const [view] = useDndSpellsView();
  const spellIds = useVisibleDndSpellIds();

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
  const spell = useDndSpell(spellId);
  const selected = useIsDndSpellSelected(spellId);

  return (
    <DndSpellCard
      onClickSpell={() => toggleDndSpellSelection(spellId)}
      selected={selected}
      spell={spell}
    />
  );
}
