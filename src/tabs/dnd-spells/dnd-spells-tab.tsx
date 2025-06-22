import { VStack } from "@chakra-ui/react";
import { useMemo } from "react";
import dndSpells from "../../data/dnd-spells";
import useDebouncedValue from "../../hooks/use-debounced-value";
import DndSpellsHeader from "./dnd-spells-header";
import DndSpellsList from "./dnd-spells-list";
import {
  useDndSpellsFilterClasses,
  useDndSpellsFilterLevels,
  useDndSpellsFilterName,
  useDndSpellsSettingView,
  useDndSpellsSettingZoom,
} from "./dnd-store";

export default function DndSpellsTab() {
  const [name] = useDndSpellsFilterName();
  const [classes] = useDndSpellsFilterClasses();
  const [levels] = useDndSpellsFilterLevels();
  const [view] = useDndSpellsSettingView();
  const [zoom] = useDndSpellsSettingZoom();

  const filters = useMemo(
    () => ({ classes, levels, name }),
    [classes, levels, name],
  );

  const debouncedFilters = useDebouncedValue(filters, 500);

  const filteredDnDSpells = useMemo(() => {
    const { classes, levels, name } = debouncedFilters;
    const nameLowerCase = name.toLowerCase();

    return dndSpells
      .filter(
        (spell) =>
          spell.name.en.toLowerCase().includes(nameLowerCase) ||
          spell.name.it?.toLowerCase().includes(nameLowerCase),
      )
      .filter((spell) => spell.classes.some((c) => classes.includes(c)))
      .filter((spell) => levels.some((l) => spell.level === l));
  }, [debouncedFilters]);

  return (
    <VStack gap={0} position="relative" w="100%">
      <DndSpellsHeader />
      <DndSpellsList spells={filteredDnDSpells} view={view} zoom={zoom} />
    </VStack>
  );
}
