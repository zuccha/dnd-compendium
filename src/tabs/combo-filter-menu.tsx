import { HStack, Input } from "@chakra-ui/react";
import BlackIcon from "../assets/images/color-b.svg?react";
import BlueIcon from "../assets/images/color-u.svg?react";
import GreenIcon from "../assets/images/color-g.svg?react";
import RedIcon from "../assets/images/color-r.svg?react";
import WhiteIcon from "../assets/images/color-w.svg?react";
import useStateBoolean from "../hooks/use-state-boolean";

export default function ComboFilterMenu() {
  const whiteProps = useColorIconProps();
  const blueProps = useColorIconProps();
  const blackProps = useColorIconProps();
  const redProps = useColorIconProps();
  const greenProps = useColorIconProps();

  return (
    <HStack gapX={4} w="100%">
      <Input maxW="20em" placeholder="Filter (card name)" size="xs" />
      <HStack gapX={2}>
        <WhiteIcon {...whiteProps} />
        <BlueIcon {...blueProps} />
        <BlackIcon {...blackProps} />
        <RedIcon {...redProps} />
        <GreenIcon {...greenProps} />
      </HStack>
    </HStack>
  );
}

const useColorIconProps = () => {
  const [active, toggleActive] = useStateBoolean(true);

  return {
    cursor: "pointer",
    onClick: toggleActive,
    opacity: active ? 1 : 0.5,
    width: 18,
  };
};
