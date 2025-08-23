import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
