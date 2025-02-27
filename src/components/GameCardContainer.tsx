import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Probs {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Probs) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
