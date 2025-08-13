import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platformName = usePlatform(gameQuery.platformId);
  const genreName = useGenre(gameQuery.genreId);

  const heading = `${platformName || ""} ${genreName || ""} Games`;

  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
