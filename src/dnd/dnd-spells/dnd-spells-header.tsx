import { HStack, Input, createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";
import Select from "../../components/ui/select";
import useI18n from "../../i18n/use-i18n";
import { compareLabels } from "../../utils/select-collection";
import DndDataHeader from "../dnd-data/dnd-data-header";
import { type DndClass, dndClasses } from "../models/dnd-class";
import {
  type DndSpellSchool,
  dndSpellLevels,
  dndSpellSchools,
} from "../models/dnd-spell";
import dndSpellsStore, { dndSpellsOrderByItems } from "./dnd-spells-store";
import localizeDndSpell from "./localize-dnd-spell";

export default function DndSpellsHeader() {
  const i18n = useI18n();
  const [filters, setFilters] = dndSpellsStore.useFilters();

  const classesCollection = useMemo(() => {
    return createListCollection({
      items: dndClasses
        .filter((dndClass) => dndClass !== "artificer")
        .map((dndClass) => ({
          label: i18n.t(`dnd.class.${dndClass}`),
          value: dndClass,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  const schoolsCollection = useMemo(() => {
    return createListCollection({
      items: dndSpellSchools
        .map((dndSchool) => ({
          label: i18n.t(`dnd.spell_school.${dndSchool}`),
          value: dndSchool,
        }))
        .sort(compareLabels),
    });
  }, [i18n]);

  return (
    <DndDataHeader
      onLocalizeData={localizeDndSpell}
      sortByItems={dndSpellsOrderByItems}
      store={dndSpellsStore}
    >
      <HStack w="100%">
        <Input
          defaultValue={filters.name}
          name="dnd-spells-filters-name"
          onChange={(e) => setFilters({ name: e.target.value })}
          placeholder={i18n.t("dnd.spells.filters.input.name.placeholder")}
          size="sm"
        />
        <Select
          collection={levelsCollection}
          defaultValue={filters.levels.map(String)}
          multiple
          name="dnd-spells-filters-levels"
          onValueChange={(e) => setFilters({ levels: e.value.map((v) => +v) })}
          placeholder={i18n.t("dnd.spells.filters.select.levels.placeholder")}
          size="sm"
        />
        <Select
          collection={classesCollection}
          defaultValue={filters.classes}
          multiple
          name="dnd-spells-filters-classes"
          onValueChange={(e) => setFilters({ classes: e.value as DndClass[] })}
          placeholder={i18n.t("dnd.spells.filters.select.classes.placeholder")}
          size="sm"
        />
        <Select
          collection={schoolsCollection}
          defaultValue={filters.school ? [filters.school] : []}
          name="dnd-spells-filters-schools"
          onValueChange={(e) =>
            setFilters({ school: e.value?.[0] as DndSpellSchool })
          }
          placeholder={i18n.t("dnd.spells.filters.select.schools.placeholder")}
          size="sm"
        />
      </HStack>
    </DndDataHeader>
  );
}

const levelsCollection = createListCollection({
  items: dndSpellLevels.map((level) => ({
    label: `${level}`,
    value: `${level}`,
  })),
});
