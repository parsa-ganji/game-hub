import { Heading } from "@chakra-ui/react";
import React from "react";

import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genreName = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platformName = usePlatform(platformId);

  const heading = `${platformName || ""} ${genreName || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
