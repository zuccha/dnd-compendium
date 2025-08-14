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
import StateFilterButton from "../ui/state-filter-button";
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
          placeholder={i18n.t("dnd.spells.filters.name.placeholder")}
          size="sm"
        />
        <Select
          collection={levelsCollection}
          defaultValue={filters.levels.map(String)}
          multiple
          name="dnd-spells-filters-levels"
          onValueChange={(e) => setFilters({ levels: e.value.map((v) => +v) })}
          placeholder={i18n.t("dnd.spells.filters.levels.placeholder")}
          size="sm"
        />
        <Select
          collection={classesCollection}
          defaultValue={filters.classes}
          multiple
          name="dnd-spells-filters-classes"
          onValueChange={(e) => setFilters({ classes: e.value as DndClass[] })}
          placeholder={i18n.t("dnd.spells.filters.classes.placeholder")}
          size="sm"
        />
        <Select
          collection={schoolsCollection}
          defaultValue={filters.schools}
          multiple
          name="dnd-spells-filters-schools"
          onValueChange={(e) =>
            setFilters({ schools: e.value as DndSpellSchool[] })
          }
          placeholder={i18n.t("dnd.spells.filters.schools.placeholder")}
          size="sm"
        />
        <StateFilterButton
          onChangeState={(concentration) => setFilters({ concentration })}
          size="sm"
          state={filters.concentration}
        >
          {i18n.t("dnd.spells.filters.concentration.label")}
        </StateFilterButton>
        <StateFilterButton
          onChangeState={(ritual) => setFilters({ ritual })}
          size="sm"
          state={filters.ritual}
        >
          {i18n.t("dnd.spells.filters.ritual.label")}
        </StateFilterButton>
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
