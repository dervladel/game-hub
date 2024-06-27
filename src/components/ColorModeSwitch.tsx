import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { LuMoonStar, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Button isActive={colorMode === "dark"} onClick={toggleColorMode}>
        {colorMode === "dark" ? <LuSun /> : <LuMoonStar />}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
