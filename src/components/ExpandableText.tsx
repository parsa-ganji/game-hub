import { Box, Button, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit);

  return (
    <Box>
      <Text>
        {expanded ? children : summary + "..."}{" "}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      </Text>
    </Box>
  );
};

export default ExpandableText;
