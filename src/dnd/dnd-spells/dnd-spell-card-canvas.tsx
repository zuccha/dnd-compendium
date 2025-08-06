import { useEffect, useState } from "react";
import { Layer, Rect, Stage, Text } from "react-konva";
import useI18n from "../../i18n/use-i18n";
import type { DndSpell } from "../models/dnd-spell";
import useDndSpellLocalized from "./use-dnd-spell-localized";

export type DndSpellCardProps = {
  onClickSpell?: () => void;
  selected?: boolean;
  spell: DndSpell;
  view: number;
};

export default function DndSpellCard2({
  onClickSpell,
  selected,
  spell,
}: DndSpellCardProps) {
  const i18n = useI18n();

  const localizedSpell = useDndSpellLocalized(spell);
  const [fontsReady, setFontsReady] = useState(false);

  const castingTimeLabel = i18n.t("dnd.spell.casting_time");
  const durationLabel = i18n.t("dnd.spell.duration");
  const rangeLabel = i18n.t("dnd.spell.range");
  const componentsLabel = i18n.t("dnd.spell.components");
  const upgradeLabel =
    spell.level === 0
      ? i18n.t("dnd.spell.upgrade.cantrip")
      : i18n.t("dnd.spell.upgrade.spell");

  const description = localizedSpell.text.upgrade
    ? localizedSpell.text.base +
      "\n\n" +
      upgradeLabel.toUpperCase() +
      "\n\n" +
      localizedSpell.text.upgrade
    : localizedSpell.text.base;

  useEffect(() => {
    Promise.all([
      document.fonts.load(`16px ${fontHeader}`),
      document.fonts.load(`16px ${fontText}`),
    ]).then(() => setFontsReady(true));
  }, []);

  if (!fontsReady)
    return (
      <Stage {...card} onClick={onClickSpell}>
        <Layer>
          {selected && <Rect {...selectedRect} />}
          <Rect {...borderRect} />
          <Rect {...nameRect} />
          <Rect {...levelRect} />
          <Rect {...infoCastingTimeRect} />
          <Rect {...infoRangeRect} />
          <Rect {...infoComponentsRect} />
          <Rect {...infoDurationRect} />
          <Rect {...descriptionRect} />
        </Layer>
      </Stage>
    );

  return (
    <Stage {...card} onClick={onClickSpell} style={{ overflow: "visible" }}>
      <Layer>
        <Rect {...borderRect} />
        {selected && <Rect {...selectedRect} />}

        <Rect {...nameRect} />
        <Text {...nameText} text={localizedSpell.name} />

        <Rect {...levelRect} />
        <Text {...levelText} text={`${localizedSpell.level}`} />

        <Text {...classesText} text={localizedSpell.classes.toLowerCase()} />
        <Text {...schoolText} text={localizedSpell.school.toLowerCase()} />

        <Rect {...infoCastingTimeRect} />
        <Text {...infoCastingTimeLabelText} text={castingTimeLabel} />
        <Text {...infoCastingTimeText} text={localizedSpell.castingTime} />

        <Rect {...infoRangeRect} />
        <Text {...infoRangeLabelText} text={rangeLabel} />
        <Text {...infoRangeText} text={localizedSpell.range} />

        <Rect {...infoComponentsRect} />
        <Text {...infoComponentsLabelText} text={componentsLabel} />
        <Text {...infoComponentsText} text={localizedSpell.components} />

        <Rect {...infoDurationRect} />
        <Text {...infoDurationLabelText} text={durationLabel} />
        <Text {...infoDurationText} text={localizedSpell.duration} />

        <Text
          {...infoMaterialsText}
          text={localizedSpell.materials.toLowerCase()}
        />

        <Rect {...descriptionRect} />
        <Text {...descriptionText} text={description} />

        <Text {...bookText} text={localizedSpell.source.book.toLowerCase()} />
        <Text {...pageText} text={localizedSpell.source.page.toLowerCase()} />
      </Layer>
    </Stage>
  );
}

const backgroundColor = "#fff7ed";
const borderColor = "#3f3f46";
const textColor = "#000000";
const textColorInverted = "#fafafa";

const fontHeader = "Mr Eaves";
const fontText = "Bookinsanity";

