import { VStack } from "@chakra-ui/react";
import { useCallback, useMemo } from "react";
import dndSpells from "../../data/dnd-spells";
import useDebouncedValue from "../../hooks/use-debounced-value";
import DndSpellsHeader from "./dnd-spells-header";
import DndSpellsList from "./dnd-spells-list";
import {
  DndSpellsSelectionProvider,
  useDndSpellsSelectionContext,
} from "./dnd-spells-selection";
import {
  useDndSpellsFilterClasses,
  useDndSpellsFilterLevels,
  useDndSpellsFilterName,
  useDndSpellsSettingView,
  useDndSpellsSettingZoom,
} from "./dnd-store";

function DndSpellsTabPartial() {
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

  const spellsSelection = useDndSpellsSelectionContext();

  const deselectAll = useCallback(() => {
    dndSpells.forEach((spell) => spellsSelection.deselect(spell.id));
  }, [spellsSelection]);

  const selectAll = useCallback(() => {
    filteredDnDSpells.forEach((spell) => spellsSelection.select(spell.id));
  }, [filteredDnDSpells, spellsSelection]);

  const exportSelected = useCallback(() => {
    filteredDnDSpells
      .filter((spell) => spellsSelection.selected.has(spell.id))
      .forEach((spell) => console.log(spell.name.en));
  }, [filteredDnDSpells, spellsSelection]);

  return (
    <VStack gap={0} position="relative" w="100%">
      <DndSpellsHeader
        onDeselectAll={deselectAll}
        onExportSelected={exportSelected}
        onSelectAll={selectAll}
      />
      <DndSpellsList spells={filteredDnDSpells} view={view} zoom={zoom} />
    </VStack>
  );
}

export default function DndSpellsTab() {
  return (
    <DndSpellsSelectionProvider>
      <DndSpellsTabPartial />
    </DndSpellsSelectionProvider>
  );
}
