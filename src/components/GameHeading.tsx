import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const heading = `${
    platforms?.results.find((value) => value.id === gameQuery.platformId)
      ?.name || ""
  } ${
    genres?.results.find((value) => value.id === gameQuery.genreId)?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
