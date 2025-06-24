import {
  Button,
  Center,
  CloseButton,
  Dialog,
  HStack,
  Heading,
  IconButton,
  Portal,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import NumberInput from "../../components/ui/number-input";
import useDownloadableDiv from "../../hooks/use-downloadable-div";
import useI18n from "../../i18n/use-i18n";
import DndSpellCard, { dndCardBorderColor } from "./dnd-spell-card";
import { useDndSpell, useDndSpellIdsSelected } from "./dnd-spells-store";
import { dndSpellsOptionsView } from "./dnd-spells-types";

export default function DndSpellsExportDialog() {
  const i18n = useI18n();
  const spellIds = useDndSpellIdsSelected();

  const [bleed, setBleed] = useState(defaultBleed);
  const [width, setWidth] = useState(dndCardWidth);
  const [height, setHeight] = useState(dndCardHeight);
  const [dpi, setDpi] = useState(1000);

  const [index, setIndex] = useState(0);

  const downloadableDiv = useDownloadableDiv(
    "test",
    width + 2 * bleed,
    height + 2 * bleed,
    dpi,
  );

  const exportNext = () => {
    downloadableDiv.downloadPng();
  };

  return (
    <Dialog.Root placement="center" size="lg">
      <Dialog.Trigger asChild>
        <Button disabled={spellIds.length === 0} size="sm">
          {i18n.t("dnd.spells.options.button.export_selected")}
        </Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{i18n.t("dnd.spells.export.title")}</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <VStack align="start" w="100%">
                <HStack gap={6} w="100%">
                  <VStack>
                    <Center
                      borderWidth={1}
                      fontSize="1.5em"
                      h={previewHeight}
                      w={previewWidth}
                    >
                      <Center
                        bgColor={bleed ? dndCardBorderColor : undefined}
                        p={inToEm(bleed)}
                        ref={downloadableDiv.ref}
                      >
                        <DndSpellCardPreview spellId={spellIds[index]} />
                      </Center>
                    </Center>

                    <HStack justify="space-between" w="100%">
                      <IconButton
                        disabled={index === 0}
                        onClick={() => setIndex((prev) => prev - 1)}
                        variant="outline"
                      >
                        <LuChevronLeft />
                      </IconButton>

                      <Heading size="sm">{`${index + 1} / ${spellIds.length}`}</Heading>

                      <IconButton
                        disabled={index === spellIds.length - 1}
                        onClick={() => setIndex((prev) => prev + 1)}
                        variant="outline"
                      >
                        <LuChevronRight />
                      </IconButton>
                    </HStack>
                  </VStack>

                  <VStack align="start">
                    <SimpleGrid
                      alignItems="center"
                      gapX={6}
                      gapY={2}
                      templateColumns="auto 8em"
                    >
                      <Text>{i18n.t("dnd.spells.export.input.width")}</Text>
                      <NumberInput
                        defaultValue={`${width}`}
                        disabled
                        formatOptions={sizeFormatOptions}
                        onValueChange={(e) => setWidth(e.valueAsNumber)}
                        step={0.1}
                      />

                      <Text>{i18n.t("dnd.spells.export.input.height")}</Text>
                      <NumberInput
                        defaultValue={`${height}`}
                        disabled
                        formatOptions={sizeFormatOptions}
                        onValueChange={(e) => setHeight(e.valueAsNumber)}
                        step={0.1}
                      />

                      <Text>{i18n.t("dnd.spells.export.input.dpi")}</Text>
                      <NumberInput
                        defaultValue={`${dpi}`}
                        max={2000}
                        min={50}
                        onValueChange={(e) => setDpi(e.valueAsNumber)}
                        step={100}
                      />

                      <Text>{i18n.t("dnd.spells.export.input.bleed")}</Text>
                      <NumberInput
                        defaultValue={`${bleed}`}
                        formatOptions={sizeFormatOptions}
                        max={maxBleed}
                        min={0}
                        onValueChange={(e) =>
                          setBleed(Math.min(e.valueAsNumber, maxBleed))
                        }
                        step={0.005}
                      />
                    </SimpleGrid>
                  </VStack>
                </HStack>
              </VStack>
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">
                  <Text>{i18n.t("dnd.spells.export.button.cancel")}</Text>
                </Button>
              </Dialog.ActionTrigger>
              <Button onClick={exportNext}>
                <Text>{i18n.t("dnd.spells.export.button.export")}</Text>
              </Button>
            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

const inToEm = (inches: number) => `${inches * 6}em`;

const defaultBleed = 0.125;
const maxBleed = 0.3;
const dndCardHeight = 3.5;
const dndCardWidth = 2.5;

const previewHeight = inToEm(dndCardHeight + 2 * maxBleed);
const previewWidth = inToEm(dndCardWidth + 2 * maxBleed);

function DndSpellCardPreview({ spellId }: { spellId: string }) {
  const spell = useDndSpell(spellId);
  return <DndSpellCard spell={spell} view={dndSpellsOptionsView.full} />;
}

const sizeFormatOptions = {
  style: "unit",
  unit: "inch",
  unitDisplay: "short",
} as const;