const cardHeight = 336;
const cardWidth = 240;
const selectedWidth = 4;
const borderWidth = 10;
const nameHeight = 27;
const namePadding = 9;
const levelStrokeWidth = 1.5;
const floatingHeight = 16;
const infoSeparator = 2;
const infoHeight = 28.39;
const descriptionHeight =
  cardHeight -
  nameHeight -
  2 * infoHeight -
  infoSeparator -
  2 * borderWidth -
  3 * floatingHeight;
const descriptionPadding = 5;

const card = {
  height: cardHeight,
  width: cardWidth,
};

const selectedRect = {
  cornerRadius: 10,
  height: cardHeight - selectedWidth,
  stroke: "green",
  strokeWidth: selectedWidth,
  width: cardWidth - selectedWidth,
  x: selectedWidth / 2,
  y: selectedWidth / 2,
};

const borderRect = {
  cornerRadius: 10,
  fill: borderColor,
  height: cardHeight,
  width: cardWidth,
  x: 0,
  y: 0,
};

const nameRect = {
  cornerRadius: [6, 0, 0, 0],
  fill: backgroundColor,
  height: nameHeight,
  width: cardWidth - 2 * borderWidth - nameHeight,
  x: borderWidth,
  y: borderWidth,
};

const nameText = {
  ellipsis: true,
  fill: textColor,
  fontFamily: fontHeader,
  fontSize: 16,
  fontStyle: "bold",
  height: nameRect.height,
  verticalAlign: "middle",
  width: nameRect.width - 2 * namePadding,
  wrap: "none",
  x: nameRect.x + namePadding,
  y: nameRect.y + 2,
};

const levelRect = {
  cornerRadius: [0, 6, 0, 0],
  height: nameHeight - levelStrokeWidth,
  stroke: backgroundColor,
  strokeWidth: levelStrokeWidth,
  width: nameHeight - levelStrokeWidth,
  x: nameRect.x + nameRect.width + levelStrokeWidth / 2,
  y: nameRect.y + levelStrokeWidth / 2,
};

const levelText = {
  align: "center",
  fill: textColorInverted,
  fontFamily: fontHeader,
  fontSize: 16,
  fontStyle: "bold",
  height: levelRect.height,
  verticalAlign: "middle",
  width: levelRect.width,
  x: levelRect.x,
  y: levelRect.y + 1,
};

const classesText = {
  ellipsis: true,
  fill: textColorInverted,
  fontFamily: fontHeader,
  fontSize: 10,
  height: floatingHeight,
  verticalAlign: "middle",
  width: (cardWidth - 2 * borderWidth) * 0.7,
  wrap: "none",
  x: borderWidth,
  y: nameRect.y + nameRect.height + 2,
};

const schoolText = {
  align: "right",
  fill: textColorInverted,
  fontFamily: fontHeader,
  fontSize: 10,
  height: floatingHeight,
  verticalAlign: "middle",
  width: cardWidth - 2 * borderWidth,
  x: nameRect.x,
  y: nameRect.y + nameRect.height + 2,
};

const infoCastingTimeRect = {
  fill: backgroundColor,
  height: infoHeight,
  width: (cardWidth - 2 * borderWidth - infoSeparator) / 2,
  x: borderWidth,
  y: classesText.y + classesText.height,
};

const infoCastingTimeLabelText = {
  align: "center",
  fill: textColor,
  fontFamily: fontHeader,
  fontSize: 12,
  height: infoCastingTimeRect.height / 2,
  verticalAlign: "bottom",
  width: infoCastingTimeRect.width,
  x: infoCastingTimeRect.x,
  y: infoCastingTimeRect.y + 2,
};

const infoCastingTimeText = {
  align: "center",
  fill: textColor,
  fontFamily: fontText,
  fontSize: 10,
  height: infoCastingTimeRect.height / 2,
  verticalAlign: "top",
  width: infoCastingTimeRect.width,
  x: infoCastingTimeRect.x,
  y: infoCastingTimeLabelText.y + infoCastingTimeLabelText.height - 1,
};

const infoRangeRect = {
  fill: backgroundColor,
  height: infoHeight,
  width: (cardWidth - 2 * borderWidth - infoSeparator) / 2,
  x: infoCastingTimeRect.x + infoCastingTimeRect.width + infoSeparator,
  y: classesText.y + classesText.height,
};

