import { VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import dndSpells from "../../data/dnd-spells";
import useDebouncedValue from "../../hooks/use-debounced-value";
import {
  defaultClasses,
  defaultLevels,
  defaultView,
  defaultZoom,
} from "./constants";
import DndSpellsHeader from "./dnd-spells-header";
import DndSpellsList from "./dnd-spells-list";

export default function DndSpellsTab() {
  const [name, setName] = useState("");
  const [classes, setClasses] = useState(defaultClasses);
  const [levels, setLevels] = useState(defaultLevels);

  const [view, setView] = useState(defaultView);
  const [zoom, setZoom] = useState(defaultZoom);

  const filters = useMemo(
    () => ({ classes, levels, name }),
    [classes, levels, name]
  );

  const debouncedFilters = useDebouncedValue(filters, 500);

  const filteredDnDSpells = useMemo(() => {
    const { classes, levels, name } = debouncedFilters;
    const nameLowerCase = name.toLowerCase();

    return dndSpells
      .filter(
        (spell) =>
          spell.name.en.toLowerCase().includes(nameLowerCase) ||
          spell.name.it?.toLowerCase().includes(nameLowerCase)
      )
      .filter((spell) => spell.classes.some((c) => classes.includes(c)))
      .filter((spell) => levels.some((l) => spell.level === l));
  }, [debouncedFilters]);

  return (
    <VStack gap={0} position="relative" w="100%">
      <DndSpellsHeader
        onChangeClasses={setClasses}
        onChangeLevels={setLevels}
        onChangeName={setName}
        onChangeView={setView}
        onChangeZoom={setZoom}
      />

      <DndSpellsList spells={filteredDnDSpells} view={view} zoom={zoom} />
    </VStack>
  );
}