const infoRangeLabelText = {
  align: "center",
  fill: textColor,
  fontFamily: fontHeader,
  fontSize: 12,
  height: infoRangeRect.height / 2,
  verticalAlign: "bottom",
  width: infoRangeRect.width,
  x: infoRangeRect.x,
  y: infoRangeRect.y + 2,
};

const infoRangeText = {
  align: "center",
  fill: textColor,
  fontFamily: fontText,
  fontSize: 10,
  height: infoRangeRect.height / 2,
  verticalAlign: "top",
  width: infoRangeRect.width,
  x: infoRangeRect.x,
  y: infoRangeLabelText.y + infoRangeLabelText.height - 1,
};

const infoComponentsRect = {
  fill: backgroundColor,
  height: infoHeight,
  width: (cardWidth - 2 * borderWidth - infoSeparator) / 2,
  x: borderWidth,
  y: infoCastingTimeRect.y + infoCastingTimeRect.height + infoSeparator,
};

const infoComponentsLabelText = {
  align: "center",
  fill: textColor,
  fontFamily: fontHeader,
  fontSize: 12,
  height: infoComponentsRect.height / 2,
  verticalAlign: "bottom",
  width: infoComponentsRect.width,
  x: infoComponentsRect.x,
  y: infoComponentsRect.y + 2,
};

const infoComponentsText = {
  align: "center",
  fill: textColor,
  fontFamily: fontText,
  fontSize: 10,
  height: infoComponentsRect.height / 2,
  verticalAlign: "top",
  width: infoComponentsRect.width,
  x: infoComponentsRect.x,
  y: infoComponentsLabelText.y + infoComponentsLabelText.height - 1,
};

const infoDurationRect = {
  fill: backgroundColor,
  height: infoHeight,
  width: (cardWidth - 2 * borderWidth - infoSeparator) / 2,
  x: infoCastingTimeRect.x + infoCastingTimeRect.width + infoSeparator,
  y: infoRangeRect.y + infoRangeRect.height + infoSeparator,
};

const infoDurationLabelText = {
  align: "center",
  fill: textColor,
  fontFamily: fontHeader,
  fontSize: 12,
  height: infoDurationRect.height / 2,
  verticalAlign: "bottom",
  width: infoDurationRect.width,
  x: infoDurationRect.x,
  y: infoDurationRect.y + 2,
};

const infoDurationText = {
  align: "center",
  fill: textColor,
  fontFamily: fontText,
  fontSize: 10,
  height: infoDurationRect.height / 2,
  verticalAlign: "top",
  width: infoDurationRect.width,
  x: infoDurationRect.x,
  y: infoDurationLabelText.y + infoDurationLabelText.height - 1,
};

const infoMaterialsText = {
  ellipsis: true,
  fill: textColorInverted,
  fontFamily: fontHeader,
  fontSize: 10,
  height: floatingHeight,
  verticalAlign: "middle",
  width: cardWidth - 2 * borderWidth,
  wrap: "none",
  x: borderWidth,
  y: infoComponentsRect.y + infoComponentsRect.height + 2,
};

const descriptionRect = {
  fill: backgroundColor,
  height: descriptionHeight,
  width: cardWidth - 2 * borderWidth,
  x: borderWidth,
  y: infoMaterialsText.y + infoMaterialsText.height,
};

const descriptionText = {
  fill: textColor,
  fontFamily: fontText,
  fontSize: 10,
  height: descriptionRect.height - 2 * descriptionPadding,
  width: descriptionRect.width - 2 * descriptionPadding,
  x: descriptionRect.x + descriptionPadding,
  y: descriptionRect.y + descriptionPadding,
};

const bookText = {
  fill: textColorInverted,
  fontFamily: fontHeader,
  fontSize: 10,
  height: floatingHeight,
  verticalAlign: "middle",
  width: (cardWidth - 2 * borderWidth) / 2,
  x: borderWidth,
  y: descriptionRect.y + descriptionRect.height + 2,
};

const pageText = {
  align: "right",
  fill: textColorInverted,
  fontFamily: fontHeader,
  fontSize: 10,
  height: floatingHeight,
  verticalAlign: "middle",
  width: (cardWidth - 2 * borderWidth) / 2,
  x: bookText.x + bookText.width,
  y: descriptionRect.y + descriptionRect.height + 2,
};
